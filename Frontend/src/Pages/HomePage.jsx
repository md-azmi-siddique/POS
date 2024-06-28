
import MasterLayout from "../Components/MasterLayout.jsx";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <MasterLayout>
            <div className="container mt-3">

                    <Link to="/pos" className="btn btn-primary">POS Page</Link>


            </div>
        </MasterLayout>
    );
};

export default HomePage;