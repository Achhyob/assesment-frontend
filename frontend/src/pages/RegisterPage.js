import Register from '../components/Auth/Register';
import Navbar from '../components/Layout/Navbar';

const RegisterPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <Register />
    </div>
  );
};

export default RegisterPage;