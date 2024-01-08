import { useContext } from "react";
import { MyDetailsContext } from "../../context/MyDetailsContext";
import ParseRefferalMessage from "./ParseRefferalMessage";

const DisplayResults = () => {
    const { result } = useContext(MyDetailsContext);

    return (
        <div className="flex flex-col justify-center items-center">
            <table className="max-w-screen-lg">
                <tr className="bg-black/60 text-white">
                    <th className="px-2">Name</th>
                    <th className="px-2">Company</th>
                    <th className="px-2"> Refferal Msg</th>
                    <th className="px-2">Linkedin Link</th>
                </tr>
                {result.map((res, index) => {
                    return (
                        <tr
                            className="border-b mb-4 space-x-4 border-black"
                            key={index}
                        >
                            <th> {res?.employee_name} </th>
                            <th>{res?.company}</th>
                            <th>
                                <ParseRefferalMessage {...res} />
                            </th>
                            <th>
                                <a
                                    className="text-blue-800"
                                    href={res?.employee_linkedin_url}
                                >
                                    LINK
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
