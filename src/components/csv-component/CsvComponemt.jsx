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

    const parseCsvData = (csvString) => {
        let resultObj = [];
        const csvArr = csvString.split("\n");
        let headings = csvArr[0].split(",");
        let headingsArrayLength = headings?.length;
        let lastItemOfHeading = headings[headingsArrayLength - 1];

        headings[headingsArrayLength - 1] = lastItemOfHeading.substr(
            0,
            lastItemOfHeading.length - 1
        );

        console.log("headings", headings);

        for (let i = 1; i < csvArr.length; i++) {
            let obj = {};
            let csvRow = csvArr[i].split(",");

            console.log("csvRow", csvRow);
            csvRow.map((field, index) => {
                let heading = headings[index];
                if (index === csvRow.length - 1 && field.endsWith("\r")) {
                    obj[heading] = field.substr(0, field.length - 1);
                    // if (heading.endsWith("\r")) {
                    //     let newHeading = heading.substr(0, heading.length - 1);
                    //     obj[newHeading] = field.substr(0, field.length - 1);
                    // }
                } else {
                    obj[heading] = field;
                }
            });
            resultObj.push(obj);
        }

        setParsedData(resultObj);
    };

    useEffect(() => {
        if (parsedData !== null) {
            parsedData.map((item) => {
                let myData = JSON.parse(JSON.stringify(data[0]));
                let obj = helpReplace(firstName + " " + lastName, item, myData);
                setResult((prev) => [...prev, { ...obj, ...item }]);
            });
        }
    }, [parsedData]);

    const submit = (e) => {
        e.preventDefault();

        const reader = new FileReader();

        reader.onload = async (e) => {
            const csvString = e.target.result;
            console.log(csvString);
            parseCsvData(csvString);
        };

        reader.readAsText(csvFile);
    };

    return (
        <div className="flex-1 gap-3 px-4  flex flex-col justify-start items-center">
            <div className="flex justify-center pb-4 items-end w-full">
                <a href="Refferal-format.csv" download={"Referral_Format"}>
                    <button className="px-2 py-1 shadow-md  border border-black/35 rounded-md">
                        Download CSV File Format
                    </button>
                </a>
            </div>
            <p className="font-semibold">
                <span className="font-extrabold">Note*</span> - The CSV file
                should have following fields.Please fill all details and
                generate Referral Messages.
                <br />
                <br />
                <span>Here is a </span>
                <span className="underline cursor-pointer text-blue-700">
                    {" "}
                    Video link{" "}
                </span>
                more consise understanding.
            </p>

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
                    className=" mt-6 text-center self-stretch bg-green-600 px-2 rounded-md py-1 text-white"
                >
                    Generate Referral message in Bulk
                </button>
            </form>
        </div>
    );
};

export default CsvComponemt;
