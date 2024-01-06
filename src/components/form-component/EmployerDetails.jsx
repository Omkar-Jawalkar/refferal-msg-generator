const EmployerDetails = () => {
    return (
        <div className=" flex flex-col    w-full gap-2 justify-center items-center">
            <h1 className=" text-xl my-2 font-bold">Employer Details</h1>
            <input
                type="text"
                className="w-full"
                placeholder="Name of Employer"
            />
            <input type="text" className="w-full" placeholder="Company Name" />
            <input type="text" className="w-full" placeholder="Job Id" />
            <input type="text" className="w-full" placeholder="Job Link" />

            <button className=" rounded-md shadow-sm py-1 bg-green-600 px-3 text-white ">
                Generate Refferal Message
            </button>
        </div>
    );
};

export default EmployerDetails;
