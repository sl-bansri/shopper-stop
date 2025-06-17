import { Outlet } from 'react-router-dom';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
