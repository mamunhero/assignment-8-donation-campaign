import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import Error from '../Pages/Error/Error';
import SingleDonationCard from '../Pages/SingleDonationCard/SingleDonationCard';
import { useLoaderData } from 'react-router-dom';


const myDonationRoute = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
       {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch("/donation.json")
       },
       {
        path:"/donation",
        element: <Donation></Donation>
       },
       {
        path:"/statistics",
        element: <Statistics></Statistics>,
       },
       {
        path:"/donations/:id",
        element: <SingleDonationCard></SingleDonationCard>,
        loader:()=> fetch("/donation.json")
       }
    ]
  }
]);

export default myDonationRoute;