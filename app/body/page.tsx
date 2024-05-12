// Import React library
import React from "react";

// Define props interface
interface Props {
  tasks: string[]; // Array of tasks to display
  removeTask: (taskToRemove: string) => void; // Function to remove a task
  handleEdit: (task: string, index: number) => void; // Function to handle editing a task
  saveEditedTask: (editedTask: string, index: number) => void; // Function to save the edited task
  currentTodo: { id: number | null, text: string }; // Currently edited task
  setCurrentTodo: React.Dispatch<React.SetStateAction<{ id: number | null; text: string; }>>; // Function to set the currently edited task
}

// Define the Body component
export default function Body({ tasks, removeTask, handleEdit, saveEditedTask, currentTodo, setCurrentTodo }: Props) {
  return (
    <>
      {/* Header section */}
      <div className="flex flex-row justify-between border-b-2 border-stone-400 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold">To do</h1>
        </div>
        {/* Display the count of tasks */}
        <div className="flex items-center justify-center rounded-full font-semibold h-5 w-5 p-4 border-2 border-black">
          {tasks.length}
        </div>
      </div>
      {/* List of tasks */}
      <ul>
        {/* Map through tasks */}
        {tasks.map((task, index) => (
          <li className="text-lg font-thin mt-3 flex items-center justify-between" key={index}>
            {/* Input field for editing the task if it's the currently edited task */}
            {currentTodo.id === index ? (
              <input
                type="text"
                value={currentTodo.text}
                onChange={(e) => setCurrentTodo({ ...currentTodo, text: e.target.value })}
                autoFocus // Automatically focus on the input field
              />
            ) : (
              // Display task text if not being edited
              <div className="flex-shrink-0 truncate" style={{ maxWidth: "calc(100% - 210px)" }}>
                {task}
              </div>
            )}
            {/* Action buttons */}
            <div>
              {/* Edit or Save button based on editing state */}
              <button
                className="ml-4 px-7 bg-slate-600 text-white text-sm font-bold py-1"
                onClick={() => currentTodo.id === index ? saveEditedTask(currentTodo.text, index) : handleEdit(task, index)}
              >
                {currentTodo.id === index ? "SAVE" : "EDIT"}
              </button>
              {/* Remove button */}
              <button
                className="ml-4 px-4 bg-zinc-900 text-white text-sm font-bold py-1"
                onClick={() => removeTask(task)}
              >
                REMOVE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
