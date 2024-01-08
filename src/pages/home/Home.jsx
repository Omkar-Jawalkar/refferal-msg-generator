import { useState } from "react";
import CsvComponemt from "../../components/csv-component/CsvComponemt";
import FormComponent from "../../components/form-component/FormComponent";
import YourDetails from "../../components/form-component/YourDetails";
import DisplayResults from "../../components/display-results/DisplayResults";
import { MyDetailsContext } from "../../context/MyDetailsContext";

const Home = () => {
    const [result, setResult] = useState([]);
    return (
        <div className="flex  flex-col gap-10 justify-center items-center">
            <YourDetails />
            {/* ADDING CONTEXT */}
            <MyDetailsContext.Provider
                value={{
                    result,
                    setResult,
                }}
            >
                <div className="flex gap-10 w-full justify-center items-center">
                    <FormComponent />
                    <CsvComponemt />
                </div>
                <DisplayResults />
            </MyDetailsContext.Provider>
        </div>
    );
};

export default Home;
