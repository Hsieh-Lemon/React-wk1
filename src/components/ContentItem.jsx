export default function ContentItem({ product }) {
    return (
        <section className="image__layout" key={product.id}>
            <div className="image">
                <a href="" className="image__link">
                    <img src={product.image} alt={product.id} className="image__style" />
                </a>
                <p className="image_title">{product.name}</p>
            </div>

        </section>
    );
}