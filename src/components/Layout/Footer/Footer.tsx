import { FC } from 'react';
// import Support from 'src/icons/Support.svg?react';
import css from './Footer.module.scss';
import clsx from 'clsx';


export const Footer: FC = () => {

    return (
        <footer className={css.footer}>
            <div className={clsx(css.footerContainer, 'container')}>
                footer
            </div>
        </footer>
    );
}