import Footer from "../Footer";
import Header from "../Header";
import "./index.css";
import ProductData from "../systemData/ProductData";
import { ProductCard } from "../Cards/ProductCart";
const MensTshirts = () => {
  const filtered = ProductData.filter(
    (data) => data.category === "men-tshirts"
  );

  const render = filtered.map((data) => (
    <ProductCard key={data.name} {...data} />
  ));
  return (
    <main className="fade">
      <Header />
      <div className="page-header">
        <img src="../../../images/mens_tshirts.jpg" alt='Loading Image...'/>
      </div>
     
      <div className="page-text">
      <h4>Men's T-Shirts</h4>
      <p>({filtered.length} items)</p>
       
      </div>
      <section className="products-body">{render}</section>
      <Footer />
    </main>
  );
};

export default MensTshirts;
