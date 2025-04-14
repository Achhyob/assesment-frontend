import Login from '../components/Auth/Login';
import Navbar from '../components/Layout/Navbar';

const LoginPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;