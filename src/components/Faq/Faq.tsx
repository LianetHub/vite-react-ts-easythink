import { FC } from 'react';
import css from './Faq.module.scss';
import clsx from 'clsx';
import { FaqItem } from './FaqItem';



export const Faq: FC = () => {


    const faqList = [
        {
            question: 'What types of traffic does Easythink Platform provide?',
            answer: 'We specialize in SEO, PPC, Native Ads, Push, Pop, and Social Ads, optimized for high-converting traffic.'
        },
        {
            question: 'Is Easythink suitable for small businesses and budgets?',
            answer: 'Yes! We work with businesses of all sizes, from startups to enterprises. We offer flexible pricing plans, tailored to businesses investing from $1,000 to $100,000+.'
        },
        {
            question: ' Can I run multiple campaigns at the same time?',
            answer: 'Yes! You can manage multiple traffic streams simultaneously, optimizing for different industries and goals.'
        },
        {
            question: 'Is the integration process complex?',
            answer: 'Not at all! We offer two-click integration, making setup effortless. The rest is on your side.'
        },
        {
            question: 'What documents are required to open an account?',
            answer: 'You don’t need nothing to open your account, but to confirm an account with our company, you will need a passport, TIN, a copy of the state registration certificate and a card with sample signatures and a seal impression (if you have one).'
        },
        {
            question: 'What makes Easythink Platform different from traditional traffic providers?',
            answer: 'Unlike generic ad networks, we focus on targeted, high-converting traffic with personalized account management and transparent, daily-updated insights.'
        },
    ]

    return (
        <section id={'faq'} className={css.faq}>
            <div className={clsx(css.faqContainer, 'container')}>
                <h2 className={clsx(css.faqTitle, 'title')}>FAQ</h2>
                <ol className={css.faqList}>
                    {faqList.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </ol>
            </div>
        </section >
    );
}

