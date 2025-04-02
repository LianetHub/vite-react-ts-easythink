import { FC } from 'react';

import css from './Footer.module.scss';
import clsx from 'clsx';
import Logo from 'src/assets/images/logo.svg?react';
import ArrowRight from 'src/icons/ArrowRight.svg?react';
import { Button } from '@ui/Button';


export const Footer: FC = () => {

    const menuItems = [
        {
            title: 'About the service',
            link: '#benefits'
        },
        {
            title: 'How to start',
            link: '#sign-up'
        },
        {
            title: 'FAQ',
            link: '#faq'
        },
        {
            title: 'Contact manager',
            link: '#'
        },
    ];

    return (
        <footer className={css.footer}>
            <div className={clsx(css.footerContainer, 'container', 'container--fluid')}>
                <div className={css.footerBody}>
                    <div className={css.footerMain}>
                        <a href="#" className={css.footerLogo}>
                            <Logo />
                        </a>
                    </div>
                    <nav className={css.footerMenu}>
                        <ul className={css.footerMenuList}>
                            {menuItems.map((item) => (
                                <li key={item.title} className={css.footerMenuItem}>
                                    <a href={item.link}
                                        className={css.footerMenuLink}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={css.footerSide}>
                        <Button
                            href={"https://panel.easythink.dev/"}
                            className={css.footerBtn}
                            icon={<ArrowRight />}
                        >
                            To Easythink Panel
                        </Button>
                    </div>
                </div>
                <div className={css.footerBottom}>
                    <div className={css.footerInfo}>
                        <strong>Company’s registered address:</strong>
                        <address>7-9 Riga Feraiou, LIZANTIA COURT, Office 310, Agioi Omologites, 1087 Nicosia, Cyprus.</address>
                    </div>
                    <div className={css.footerCopy}>
                        HE <strong>443894</strong> <br />
                        18th July, 2023 <br />
                        © 2025 <strong>EASYTHINK LTD</strong>
                    </div>
                </div>
            </div>
        </footer>
    );
}