import Nav from "./components/Nav";
import CurrentUser from "./components/CurrentUser";

function App() {
  return (
    <div className="App">
      <header className="homeHeader">
        <nav className="navBar">
          <Nav />
        </nav>
      </header>
      <main className="main">
        <CurrentUser />
      </main>
    </div>
  );
}

export default App;
