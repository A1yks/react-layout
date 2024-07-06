import { useEffect, useRef } from 'react';
import styles from './Advantage.module.scss';
import { CountUp } from 'countup.js';

export type AdvantageProps = {
    value: number;
    label: string;
    suffix?: string;
    decimal?: boolean;
    separator?: string;
};

export function Advantage({ value, label, suffix, decimal, separator }: AdvantageProps) {
    const countUpRef = useRef<HTMLDivElement>(null);
    const countUpAnimRef = useRef<CountUp | null>(null);

    useEffect(() => {
        if (countUpRef.current === null) return;

        countUpAnimRef.current = new CountUp(countUpRef.current, value, {
            suffix,
            decimalPlaces: decimal ? 1 : 0,
            decimal: separator || '.',
            duration: 3,
        });

        countUpAnimRef.current.start();
    }, [decimal, separator, suffix, value]);

    return (
        <div className={styles.advantage}>
            <div className={styles.value} ref={countUpRef} />
            <div className={styles.label}>{label}</div>
        </div>
    );
}
