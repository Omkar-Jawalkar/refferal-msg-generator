import EmployerDetails from "./EmployerDetails";
import YourDetails from "./YourDetails";

const FormComponent = () => {
    return (
        <div className=" flex gap-4 min-w-[50%]  flex-col justify-center items-center ">
            <YourDetails />
            <EmployerDetails />
        </div>
    );
};

export default FormComponent;
