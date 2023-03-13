import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import products from "../json/products.json"

function Home() {
    return (
      <div className="container main-layout">
        <Header
          className="layout-header"
          title="LEMON"
          slogan="JUCY"
        />
        <Content product={products} className="laytout-content" />
        <Footer className="layout-footer" />
      </div>
    );
  }

export default Home;