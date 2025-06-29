import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autfocus?: boolean;

}

export const Input = memo((props: InputProps) => {
  const {
    className = "",
    value,
    onChange,
    type = "",
    placeholder,
    autfocus,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autfocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autfocus]);
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFosuc = () => {
    setIsFocused(true);
  };
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder} >`}</div>
      )}

      <div className={cls.caretWrapper}>
        {" "}
        <input
          type={type}
          value={value}
          onChange={onChangeHandle}
          className={cls.input}
          onFocus={onFosuc}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
          ref={ref}
        />
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          ></span>
        )}
      </div>
    </div>
  );
});
