import { Link } from "react-router-dom";
import { NAVIGATION_ITEM } from "../constant";
const Footer = () => {
    return(
        <ul className="flex gap-2 md:hidden fixed bottom-2 left-3 right-3 rounded-xl bg-gray-100 shadow-2xl shadow-gray-300 p-4 ">
            {NAVIGATION_ITEM.map((item)=>
            <li className="mx-auto">
             <Link key={item.id} to={item.path} className="bg-gray-200 hover:shadow-2xl rounded-xl mx-auto my-auto p-2">
                <span className="">{item.icon}</span>
             </Link>
            </li>
            )}
        </ul>
    )

}
export default Footer;