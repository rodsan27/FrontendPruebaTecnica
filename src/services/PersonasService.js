import axios from 'axios';

const Base_Url = "https://iro20altc6.execute-api.us-east-2.amazonaws.com/sandbox/Persona"

class PersonaService {
    // Obtener todas las personas
    getAllPersonas() {
        return axios.get(`${Base_Url}/Consultar`);
    }

    createPersona(persona){
        return axios.post(`${Base_Url}/Crear`, persona, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    updatePersona(persona){
        return axios.post(`${Base_Url}/Editar`, persona, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // Eliminar una persona (requiere solo el ID como cuerpo)
    deletePersona(id) {
        return axios.post(`${Base_Url}/Eliminar`, { Id: id }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

}

export default new PersonaService();
