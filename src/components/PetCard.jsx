import { useNavigate } from "react-router-dom";

const PetCard = (prop) => {
  let navigate = useNavigate();
  const btnClicked = () => {
    navigate(`/browsingpets/info/${prop.slug}`);
  };
  return (
    <div
      className="PetCard"
      style={{
        border: "2px solid gray",
        borderRadius: "5px",
        padding: "10px",
        height: "250px",
        width: "250px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={prop.img}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: "1px solid gray",
          borderRadius: "5px",
          flex: "1",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{prop.PetName}</span>
        <span>{prop.PetType}</span>
      </div>

      <button onClick={btnClicked}>Adopt Now</button>
    </div>
  );
};

export default PetCard;
