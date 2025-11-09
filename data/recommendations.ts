export type RelatedGame = {
  name: string;
  summary: string;
  playUrl: string;
  focus: string;
  difficulty: "Casual" | "Moderate" | "Hardcore";
  platform: string;
  image: string;
  imageAlt: string;
};

export const relatedGames: RelatedGame[] = [
  {
    name: "Rodeo Stampede: Sky Zoo",
    summary:
      "Mobile lasso classic from Yodo1 where chaining mounts trains timing and crowd weaving identical to Cowboy Safari bounty runs.",
    playUrl: "https://play.google.com/store/apps/details?id=com.yodo1.rodeo.safari",
    focus: "Timing & Flow",
    difficulty: "Casual",
    platform: "Android · iOS",
    image: "/related-rodeo-stampede.jpg",
    imageAlt: "Rodeo Stampede herd running across floating sky platforms",
  },
  {
    name: "Weird West",
    summary:
      "Immersive sim that blends twin-stick combat with posse management—perfect for mastering cooldown stacking before Safari marathons.",
    playUrl: "https://store.steampowered.com/app/1097350/Weird_West/",
    focus: "Posse Strategy",
    difficulty: "Moderate",
    platform: "PC · Console",
    image: "/related-weird-west.jpg",
    imageAlt: "Weird West Steam key art showing gunslingers in red desert",
  },
  {
    name: "Hard West 2",
    summary:
      "Turn-based ghost train heist with poker hands powering abilities—sharpens foresight for Safari's high-stake rodeo waves.",
    playUrl: "https://store.steampowered.com/app/1282410/Hard_West_2/",
    focus: "Turn-Based Tactics",
    difficulty: "Hardcore",
    platform: "PC",
    image: "/related-hard-west-2.jpg",
    imageAlt: "Hard West 2 key art with desperados on horseback",
  },
  {
    name: "Evil West",
    summary:
      "Over-the-shoulder co-op brawler where arc pistols and gauntlets punish vampires—great for practicing crowd bursts and dodge timings.",
    playUrl: "https://store.steampowered.com/app/1065310/Evil_West/",
    focus: "Co-op Brawler",
    difficulty: "Moderate",
    platform: "PC · Console",
    image: "/related-evil-west.jpg",
    imageAlt: "Evil West hero wielding electrified gauntlet against monsters",
  },
];
