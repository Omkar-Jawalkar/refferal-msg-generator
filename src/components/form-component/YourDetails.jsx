import useLocalStorage from "../../hooks/useLocalStorage";

const YourDetails = () => {
    const [firstName, setFirstName] = useLocalStorage("first-name", "");
    const [lastName, setLastName] = useLocalStorage("last-name", "");
    const [role, setRole] = useLocalStorage("role", "");
    const [resumeLink, setResumeLink] = useLocalStorage("resume-link", "");
    const [portfolio, setPortfolio] = useLocalStorage("portfolio-link", "");

    return (
        <div className="flex border max-w-screen-lg gap-2 px-7 py-4 w-full  flex-1 flex-col justify-center items-center ">
            <h1 className=" flex flex-col space-y-2 justify-center items-center text-lg underline mb-6 font-bold">
                <span className="text-green-700 underline text-2xl">
                    OnBoarding
                </span>
                Please Fill your details
            </h1>

            <div className="flex w-full flex-col md:flex-row gap-3">
                {/* <span className="w-full text-right text-gray-400">
                    * required
                </span> */}
                {/* FIRST NAME */}
                <div className="w-full space-x-1">
                    <label className="text-slate-500 flex justify-between items-center">
                        <span>First Name*</span>
                    </label>
                    <input
                        className="w-full border px-2 py-1 rounded"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        placeholder="Eg. Mathew"
                    />
                </div>

                {/* LAST NAME */}
                <div className="w-full space-x-1">
                    <label className="text-slate-500"> Last Name*</label>
                    <input
                        className="w-full border px-2 py-1 rounded"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        placeholder="Eg. James"
                    />
                </div>
            </div>

            {/* Your Role  */}
            <div className="w-full space-x-1">
                <label className="text-slate-500">Job Role you want*</label>
                <input
                    className="w-full border px-2 py-1 rounded"
                    value={role}
                    onChange={(e) => {
                        setRole(e.target.value);
                    }}
                    placeholder="Eg. Software Engineer"
                />
            </div>

            {/* RESUME LINK */}

            <div className="w-full space-x-1">
                <label className="text-slate-500"> Resume Link</label>
                <input
                    className="w-full border px-2 py-1 rounded"
                    value={resumeLink}
                    onChange={(e) => {
                        setResumeLink(e.target.value);
                    }}
                    placeholder="Eg. https://drive.google.com/file/d/..."
                />
            </div>

            {/* PORTFOLIO LINK */}

            <div className="w-full space-x-1">
                <label className="text-slate-500">Portfolio Link</label>
                <input
                    className="w-full border px-2 py-1 rounded"
                    value={portfolio}
                    onChange={(e) => {
                        setPortfolio(e.target.value);
                    }}
                    placeholder="Eg. https://mathewjames.com"
                />
            </div>

            {/* SAVE BUTTON */}
            {/* <div className="  mt-2 w-full text-right">
                <button className=" text-white px-2 py-1  rounded-md  shadow-sm bg-green-600">
                    Save your details
                </button>
            </div> */}

            <span className="text-end w-full pt-4 font-semibold">
                *Your Information will be stored on your browser.
            </span>
        </div>
    );
};

export default YourDetails;
