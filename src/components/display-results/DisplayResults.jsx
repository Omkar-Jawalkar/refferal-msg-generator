import { useContext } from "react";
import { MyDetailsContext } from "../../context/MyDetailsContext";
import ParseRefferalMessage from "./ParseRefferalMessage";

const DisplayResults = () => {
    const { result } = useContext(MyDetailsContext);

    if (result?.length <= 0) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {/* Note */}

            <div className="my-4 flex flex-col justify-center items-center">
                <span className="text-lg">
                    Just copy the{" "}
                    <span className="font-bold">referral message</span>, we have
                    written it for you.
                </span>
                <span className="text-md">
                    Click on the{" "}
                    <span className="font-bold underline text-blue-700">
                        link
                    </span>{" "}
                    and send it to the{" "}
                    <span className="font-bold">recruiter!</span>
                </span>

                <span className="text-sm font-bold underline">
                    All the best!!
                </span>
            </div>

            <table className=" px-12 bg-slate-200">
                <tr className="bg-black/60 text-white">
                    <th className="px-2">Name</th>
                    <th className="px-2">Company</th>
                    <th className="px-2"> Refferal Msg</th>
                    <th className="px-2">Linkedin Link</th>
                </tr>
                {result.map((res, index) => {
                    return (
                        <tr
                            className="border-b mb-4 space-y-6 space-x-4 border-black"
                            key={index}
                        >
                            <th> {res?.employee_name} </th>
                            <th>{res?.company}</th>
                            <th>
                                <ParseRefferalMessage {...res} />
                            </th>
                            <th>
                                <a
                                    target="_blank"
                                    className="text-blue-800 underline"
                                    href={res?.employee_linkedin_url}
                                    rel="noopener noreferrer"
                                >
                                    Link
                                </a>
                            </th>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default DisplayResults;
