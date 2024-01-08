import { useState } from "react";

const useCopy = () => {
    const [copiedText, setCopiedText] = useState();

    // useEffect(() => {
    //     console.log("COPIED TEXT" + copiedText);
    // }, [copiedText]);
    const copy = async (text) => {
        try {
            console.log(text);
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
        } catch (err) {
            console.log(err);
        }
    };

    return [copiedText, copy];
};

export default useCopy;
