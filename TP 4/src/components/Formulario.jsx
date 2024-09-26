import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importamos uuid

export const Formulario = ({ tareas, setTareas }) => {
  const [proyecto, setProyecto] = useState('');
  const [tipo, setTipo] = useState('');
  const [persona, setPersona] = useState('');
  const [storyPoints, setStoryPoints] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [resumen, setResumen] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if ([proyecto, tipo, persona, storyPoints, prioridad, fechaCreacion, resumen].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    // Crear un nuevo objeto de tarea con un id único
    const nuevaTarea = {
      id: uuidv4(), // Generamos un ID único para cada tarea
      proyecto,
      tipo,
      persona,
      storyPoints,
      prioridad,
      fechaCreacion,
      resumen
    };

    // Agregar la nueva tarea al estado
    setTareas([...tareas, nuevaTarea]);

    // Limpiar el formulario
    setProyecto('');
    setTipo('');
    setPersona('');
    setStoryPoints('');
    setPrioridad('');
    setFechaCreacion('');
    setResumen('');
  };

  return (
    <div className="w-1/2">
      <h2 className="text-3xl text-center">Agregar Tarea</h2>
      <p className="font-black text-lg mt-5 text-center mb-10">Añade tareas y {''}
        <span className="text-indigo-600 font-bold">Adminístralas</span></p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error ? <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">Todos los campos son obligatorios</p> : null}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">Proyecto</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="proyecto" type="text" placeholder="Nombre del proyecto" value={proyecto} onChange={(e) => setProyecto(e.target.value)} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo">Tipo de Tarea</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="tipo" type="text" placeholder="Tipo de tarea" value={tipo} onChange={(e) => setTipo(e.target.value)} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="persona">Persona Asignada</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="persona" type="text" placeholder="Nombre del desarrollador" value={persona} onChange={(e) => setPersona(e.target.value)} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">Story Points</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="storyPoints" type="number" placeholder="Story Points" value={storyPoints} onChange={(e) => setStoryPoints(e.target.value)} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">Prioridad</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="prioridad" type="text" placeholder="Alta, Media o Baja" value={prioridad} onChange={(e) => setPrioridad(e.target.value)} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaCreacion">Fecha de Creación</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="fechaCreacion" type="date" value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">Resumen</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="resumen" placeholder="Breve descripción de la tarea" value={resumen} onChange={(e) => setResumen(e.target.value)} />
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded" type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};
