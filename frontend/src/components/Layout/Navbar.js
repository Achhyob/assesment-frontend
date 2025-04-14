import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
        Task Manager
      </Link>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        {isAuthenticated ? (
          <button 
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link 
              to="/login" 
              style={{
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                color: '#333',
                border: '1px solid #dee2e6',
                borderRadius: '4px'
              }}
            >
              Login
            </Link>
            <Link 
              to="/register"
              style={{
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                color: 'white',
                backgroundColor: '#007bff',
                borderRadius: '4px'
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;