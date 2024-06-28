import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import POS_Page from "./Pages/POS_Page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/pos" element={<POS_Page/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;