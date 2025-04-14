import { useState, useEffect, useContext } from 'react';
import API from '../../api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { AuthContext } from '../../context/AuthContext';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks();
    }
  }, [isAuthenticated]);

  const fetchTasks = async () => {
    try {
      const response = await API.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (title, description) => {
    try {
      await API.post('/tasks', { title, description });
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-manager">
      <h2>My Tasks</h2>
      <TaskForm onAddTask={addTask} />
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;