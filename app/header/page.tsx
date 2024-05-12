// Import React library
import React, { useState } from "react";

// Define props interface
interface Props {
  // Function to add a new task
  addTask: (newTask: string) => void;
  // Function to remove a task
  removeTask: (task: string) => void;
}

// Define the Header component
export default function Header({ addTask, removeTask }: Props) {
  // State for the new task input field
  const [newTask, setNewTask] = useState("");

  // Event handler for input field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the new task state with input field value
    setNewTask(e.target.value);
  };

  // Event handler for adding a new task
  const handleAdd = () => {
    // Check if the new task is not empty
    if (newTask !== "") {
      // Add the new task to the list
      addTask(newTask);
      // Reset the new task input field
      setNewTask("");
    }
  };

  // Render the component
  return (
    <>
      {/* Header section */}
      <div className="flex flex-row justify-between py-6">
        {/* Title */}
        <div>
          <h1 className="text-3xl">ToDo List</h1>
        </div>
        {/* Form for adding new tasks */}
        <div>
          {/* Input field for new task */}
          <input
            type="text"
            className="border border-neutral-950 py-2 pl-5 pr-16 focus:outline-none"
            value={newTask}
            onChange={handleChange}
          />
          {/* Button to add new task */}
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
