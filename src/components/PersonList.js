import React from 'react';
import { Table, Button } from 'react-bootstrap';

function PersonList({ personas, onEdit, onDelete }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nacimiento</th>
          <th>Identificación</th>
          <th>Ciudad</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((persona) => (
          <tr key={persona.Id}>
            <td>{persona.Nombre}</td>
            <td>{persona.Apellido}</td>
            <td>{persona.FechaNacimiento}</td>
            <td>{persona.Identificacion}</td>
            <td>{persona.CiudadNacimiento}</td>
            <td>{persona.PaisNacimiento}</td>
            <td>
              <Button variant="warning" className="me-2" onClick={() => onEdit(persona)}>
                Editar
              </Button>
              <Button variant="danger" onClick={() => onDelete(persona.Id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PersonList;
