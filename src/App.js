import React, { useState, useEffect } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBots(data);
      });
  }, []);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => setArmy(army.filter((b) => b.id !== bot.id)))
      .then(() => setBots(bots.filter((b) => b.id !== bot.id)));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
      </header>
      <SortBar bots={bots} setBots={setBots} /> {/* Advanced feature */}
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;
