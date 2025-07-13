import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector, useStore } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { loginAction, loginReduser } from "../../model/slice/loginSlice";

import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const store = useStore() as ReduxStoreWithManager;

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  useEffect(() => {
    store.reducerManager.add("loginForm", loginReduser);
    dispatch({ type: "@int loginForm reducer" });
    return () => {
      store.reducerManager.remove("loginForm");
       dispatch({ type: "@Destroy loginForm reducer" });
    };
  }, []);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginAction.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginAction.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, {}, [className ?? ""])}>
      <Text title={t("Форма авторизации")}></Text>
      {error && (
        <Text
          text={t("Вы ввели неверный логин и пароль")}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите username")}
        autfocus={true}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите пароль")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
export default LoginForm;
