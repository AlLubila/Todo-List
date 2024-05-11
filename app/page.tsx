import { useState } from "react";
import Body from "./body/page";
import Header from "./header/page";

// The main component that displays the task list and the form for adding new tasks
export default function Home() {
  // The state of the tasks array
  const [tasks, setTasks] = useState<string[]>([]);

  // The function that adds a new task to the tasks array
  const addTask = (newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log(tasks);
  };

  // Render the component's UI
  return (
    <main>
      {/* The container for the task list and the form for adding new tasks */}
      <div className="w-3/4 mx-auto">
        {/* The header component that displays the form for adding new tasks */}
        <Header addTask={addTask} />
        {/* The body component that displays the task list */}
        <Body tasks={tasks} />
      </div>
    </main>
  );
}