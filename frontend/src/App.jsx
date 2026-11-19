import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.hej}!`);
      });
  }, []);

  return (
    <>
      <section>
        <p>Hej från react</p>
        <p>Ny ändring</p>
      </section>
    </>
  );
}

export default App;
