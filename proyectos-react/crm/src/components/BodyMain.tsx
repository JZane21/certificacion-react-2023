import { Outlet } from "react-router";
import { SideBar } from "../components/SideBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const BodyMain = () => {

  const location = useLocation();
  return (
    <section className="flex flex-row h-full">
      <SideBar>
      <>
        <div className="bg-gray-300 m-1 font-semibold flex flex-col">
          <Link className={`${location.pathname.includes('dashboard') &&
          "text-red-400 font-bold"}`}
          to={`dashboard`}>DASHBOARD</Link>
          <Link className={`${location.pathname.includes('clients') &&
          "text-blue-400 font-bold"}`}
          to={`clients`}>CLIENTS</Link>
          <Link className={`${location.pathname.includes('products') &&
          "text-green-400 font-bold"}`}
          to={`products`}>PRODUCTS</Link>
        </div>
      </>
      </SideBar>
      <Outlet/>
    </section>
  );
};
