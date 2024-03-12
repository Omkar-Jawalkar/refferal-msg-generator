import { useEffect, useRef, useState } from "react";
import YourDetails from "../form-component/YourDetails";
import Welcome from "../welcome-screen/Welcome";
const UserDetailInputModel = ({ setOpenDialog, openDialog }) => {
    const dialogRef = useRef();
    const [step, setStep] = useState(1);

    // useEffect(() => {
    //     dialogRef.current.removeAttribute("open");
    //     dialogRef.current.showModal();
    // }, [dialogRef]);

    useEffect(() => {
        if (dialogRef) {
            if (openDialog) {
                dialogRef.current.showModal();
            } else {
                dialogRef.current.close();
            }
        }
    }, [openDialog]);

    // if (!openDialog) return null;

    return (
        <dialog
            className="p-0 backdrop:bg-black backdrop:bg-opacity-80"
            ref={dialogRef}
        >
            {step === 2 ? (
                <>
                    <YourDetails />
                    <button
                        title="save-button"
                        onClick={() => {
                            setOpenDialog(false);
                        }}
                        className="px-2 py-1 m-2 text-white bg-green-700 rounded-md text-md"
                    >
                        Save and Close
                    </button>{" "}
                </>
            ) : (
                <Welcome setStep={setStep} />
            )}
        </dialog>
    );
};

export default UserDetailInputModel;
