import CsvComponemt from "../../components/csv-component/CsvComponemt";
import FormComponent from "../../components/form-component/FormComponent";

const Home = () => {
    return (
        <div className="flex gap-10 w-full h-screen  justify-center items-center">
            <FormComponent />
            <CsvComponemt />
        </div>
    );
};

export default Home;
