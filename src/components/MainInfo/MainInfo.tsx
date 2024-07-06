import { Advantage, DownloadButton } from '@/components';
import styles from './MainInfo.module.scss';
import c from 'clsx';

export type MainInfoProps = {
    className?: string;
};

export function MainInfo({ className }: MainInfoProps) {
    return (
        <div className={c(styles.mainInfo, className)}>
            <h1 className={styles.title}>
                Do you want to Learn more About cryptocurrencies <span className={styles.gradientText}>quickly and easily ?</span>
            </h1>
            <p className={styles.subscribeText}>Subscribe to our channel to learn more</p>

            <div className={styles.content}>
                <div className={styles.advantages}>
                    <Advantage value={20} suffix="K+" label="subscribers" />
                    <Advantage value={19.5} decimal separator="," suffix="K" label="successful cases" />
                    <Advantage value={4.8} decimal suffix="/5" label="rating" />
                </div>

                <a href="#" className={styles.button}>
                    Join Whatsapp
                </a>

                <div className={styles.downloadButtons}>
                    <DownloadButton href="#" iconPath="./images/google-play.svg" label="get it on" storeName="Google play" />
                    <DownloadButton href="#" iconPath="./images/app-store.svg" label="Available on the" storeName="App Store" />
                </div>
            </div>
        </div>
    );
}
