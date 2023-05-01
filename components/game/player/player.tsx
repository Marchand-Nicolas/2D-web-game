import { getApiUrl } from "@/utils/config";
import styles from "../../../styles/components/game/player/player.module.css";
import Avatar from "./avatar";

const Player = ({ playerObject }: { playerObject: PlayerObject }) => {
  const { username, isCurrentPlayer, id } = playerObject;
  return (
    <div
      className={[
        styles.container,
        isCurrentPlayer ? styles.controlled : null,
      ].join(" ")}
    >
      <div className={styles.avatar}>
        <Avatar playerObject={playerObject} />
      </div>
      <div className={styles.username}>
        <p>{username}</p>
      </div>
    </div>
  );
};

export default Player;
