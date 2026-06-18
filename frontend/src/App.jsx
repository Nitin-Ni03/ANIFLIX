import { Routes, Route } from 'react-router-dom';
import LandingPage from "./LandingPage/LandingPage";
// import HeroPage from "./HeroPage/HeroPage"; // Temporarily disabled as the folder is missing
import Login from "./login/Login";

function App(){
    return(
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="Heropage" element={<HeroPage />} /> */}
        </Routes>
    )
}
export default App;