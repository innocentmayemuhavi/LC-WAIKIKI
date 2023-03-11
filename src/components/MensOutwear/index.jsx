import Footer from "../Footer";
import Header from "../Header";
import "./index.css";
import ProductData from "../systemData/ProductData";
import { ProductCard } from "../Cards/ProductCart";
const MensOutwear = () => {
  const filtered = ProductData.filter(
    (data) => data.category === "men-outerwear"
  );

  const render = filtered.map((data) => (
    <ProductCard key={data.name} {...data} />
  ));
  return (
    <main className="fade">
      <Header />
      <div className="page-header">
        <img src="../../../images/mens_outerwear.jpg" />
      </div>
     
      <div className="page-text">
      <h4>Men's Outwear</h4>
      <p>{filtered.length} item(s)</p>
       
      </div>
      <section className="products-body">{render}</section>
      <Footer />
    </main>
  );
};

export default MensOutwear;
