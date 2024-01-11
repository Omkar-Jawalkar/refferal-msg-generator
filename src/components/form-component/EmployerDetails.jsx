import { useContext, useState } from "react";
import helpReplace from "../../utils/helpReplace";
import { data } from "../../data/refferalData";
import useLocalStorage from "../../hooks/useLocalStorage";
import { MyDetailsContext } from "../../context/MyDetailsContext";

const EmployerDetails = () => {
    const [firstName] = useLocalStorage("first-name", "");
    const [lastName] = useLocalStorage("last-name", "");
    const [employeeName, setEmployeeName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobId, setJobId] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [role] = useState("Frontend Developer");
    // Role removed
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const { setResult } = useContext(MyDetailsContext);

    const gererateRefferalMessage = () => {
        let employeeObj = {
            employee_name: employeeName,
            company: companyName,
            job_id: jobId,
            job_link: jobLink,
            role: role,
            employee_linkedin_url: linkedinUrl,
        };

        const obj = helpReplace(
            firstName + " " + lastName,
            employeeObj,
            data[0]
        );
        setResult((prev) => [...prev, { ...obj, ...employeeObj }]);
    };

    return (
        <div className=" flex flex-col    w-full gap-2 justify-center items-center">
            <h1 className=" text-xl my-2 font-bold">Employer Details</h1>

            {/* EMPLOYEE NAME */}
            <div className="w-full space-x-1">
                <label className="text-slate-500"> Employee Name</label>
                <input
                    className="w-full border px-2 py-1 rounded"
                    value={employeeName}
                    onChange={(e) => {
                        setEmployeeName(e.target.value);
                    }}
                    placeholder="Eg. Vipul Coelho"
                />
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
                className=" rounded-md shadow-sm py-1 bg-green-600 px-3 text-white "
            >
                Generate Refferal Message
            </button>
        </div>
    );
};

export default EmployerDetails;
