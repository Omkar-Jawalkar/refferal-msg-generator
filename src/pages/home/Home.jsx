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
        <div className="flex  w-full flex-col gap-10 justify-center items-center">
            <HighlightUse />

            {/* ADDING CONTEXT */}
            <MyDetailsContext.Provider
                value={{
                    result,
                    setResult,
                }}
            >
                <div className="flex  border p-6 flex-col h-full   max-w-screen-lg    lg:flex-row gap-10 w-full   justify-center items-stretch">
                    <FormComponent />
                    <div className="border-[0.2px]"></div>
                    <CsvComponemt />
                </div>
                <div className="w-full border-2 mt-8"></div>
                <DisplayResults />
            </MyDetailsContext.Provider>

            <Toaster />
        </div>
    );
};

export default Home;
