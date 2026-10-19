
function TaskList({ tasks, toggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
