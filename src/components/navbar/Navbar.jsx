const Navbar = () => {
    return (
        <div className="h-14 w-full flex px-4  justify-between items-center mb-4 border-b">
            <h1 className="text-lg font-bold">Referral Message Generator 🚀</h1>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Omkar-Jawalkar/refferal-msg-generator"
                className=" cursor-pointer underline text-lg"
            >
                Github ↗️
            </a>
        </div>
    );
};

export default Navbar;
