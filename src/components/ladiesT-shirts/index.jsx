import Footer from "../Footer";
import Header from "../Header";
import "./index.css";
import ProductData from "../systemData/ProductData";
import { ProductCard } from "../Cards/ProductCart";
const LadiesTshirts = () => {
  const filtered = ProductData.filter(
    (data) => data.category === "ladies-tshirts"
  );

  const render = filtered.map((data) => (
    <ProductCard key={data.name} {...data} />
  ));
  return (
    <main className="fade">
      <Header />
      <div className="page-header">
        <img src="../../../images/ladies_tshirts.jpg"  alt='Loading Image...'/>
      </div>
     
      <div className="page-text">
      <h4>Men's Outwear</h4>
      <p>({filtered.length} items)</p>
       
      </div>
      <section className="products-body">{render}</section>
      <Footer />
    </main>
  );
};

export default LadiesTshirts;
