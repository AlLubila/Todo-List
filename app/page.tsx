'use client'


// Import the necessary modules and components
import React, { useState } from "react";
import Body from "./body/page"; // Import the Body component
import Header from "./header/page"; // Import the Header component

// Define the Home component
export default function Home() {
  // Define state variables for tasks and the currently edited task
  const [tasks, setTasks] = useState<string[]>([]);
  const [currentTodo, setCurrentTodo] = useState<{ id: number | null, text: string }>({ id: null, text: '' });

  // Function to add a new task
  const addTask = (newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Update tasks array with new task
  };

  // Function to remove a task
  const removeTask = (taskToRemove: string) => {
    // Filter out the task to be removed and update the tasks array
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  // Function to handle editing a task
  const handleEdit = (task: string, index: number) => {
    // Set the current edited task
    setCurrentTodo({ id: index, text: task });
  };

  // Function to save the edited task
  const saveEditedTask = (editedTask: string, index: number) => {
    // Check if the edited task is not empty before saving
    if (editedTask.trim() !== "") {
      // Update the tasks array with the edited task
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTask;
      setTasks(updatedTasks);
    }
    // Clear the current edited task
    setCurrentTodo({ id: null, text: '' });
  };

  // Render the component
  return (
    <main>
      <div className="w-3/4 mx-auto">
        {/* Render the Header component */}
        <Header addTask={addTask} removeTask={removeTask} />
        {/* Render the Body component and pass necessary props */}
        <Body tasks={tasks} removeTask={removeTask} handleEdit={handleEdit} saveEditedTask={saveEditedTask} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
      </div>
    </main>
  );
}
