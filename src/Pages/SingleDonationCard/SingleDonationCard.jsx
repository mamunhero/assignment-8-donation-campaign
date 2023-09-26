import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const SingleDonationCard = () => {


const [singleCard, setSingleCard] = useState({});
const {id} = useParams();
  // console.log(id);
  const {donations} = useLoaderData();
  // console.log(donations)
  useEffect(()=>{
    const findCard = donations?.find(donation => donation.id === id);
    // console.log(findCard)
    setSingleCard(findCard);
  },[id, donations])
  // console.log(singleCard);
  return (
    <div>
      <SingleCard donation={singleCard}></SingleCard>
    </div>
  );
};

export default SingleDonationCard;

