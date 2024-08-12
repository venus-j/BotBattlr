import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(bot);
        }}
      >
        Terminate
      </button>
    </div>
  );
}

export default BotCard;
