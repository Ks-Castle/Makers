export interface Boss {
  name: string;
  difficulty: string;
  price: number;
  img: string;
  drops: string[];
}

export interface BossCalculateResult {
  index: number;
  data: CalResult[];
}

export interface CalResult {
  name: string;
  difficulty: string;
  price: number;
  count: number;
  img: string;
  drops: string[];
}

export const dailyBosses: Boss[] = [
  { name: "Zakum", difficulty: "EZ", price: 1000000, img: "Zakum", drops: [] },
  {
    name: "Zakum",
    difficulty: "NM",
    price: 3062500,
    img: "Zakum",
    drops: ["Aquatic Letter Eye", "Condensed Power Crystal"],
  },
  {
    name: "Hilla",
    difficulty: "NM",
    price: 4000000,
    img: "Hilla",
    drops: ["Blackheart", "Stone of Eternal Life"],
  },
  {
    name: "Von Bon",
    difficulty: "NM",
    price: 4840000,
    img: "Von_Bon",
    drops: [],
  },
  {
    name: "Pierre",
    difficulty: "NM",
    price: 4840000,
    img: "Pierre",
    drops: [],
  },
  {
    name: "Crimson Q",
    difficulty: "NM",
    price: 4840000,
    img: "Crimson_Queen",
    drops: [],
  },
  {
    name: "Vellum",
    difficulty: "NM",
    price: 4840000,
    img: "Vellum",
    drops: [],
  },
  {
    name: "OMNI CLN",
    difficulty: "NM",
    price: 6250000,
    img: "OMNI-CLN",
    drops: [],
  },
  {
    name: "Horntail",
    difficulty: "EZ",
    price: 4410000,
    img: "Horntail",
    drops: ["Silver Blossom Ring", "Dea Sidus Earring"],
  },
  {
    name: "Horntail",
    difficulty: "NM",
    price: 5062500,
    img: "Horntail",
    drops: ["Silver Blossom Ring", "Dea Sidus Earring", "Horntail Necklace"],
  },
  {
    name: "Horntail",
    difficulty: "CHS",
    price: 6760000,
    img: "Horntail",
    drops: ["Silver Blossom Ring", "Dea Sidus Earring", "Horntail Necklace"],
  },
  {
    name: "Pink Bean",
    difficulty: "NM",
    price: 7022500,
    img: "Pink_Bean",
    drops: ["Black Bean Mark", "Pink Holy Cup", "Golden Clover Belt"],
  },
  {
    name: "Von Leon",
    difficulty: "EZ",
    price: 5290000,
    img: "Von_Leon",
    drops: [],
  },
  {
    name: "Von Leon",
    difficulty: "NM",
    price: 7290000,
    img: "Von_Leon",
    drops: [],
  },
  {
    name: "Von Leon",
    difficulty: "HD",
    price: 12250000,
    img: "Von_Leon",
    drops: [],
  },
  {
    name: "Arkarium",
    difficulty: "EZ",
    price: 5760000,
    img: "Arkarium",
    drops: ["Mechanator Pendant", "Dominator Pendant"],
  },
  {
    name: "Arkarium",
    difficulty: "NM",
    price: 12600000,
    img: "Arkarium",
    drops: ["Mechanator Pendant", "Dominator Pendant"],
  },
  {
    name: "Magnus",
    difficulty: "EZ",
    price: 3610000,
    img: "Magnus",
    drops: ["Crystal Ventus Badge", "Royal Black Metal Shoulder"],
  },
  {
    name: "Magnus",
    difficulty: "NM",
    price: 12960000,
    img: "Magnus",
    drops: ["Crystal Ventus Badge", "Royal Black Metal Shoulder"],
  },
  {
    name: "Papulatus",
    difficulty: "EZ",
    price: 3422500,
    img: "Papulatus",
    drops: [],
  },
  {
    name: "Papulatus",
    difficulty: "NM",
    price: 13322500,
    img: "Papulatus",
    drops: [],
  },
  {
    name: "Ranmaru",
    difficulty: "NM",
    price: 4202500,
    img: "Ranmaru",
    drops: [],
  },
  {
    name: "Ranmaru",
    difficulty: "HD",
    price: 13322500,
    img: "Ranmaru",
    drops: [],
  },
];

export const dailyBossesToCheck: Boss[] = [
  {
    name: "Zakum",
    difficulty: "NM",
    price: 3062500,
    img: "Zakum",
    drops: ["Aquatic Letter Eye", "Condensed Power Crystal"],
  },
  {
    name: "Hilla",
    difficulty: "NM",
    price: 4000000,
    img: "Hilla",
    drops: ["Blackheart", "Stone of Eternal Life"],
  },
  {
    name: "Von Bon",
    difficulty: "NM",
    price: 4840000,
    img: "Von_Bon",
    drops: [],
  },
  {
    name: "Pierre",
    difficulty: "NM",
    price: 4840000,
    img: "Pierre",
    drops: [],
  },
  {
    name: "Crimson Q",
    difficulty: "NM",
    price: 4840000,
    img: "Crimson_Queen",
    drops: [],
  },
  {
    name: "Vellum",
    difficulty: "NM",
    price: 4840000,
    img: "Vellum",
    drops: [],
  },
  {
    name: "OMNI CLN",
    difficulty: "NM",
    price: 6250000,
    img: "OMNI-CLN",
    drops: [],
  },
  {
    name: "Horntail",
    difficulty: "CHS",
    price: 6760000,
    img: "Horntail",
    drops: ["Silver Blossom Ring", "Dea Sidus Earring", "Horntail Necklace"],
  },
  {
    name: "Pink Bean",
    difficulty: "NM",
    price: 7022500,
    img: "Pink_Bean",
    drops: ["Black Bean Mark", "Pink Holy Cup", "Golden Clover Belt"],
  },
  {
    name: "Von Leon",
    difficulty: "HD",
    price: 12250000,
    img: "Von_Leon",
    drops: [],
  },
  {
    name: "Arkarium",
    difficulty: "NM",
    price: 12600000,
    img: "Arkarium",
    drops: ["Mechanator Pendant", "Dominator Pendant"],
  },
  {
    name: "Magnus",
    difficulty: "NM",
    price: 12960000,
    img: "Magnus",
    drops: ["Crystal Ventus Badge", "Royal Black Metal Shoulder"],
  },
  {
    name: "Papulatus",
    difficulty: "NM",
    price: 13322500,
    img: "Papulatus",
    drops: [],
  },
  {
    name: "Ranmaru",
    difficulty: "HD",
    price: 13322500,
    img: "Ranmaru",
    drops: [],
  },
];

export const weeklyBosses: Boss[] = [
  {
    name: "Cygnus-",
    difficulty: "EZ",
    price: 45562500,
    img: "Cygnus",
    drops: [],
  },
  {
    name: "Cygnus-",
    difficulty: "NM",
    price: 72250000,
    img: "Cygnus",
    drops: ["Empress Shoulder"],
  },
  {
    name: "Hilla-",
    difficulty: "HD",
    price: 56250000,
    img: "Hilla",
    drops: ["Blackheart", "Stone of Eternal Life", "Will o' the Wisps"],
  },
  {
    name: "Pink Bean-",
    difficulty: "CHS",
    price: 64000000,
    img: "Pink_Bean",
    drops: ["Black Bean Mark", "Pink Holy Cup", "Golden Clover Belt"],
  },
  {
    name: "Zakum-",
    difficulty: "CHS",
    price: 81000000,
    img: "Zakum",
    drops: ["Aquatic Letter Eye", "Condensed Power Crystal"],
  },
  {
    name: "Pierre-",
    difficulty: "CHS",
    price: 81000000,
    img: "Pierre",
    drops: ["Piece of Mockery"],
  },
  {
    name: "Von Bon-",
    difficulty: "CHS",
    price: 81000000,
    img: "Von_Bon",
    drops: ["Piece of Time"],
  },
  {
    name: "Crimson Q-",
    difficulty: "CHS",
    price: 81000000,
    img: "Crimson_Queen",
    drops: ["Piece of Anguish"],
  },
  {
    name: "Princess-",
    difficulty: "NM",
    price: 81000000,
    img: "Princess_No",
    drops: ["Captivating Fragment"],
  },
  {
    name: "Magnus-",
    difficulty: "HD",
    price: 95062500,
    img: "Magnus",
    drops: [
      "Crystal Ventus Badge",
      "Royal Black Metal Shoulder",
      "Tyrant Cape",
    ],
  },
  {
    name: "Vellum-",
    difficulty: "CHS",
    price: 105062500,
    img: "Vellum",
    drops: ["Piece of Destruction"],
  },
  {
    name: "Papulatus-",
    difficulty: "CHS",
    price: 132250000,
    img: "Papulatus",
    drops: ["Papulatus Mark"],
  },
  {
    name: "Akechi-",
    difficulty: "NM",
    price: 144000000,
    img: "Akechi",
    drops: [],
  },
  {
    name: "Lotus-",
    difficulty: "NM",
    price: 162562500,
    img: "Lotus",
    drops: ["Extraordinary Energy Core (Grade S)"],
  },
  {
    name: "Lotus-",
    difficulty: "HD",
    price: 370562500,
    img: "Lotus",
    drops: [
      "Extraordinary Energy Core (Grade S)",
      "AbsoLab Box",
      "Berserked",
      "Lotusroid",
    ],
  },
  {
    name: "Damien-",
    difficulty: "NM",
    price: 169000000,
    img: "Damien",
    drops: ["Twisted Stigma Spirit Stone"],
  },
  {
    name: "Damien-",
    difficulty: "HD",
    price: 351562500,
    img: "Damien",
    drops: ["Twisted Stigma Spirit Stone", "Damienroid", "AbsoLab Box"],
  },
  {
    name: "Lucid-",
    difficulty: "EZ",
    price: 175562500,
    img: "Lucid",
    drops: ["Twilight Mark", "Butterfly Droplet Stone"],
  },
  {
    name: "Lucid-",
    difficulty: "NM",
    price: 203062500,
    img: "Lucid",
    drops: ["Twilight Mark", "Butterfly Droplet Stone"],
  },
  {
    name: "Lucid-",
    difficulty: "HD",
    price: 400000000,
    img: "Lucid",
    drops: [
      "Twilight Mark",
      "Butterfly Droplet Stone",
      "Arcane Box",
      "Dreamy Belt",
      "Lucidroid",
    ],
  },
  { name: "Will-", difficulty: "EZ", price: 191275000, img: "Will", drops: [] },
  {
    name: "Will-",
    difficulty: "NM",
    price: 232562500,
    img: "Will",
    drops: ["Twilight Mark", "Stone Cobweb Droplet"],
  },
  {
    name: "Will-",
    difficulty: "HD",
    price: 441000000,
    img: "Will",
    drops: [
      "Twilight Mark",
      "Stone Cobweb Droplet",
      "Mirror World Nodestone",
      "Will's Box",
      "Arcane Box",
    ],
  },
  {
    name: "Slime-",
    difficulty: "NM",
    price: 171610000,
    img: "Guardian_Angel_Slime",
    drops: ["Guardian Angel Ring"],
  },
  {
    name: "Slime-",
    difficulty: "CHS",
    price: 451562500,
    img: "Guardian_Angel_Slime",
    drops: ["Guardian Angel Ring"],
  },
  {
    name: "Gloom-",
    difficulty: "NM",
    price: 248062500,
    img: "Gloom",
    drops: ["Estella Earrings", "Spark of Determination"],
  },
  {
    name: "Gloom-",
    difficulty: "CHS",
    price: 462250000,
    img: "Gloom",
    drops: [
      "Estella Earrings",
      "Spark of Determination",
      "Endless Terror",
      "Arcane Box",
    ],
  },
  {
    name: "Darknell-",
    difficulty: "NM",
    price: 264062500,
    img: "Darknell",
    drops: ["Estella Earrings", "Spark of Determination"],
  },
  {
    name: "Darknell-",
    difficulty: "HD",
    price: 484000000,
    img: "Darknell",
    drops: [
      "Estella Earrings",
      "Spark of Determination",
      "Commanding Force Earring",
      "Arcane Box",
    ],
  },
  {
    name: "V Hilla-",
    difficulty: "NM",
    price: 447600000,
    img: "Verus_Hilla",
    drops: ["Daybreak Pendant", "Arcane Box"],
  },
  {
    name: "V Hilla-",
    difficulty: "HD",
    price: 552250000,
    img: "Verus_Hilla",
    drops: [
      "Daybreak Pendant",
      "Arcane Box",
      "Source of Suffering",
      "Shadow of Annihilation",
    ],
  },
  {
    name: "Seren-",
    difficulty: "NM",
    price: 668437500,
    img: "Chosen_Seren",
    drops: ["Daybreak Pendant"],
  },
  {
    name: "Seren-",
    difficulty: "HD",
    price: 756250000,
    img: "Chosen_Seren",
    drops: ["Daybreak Pendant", "Mitra's Box", "Mitra's Nodestone"],
  },
  {
    name: "Seren-",
    difficulty: "EX",
    price: 3025000000,
    img: "Chosen_Seren",
    drops: [
      "Daybreak Pendant",
      "Mitra's Box",
      "Mitra's Nodestone",
      "Gravity Module",
    ],
  },
  {
    name: "Kalos-",
    difficulty: "CHS",
    price: 1000000000,
    img: "Kalos_the_Guardian",
    drops: ["Kalos's Residual Determination"],
  },
  {
    name: "B Mage-",
    difficulty: "HD",
    price: 2500000000,
    img: "Black_Mage",
    drops: ["Genesis Badge", "Arcane Box", "Genesis Box"],
  },
  {
    name: "B Mage-",
    difficulty: "EX",
    price: 10000000000,
    img: "Black_Mage",
    drops: ["Genesis Badge", "Arcane Box", "Genesis Box", "Nightmare Fragment"],
  },
];

export const noobWeeklyBosses = [
  {
    name: "Cygnus-",
    difficulty: "NM",
    price: 72250000,
    img: "Cygnus",
    drops: ["Empress Shoulder"],
  },
  {
    name: "Hilla-",
    difficulty: "HD",
    price: 56250000,
    img: "Hilla",
    drops: ["Blackheart", "Stone of Eternal Life", "Will o' the Wisps"],
  },
  {
    name: "Pink Bean-",
    difficulty: "CHS",
    price: 64000000,
    img: "Pink_Bean",
    drops: ["Black Bean Mark", "Pink Holy Cup", "Golden Clover Belt"],
  },
  {
    name: "Zakum-",
    difficulty: "CHS",
    price: 81000000,
    img: "Zakum",
    drops: ["Aquatic Letter Eye", "Condensed Power Crystal"],
  },
  {
    name: "Pierre-",
    difficulty: "CHS",
    price: 81000000,
    img: "Pierre",
    drops: ["Piece of Mockery"],
  },
  {
    name: "Von Bon-",
    difficulty: "CHS",
    price: 81000000,
    img: "Von_Bon",
    drops: ["Piece of Time"],
  },
  {
    name: "Crimson Q-",
    difficulty: "CHS",
    price: 81000000,
    img: "Crimson_Queen",
    drops: ["Piece of Anguish"],
  },
  {
    name: "Princess-",
    difficulty: "NM",
    price: 81000000,
    img: "Princess_No",
    drops: ["Captivating Fragment"],
  },
  {
    name: "Vellum-",
    difficulty: "CHS",
    price: 105062500,
    img: "Vellum",
    drops: ["Piece of Destruction"],
  },
];

export const proWeeklyBosses = [
  {
    name: "Cygnus-",
    difficulty: "NM",
    price: 72250000,
    img: "Cygnus",
    drops: ["Empress Shoulder"],
  },
  {
    name: "Hilla-",
    difficulty: "HD",
    price: 56250000,
    img: "Hilla",
    drops: ["Blackheart", "Stone of Eternal Life", "Will o' the Wisps"],
  },
  {
    name: "Pink Bean-",
    difficulty: "CHS",
    price: 64000000,
    img: "Pink_Bean",
    drops: ["Black Bean Mark", "Pink Holy Cup", "Golden Clover Belt"],
  },
  {
    name: "Zakum-",
    difficulty: "CHS",
    price: 81000000,
    img: "Zakum",
    drops: ["Aquatic Letter Eye", "Condensed Power Crystal"],
  },
  {
    name: "Pierre-",
    difficulty: "CHS",
    price: 81000000,
    img: "Pierre",
    drops: ["Piece of Mockery"],
  },
  {
    name: "Von Bon-",
    difficulty: "CHS",
    price: 81000000,
    img: "Von_Bon",
    drops: ["Piece of Time"],
  },
  {
    name: "Crimson Q-",
    difficulty: "CHS",
    price: 81000000,
    img: "Crimson_Queen",
    drops: ["Piece of Anguish"],
  },
  {
    name: "Princess-",
    difficulty: "NM",
    price: 81000000,
    img: "Princess_No",
    drops: ["Captivating Fragment"],
  },
  {
    name: "Magnus-",
    difficulty: "HD",
    price: 95062500,
    img: "Magnus",
    drops: [
      "Crystal Ventus Badge",
      "Royal Black Metal Shoulder",
      "Tyrant Cape",
    ],
  },
  {
    name: "Vellum-",
    difficulty: "CHS",
    price: 105062500,
    img: "Vellum",
    drops: ["Piece of Destruction"],
  },
  {
    name: "Papulatus-",
    difficulty: "CHS",
    price: 132250000,
    img: "Papulatus",
    drops: ["Papulatus Mark"],
  },
  {
    name: "Akechi-",
    difficulty: "NM",
    price: 144000000,
    img: "Akechi",
    drops: [],
  },
  {
    name: "Lotus-",
    difficulty: "NM",
    price: 162562500,
    img: "Lotus",
    drops: ["Extraordinary Energy Core (Grade S)"],
  },
  {
    name: "Damien-",
    difficulty: "NM",
    price: 169000000,
    img: "Damien",
    drops: ["Twisted Stigma Spirit Stone"],
  },
  {
    name: "Lucid-",
    difficulty: "EZ",
    price: 175562500,
    img: "Lucid",
    drops: ["Twilight Mark", "Butterfly Droplet Stone"],
  },
  {
    name: "Will-",
    difficulty: "EZ",
    price: 191275000,
    img: "Will",
    drops: [],
  },
  {
    name: "Slime-",
    difficulty: "NM",
    price: 171610000,
    img: "Guardian_Angel_Slime",
    drops: ["Guardian Angel Ring"],
  },
];

export const hackerWeeklyBosses: Boss[] = [
  {
    name: "Cygnus-",
    difficulty: "NM",
    price: 72250000,
    img: "Cygnus",
    drops: ["Empress Shoulder"],
  },
  {
    name: "Hilla-",
    difficulty: "HD",
    price: 56250000,
    img: "Hilla",
    drops: ["Blackheart", "Stone of Eternal Life", "Will o' the Wisps"],
  },
  {
    name: "Pink Bean-",
    difficulty: "CHS",
    price: 64000000,
    img: "Pink_Bean",
    drops: ["Black Bean Mark", "Pink Holy Cup", "Golden Clover Belt"],
  },
  {
    name: "Zakum-",
    difficulty: "CHS",
    price: 81000000,
    img: "Zakum",
    drops: ["Aquatic Letter Eye", "Condensed Power Crystal"],
  },
  {
    name: "Pierre-",
    difficulty: "CHS",
    price: 81000000,
    img: "Pierre",
    drops: ["Piece of Mockery"],
  },
  {
    name: "Von Bon-",
    difficulty: "CHS",
    price: 81000000,
    img: "Von_Bon",
    drops: ["Piece of Time"],
  },
  {
    name: "Crimson Q-",
    difficulty: "CHS",
    price: 81000000,
    img: "Crimson_Queen",
    drops: ["Piece of Anguish"],
  },
  {
    name: "Princess-",
    difficulty: "NM",
    price: 81000000,
    img: "Princess_No",
    drops: ["Captivating Fragment"],
  },
  {
    name: "Magnus-",
    difficulty: "HD",
    price: 95062500,
    img: "Magnus",
    drops: [
      "Crystal Ventus Badge",
      "Royal Black Metal Shoulder",
      "Tyrant Cape",
    ],
  },
  {
    name: "Vellum-",
    difficulty: "CHS",
    price: 105062500,
    img: "Vellum",
    drops: ["Piece of Destruction"],
  },
  {
    name: "Papulatus-",
    difficulty: "CHS",
    price: 132250000,
    img: "Papulatus",
    drops: ["Papulatus Mark"],
  },
  {
    name: "Akechi-",
    difficulty: "NM",
    price: 144000000,
    img: "Akechi",
    drops: [],
  },
  {
    name: "Lotus-",
    difficulty: "HD",
    price: 370562500,
    img: "Lotus",
    drops: [
      "Extraordinary Energy Core (Grade S)",
      "AbsoLab Box",
      "Berserked",
      "Lotusroid",
    ],
  },
  {
    name: "Damien-",
    difficulty: "HD",
    price: 351562500,
    img: "Damien",
    drops: ["Twisted Stigma Spirit Stone", "Damienroid", "AbsoLab Box"],
  },
  {
    name: "Lucid-",
    difficulty: "HD",
    price: 400000000,
    img: "Lucid",
    drops: [
      "Twilight Mark",
      "Butterfly Droplet Stone",
      "Arcane Box",
      "Dreamy Belt",
      "Lucidroid",
    ],
  },
  {
    name: "Will-",
    difficulty: "HD",
    price: 441000000,
    img: "Will",
    drops: [
      "Twilight Mark",
      "Stone Cobweb Droplet",
      "Mirror World Nodestone",
      "Will's Box",
      "Arcane Box",
    ],
  },
  {
    name: "Slime-",
    difficulty: "CHS",
    price: 451562500,
    img: "Guardian_Angel_Slime",
    drops: ["Guardian Angel Ring"],
  },
  {
    name: "Gloom-",
    difficulty: "CHS",
    price: 462250000,
    img: "Gloom",
    drops: [
      "Estella Earrings",
      "Spark of Determination",
      "Endless Terror",
      "Arcane Box",
    ],
  },
  {
    name: "Darknell-",
    difficulty: "HD",
    price: 484000000,
    img: "Darknell",
    drops: [
      "Estella Earrings",
      "Spark of Determination",
      "Commanding Force Earring",
      "Arcane Box",
    ],
  },
  {
    name: "V Hilla-",
    difficulty: "HD",
    price: 552250000,
    img: "Verus_Hilla",
    drops: [
      "Daybreak Pendant",
      "Arcane Box",
      "Source of Suffering",
      "Shadow of Annihilation",
    ],
  },
];
