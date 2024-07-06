import styles from './DownloadButton.module.scss';

export type DownloadButtonProps = {
    iconPath: string;
    label: string;
    storeName: string;
    href: string;
};

export function DownloadButton({ iconPath, label, storeName, href }: DownloadButtonProps) {
    return (
        <a href={href} className={styles.button}>
            <img src={iconPath} alt="" width={24} height={24} className={styles.icon} />
            <div>
                <div className={styles.label}>{label}</div>
                <div className={styles.storeName}>{storeName}</div>
            </div>
        </a>
    );
}
