import { FC, useState } from 'react';
import { useSlideToggle } from 'src/hooks/useSlideToggle';
import css from './Faq.module.scss';
import Plus from 'src/icons/Plus.svg?react';
import Minus from 'src/icons/Minus.svg?react';
import clsx from 'clsx';

interface FaqItemProps {
    question: string;
    answer: string;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer }: {
    question: string;
    answer: string
}) => {
    const { elementRef, slideToggle } = useSlideToggle();
    const [isOpen, setIsOpen] = useState(false);

    const faqItemClickHandler = () => {
        setIsOpen(!isOpen);
        slideToggle();
    };

    return (
        <li className={css.faqItem}
            onClick={faqItemClickHandler}>
            <h3 className={css.faqQuestion}>
                <span className={css.faqQuestionText}>
                    {question}
                </span>
                <span className={clsx(css.faqQuestionIcon, {
                    [css.open]: isOpen
                })}>
                    {isOpen ? <Minus /> : <Plus />}
                </span>
            </h3>
            <p ref={elementRef}
                className={css.faqAnswer}>
                {answer}
            </p>
        </li >
    );
};

