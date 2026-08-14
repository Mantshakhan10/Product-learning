import { useState } from "react";

interface TaskFormProps {
    onAdd: (text: string) => void;
}

function TaskForm({ onAdd }: TaskFormProps) {

    const [taskText, setTaskText] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskText.trim() === "") {
            return;
        }

        onAdd(taskText.trim());
        setTaskText("");
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={taskText}
                onChange={(event) =>
                    setTaskText(event.target.value)
                }
                placeholder="Enter a task"
            />

            <button
                type="submit"
                disabled={taskText.trim() === ""}
            >
                Add
            </button>

        </form>
    );
}

export default TaskForm;