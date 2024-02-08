import { useContext, useState } from "react";
import helpReplace from "../../utils/helpReplace";
import { data } from "../../data/refferalData";
import useLocalStorage from "../../hooks/useLocalStorage";
import { MyDetailsContext } from "../../context/MyDetailsContext";
import generateRandom from "../../utils/generateRandom";

const EmployerDetails = () => {
    const [firstName] = useLocalStorage("first-name", "");
    const [lastName] = useLocalStorage("last-name", "");
    const [employeeFirstName, setEmployeeFirstName] = useState("");
    const [employeeLastName, setEmployeeLastName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobId, setJobId] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [role] = useState("Frontend Developer");
    // Role removed
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const { setResult } = useContext(MyDetailsContext);

    const gererateRefferalMessage = () => {
        let employeeObj = {
            employee_first_name: employeeFirstName,
            employee_last_name: employeeLastName,
            company: companyName,
            job_id: jobId,
            job_link: jobLink,
            role: role,
            employee_linkedin_url: linkedinUrl,
        };

        let rand = generateRandom(data.length);
        console.log("random number ", rand);
        const obj = helpReplace(
            firstName + " " + lastName,
            employeeObj,
            data[rand]
        );
        setResult((prev) => [...prev, { ...obj, ...employeeObj }]);
    };

    return (
        <div className=" flex flex-col    w-full gap-2 justify-center items-center">
            <h1 className=" text-xl underline mb-6 font-bold">
                {" "}
                Please Enter Employer Details
            </h1>

            <div className="flex space-x-3">
                {/* EMPLOYEE First Name */}
                <div className="w-full flex-1 space-x-1">
                    <label className="text-slate-500">
                        {" "}
                        Employee First Name
                    </label>
                    <input
                        className="w-full border px-2 py-1 rounded"
                        value={employeeFirstName}
                        onChange={(e) => {
                            setEmployeeFirstName(e.target.value);
                        }}
                        placeholder="Eg. Vipul"
                    />
                </div>

                {/* Employee Last Name */}
                <div className="w-full flex-1 space-x-1">
                    <label className="text-slate-500">Employee Last Name</label>
                    <input
                        className="w-full border px-2 py-1 rounded"
                        value={employeeLastName}
                        onChange={(e) => {
                            setEmployeeLastName(e.target.value);
                        }}
                        placeholder="Eg. Coelho"
                    />
                </div>
            </div>

            {/* COMPANY NAME */}
            <div className="w-full space-x-1">
                <label className="text-slate-500"> Company Name</label>
                <input
                    className="w-full border px-2 py-1 rounded"
                    value={companyName}
                    onChange={(e) => {
                        setCompanyName(e.target.value);
                    }}
                    placeholder="Eg. Google"
                />
            </div>

            {/* JOB ID */}

            <div className="w-full space-x-1">
                <label className="text-slate-500"> Job Id</label>
                <input
                    className="w-full border px-2 py-1 rounded"
                    value={jobId}
                    onChange={(e) => {
                        setJobId(e.target.value);
                    }}
                    placeholder="Eg. 252312"
                />
            </div>

            {/* Job Link */}

            <div className="w-full space-x-1">
                <label className="text-slate-500"> Job Link</label>
                <input
                    className="w-full border px-2 py-1 rounded"
                    value={jobLink}
                    onChange={(e) => {
                        setJobLink(e.target.value);
                    }}
                    placeholder="Eg. Job Link"
                />
            </div>

            {/* EMployee Linkedin URL */}

            <div className="w-full space-x-1">
                <label className="text-slate-500"> Employee Linked Url</label>
                <input
                    className="w-full border px-2 py-1 rounded"
                    value={linkedinUrl}
                    onChange={(e) => {
                        setLinkedinUrl(e.target.value);
                    }}
                    placeholder="Eg. https://www.linkedin.com/in/..."
                />
            </div>

            <button
                onClick={() => {
                    gererateRefferalMessage();
                }}
                className=" rounded-md shadow-sm mt-4 py-1 bg-green-600 px-3 text-white "
            >
                <a href="#result">Generate Refferal Message</a>
            </button>
        </div>
    );
};

export default EmployerDetails;
