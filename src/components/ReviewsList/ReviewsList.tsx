import { Review } from '@/components';
import c from 'clsx';
import styles from './ReviewsList.module.scss';

export type ReviewsProps = {
    className?: string;
};

export function ReviewsList({ className }: ReviewsProps) {
    return (
        <ul className={c(styles.reviews, className)}>
            <li>
                <Review
                    imageSrc="./images/photo-4.png"
                    name="Lorenzo"
                    username="@lorenzoo"
                    content="Amazing Telegram bot! Provides real-time crypto prices and news"
                />
            </li>
            <li>
                <Review
                    imageSrc="./images/photo-3.png"
                    name="Adalina"
                    username="@ada"
                    content="Must-have bot for crypto traders. Accurate signals and analysis"
                />
            </li>
            <li>
                <Review
                    imageSrc="./images/photo-1.png"
                    name="Alexander"
                    username="@alex_x"
                    content="Superb cryptocurrency bot! Quick updates and reliable data"
                />
            </li>
            <li>
                <Review
                    imageSrc="./images/photo-2.png"
                    name="Rushana"
                    username="@Hana"
                    content="Efficient and user-friendly bot. Simplifies crypto trading tasks"
                />
            </li>
        </ul>
    );
}
