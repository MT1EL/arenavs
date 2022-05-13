import checked from "./RoadmapImages/check.png";
import unChecked from "./RoadmapImages/uncheck.png";
import bear from "./RoadmapImages/bear.png";
import fox from "./RoadmapImages/fox.png";
import wolf from "./RoadmapImages/wolf.png";
import kib from "./RoadmapImages/kib.png";
export const data = [
  {
    icon: "firstHalfIcon",
    imageSite: "left",
    id: 1,
    checksrc: checked,
    unchecksrc: unChecked,
    animalUrl: bear,
    checkTexts: [
      "Lite Paper",
      "White Paper",
      "Smart Contract",
      "Contract Audit",
      "New HUD",
      "Seed Round",
    ],
    uncheckTexts: ["Private Round"],
  },
  {
    icon: "firstHalfIcon",
    id: 2,
    imageSite: "right",

    checksrc: checked,
    unchecksrc: unChecked,
    animalUrl: fox,
    checkTexts: false,
    uncheckTexts: [
      "Public Sale",
      "Obtain Coingecko Listing",
      "Obtain Coinmarketcap Listing",
      "Centralized exchange Listing",
      "Game Launch On GameXChange",
      "Game Currency Integration",
    ],
  },
  {
    icon: "secodHalfIcon",
    id: 3,
    imageSite: "left",

    checksrc: checked,
    unchecksrc: unChecked,
    animalUrl: wolf,
    checkTexts: false,
    uncheckTexts: [
      "NFT Marketplace and NFT Rewards",
      "NFT Pair Staking/Forming",
      "NFT Asset Games Integration",
      "Single Asset Staking",
      "Additional NFT Assets",
      "Additional Characters",
    ],
  },
  {
    icon: "secodHalfIcon",
    id: 4,
    imageSite: "right",
    checksrc: checked,
    unchecksrc: unChecked,
    animalUrl: kib,
    checkTexts: false,
    uncheckTexts: [
      "Game rewards for game asset & NFT",
      "New NFT Collectibles",
      "Collaboration With Influencers",
      "User-Generated Events",
      "New Partnerships",
      "VR gallery",
      "Arena Mastser VR (Quest 2)",
    ],
  },
];
