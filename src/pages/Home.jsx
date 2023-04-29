import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import products from "../json/products.json"
import { useProducts } from "../react-query"

function Home() {

    const {data,isLoading}= useProducts();
    const products = data || [];

    return (
      <div className="container mainLayout">
        <Header
          className="layoutHeader"
          title="LEMON"
          slogan="JUCY"
        />
        <Content products={products} className="layoutContent" />
        <Footer className="layoutFooter" />
      </div>
    );
  }

export default Home;