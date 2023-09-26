
import { useEffect, useState } from "react";
import Card from "./Card";


const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noData, setNoData] = useState(false); // Fixed the typo here

  useEffect(() => {
    const donateButton = JSON.parse(localStorage.getItem("donate")) || [];
    if (donateButton.length > 0) {
      setDonate(donateButton);
    } else {
      setNoData("No Data Found"); // Fixed the typo here
    }
  }, []);

  return (
    <div>
      {noData ? <p className="flex justify-center items-center h-screen text-5xl text-red-600">{noData}</p> : 
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {donate ?.map(donation=> (<Card key={donation.id} donation={donation}></Card>))}
        </div>
      </div>}

    </div>
  );
};

export default Donation;