
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Study React components", completed: false },
    { id: 2, title: "Finish scripting assignment", completed: true },
    { id: 3, title: "Review for midterm", completed: false },
  ]);

  const [taskInput, setTaskInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");

  function addTask(event) {
    event.preventDefault();

    if (taskInput.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskInput.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {currentView === "dashboard" ? (
        <main className="dashboard">
          <Stats
            totalTasks={tasks.length}
            completedCount={completedCount}
            darkMode={darkMode}
          />

          <section className="task-section">
            <h2>My Tasks</h2>

            <TaskForm
              taskInput={taskInput}
              setTaskInput={setTaskInput}
              addTask={addTask}
            />

            <TaskList
              tasks={tasks}
              toggleTask={toggleTask}
            />
          </section>
        </main>
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;
