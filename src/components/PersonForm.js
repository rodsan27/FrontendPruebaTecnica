import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function PersonForm({ persona, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    Nombre: '',
    Apellido: '',
    FechaNacimiento: '',
    Identificacion: '',
    CiudadNacimiento: '',
    PaisNacimiento: '',
  });

  useEffect(() => {
    if (persona) setFormData(persona);
  }, [persona]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {persona?.Id && <input type="hidden" value={persona.Id} />}
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="Nombre"
          value={formData.Nombre}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="Apellido"
          value={formData.Apellido}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Fecha de Nacimiento</Form.Label>
        <Form.Control
          type="date"
          name="FechaNacimiento"
          value={formData.FechaNacimiento}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Identificación</Form.Label>
        <Form.Control
          type="text"
          name="Identificacion"
          value={formData.Identificacion}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ciudad de Nacimiento</Form.Label>
        <Form.Control
          type="text"
          name="CiudadNacimiento"
          value={formData.CiudadNacimiento}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>País de Nacimiento</Form.Label>
        <Form.Control
          type="text"
          name="PaisNacimiento"
          value={formData.PaisNacimiento}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
      <Button variant="secondary" className="ms-2" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
  );
}

export default PersonForm;
