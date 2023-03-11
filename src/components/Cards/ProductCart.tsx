import "./index.css";

const ProductCard = (props: any) => {
  return (
    <section className="product-card">
      <div className="product-image">
        <img src={props.image} />
      </div>
      <h4>{props.name}</h4>
      <p>KES {Math.round(props.price * 128.33).toLocaleString("en-us")}</p>
    </section>
  );
};

export { ProductCard };
