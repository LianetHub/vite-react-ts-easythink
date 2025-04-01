import { FC, useState, useEffect, useRef } from 'react';
import css from './Promo.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';
import ArrowRight from 'src/icons/ArrowRight.svg?react';


interface Dot {
    id: number
    delay: number
    size: number
}

interface Line {
    id: number
    dots: Dot[]
}


export const Promo: FC = () => {

    const [isIntroVisible, setIsIntroVisible] = useState(false);

    const introRef = useRef(null);


    const lines: Line[] = Array.from({ length: 3 }, (_, lineId) => ({
        id: lineId,
        dots: Array.from({ length: 5 }, (_, dotId) => ({
            id: dotId,
            delay: Math.random() * 5,
            size: Math.random() * 15 + 2,
        })),
    }));


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsIntroVisible(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (introRef.current) {
            observer.observe(introRef.current);
        }

        return () => {
            if (introRef.current) {
                observer.unobserve(introRef.current);
            }
        };
    }, [setIsIntroVisible]);



    return (
        <section
            ref={introRef}
            className={clsx(css.promo, { [css.visible]: isIntroVisible })}
        >
            <div className={clsx(css.promoContainer, 'container')}>
                <div className={css.promoOffer}>
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
                        size={"medium"}
                    >
                        Connect to the system
                    </Button>
                </div>
                <div className={css.lines}>
                    {lines.map((line) => (
                        <div key={line.id}>
                            {line.dots.map((dot) => (
                                <div
                                    key={dot.id}
                                    className={css.dot}
                                    style={{
                                        '--dot-top': `${line.id * 30}vh`,
                                        animationDelay: `${dot.delay}s`,
                                        width: `${dot.size / 16}rem`,
                                        height: `${dot.size / 16}rem`,
                                    } as React.CSSProperties}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}