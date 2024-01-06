import { useState } from "react";

const CsvComponemt = () => {
    const [csvFile, setCsvFile] = useState();
    const [parsedData, setParsedData] = useState(null);

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
        <div className="flex-1 gap-3 flex flex-col justify-center items-center">
            <p>Note - The Format should go here</p>
            <form
                className="flex flex-col gap-3 justify-center items-center"
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
                />
                <button
                    type="submit"
                    className=" self-stretch bg-green-600 px-2 rounded-md py-1 text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CsvComponemt;
