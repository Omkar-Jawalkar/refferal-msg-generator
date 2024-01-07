import { useState } from "react";
import helpReplace from "../../utils/helpReplace";
import { data } from "../../data/refferalData";
import useLocalStorage from "../../hooks/useLocalStorage";
const EmployerDetails = () => {
    const [firstName, setFirstName] = useLocalStorage("first-name", "");
    const [lastName, setLastName] = useLocalStorage("last-name", "");
    const [employeeName, setEmployeeName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobId, setJobId] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [role, setRole] = useState("Frontend Developer");

    const gererateRefferalMessage = () => {
        let employeeObj = {
            employee_name: employeeName,
            company: companyName,
            job_id: jobId,
            job_link: jobLink,
            role: role,
        };

        helpReplace(firstName + " " + lastName, employeeObj, data[0]);
    };

    return (
        <div className=" flex flex-col    w-full gap-2 justify-center items-center">
            <h1 className=" text-xl my-2 font-bold">Employer Details</h1>
            <input
                value={employeeName}
                onChange={(e) => {
                    setEmployeeName(e.target.value);
                }}
                type="text"
                className="w-full"
                placeholder="Name of Employer"
            />
            <input
                value={companyName}
                onChange={(e) => {
                    setCompanyName(e.target.value);
                }}
                type="text"
                className="w-full"
                placeholder="Company Name"
            />
            <input
                value={jobId}
                onChange={(e) => {
                    setJobId(e.target.value);
                }}
                type="text"
                className="w-full"
                placeholder="Job Id"
            />
            <input
                value={jobLink}
                onChange={(e) => {
                    setJobLink(e.target.value);
                }}
                type="text"
                className="w-full"
                placeholder="Job Link"
            />

            <button
                onClick={() => {
                    gererateRefferalMessage();
                }}
                className=" rounded-md shadow-sm py-1 bg-green-600 px-3 text-white "
            >
                Generate Refferal Message
            </button>
        </div>
    );
};

export default EmployerDetails;
