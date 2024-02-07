import { useEffect, useRef } from "react";
import YourDetails from "../form-component/YourDetails";
const UserDetailInputModel = ({ setOpenDialog, openDialog }) => {
    const dialogRef = useRef();

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
            className="p-0   backdrop:bg-black backdrop:bg-opacity-80"
            ref={dialogRef}
        >
            <YourDetails />
            <button
                onClick={() => {
                    setOpenDialog(false);
                }}
                className="bg-green-700 m-2 text-md text-white rounded-md px-2 py-1"
            >
                Save and Close
            </button>
        </dialog>
    );
};

export default UserDetailInputModel;
