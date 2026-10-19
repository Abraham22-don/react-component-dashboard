
function Stats({ totalTasks, completedCount, darkMode }) {
  return (
    <section className="stats">
      <div className="card">
        <h2>Total Tasks</h2>
        <p>{totalTasks}</p>
      </div>

      <div className="card">
        <h2>Completed</h2>
        <p>{completedCount}</p>
      </div>

      <div className="card">
        <h2>Theme</h2>
        <p>{darkMode ? "Dark" : "Light"}</p>
      </div>
    </section>
  );
}

export default Stats;
