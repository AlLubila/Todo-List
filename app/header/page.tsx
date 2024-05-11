import React, { useState } from "react";

interface Props {
  // A function that adds a new task to the list
  addTask: (newTask: string) => void;
}

// The main component that displays a form for adding new tasks
export default function Header({ addTask }: Props) {
  
  // The state of the new task input field
  const [newTask, setNewTask] = useState("");

  // The event handler for the input field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  // The event handler for adding a new task
  const handleAdd = () => {
    // Check if the new task is not empty
    if (newTask!== "") {
      // Add the new task to the list
      addTask(newTask);

      // Reset the new task input field
      setNewTask("");
    }
  };

  // Render the component's UI
  return (
    <>
      {/* The header of the task list */}
      <div className="flex flex-row justify-between py-6">
        {/* The title of the task list */}
        <div>
          <h1 className="text-3xl">ToDo List</h1>
        </div>
        {/* The form for adding new tasks */}
        <div>
          {/* The input field for the new task */}
          <input
            type="text"
            className="border border-neutral-950 py-2 pl-5 pr-16 focus:outline-none"
            value={newTask}
            onChange={handleChange}
          />
          {/* The button for adding the new task */}
          <button
            className="ml-4 px-3 bg-sky-500 text-white text-sm font-bold py-3"
            onClick={handleAdd}
          >
            ADD A NEW TASK
          </button>
        </div>
      </div>
    </>
  );
}