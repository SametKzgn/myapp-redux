/* import '../scss/styles.js'; // scss yazacagın tum sayafalrda kullan */
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Detail from "./components/detail/Detail";
import Nav from "./components/nav/Nav.jsx";


function App() {
    return (
        <div className="App bg-[#e5e7eb] w-full h-full">
            <div className="flex flex-col">
                <Routes>
                    <Route path="/" element={<Nav/>}/>
                    <Route path="/detail/:name" element={<Detail/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
