import { useState } from "react";

const YourDetails = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="flex gap-2   flex-1 flex-col justify-center items-center w-full">
            <h1 className=" text-xl my-2 font-bold">Your Details</h1>
            <div className=" w-full text-right">
                <button className=" text-white px-2  rounded-md  shadow-sm bg-slate-400">
                    Prefill Your info
                </button>
            </div>
            <div className="flex gap-3">
                <input
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    placeholder="First Name"
                />
                <input
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    placeholder="Last Name"
                />
            </div>
            <input type="text" placeholder="Your Role " className="w-full" />
            <input type="text" placeholder="Resume Link" className="w-full" />
            <input
                type="text"
                placeholder="Portfolio Link"
                className="w-full"
            />
        </div>
    );
};

export default YourDetails;
