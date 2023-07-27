export interface Boss {
  name: string;
  difficulty: string;
  price: number;
  img: string;
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
}

export const dailyBosses: Boss[] = [
  { name: "Zakum", difficulty: "EZ", price: 1000000, img: "Zakum" },
  { name: "Zakum", difficulty: "NM", price: 3062500, img: "Zakum" },
  { name: "Hilla", difficulty: "NM", price: 4000000, img: "Hilla" },
  { name: "Von Bon", difficulty: "NM", price: 4840000, img: "Von_Bon" },
  { name: "Pierre", difficulty: "NM", price: 4840000, img: "Pierre" },
  { name: "Crimson Q", difficulty: "NM", price: 4840000, img: "Crimson_Queen" },
  { name: "Vellum", difficulty: "NM", price: 4840000, img: "Vellum" },
  { name: "OMNI CLN", difficulty: "NM", price: 6250000, img: "OMNI-CLN" },
  { name: "Horntail", difficulty: "EZ", price: 4410000, img: "Horntail" },
  { name: "Horntail", difficulty: "NM", price: 5062500, img: "Horntail" },
  { name: "Horntail", difficulty: "CHS", price: 6760000, img: "Horntail" },
  { name: "Pink Bean", difficulty: "NM", price: 7022500, img: "Pink_Bean" },
  { name: "Von Leon", difficulty: "EZ", price: 5290000, img: "Von_Leon" },
  { name: "Von Leon", difficulty: "NM", price: 7290000, img: "Von_Leon" },
  { name: "Von Leon", difficulty: "HD", price: 12250000, img: "Von_Leon" },
  { name: "Arkarium", difficulty: "EZ", price: 5760000, img: "Arkarium" },
  { name: "Arkarium", difficulty: "NM", price: 12600000, img: "Arkarium" },
  { name: "Magnus", difficulty: "EZ", price: 3610000, img: "Magnus" },
  { name: "Magnus", difficulty: "NM", price: 12960000, img: "Magnus" },
  { name: "Papulatus", difficulty: "EZ", price: 3422500, img: "Papulatus" },
  { name: "Papulatus", difficulty: "NM", price: 13322500, img: "Papulatus" },
  { name: "Ranmaru", difficulty: "NM", price: 4202500, img: "Ranmaru" },
  { name: "Ranmaru", difficulty: "HD", price: 13322500, img: "Ranmaru" },
];

export const dailyBossesToCheck: Boss[] = [
  { name: "Zakum", difficulty: "NM", price: 3062500, img: "Zakum" },
  { name: "Hilla", difficulty: "NM", price: 4000000, img: "Hilla" },
  { name: "Von Bon", difficulty: "NM", price: 4840000, img: "Von_Bon" },
  { name: "Pierre", difficulty: "NM", price: 4840000, img: "Pierre" },
  { name: "Crimson Q", difficulty: "NM", price: 4840000, img: "Crimson_Queen" },
  { name: "Vellum", difficulty: "NM", price: 4840000, img: "Vellum" },
  { name: "OMNI CLN", difficulty: "NM", price: 6250000, img: "OMNI-CLN" },
  { name: "Horntail", difficulty: "CHS", price: 6760000, img: "Horntail" },
  { name: "Pink Bean", difficulty: "NM", price: 7022500, img: "Pink_Bean" },
  { name: "Von Leon", difficulty: "HD", price: 12250000, img: "Von_Leon" },
  { name: "Arkarium", difficulty: "NM", price: 12600000, img: "Arkarium" },
  { name: "Magnus", difficulty: "NM", price: 12960000, img: "Magnus" },
  { name: "Papulatus", difficulty: "NM", price: 13322500, img: "Papulatus" },
  { name: "Ranmaru", difficulty: "HD", price: 13322500, img: "Ranmaru" },
];

export const weeklyBosses: Boss[] = [
  { name: "Cygnus-", difficulty: "EZ", price: 45562500, img: "Cygnus" },
  { name: "Cygnus-", difficulty: "NM", price: 72250000, img: "Cygnus" },
  { name: "Hilla-", difficulty: "HD", price: 56250000, img: "Hilla" },
  { name: "Pink Bean-", difficulty: "CHS", price: 64000000, img: "Pink_Bean" },
  { name: "Zakum-", difficulty: "CHS", price: 81000000, img: "Zakum" },
  { name: "Pierre-", difficulty: "CHS", price: 81000000, img: "Pierre" },
  { name: "Von Bon-", difficulty: "CHS", price: 81000000, img: "Von_Bon" },
  {
    name: "Crimson Q-",
    difficulty: "CHS",
    price: 81000000,
    img: "Crimson_Queen",
  },
  { name: "Princess-", difficulty: "NM", price: 81000000, img: "Princess_No" },
  { name: "Magnus-", difficulty: "HD", price: 95062500, img: "Magnus" },
  { name: "Vellum-", difficulty: "CHS", price: 105062500, img: "Vellum" },
  { name: "Papulatus-", difficulty: "CHS", price: 132250000, img: "Papulatus" },
  { name: "Akechi-", difficulty: "NM", price: 144000000, img: "Akechi" },
  { name: "Lotus-", difficulty: "NM", price: 162562500, img: "Lotus" },
  { name: "Lotus-", difficulty: "HD", price: 370562500, img: "Lotus" },
  { name: "Damien-", difficulty: "NM", price: 169000000, img: "Damien" },
  { name: "Damien-", difficulty: "HD", price: 351562500, img: "Damien" },
  { name: "Lucid-", difficulty: "EZ", price: 175562500, img: "Lucid" },
  { name: "Lucid-", difficulty: "NM", price: 203062500, img: "Lucid" },
  { name: "Lucid-", difficulty: "HD", price: 400000000, img: "Lucid" },
  { name: "Will-", difficulty: "EZ", price: 191275000, img: "Will" },
  { name: "Will-", difficulty: "NM", price: 232562500, img: "Will" },
  { name: "Will-", difficulty: "HD", price: 441000000, img: "Will" },
  {
    name: "Slime-",
    difficulty: "NM",
    price: 171610000,
    img: "Guardian_Angel_Slime",
  },
  {
    name: "Slime-",
    difficulty: "CHS",
    price: 451562500,
    img: "Guardian_Angel_Slime",
  },
  { name: "Gloom-", difficulty: "NM", price: 248062500, img: "Gloom" },
  { name: "Gloom-", difficulty: "CHS", price: 462250000, img: "Gloom" },
  { name: "Darknell-", difficulty: "NM", price: 264062500, img: "Darknell" },
  { name: "Darknell-", difficulty: "HD", price: 484000000, img: "Darknell" },
  { name: "V Hilla-", difficulty: "NM", price: 447600000, img: "Verus_Hilla" },
  { name: "V Hilla-", difficulty: "HD", price: 552250000, img: "Verus_Hilla" },
  { name: "Seren-", difficulty: "NM", price: 668437500, img: "Chosen_Seren" },
  { name: "Seren-", difficulty: "HD", price: 756250000, img: "Chosen_Seren" },
  { name: "Seren-", difficulty: "EX", price: 3025000000, img: "Chosen_Seren" },
  {
    name: "Kalos-",
    difficulty: "CHS",
    price: 1000000000,
    img: "Kalos_the_Guardian",
  },
  { name: "B Mage-", difficulty: "HD", price: 2500000000, img: "Black_Mage" },
  { name: "B Mage-", difficulty: "EX", price: 10000000000, img: "Black_Mage" },
];

export const noobWeeklyBosses: Boss[] = [
  { name: "Cygnus-", difficulty: "NM", price: 72250000, img: "Cygnus" },
  { name: "Hilla-", difficulty: "HD", price: 56250000, img: "Hilla" },
  { name: "Pink Bean-", difficulty: "CHS", price: 64000000, img: "Pink_Bean" },
  { name: "Zakum-", difficulty: "CHS", price: 81000000, img: "Zakum" },
  { name: "Pierre-", difficulty: "CHS", price: 81000000, img: "Pierre" },
  { name: "Von Bon-", difficulty: "CHS", price: 81000000, img: "Von_Bon" },
  {
    name: "Crimson Q-",
    difficulty: "CHS",
    price: 81000000,
    img: "Crimson_Queen",
  },
  { name: "Princess-", difficulty: "NM", price: 81000000, img: "Princess_No" },
  { name: "Vellum-", difficulty: "CHS", price: 105062500, img: "Vellum" },
];

export const proWeeklyBosses: Boss[] = [
  { name: "Cygnus-", difficulty: "NM", price: 72250000, img: "Cygnus" },
  { name: "Hilla-", difficulty: "HD", price: 56250000, img: "Hilla" },
  { name: "Pink Bean-", difficulty: "CHS", price: 64000000, img: "Pink_Bean" },
  { name: "Zakum-", difficulty: "CHS", price: 81000000, img: "Zakum" },
  { name: "Pierre-", difficulty: "CHS", price: 81000000, img: "Pierre" },
  { name: "Von Bon-", difficulty: "CHS", price: 81000000, img: "Von_Bon" },
  {
    name: "Crimson Q-",
    difficulty: "CHS",
    price: 81000000,
    img: "Crimson_Queen",
  },
  { name: "Princess-", difficulty: "NM", price: 81000000, img: "Princess_No" },
  { name: "Magnus-", difficulty: "HD", price: 95062500, img: "Magnus" },
  { name: "Vellum-", difficulty: "CHS", price: 105062500, img: "Vellum" },
  { name: "Papulatus-", difficulty: "CHS", price: 132250000, img: "Papulatus" },
  { name: "Akechi-", difficulty: "NM", price: 144000000, img: "Akechi" },
  { name: "Lotus-", difficulty: "NM", price: 162562500, img: "Lotus" },
  { name: "Damien-", difficulty: "NM", price: 169000000, img: "Damien" },
  { name: "Lucid-", difficulty: "EZ", price: 175562500, img: "Lucid" },
  { name: "Will-", difficulty: "EZ", price: 191275000, img: "Will" },
  {
    name: "Slime-",
    difficulty: "NM",
    price: 171610000,
    img: "Guardian_Angel_Slime",
  },
];

export const hackerWeeklyBosses: Boss[] = [
  { name: "Cygnus-", difficulty: "NM", price: 72250000, img: "Cygnus" },
  { name: "Hilla-", difficulty: "HD", price: 56250000, img: "Hilla" },
  { name: "Pink Bean-", difficulty: "CHS", price: 64000000, img: "Pink_Bean" },
  { name: "Zakum-", difficulty: "CHS", price: 81000000, img: "Zakum" },
  { name: "Pierre-", difficulty: "CHS", price: 81000000, img: "Pierre" },
  { name: "Von Bon-", difficulty: "CHS", price: 81000000, img: "Von_Bon" },
  {
    name: "Crimson Q-",
    difficulty: "CHS",
    price: 81000000,
    img: "Crimson_Queen",
  },
  { name: "Princess-", difficulty: "NM", price: 81000000, img: "Princess_No" },
  { name: "Magnus-", difficulty: "HD", price: 95062500, img: "Magnus" },
  { name: "Vellum-", difficulty: "CHS", price: 105062500, img: "Vellum" },
  { name: "Papulatus-", difficulty: "CHS", price: 132250000, img: "Papulatus" },
  { name: "Akechi-", difficulty: "NM", price: 144000000, img: "Akechi" },
  { name: "Lotus-", difficulty: "HD", price: 370562500, img: "Lotus" },
  { name: "Damien-", difficulty: "HD", price: 351562500, img: "Damien" },
  { name: "Lucid-", difficulty: "HD", price: 400000000, img: "Lucid" },
  { name: "Will-", difficulty: "HD", price: 441000000, img: "Will" },
  {
    name: "Slime-",
    difficulty: "CHS",
    price: 451562500,
    img: "Guardian_Angel_Slime",
  },
  { name: "Gloom-", difficulty: "CHS", price: 462250000, img: "Gloom" },
  { name: "Darknell-", difficulty: "HD", price: 484000000, img: "Darknell" },
  { name: "V Hilla-", difficulty: "HD", price: 552250000, img: "Verus_Hilla" },
];
