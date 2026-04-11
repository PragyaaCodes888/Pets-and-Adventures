const Card = (prop) => {
  return (
    <div className="card">
      <img src={prop.img} alt="icons" height={"150px"} />
      <h3>{prop.title}</h3>
      <p>{prop.description}</p>
    </div>
  );
};

export default Card;
