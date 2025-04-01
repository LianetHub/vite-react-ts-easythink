import { FC, useEffect, useState } from 'react';
import css from './Benefits.module.scss';
import clsx from 'clsx';
import { NumberAnimator } from './NumberAnimation';



export const Benefits: FC = () => {

    const benefitsData = [
        {
            number: '120+',
            description: 'satisfied clients have been with us for over a year',
        },
        {
            number: '95%',
            description: 'of clients see a positive ROI within their first month.',
        },
        {
            number: '150+',
            description: 'global partners across competitive industries.',
        },
    ];



    const [isInView, setIsInView] = useState(false);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setIsInView(true);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });

        const element = document.getElementById('benefits');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <section id={'benefits'} className={css.benefits}>
            <div className={clsx(css.benefitsContainer, 'container')}>
                <h2 className={clsx(css.benefitsTitle, 'title')}>
                    <span className='gradient-text'><span>Easythink the</span> Easy Way</span> <br /> to Grow Your Business
                </h2>
                <ul className={css.benefitsList}>
                    {benefitsData.map((benefit, index) => (
                        <li key={index} className={css.benefit}>
                            <div
                                className={clsx(css.benefitNumber, 'gradient-text')}
                                data-number={benefit.number}
                            >
                                {isInView ? (
                                    <NumberAnimator targetNumber={benefit.number} />
                                ) : (
                                    '0'
                                )}
                            </div>
                            <p className={css.benefitDesc}>{benefit.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    );
}