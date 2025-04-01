import { FC } from 'react';
import css from './Mission.module.scss';
import clsx from 'clsx';
import missionIMage from '../../assets/images/mission.jpg';


export const Mission: FC = () => {
    return (
        <section className={css.mission}>
            <div className={clsx(css.missionContainer, 'container')}>
                <div className={css.missionBody}>
                    <div className={css.missionMain}>
                        <div className={css.missionLabel}>
                            Our Mission
                        </div>
                        <h2 className={clsx(css.missionTitle, 'title')}>
                            Traffic That <br />
                            <span>Delivers</span> <br />
                            <span>Real Results</span>
                        </h2>
                        <p className={css.missionDesc}>
                            At Easythink, we believe that the right traffic fuels real business success. Our mission is to provide high-converting, transparent, and scalable traffic solutions tailored to your industry. With a focus on quality, data-driven optimization, and expert support, we help businesses maximize revenue and scale effortlessly. Whether you're entering a new market or optimizing an existing one, we deliver strategic traffic that drives real results.
                        </p>
                    </div>
                    <div className={css.missionImage}>
                        <img src={missionIMage} alt="our company" />
                    </div>
                </div>
            </div>
        </section >
    );
}