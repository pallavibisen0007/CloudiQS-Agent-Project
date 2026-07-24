import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1>CloudiQS Agent</h1>
        <button>Login</button>
      </nav>

      <section className="hero">
        <h2>Welcome to CloudiQS Agent</h2>

        <p>
          An AI powered cloud management platform for monitoring, automation,
          analytics and intelligent decision making.
        </p>

        <div className="buttons">
          <button className="primary">Get Started</button>
          <button className="secondary">Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default App;