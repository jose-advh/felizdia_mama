import "./card.css";

const Card = () => {
  return (
    <article className="card">
      <figure className="card__figure">
        <h1>image</h1>
      </figure>
      <section className="card__content">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>
    </article>
  );
};

export default Card;
