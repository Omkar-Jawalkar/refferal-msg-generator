//   {
//         greeting: "Hello #employee_name#",
//         body: "I hope this message finds you well.",
//         opening:
//             "I recently came across an exciting opportunity for a #role# position at #company# .",
//         request:
//             "If you are aware of any available positions or can refer me to the appropriate contact person at #company# , I would be immensely grateful.",
//         resume: "Attached is my resume for your reference.",
//         gratitude: "Thank you for your time and consideration.",
//         reason: "I believe it would be a fantastic place to kickstart my career.",
//         closing: "I look forward to hearing back from you soon.",
//         signature: "Best regards, #myName#",
//     },

import { useRef } from "react";
import useCopy from "../../hooks/useCopy";

const ParseRefferalMessage = (props) => {
    const [, copy] = useCopy();
    const pRef = useRef();

    const getAndCopy = () => {
        copy(pRef.current.innerText);
    };

    return (
        <span className="bg-white m-2 rounded  relative text-left p-4 overflow-auto  flex flex-col justify-start items-start w-full min-h-44 max-h-44">
            <span className="absolute right-2 top-2 ">
                <button onClick={getAndCopy} className="border px-2 py-1">
                    Copy
                </button>
            </span>
            <p ref={pRef}>
                {props?.greeting && (
                    <>
                        {props?.greeting}
                        <br />
                        <br />
                    </>
                )}
                {props?.body && (
                    <>
                        {props?.body}
                        <br />
                        <br />
                    </>
                )}
                {props?.opening && (
                    <>
                        {props?.opening}
                        <br />
                        <br />
                    </>
                )}
                {props?.reason && (
                    <>
                        {props?.reason}
                        <br />
                        <br />
                    </>
                )}
                {props?.request && (
                    <>
                        {props?.request}
                        <br />
                        <br />
                    </>
                )}
                {props?.resume && (
                    <>
                        {props?.resume}
                        <br />
                        <br />
                    </>
                )}
                {props?.gratitude} {props?.closing}
                <br />
                <br />
                {props?.signature && (
                    <>
                        {props?.signature}
                        <br />
                        <br />
                    </>
                )}
            </p>
        </span>
    );
};

export default ParseRefferalMessage;
