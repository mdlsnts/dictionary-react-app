import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Project coded by&nbsp;
          <a
            href="https://linktr.ee/martadlsnts"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Marta Delos Santos
          </a>{" "}
          and it's open-sourced on{" "}
          <a
            href="https://github.com/mdlsnts/dictionary-react-app"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
