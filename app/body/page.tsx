import React from "react";

interface Props {
  // An array of tasks to be displayed in the component
  tasks: string[];
}

// The main component that displays a list of tasks
export default function Body({ tasks }: Props) {
  // Render the component's UI
  return (
    <>
      {/* The header of the task list */}
      <div className="flex flex-row justify-between border-b-2 border-stone-400 pb-4">
        {/* The title of the task list */}
        <div>
          <h1 className="text-2xl font-extrabold">To do</h1>
        </div>
        {/* The number of tasks in the list */}
        <div className="flex items-center justify-center rounded-full font-semibold h-5 w-5 p-4 border-2 border-black">
          1
        </div>
      </div>

      {/* The list of tasks */}
      <ul>
        {/* Map each task to a list item */}
        {tasks.map((task, index) => (
          <li
            className="text-lg font-thin mt-3 flex items-center justify-between "
            key={index}
          >
            {/* The task name */}
            <div className="flex-shrink-0 truncate" style={{ maxWidth: "calc(100% - 110px)" }}>
              {task}
            </div>
            {/* The remove button for the task */}
            <div>
              <button
                className="ml-4 px-4 bg-zinc-900 text-white text-sm font-bold py-1"
                onClick={() => {}}
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