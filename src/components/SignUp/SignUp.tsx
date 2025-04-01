import { FC } from 'react';
import css from './SignUp.module.scss';
import clsx from 'clsx';


export const SignUp: FC = () => {

    const signInSteps = [
        {
            title: "Sign Up & Confirm your\u00A0Account",
            desc: "Create an account in seconds – сonfirm your involvement in the company you represent and we can get started."
        },
        {
            title: "Get Matched with a Dedicated\u00A0Account Manager",
            desc: "Your personal traffic expert will analyze your niche, select\u00A0the best sources, and optimize for conversion."
        },
        {
            title: "Choose Your Niche &\u00A0Activate\u00A0Traffic Streams",
            desc: "Select highly targeted traffic based on your business goals and budget."
        },
        {
            title: "Monitor & Optimize with\u00A0Daily\u00A0Updates",
            desc: "Our data-driven reports provide fresh insights every day,\u00A0helping you adjust campaigns efficiently."
        },
        {
            title: "Get Advice and Help\u00A0from\u00A0Our\u00A0Team",
            desc: "Make adjustments to traffic flow with the assistance of\u00A0your dedicated traffic management team, who are\u00A0available on a daily basis."
        },
        {
            title: "Receive Monthly Performance\u00A0Reports",
            desc: "Get a detailed breakdown of your traffic performance\u00A0every month, including ROI insights\u00A0and\u00A0optimization suggestions."
        }
    ]


    return (
        <section id={'sign-up'} className={css.sign}>
            <div className={clsx(css.signContainer, 'container')}>
                <h2 className={clsx(css.signTitle, 'title', 'gradient-text')}>
                    <span>From Sign-Up to</span> Success
                </h2>
                <ol className={css.signList}>
                    {signInSteps.map((step, index) => (
                        <li key={index} className={css.signItem}>
                            <h3 className={css.signItemTitle}>
                                {step.title}
                            </h3>
                            <p className={css.signItemDesc}>
                                {step.desc}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section >
    );
}