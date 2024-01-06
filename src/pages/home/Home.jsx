import CsvComponemt from "../../components/csv-component/CsvComponemt";
import FormComponent from "../../components/form-component/FormComponent";

const Home = () => {
    return (
        <div className="flex gap-10 h-screen justify-evenly items-center">
            <FormComponent />
            <CsvComponemt />
        </div>
    );
};

export default Home;
