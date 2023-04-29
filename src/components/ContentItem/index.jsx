import styles from "./contentitem.module.css";

export default function ContentItem({ product }) {
    return (
        <div>
        <section className={styles.imageLayout} key={product.name}>
            <div className={styles.image}>
                <a href="/" className={styles.imageLink}>
                    <img src={product.image} alt={product.name} className={styles.imageStyle} />
                </a>
                <p className={styles.imageTitle}>{product.name}</p>
            </div>

        </section>
        
    </div>
    );
}