import styles from './Review.module.scss';

export type ReviewProps = {
    imageSrc: string;
    name: string;
    username: string;
    content: string;
};

export function Review({ imageSrc, name, username, content }: ReviewProps) {
    return (
        <div className={styles.review}>
            <div className={styles.user}>
                <img src={imageSrc} alt="" className={styles.avatar} width={48} height={48} />
                <div className={styles.userInfo}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.username}>{username}</div>
                </div>
            </div>
            <p className={styles.content}>{content}</p>
        </div>
    );
}
