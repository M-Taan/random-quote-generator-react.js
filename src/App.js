import { useEffect, useState } from "react";
import NewAdvice from "./components/NewAdvice";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    displayAdvice();
  }, []);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    return data;
  };

  const displayAdvice = async () => {
    const quote = await fetchAdvice();
    console.log(quote.content);
    setAdvice(quote.content);
  };

  return (
    <div className="app">
      <div className="card">
        <div className="heading">{advice}</div>
        <NewAdvice changeAdvice={displayAdvice} />
      </div>
    </div>
  );
};

export default App;
