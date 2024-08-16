import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Hero from "../components/Hero";
import Shop from "../components/Shop";

const Homepage = () => {
  const [clothes, setclothes] = useState([]);
  //   const [itemsInCart, setitemsInCart] = useState([]);
  let [addToCart, setaddToCart] = useState(0);

  const handleAddToCart = () => {
    setaddToCart((prev) => prev + 1);
    // console.log(id);
  };

  useEffect(() => {
    fetch("https://bafutofakeproducts.onrender.com/products")
      .then((res) => res.json())
      .then((json) => setclothes(json));
  }, []);
  return (
    <div>
      <Navbar numberOfItems={addToCart} />
      <Hero />
      <Shop clothes={clothes} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Homepage;
