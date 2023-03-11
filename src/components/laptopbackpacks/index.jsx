import Footer from "../Footer";
import Header from "../Header";
import "./index.css";
import {Recommend} from '../Recomendation'
import ProductData from "../systemData/ProductData";
import { ProductCard } from "../Cards/ProductCart";
const LaptopBackPacks = () => {
  const filtered = ProductData.filter(
    (data) => data.category === "laptop-backpacks"
  );

  const render = filtered.map((data) => (
    <ProductCard key={data.name} {...data} />
  ));
  return (
    <main className="fade">
      <Header />
      <div className="page-header">
        <img src="../../../images/backpacks.jpeg" />
      </div>
     
      <div className="page-text">
      <h4>Laptop BackPack</h4>
      <p>({filtered.length} items)</p>
       
      </div>
      {filtered.length===0&&<Recommend/>}
      <section className="products-body">{render}</section>
      <Footer />
    </main>
  );
};

export default LaptopBackPacks;
