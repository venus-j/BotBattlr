import React from "react";

const BotSpecs = ({ bot, enlistBot, goBack }) => {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={goBack}>Back</button>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
