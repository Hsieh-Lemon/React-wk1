import ContentItem from "../ContentItem";

import { Row, Col } from "antd";
export default function Content({ products }) {
    return (
        <div>


            <div className="container">
                <h1 className="text-center">IMAGES</h1>
                <hr className="dividerdark" />
                <Row gutter={[24, 24]}>
                    {products.map(product => (
                        <Col
                            key={product.name}
                            sm={{ span: 12 }}
                            lg={{ span: 8 }}
                            xl={{ span: 6 }}
                            xxl={{ span: 4 }}
                        >
                            <ContentItem product={product} />
                        </Col>
                    ))}
                </Row>
            </div>
            <article className="descriptionLayout" >
                <div className="container">
                    <h1 style={{fontSize:"2em"}}>DESCRIPTIONS</h1>
                    <hr className="dividerlight" />
                    <p className="descriptionContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                        corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                        unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                        ullam
                        eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                        quod
                        quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                        dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                        tempora.
                        Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                        repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
                </div>
            </article>




        </div>
    );
}