import styles from "./header.module.css";

export default function Header({title,slogan}) {
    return (
       
        <div className={styles.header}>
             
                <img className={styles.headerAvatar} src="images/avatar.png" alt="avatar" />
                <h1 className={styles.headerTitle}>{title}</h1>
                <hr className={styles.dividerlight} />
                <p className={styles.headerSlogan}>{slogan}</p>
           
        </div>
    );
}