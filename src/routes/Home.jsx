import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  let navigate = useNavigate();
  const btnClicked = () => {
    navigate("/browsingpets");
  };

  return (
    <section
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className="hero">
        <div className="hero-content" style={{ height: "200px" }}>
          <h2>Find Your New Best Friends.</h2>
          <p>Discover the perfect pet for your family</p>
          <button onClick={btnClicked}>Explore</button>
        </div>
        <hr />
      </div>

      <div classNameName="pets-catalog">
        <h2>Available Pets</h2>
        <div
          classNameName="pets-catalog-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Card
            img="./assets/fluffin.png"
            title="Fluffin"
            description="🔥 Fire"
          />
          <Card
            img="./assets/aqualo.png"
            title="Aqualo"
            description="💧 Water"
          />
          <Card img="./assets/zephy.png" title="Zephyr" description="🍃 Air" />
        </div>
        <button onClick={btnClicked}>Browse More Pets</button>
        <hr />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          img="https://img.freepik.com/premium-vector/cute-vector-shiba-dog-head-doggy_1010539-742.jpg  "
          title="Healthy & Happy Pets"
          description="Our pets are well cared for"
        />
        <Card
          img="https://static.vecteezy.com/system/resources/previews/000/377/806/original/home-vector-icon.jpg "
          title="Trusted Breeders"
          description="Ethically raised & loved"
        />
        <Card
          img="https://vectorified.com/images/google-maps-marker-icon-38.png "
          title="Easy Adoption process"
          description="Simple & quick to adopt"
        />
      </div>
    </section>
  );
};

export default Home;
