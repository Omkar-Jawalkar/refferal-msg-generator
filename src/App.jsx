import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [firstName] = useLocalStorage("first-name", "");

    useEffect(() => {
        if (firstName?.length <= 0) {
            setOpenDialog(true);
        }
    }, []);
    return (
        <div className="flex w-full justify-center flex-col items-center">
            <Navbar openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
};

export default App;
