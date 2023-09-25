import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Donations from "../../Components/Donations/Donations";

const Home = () => {

  const {donations} = useLoaderData()
  // console.log(donations)

  return (
    <div className="">
      <Banner></Banner>
      <Donations donations={donations}></Donations>
    </div>
  );
};

export default Home;

