import { Routes, Route } from 'react-router-dom';
import LandingPage from "./LandingPage/LandingPage";
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