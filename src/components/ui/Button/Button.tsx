import { FC, PropsWithChildren, ReactNode } from "react";
import css from './Button.module.scss';
import clsx from "clsx";

interface Props {
    className?: string;
    type?: 'primary' | 'white';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    icon?: ReactNode;
    onClick?: () => void;
    href?: string;
}

export const Button: FC<PropsWithChildren<Props>> = ({
    className,
    type = 'primary',
    size = 'small',
    disabled = false,
    icon,
    onClick,
    href,
    children
}) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            className={clsx(css.button, className, css[type], css[size], { [css.disabled]: disabled })}
            {...(href ? { href } : { disabled, onClick })}
        >
            <span className={css.buttonText} data-title={children}>
                {children}
            </span>
            {icon && <span className={css.buttonIcon}>{icon}</span>}
        </Component>
    );
}