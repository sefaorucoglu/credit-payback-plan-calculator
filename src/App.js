import './App.css';
import InputForm from "./components/InputForm";
import TopBar from "./components/TopBar";
import OutputForm from "./components/OutputForm";
import CashbackTable from "./components/CashbackTable";
import {InputContext} from "./contexts/InputContext";
import React from "react";
import {CashbackTableContext} from "./contexts/CasbackTableContext";

function App() {
    const [kkdfRatio, setKkdfRatio] = React.useState(15);
    const [bsmvRatio, setBsmvRatio] = React.useState(5);
    const [range, setRange] = React.useState('Aylık');
    const [creditAmount, setCreditAmount] = React.useState();
    const [installmentValue, setInstallmentValue] = React.useState(12);
    const [profitRatio, setProfitRatio] = React.useState(18);
    const [installmentNumber, setInstallmentNumber] = React.useState();
    const [installmentAmount, setInstallmentAmount] = React.useState();
    const [mainValue, setMainValue] = React.useState();
    const [remainingMainValue, setRemainingMainValue] = React.useState();
    const [profit, setProfit] = React.useState();
    const [kkdf, setKkdf] = React.useState();
    const [mainbsmv, setBsmv] = React.useState();

    return (
        <InputContext.Provider value={{
            kkdfRatio, setKkdfRatio,
            bsmvRatio, setBsmvRatio,
            range, setRange,
            creditAmount, setCreditAmount,
            installmentValue, setInstallmentValue,
            profitRatio, setProfitRatio,
        }}>
            <CashbackTableContext.Provider value={{
                installmentNumber, setInstallmentNumber,
                installmentAmount, setInstallmentAmount,
                mainValue, setMainValue,
                remainingMainValue, setRemainingMainValue,
                profit, setProfit,
                kkdf, setKkdf,
                mainbsmv, setBsmv

            }}>
                <div className="App">
                    <TopBar/>
                    <InputForm/>
                    <OutputForm/>
                    <CashbackTable/>

                </div>
            </CashbackTableContext.Provider>
        </InputContext.Provider>
    );
}

export default App;
