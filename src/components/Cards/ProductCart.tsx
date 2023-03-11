import "./index.css";

const ProductCard = (props: any) => {
  return (
    <section className="product-card">
      <div className="product-image">
        <img src={props.image}  alt='Loading Image...'/>
      </div>
      <h4>{props.name.split("+").join(" ")}</h4>
      <p>KES {Math.round(props.price * 128.33).toLocaleString("en-us")}</p>
    </section>
  );
};

export { ProductCard };
