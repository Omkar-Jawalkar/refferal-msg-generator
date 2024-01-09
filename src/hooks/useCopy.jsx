import { useState } from "react";
import toast from "react-hot-toast";

const useCopy = () => {
    const [copiedText, setCopiedText] = useState();

    const notify = () => toast.success("Copied");
    // useEffect(() => {
    //     console.log("COPIED TEXT" + copiedText);
    // }, [copiedText]);
    const copy = async (text) => {
        try {
            console.log(text);
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            notify();
        } catch (err) {
            console.log(err);
        }
    };

    return [copiedText, copy];
};

export default useCopy;
