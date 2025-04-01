import { FC } from 'react';
import css from './Dignity.module.scss';
import clsx from 'clsx';


export const Dignity: FC = () => {


    const dignityList = [
        {
            title: 'Quality',
            description: 'No random clicks, only real engagement. We\u00A0deliver targeted traffic that converts. Every visitor comes from carefully selected sources, ensuring real engagement and maximum ROI for your business.'
        },
        {
            title: 'Support',
            description: 'Expert support every step of the way – a real account manager focused on your success. We are more than just a traffic provider – we are your long-term revenue partner.'
        },
        {
            title: 'All world',
            description: 'We provide traffic across nearly any GEO.\u00A0With geo-specific optimization and compliance, we help you connect with the\u00A0right audience, wherever they are.'
        },
        {
            title: 'Data-driven',
            description: 'Stay ahead with daily updates and monthly performance reports. Our platform provides daily traffic updates and detailed monthly reports, giving you full visibility into performance. With data-driven insights, we can optimize campaigns, improve conversions, and scale efficiently.'
        }
    ];

    return (
        <div className={css.dignity}>
            <div className={clsx(css.dignityContainer, 'container')}>
                <ul className={css.dignityList}>
                    {dignityList.map((item, index) => (
                        <li key={index} className={css.dignityItem}>
                            <h3 className={clsx(css.dignityTitle, 'title')}>
                                {item.title}
                            </h3>
                            <p className={css.dignityDescription}>
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}