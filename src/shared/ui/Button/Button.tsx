import { Link, LinkProps } from "react-router-dom";
import cls from "./Button.module.scss";
import { classNames } from "helpers/classNames";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        theme = ThemeButton.CLEAR,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.btn, {}, [cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};