import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import { classNames } from "helpers/classNames";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to,
        theme = AppLinkTheme.PRIMARY,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};