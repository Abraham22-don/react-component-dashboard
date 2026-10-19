function TaskForm({ taskInput, setTaskInput, addTask }) {
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)}
        placeholder="Enter a new task"
        aria-label="New task"
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;