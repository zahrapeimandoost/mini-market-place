import { Outlet } from "react-router-dom";
import Header from "./Navigation";
import Footer from "./Footer";
const MainLayout= () => {
    return (
        <div>
            <Header/>
            <main className="pt-24 pb-20">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};
export default MainLayout;