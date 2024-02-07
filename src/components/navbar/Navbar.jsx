import UserDetailInputModel from "../user-detail-input-model/UserDetailInputModel";
const Navbar = ({ openDialog, setOpenDialog }) => {
    return (
        <div className="h-14 w-full flex px-4  justify-between items-center mb-4 border-b">
            <h1 className="text-md lg:text-lg font-bold">
                Referral Message Generator 🚀
            </h1>

            <div className="flex justify-center items-center space-x-4">
                <button
                    onClick={() => {
                        setOpenDialog(true);
                    }}
                    className="text-lg text-blue-800  underline  rounded-md px-2 py-1"
                >
                    <span className=" hidden md:flex"> Edit ✏️</span>
                    <span className=" flex md:hidden">✍️</span>
                </button>

                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Omkar-Jawalkar/refferal-msg-generator"
                    className=" cursor-pointer underline text-lg"
                >
                    <span className=" hidden md:flex"> Github ↗️</span>
                    <span className=" flex md:hidden">↗️</span>
                </a>
            </div>

            <UserDetailInputModel
                setOpenDialog={setOpenDialog}
                openDialog={openDialog}
            />
        </div>
    );
};

export default Navbar;
