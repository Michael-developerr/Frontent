import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterAction } from "../model/slice/counterSlice";
import { getCountValue } from "../model/selectors/getCountValue/getCountValue";
import { useTranslation } from "react-i18next";

export const Counter = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const couterValue = useSelector(getCountValue);

  const incremnt = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{couterValue}</h1>
      <Button onClick={incremnt} data-testid="increment-btn">
        {t("increment")}
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        {t("decrement")}
      </Button>
    </div>
  );
};
