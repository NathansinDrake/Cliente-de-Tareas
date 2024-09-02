import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateTask } from "../api/task.api"; 

export function TaskCard({ task }) {
  const [isDone, setIsDone] = useState(task.done);
  const navigate = useNavigate();

  const handleToggleDone = async () => {
    try {
      await updateTask(task.id, { done: !isDone });
      setIsDone(prevIsDone => !prevIsDone);
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
    }
  };

  return (
    <div
      className={`bg-zinc-800 p-4 rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:bg-zinc-700
                  cursor-pointer`} 
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <h1 className="text-white font-semibold text-lg mb-1">
        {task.title}
      </h1>
      <p className="text-slate-400 text-sm mb-2">
        {task.description}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleToggleDone();
        }}
        className={`px-4 py-2 text-white font-semibold rounded transition-colors duration-300 ease-in-out
                    ${isDone ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'}`}
      >
        {isDone ? 'Realizada' : 'Marcar como realizada'}
      </button>
    </div>
  );
}
