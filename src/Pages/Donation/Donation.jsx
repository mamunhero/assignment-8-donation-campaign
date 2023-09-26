
import { useEffect, useState } from "react";
import Card from "./Card";


const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noData, setNoData] = useState(false); 
  const [isShow, setIsShow] =useState(false)
  useEffect(() => {
    const donateButton = JSON.parse(localStorage.getItem("donate")) || [];
    if (donateButton.length > 0) {
      setDonate(donateButton);
    } else {
      setNoData("No Data Found"); 
    }
  }, []);

  return (
    <div>
      {
        noData ? <p className="flex justify-center items-center h-screen text-5xl text-red-600">{noData}</p> : 
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
               isShow ? donate.map(donation=> (<Card key={donation.id} donation={donation}></Card>))
               : donate.slice(0, 4).map(donation=> (<Card key={donation.id} donation={donation}></Card>))
            }
          </div>
          <button onClick={()=>setIsShow(!isShow)}
           className={`text-white text-xl bg-green-500 mt-5 text-center block font-semibold py-1 px-5 rounded-xl mx-auto ${isShow ? "hidden" : "block"}`}>See All</button>
        </div>
      }

    </div>
  );
};

export default Donation;


