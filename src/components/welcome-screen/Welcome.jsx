import { useEffect, useRef, useState } from "react";
const Welcome = ({ setStep }) => {
    const [companyList] = useState([
        "Amazon",
        "Flipkart",
        "Linkedin",
        "Meta",
        "Netflix",
    ]);
    const [currentCompany, setCurrentCompany] = useState("Amazon");
    const timeoutRef = useRef(null);
    const indexRef = useRef(0);

    useEffect(() => {
        timeoutRef.current = setInterval(() => {
            if (indexRef.current < companyList.length) {
                setCurrentCompany(companyList[indexRef.current]);
                indexRef.current++;
            } else {
                indexRef.current = 0;
                companyList[indexRef.current];
            }
        }, 1200);

        () => {
            clearInterval(timeoutRef.current);
        };
    }, []);

    return (
        <div className="p-4 space-y-6 max-w-96 flex justify-center flex-col items-center">
            <h1 className="text-2xl font-bold"> 🎉 Welcome 🎉</h1>
            <h1 className="flex flex-col justify-center items-center">
                <p>We can help you write referral message for </p>
                <span className="font-bold mx-4 underline text-lg">
                    {currentCompany}
                </span>
            </h1>

            <button
                onClick={() => {
                    setStep(2);
                }}
                className="px-2 py-1 m-2 text-white bg-green-700 rounded-md  text-md"
            >
                Lets go 💪
            </button>
        </div>
    );
};

export default Welcome;
