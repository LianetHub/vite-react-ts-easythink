import { FC } from 'react';
import css from './Promo.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';
import ArrowRight from 'src/icons/ArrowRight.svg?react';


export const Promo: FC = () => {
    return (
        <section className={css.promo}>
            <div className={clsx(css.promoContainer, 'container')}>
                <h1 className={css.promoTitle}>
                    EASYTHINK
                </h1>
                <p className={css.promoSubtitle}>
                    High-Converting Traffic, Made Easy
                </p>
                <Button
                    className={css.promoBtn}
                    type={'white'}
                    icon={<ArrowRight />}
                    size={"large"}
                >
                    Connect to the system
                </Button>
            </div>
        </section >
    );
}