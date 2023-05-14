import Footer from "../Footer";
import Header from "../Header";
import "./index.css";
import ProductData from "../systemData/ProductData";
import { ProductCard } from "../Cards/ProductCart";
const LadiesOutwear = () => {
  const filtered = ProductData.filter(
    (data) => data.category === "ladies-outerwear"
  );
  const render = filtered.map((data) => (
    <ProductCard key={data.name} {...data} />
  ));
  return (
    <main className="fade">
      <Header />
      <div className="page-header">
        <img src="../../../images/ladies_outerwear.jpg" alt='Loading Image...' />
      </div>

      <div className="page-text">
        <h4>Ladies' Outwear</h4>
        <p>({filtered.length} items)</p>
      </div>
      <section className="products-body">{render}</section>
      <Footer />
    </main>
  );
};
export default LadiesOutwear;
