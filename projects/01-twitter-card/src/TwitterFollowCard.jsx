/* eslint-disable react/prop-types */
import { useState } from "react";
export function TwitterFollowCard({
  formatUserName,
  userName,
  user,
  initialIsFollowing,
}) {
  const [inFollowing, setIsFollowing] = useState(initialIsFollowing);

  const buttonText = inFollowing ? "Siguiendo" : "Seguir";
  const buttonClasName = inFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handClick = () => {
    setIsFollowing(!inFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar random"
          src={`https://unavatar.io/${userName}`}
        />
        <label className="tw-followCard-info">
          <strong>{userName}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(user)}
          </span>
        </label>
      </header>

      <asid>
        <button className={buttonClasName} onClick={handClick}>
          <span className="tw-followCard-text">{buttonText}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </asid>
    </article>
  );
}
