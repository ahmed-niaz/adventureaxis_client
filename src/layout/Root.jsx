import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
       <main className="font-outfit">
        <Navbar/>
        <Outlet/>
        <Footer/>
       </main>
    );
};

export default Root;