import { FC, useEffect, useState } from 'react';
import Logo from 'src/assets/images/logo.svg?react';
import LogoShort from 'src/assets/images/logo-short.svg?react';
import ArrowRight from 'src/icons/ArrowRight.svg?react';
import Hamburger from 'src/icons/Menu.svg?react';
import Close from 'src/icons/Close.svg?react';
import css from './Header.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';

export const Header: FC = () => {


    const [isScrolled, setIsScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const servicesTop = document.body.getAttribute('data-offset');
            const parsedServicesTop = parseFloat(servicesTop ?? '0');

            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;

            const finalServicesTop = parsedServicesTop !== 0 ? parsedServicesTop - headerHeight : 0;

            setIsScrolled(window.scrollY > finalServicesTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
    ];

    return (
        <header className={clsx(css.header, {
            [css.scrolled]: isScrolled
        })}>
            <div className={clsx(css.headerContainer, 'container', 'container--fluid')}>
                <a href="#" className={css.headerLogo}>
                    <span className={css.headerLogoTablet}>
                        <Logo />
                    </span>
                    <span className={css.headerLogoMobile}>
                        <LogoShort />
                    </span>
                </a>
                <div
                    className={clsx(css.headerMenu, {
                        [css.open]: openMenu
                    })}
                    onClick={() => setOpenMenu(false)}>
                    <div
                        className={css.headerMenuWrapper}
                        onClick={(e) => e.stopPropagation()}>
                        <nav className={css.menu}>
                            <ul className={css.menuList}>
                                {menuItems.map((item) => (
                                    <li key={item.title} className={css.menuItem}>
                                        <a
                                            href={item.link}
                                            className={css.menuLink}
                                            data-title={item.title}
                                            onClick={() => setOpenMenu(false)}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Button
                            href={"https://panel.easythink.dev/"}
                            className={css.headerBtn}
                            icon={<ArrowRight />}
                        >
                            To Easythink Panel
                        </Button>
                    </div>
                </div>
                <button
                    type={'button'}
                    aria-label='Open mobile menu'
                    className={clsx(css.headerMenuToggler, {
                        [css.active]: openMenu
                    })}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {openMenu ? <Close /> : <Hamburger />}
                </button>
            </div>
        </header >
    );
}
