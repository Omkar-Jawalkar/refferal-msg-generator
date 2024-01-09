import { useContext, useEffect, useState } from "react";
import { MyDetailsContext } from "../../context/MyDetailsContext";
import helpReplace from "../../utils/helpReplace";
import useLocalStorage from "../../hooks/useLocalStorage";
import { data } from "../../data/refferalData";

const CsvComponemt = () => {
    const [csvFile, setCsvFile] = useState();
    const [firstName] = useLocalStorage("first-name", "");
    const [lastName] = useLocalStorage("last-name", "");
    const { setResult } = useContext(MyDetailsContext);
    const [parsedData, setParsedData] = useState(null);
    const [fieldsArr] = useState([
        "employee_name",
        "company",
        "role",
        "job_link",
        "job_id",
        "employee_linkedin_url",
    ]);

    const parseCsvData = (csvString) => {
        let resultObj = [];
        const csvArr = csvString.split("\n");
        let headings = csvArr[0].split(",");
        // console.log(headings);
        for (let i = 1; i < csvArr.length; i++) {
            let obj = {};
            let arrElements = csvArr[i].split(",");
            arrElements.map((ele, index) => {
                let heading = headings[index];
                if (index === arrElements.length - 1 && ele.endsWith("\r")) {
                    if (heading.endsWith("\r")) {
                        let newHeading = heading.substr(0, heading.length - 1);
                        obj[newHeading] = ele.substr(0, ele.length - 1);
                    }
                } else {
                    obj[heading] = ele;
                }
            });
            resultObj.push(obj);
        }

        setParsedData(resultObj);
    };

    useEffect(() => {
        if (parsedData !== null) {
            parsedData.map((item) => {
                let obj = helpReplace(
                    firstName + " " + lastName,
                    item,
                    data[0]
                );
                setResult((prev) => [...prev, { ...obj, ...item }]);
            });
        }
    }, [parsedData]);

    const submit = (e) => {
        e.preventDefault();

        const reader = new FileReader();

        reader.onload = async (e) => {
            const csvString = e.target.result;
            parseCsvData(csvString);
        };

        reader.readAsText(csvFile);
    };

    return (
        <div className="flex-1 gap-3 flex flex-col justify-start items-center">
            <p className="font-bold">
                {" "}
                Note - The CSV file should have following fields, with same
                order. Please refer the{" "}
                <span className="underline cursor-pointer text-blue-700">
                    {" "}
                    Video link{" "}
                </span>
                more consise understanding.
            </p>

            <div className=" w-full flex justify-between items-center px-7 ">
                <div>
                    {fieldsArr.map((field) => {
                        return (
                            <p
                                key={field}
                                className="font-bold m-0  text-start"
                            >
                                {field}
                            </p>
                        );
                    })}
                </div>
                <span className="underline cursor-pointer font-bold text-blue-700">
                    Video Link
                </span>
            </div>

            <form
                className="flex flex-col my-4 gap-3 justify-center items-center"
                onSubmit={submit}
            >
                <input
                    onChange={(e) => {
                        setCsvFile(e.target.files[0]);
                    }}
                    type="file"
                    accept=".csv"
                    name="csv"
                    id="csv-file"
                    className="text-center"
                />
                <button
                    type="submit"
                    className=" self-stretch bg-green-600 px-2 rounded-md py-1 text-white"
                >
                    Generate Referral message in Bulk
                </button>
            </form>
        </div>
    );
};

export default CsvComponemt;
