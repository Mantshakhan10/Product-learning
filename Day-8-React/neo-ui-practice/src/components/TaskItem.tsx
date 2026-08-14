interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TaskItem({
    task,
    onToggle,
    onDelete
}: TaskItemProps) {
    return (
        <li>
            <span
                className={task.completed ? "completed" : ""}
                onClick={() => onToggle(task.id)}
            >
                {task.text}
            </span>

            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </li>
    );
}

export default TaskItem;