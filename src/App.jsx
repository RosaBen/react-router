import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/article">Article</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
