import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-between items-center py-5 px-5">
        <Logo></Logo>
        <ul className="flex  flex-col md:flex-row gap-5">
          <li>
            <NavLink  to="/" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl font-bold" : "text-2xl font-bold"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/donation" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl font-bold " : " text-2xl font-bold"}>Donation</NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] underline text-2xl font-bold" : "text-2xl font-bold"}>Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

