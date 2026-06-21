import { Link } from "react-router-dom";
import { NAVIGATION_ITEM } from "../constant";
const Header = () => {
 return (
    <nav className="flex fixed top-0 right-0 left-0 z-50 justify-center md:justify-between rounded-lg bg-gray-50 shadow-lg shadow-gray-200 p-2">
        <div className="flex flex-col">
            <h1 className="text-orange-400 text-4xl font-semibold text-center md:text-left">MiniMarketPlace</h1>
            <h3 className="text-orange-500 text-lg font-light text-center md:text-left">Modern Solutions</h3>
        </div>
        <ul className=" gap-2 hidden md:flex ">
            {NAVIGATION_ITEM.map((item)=>
            <li key={item.id} className="my-auto">
             <Link to={item.path} className="bg-gray-100 hover:shadow-lg rounded-xl mx-auto my-auto p-1.5 text-sm">
                <span className="mr-1">{item.icon}</span>
                <span>{item.title}</span>
             </Link>
            </li>
            )}
        </ul>
    </nav>
 )
};
export default Header;