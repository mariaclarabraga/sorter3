dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "9 Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "9 Books and CDs", key: "book" },
      { name: "9 The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
      { name: "9 The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
      { name: "9 Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
      { name: "9 Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
      { name: "9 Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
      { name: "9 Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
      { name: "9 Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      { name: "9 Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      { name: "9 Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      { name: "9 Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      { name: "9 Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      { name: "9 Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      { name: "9 Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      { name: "9 Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      { name: "9 Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      { name: "9 Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "Soku" },
      { name: "9 Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "9 Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "9 Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "9 Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "9 Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "9 Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "9 Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "9 Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" }
    ]
  },
  {
    name: "9 Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
      { name: "9 Stage 1", key: "st1" },
      { name: "9 Stage 2", key: "st2" },
      { name: "9 Stage 3", key: "st3" },
      { name: "9 Stage 4", key: "st4" },
      { name: "9 Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" },
      { name: "9 Stage 6/Final", key: "st6" },
      { name: "9 Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "9 Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "9 Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "design 1",
    img: "0HYMYv7.png",
    opts: {
      series: ["book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "SWR", "SA", "UFO", "Soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK"],
      stage: ["st4"]
    }
  },
  {
    name: "design 2",
    img: "Byul0Ms.png",
    opts: {
      series: ["book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "SWR", "SA", "UFO", "Soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 3",
    img: "pJO1PnD.png", 
    opts: { series: ["book", "EoSD"], stage: ["st4"] }
  },
  {
    name: "design 4",
    img: "WDSERvX.png",
    opts: { series: ["book", "EoSD"], stage: ["st2", "ex"] }
  },
  {
    name: "design 5",
    img: "PTKAy1d.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "PoFV", "StB", "Soku", "GFW", "HM", "DDC", "ISC"
      ],
      stage: ["st2"]
    }
  },
  {
    name: "design 6",
    img: "n1QAjZW.png", 
    opts: { series: ["book", "EoSD", "IaMP", "StB", "Soku"], stage: ["st3"] }
  },
  {
    name: "design 7",
    img: "AJLYB0S.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 8",
    img: "0k4QsVg.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 9",
    img: "pnlz7Wh.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 10",
    img: "R1Y2Yty.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 11",
    img: "tcFuxPP.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 12",
    img: "Q9YKRK0.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 13",
    img: "koULG4k.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 14",
    img: "s88oO1q.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 15",
    img: "ULjlRcK.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 16",
    img: "l58HmGj.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 17",
    img: "AGTNpO4.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 18",
    img: "Y35TD3Z.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 19",
    img: "mt6yVft.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 20",
    img: "EVCEWqT.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 21",
    img: "BdVDZYz.png", 
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "design 22",
    img: "YZDwB7o.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  }

];
