const TaskItem = ({ task, onDelete }) => {
    return (
      <div style={{
        padding: '1.5rem',
        marginBottom: '1rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'relative'
      }}>
        <h3 style={{ marginTop: 0 }}>{task.title}</h3>
        {task.description && <p style={{ color: '#666' }}>{task.description}</p>}
        <button
          onClick={() => onDelete(task.id)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.5rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default TaskItem;