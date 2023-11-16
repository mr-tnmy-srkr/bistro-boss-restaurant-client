import {
  FaAd,
  FaCalendar,
  FaHome,
  FaJediOrder,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="flex">
      {/*dashboard side bar*/}
      <div className="w-64 min-h-screen bg-orange-400 text-black">
        <ul className="menu p-4 text-xl">
          <li>
            <NavLink to="/dashboard/home">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myCart"
              className={({ isActive }) => (isActive ? "bg-blue-700 text-white" : "")}
            >
              <FaShoppingCart />
              My Cart ({cart.length})
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/dashboard/review">
              <FaAd />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList />
              My Bookings
            </NavLink>
          </li>
          <div className="divider bg-white h-[2px]"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch /> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaJediOrder />
              Order Food
            </NavLink>
          </li>
        </ul>
      </div>
      {/*dashboard content*/}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
