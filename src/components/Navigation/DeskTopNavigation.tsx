import { Link} from "react-router-dom";
import "./index.css";
const DeskTopNav = () => {
  return (
    <nav>
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
    </nav>
  );
};

export { DeskTopNav };
