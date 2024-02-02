import "./App.css";
import { default as Navbar } from "./Components/Navbar";
import { default as Service } from "./Components/Service";
import { default as Welcome } from "./Components/Welcome";
import { default as Transactions } from "./Components/Transactions";
function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Service />
      <Transactions />
    </>
  );
}

export default App;
