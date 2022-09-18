import './App.css';
import InputForm from "./Components/InputForm";
import TopBar from "./Components/TopBar";
import OutputForm from "./Components/OutputForm";
import CashbackTable from "./Components/CashbackTable";

function App() {
  return (
    <div className="App">
   <TopBar/>
   <InputForm/>
   <OutputForm/>
   <CashbackTable/>

    </div>
  );
}

export default App;
