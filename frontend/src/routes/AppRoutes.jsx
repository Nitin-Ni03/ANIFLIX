import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';

const AppRoutes = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <Navbar />

            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/sign-in" element={<SignIn />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default AppRoutes;