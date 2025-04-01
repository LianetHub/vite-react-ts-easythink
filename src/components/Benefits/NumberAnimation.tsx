import { FC, useEffect, useState } from "react";

export const NumberAnimator: FC<{ targetNumber: string }> = ({ targetNumber }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        const target = parseInt(targetNumber.replace(/\D/g, ''), 10);
        let start = 0;
        const end = target;
        const duration = 2;
        const increment = end / (duration * 60);

        const animateNumber = () => {
            if (start < end) {
                start += increment;
                setCurrentNumber(Math.floor(start));
                requestAnimationFrame(animateNumber);
            } else {
                setCurrentNumber(end);
            }
        };

        animateNumber();
    }, [targetNumber]);

    return <>{currentNumber}{targetNumber.replace(/\d/g, '')}</>;
};