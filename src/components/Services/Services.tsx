import { FC, useState, useEffect, useRef } from 'react';
import css from './Services.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';
import Play from 'src/icons/Play.svg?react';
import Pause from 'src/icons/Pause.svg?react';


export const Services: FC = () => {

    const tabsBtns = [
        "E-commerce",
        "Real Estate",
        "Finance",
        "Education",
        "Mobile Apps & Gaming",
    ]

    const servicesInfo = [
        "We connect real estate agencies, developers, and investment firms with high-intent buyers and investors. Whether you're selling luxury homes, commercial properties, or off-plan developments, we deliver qualified leads that turn into real transactions.",
        "We drive high-intent shoppers to your store, helping e-commerce brands boost conversions, cut acquisition costs, and scale profitably. Whether you sell fashion, electronics, or niche products, we deliver ready-to-buy customers straight to you.",
        "Capture qualified leads for high-ticket conversions. We deliver high-intent traders and investors looking for financial products and services. Our compliance-friendly traffic solutions help maximize conversion rates and long-term profitability.",
        "The education industry thrives on highly targeted traffic to attract students, professionals, and lifelong learners. We help online courses, training programs, and e-learning platforms connect with the right audience, ensuring higher enrollments and engagement.",
        "We provide high-retention traffic for mobile apps and gaming platforms, ensuring real users who engage and convert. Whether it's casual gaming, fintech apps, or subscription-based services, we help increase installs, in-app purchases, and user engagement.",
    ]

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isPlay, setIsPlay] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const requestRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {

        const animate = (time: number) => {
            if (!startTimeRef.current) startTimeRef.current = time;
            const elapsed = time - startTimeRef.current;
            const progressPercent = Math.min((elapsed / 5000) * 100, 100);
            setProgress(progressPercent);

            if (progressPercent < 100) {
                requestRef.current = requestAnimationFrame(animate);
            } else {
                setActiveIndex((prevIndex) => (prevIndex + 1) % tabsBtns.length);
                startTimeRef.current = null;
                requestRef.current = requestAnimationFrame(animate);
            }
        };

        if (isPlay) {
            requestRef.current = requestAnimationFrame(animate);

        } else {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            startTimeRef.current = null;
            setProgress(100);
        }

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isPlay]);

    const handleTabClick = (index: number) => {
        setIsPlay(false);
        setActiveIndex(index);
        setProgress(0);
    };

    return (
        <section className={css.services}>
            <div className={clsx(css.servicesContainer, 'container')}>
                <div className={css.servicesBody}>
                    <div className={css.servicesContent}>
                        <h2 className={css.servicesTitle}>
                            Easythink delivers <span className='gradient-text'>premium, conversion-optimized</span> traffic
                        </h2>
                        <ul className={css.servicesList}>
                            {servicesInfo.map((service, index) => (
                                <li
                                    key={index}
                                    className={clsx(css.servicesListItem, {
                                        [css.active]: index === activeIndex,
                                    })}
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={css.servicesSide}>
                        <div className={css.servicesTabs}>
                            {tabsBtns.map((tab, index) => (
                                <Button
                                    key={index}
                                    size={'large'}
                                    className={clsx(css.servicesTab, {
                                        'active': index === activeIndex,
                                    })}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {tab}
                                </Button>
                            ))}
                        </div>
                        <button
                            type={'button'}
                            aria-label={'Play Tabs'}
                            className={css.servicesIndicator}
                            onClick={() => setIsPlay(!isPlay)}
                        >
                            {isPlay ? <Pause /> : <Play />}
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                className={css.servicesIndicatorCircle}>
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeDasharray="113"
                                    strokeDashoffset={`${113 - (progress / 100) * 113}`}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
