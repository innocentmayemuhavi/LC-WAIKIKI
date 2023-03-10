import "./index.css";
import Header from "../Header/index.jsx";
import Footer from '../Footer'
const HomePage = () => {
  return (
    <main className="fade">
      <Header />
      <div className="home-navigation-main">
        <div className="home-navigation-main-image">
          <img src="../../../../images/mens_outerwear.jpg"></img>
        </div>
        <p>Men's Outwear</p>
        <button>
            SHOP NOW
        </button>
      </div>
      <div className="home-navigation-main">
        <div className="home-navigation-main-image">
          <img src="../../../../images/ladies_outerwear.jpg"></img>
        </div>
        <p>Men's Outwear</p>
        <button>
            SHOP NOW
        </button>
      </div>
      <div className="home-navigation-split">
      <div className="home-navigation-main">
        <div className="home-navigation-main-image">
          <img src="../../../../images/mens_tshirts.jpg"></img>
        </div>
        <p>Men's Outwear</p>
        <button>
            SHOP NOW
        </button>
      </div>
      <div className="home-navigation-main">
        <div className="home-navigation-main-image">
          <img src="../../../../images/ladies_tshirts.jpg"></img>
        </div>
        <p>Men's Outwear</p>
        <button>
            SHOP NOW
        </button>
      </div>

      </div>
      <Footer/>
      
    </main>
  );
};

export default HomePage;
