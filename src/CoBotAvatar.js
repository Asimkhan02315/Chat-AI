import React from "react";

import BotAvatar from "./icons/bot.svg";

const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="BotAvatar" src={BotAvatar} height={50} width={50} />
      </div>
    </div>
  );
};

export default CoBotAvatar;
