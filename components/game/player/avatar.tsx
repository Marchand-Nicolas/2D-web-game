import styles from "../../../styles/components/game/player/avatar.module.css";

const Avatar = ({ playerObject }: { playerObject: PlayerObject }) => {
  const { username, isCurrentPlayer, id } = playerObject;
  return <div className={styles.container}></div>;
};

export default Avatar;
