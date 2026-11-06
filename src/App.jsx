import React, { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Go to gym', priority: 'High', status: 'To Do' },
    { id: 2, name: 'Read a book', priority: 'Low', status: 'Done' },
    { id: 3, name: 'Go to market', priority: 'Medium', status: 'In Progress' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container style={{ maxWidth: '800px' }}>
        <Card className="border-0 shadow-sm p-4 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="fw-bold mb-1 text-primary">
                <i className="bi bi-check2-square me-2"></i>Task List
              </h2>
              <p className="text-muted mb-0">Kelola kegiatan dan tugas harian Anda secara interaktif</p>
            </div>
            <Button variant="primary" className="fw-semibold shadow-sm" onClick={handleShowForm}>
              <i className="bi bi-plus-lg me-1"></i> Add Task
            </Button>
          </div>
        </Card>

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          showEditForm={showEditForm}
        />

        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </Container>
    </div>
  );
}

export default App;