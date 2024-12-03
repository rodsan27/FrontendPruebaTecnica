import React, { useState, useEffect } from 'react';
import PersonaService from './services/PersonasService';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import { Modal, Button } from 'react-bootstrap';


function App() {
  const [personas, setPersonas] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchPersonas();
  }, []);

  const fetchPersonas = async () => {
    try {
      const response = await PersonaService.getAllPersonas();
      console.log('Datos recibidos:', response.data); // Para verificar
      setPersonas(response.data);
    } catch (error) {
      console.error('Error fetching personas:', error);
    }
  };

  const handleAddPersona = () => {
    setSelectedPersona(null);
    setShowForm(true);
  };

  const handleEditPersona = (persona) => {
    setSelectedPersona(persona);
    setShowForm(true);
  };

  const handleDeletePersona = async (id) => {
    if (window.confirm('¿Está seguro de eliminar esta persona?')) {
      try {
        await PersonaService.deletePersona(id);
        fetchPersonas();
      } catch (error) {
        console.error('Error deleting persona:', error);
      }
    }
  };

  const handleFormSubmit = async (persona) => {
    try {
      if (persona.Id) {
        await PersonaService.updatePersona(persona);
      } else {
        await PersonaService.createPersona(persona);
      }
      fetchPersonas();
      setShowForm(false);
    } catch (error) {
      console.error('Error saving persona:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Gestión de Personas</h1>
      <Button className="mb-3" onClick={handleAddPersona}>
        Agregar Persona
      </Button>
      <PersonList
        personas={personas}
        onEdit={handleEditPersona}
        onDelete={handleDeletePersona}
      />
      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPersona ? 'Editar Persona' : 'Agregar Persona'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PersonForm
            persona={selectedPersona}
            onSubmit={handleFormSubmit}
            onCancel={() => setShowForm(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
