import Banner from "../Components/Banner";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      This is Home
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Home;