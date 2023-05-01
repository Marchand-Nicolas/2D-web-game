import styles from "../../../styles/components/game/map/map.module.css";

const Map = () => {
  return (
    <div className={styles.container}>
      <canvas id="map"></canvas>
    </div>
  );
};

export default Map;
