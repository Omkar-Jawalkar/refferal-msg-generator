import { useState } from "react";
import CsvComponemt from "../../components/csv-component/CsvComponemt";
import FormComponent from "../../components/form-component/FormComponent";
import YourDetails from "../../components/form-component/YourDetails";
import DisplayResults from "../../components/display-results/DisplayResults";
import { MyDetailsContext } from "../../context/MyDetailsContext";
import UserDetailInputModel from "../../components/user-detail-input-model/UserDetailInputModel";

import { Toaster } from "react-hot-toast";
import HighlightUse from "../../components/highlight-use/HighlightUse";
import useLocalStorage from "../../hooks/useLocalStorage";

const Home = () => {
    const [result, setResult] = useState([]);

    return (
        <div className="flex flex-col items-center justify-center w-full gap-10">
            <HighlightUse />

            {/* ADDING CONTEXT */}
            <MyDetailsContext.Provider
                value={{
                    result,
                    setResult,
                }}
            >
                <div className="flex flex-col items-stretch justify-center w-full h-full max-w-screen-lg gap-10 p-6 border lg:flex-row">
                    <FormComponent />
                    <div className="border-[0.2px]"></div>
                    <CsvComponemt />        
                </div>
                <div className="w-full mt-8 border-2"></div>
                <DisplayResults />
            </MyDetailsContext.Provider>

            <Toaster />
        </div>
    );
};

export default Home;
