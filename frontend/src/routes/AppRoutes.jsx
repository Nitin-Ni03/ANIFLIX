import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';


const AppRoutes =() => {
    return(
        <div>
        <Navbar />

        <main>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </main>

        <Footer />
        </div>

    )
}
export default AppRoutes;