type PlayerObject = {
  username: string;
  id: string;
  isCurrentPlayer: boolean;
  avatar: PlayerAvatar;
};

type PlayerAvatar = {
  body: PlayerBody;
  clothes: PlayerCloth[];
};

type PlayerBody = {
  color: string;
  hair: PlayerHair;
};

type PlayerHair = {
  color: string;
  shape: PlayerHairShape;
};

type PlayerHairShape = "short" | "long" | "bald";

type PlayerCloth = {
  color: string;
};
