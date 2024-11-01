import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === 'loading';

  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
