import { classNames } from "shared/lib/classNames/classNames";

import cls from "./NavBar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className ?? ""])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        lorem-ipsum is a JavaScript module for generating passages of lorem
        ipsum text. Lorem ipsum text is commonly used as placeholder text in
        publishing, graphic design, and web development.
      </Modal>
    </div>
  );
};
