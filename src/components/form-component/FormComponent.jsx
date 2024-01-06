import EmployerDetails from "./EmployerDetails";
import YourDetails from "./YourDetails";

const FormComponent = () => {
    return (
        <div className=" flex-1 gap-4  px-6  flex-col justify-center items-center ">
            <YourDetails />
            <EmployerDetails />
        </div>
    );
};

export default FormComponent;
