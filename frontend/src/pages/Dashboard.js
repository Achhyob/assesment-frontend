import { useContext } from 'react';
import Navbar from '../components/Layout/Navbar';
import TaskList from '../components/Tasks/TaskList';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>
          Welcome, <span style={{ color: '#007bff' }}>{user?.username}</span>!
        </h1>
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;