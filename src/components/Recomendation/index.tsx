import { Link } from "react-router-dom";
import './index.css'
const Recommend = () => {
  return (
    <section className="recommendation">
      <h3>Sorry, we couldn't find any products for this category</h3>
      <p>Below are some recommended categories for you</p>
      <div className="recommendation-buttons">
        <Link to={"/mensoutwear"}>
          <button>Men's Outwear</button>
        </Link>
        <Link to={"/ladiesoutwear"}>
          <button> Ladies' Outwear</button>
        </Link>
        <Link to={"/menstshirts"}>
          <button> Men's T-Shirts</button>
        </Link>
        <Link to={"/ladiestshirts"}>
          <button> Ladies' T-Shirts</button>
        </Link>
        <Link to={"/laptopbackpacks"}>
          <button> Laptop BackPacks</button>
        </Link>
      </div>
    </section>
  );
};


export{Recommend}