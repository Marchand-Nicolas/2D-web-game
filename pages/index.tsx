import Player from "@/components/game/player/player";
import Map from "@/components/game/map/map";

export default function Home() {
  return (
    <main>
      <Map />
      <Player
        playerObject={{
          username: "test",
          isCurrentPlayer: true,
          id: "4f4sqsdf54qfs7fdsf",
          avatar: {
            body: {
              color: "#000000",
              hair: {
                color: "#000000",
                shape: "bald",
              },
            },
            clothes: [],
          },
        }}
      />
    </main>
  );
}
