import { FC, PropsWithChildren, ReactNode } from "react";
import css from './Button.module.scss';
import clsx from "clsx";


interface Props {
    className?: string;
    type?: 'primary' | 'white';
    size?: 'small' | 'large';
    disabled?: boolean;
    icon?: ReactNode;
    onClick?: () => void;
}

export const Button: FC<PropsWithChildren<Props>> = ({
    className,
    type = 'primary',
    size = 'small',
    disabled = false,
    icon,
    onClick,
    children
}) => {

    return (
        <button
            className={clsx(css.button, className, css[type], css[size])}
            disabled={disabled}
            onClick={onClick}>
            {children}
            {icon &&
                <span className={css.buttonIcon}>
                    {icon}
                </span>
            }
        </button>
    );
}