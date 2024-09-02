import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, deleteTask, getTask, updateTask } from "../api/task.api";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Tarea Actualizada con éxito", {
        position: "bottom-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Nueva tarea agregada", {
        position: "bottom-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("done", data.done); 
        setValue("created_at", new Date(data.created_at).toLocaleDateString());
    
      }
    }
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Título"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.title && <span>Éste espacio es requerido.</span>}

        <textarea
          placeholder="Descripción"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />

        {errors.description && <span>Éste espacio es requerido.</span>}

        <div className="text-gray-400 text-sm mt-2">
          Created on: {watch("created_at")}
        </div>

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Subir
        </button>
      </form>


      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Estas seguro de eliminar");
              if (accepted) {
                await deleteTask(params.id);
                toast.success("Tarea Eliminada", {
                  position: "bottom-center",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/tasks");
              }
            }}
          >
            eliminar
          </button>
        </div>
      )}
    </div>
  );
}