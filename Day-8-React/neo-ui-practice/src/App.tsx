import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(text: string) {
        const newTask: Task = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTasks([...tasks, newTask]);
    }

    function toggleTask(id: number) {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        completed: !task.completed
                    }
                    : task
            )
        );
    }

    function deleteTask(id: number) {
        setTasks(
            tasks.filter((task) => task.id !== id)
        );
    }

    return (
        <div className="app">

            <h1>My Checklist</h1>

            <TaskForm onAdd={addTask} />

            <TaskList
                tasks={tasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
            />

        </div>
    );
}

export default App;