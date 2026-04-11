import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import BrowsingPets from "./routes/browsingpets";
import Notfound from "./routes/notfound";
import Info from "./routes/info";

const App = () => {
  return (
    <div className="Card">
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/browsingpets" element={<BrowsingPets />} />
        <Route path="/browsingpets/info/:slug" element={<Info />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
