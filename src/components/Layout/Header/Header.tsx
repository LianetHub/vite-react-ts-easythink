import { FC, useEffect, useState } from 'react';
import Logo from 'src/assets/images/logo.svg?react';
import ArrowRight from 'src/icons/ArrowRight.svg?react';
import css from './Header.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';

export const Header: FC = () => {


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
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
                    <Logo />
                </a>
                <nav className={css.menu}>
                    <ul className={css.menuList}>
                        {menuItems.map((item) => (
                            <li key={item.title} className={css.menuItem}>
                                <a
                                    href={item.link}
                                    className={css.menuLink}
                                    data-title={item.title}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button
                    className={css.headerBtn}
                    icon={<ArrowRight />}
                >
                    To Easythink Panel
                </Button>
            </div>
        </header>
    );
}
