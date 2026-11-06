import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  // Fungsi penentu warna Badge Priority
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return <Badge bg="danger">High</Badge>;
      case 'Medium':
        return <Badge bg="warning" text="dark">Medium</Badge>;
      case 'Low':
        return <Badge bg="success">Low</Badge>;
      default:
        return <Badge bg="secondary">{priority}</Badge>;
    }
  };

  // Fungsi penentu Badge Status & Ikon
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Done':
        return <Badge bg="light" text="success" className="border border-success"><i className="bi bi-check-circle-fill me-1"></i>Done</Badge>;
      case 'In Progress':
        return <Badge bg="light" text="primary" className="border border-primary"><i className="bi bi-hourglass-split me-1"></i>In Progress</Badge>;
      default:
        return <Badge bg="light" text="secondary" className="border"><i className="bi bi-circle me-1"></i>To Do</Badge>;
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-5 text-muted">
        <i className="bi bi-clipboard-x display-4 d-block mb-2"></i>
        <p className="mb-0">Belum ada tugas. Klik tombol **+ Add Task** di atas untuk menambahkan!</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <Card className="mb-3 border-0 shadow-sm rounded-3" key={task.id}>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-2 fw-bold text-dark">{task.name}</h5>
              <div className="d-flex align-items-center gap-2">
                <span className="text-muted small">Priority:</span>
                {getPriorityBadge(task.priority)}
                <span className="text-muted small ms-2">Status:</span>
                {getStatusBadge(task.status)}
              </div>
            </div>

            <div className="d-flex gap-2">
              <Button
                variant="outline-primary"
                size="sm"
                className="d-flex align-items-center gap-1"
                onClick={() => showEditForm(task)}
              >
                <i className="bi bi-pencil-square"></i> Edit
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                className="d-flex align-items-center gap-1"
                onClick={() => deleteTask(task.id)}
              >
                <i className="bi bi-trash"></i> Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;