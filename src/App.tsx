import { MainInfo, ReviewsList } from '@/components';
import styles from './App.module.scss';
import c from 'clsx';

export function App() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <MainInfo />
                <ReviewsList className={styles.reviews} />
            </div>

            <img src="./images/bitcoin.svg" alt="" className={c(styles.backImg, styles.bitcoinImg)} />
            <img src="./images/ethereum.svg" alt="" className={c(styles.backImg, styles.ethereumImg)} />
            <img src="./images/litecoin.svg" alt="" className={c(styles.backImg, styles.litecoinImg)} />
        </div>
    );
}
