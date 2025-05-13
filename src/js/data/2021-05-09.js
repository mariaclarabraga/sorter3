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
    name: "9 Hakurei Reimu",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "SWR", "SA", "UFO", "Soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK"],
      stage: ["st4"]
    }
  },
  {
    name: "9 Kirisame Marisa",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "SWR", "SA", "UFO", "Soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "9 Rumia",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "EoSD", "StB", "HM"], stage: ["st1"] }
  },
  {
    name: "9 Daiyousei",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "EoSD"], stage: ["st2", "ex"] }
  },
  {
    name: "9 cyrno 9",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "PoFV", "StB", "Soku", "GFW", "HM", "DDC", "ISC"
      ],
      stage: ["st2"]
    }
  },
  {
    name: "9 Hong Meiling",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "EoSD", "IaMP", "StB", "Soku"], stage: ["st3"] }
  },
  {
    name: "9 Koakuma",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "EoSD"], stage: ["st4"] }
  },
  {
    name: "9 Patchouli Knowledge",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "9 Izayoi Sakuya",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "Soku", "HM", "DDC", "ISC"
      ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "9 Remilia Scarlet",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "IN", "StB", "MoF", "Soku", "HM", "ISC"],
      stage: ["st6"]
    }
  },
  {
    name: "9 Flandre Scarlet",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "EoSD", "StB"], stage: ["ex"] }
  },
  {
    name: "9 Letty Whiterock",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "PCB", "StB", "HM"], stage: ["st1"] }
  },
  {
    name: "9 Chen",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "PCB", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "9 Alice Margatroid",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "9 Lily White",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4", "ex"] }
  },
  {
    name: "9 Lunasa Prismriver",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "9 Merlin Prismriver",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "9 Lyrica Prismriver",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "9 Konpaku Youmu",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "Soku", "TD", "HM", "ISC"
      ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "9 Saigyouji Yuyuko",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "TD", "HM", "ISC"
      ],
      stage: ["st1", "st6"]
    }
  },
  {
    name: "9 Yakumo Ran",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM"],
      stage: ["ex"]
    }
  },
  {
    name: "9 Yakumo Yukari",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM", "ISC"],
      stage: ["ex"]
    }
  },
  {
    name: "9 Ibuki Suika",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "IaMP", "StB", "MoF", "Soku", "DS", "HM", "ISC"],
      stage: ["st6"]
    }
  },
  {
    name: "9 Wriggle Nightbug",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st1"] }
  },
  {
    name: "9 Mystia Lorelei",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "IN", "PoFV", "StB", "HM"], stage: ["st2"] }
  },
  {
    name: "9 Kamishirasawa Keine",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "IN", "StB", "HM", "ISC"], stage: ["st3", "ex"] }
  },
  {
    name: "9 Inaba Tewi",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: { series: ["book", "IN", "PoFV", "StB", "HM"], stage: ["st5"] }
  },
  {
    name: "9 Reisen Udongein Inaba",
    img: "playstation-1-graphics-low-poly-style-graphics-horror-game-silent-hill--woman-in-dress-holding-f-432100773.png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "Soku", "HM", "LoLK"],
      stage: ["st5"]
    }
  },
  {
    name: "9 Yagokoro Eirin",
    img: "ceo4DhK.png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "9 Houraisan Kaguya",
    img: "2YDuTk3.png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "9 Fujiwara no Mokou",
    img: "3zo4VKV.png",
    opts: { series: ["book", "IN", "StB", "HM", "ISC", "ULiL"], stage: ["ex"] }
  },
  {
    name: "9 Shameimaru Aya",
    img: "8TLXMST.png",
    opts: {
      series: ["book", "PoFV", "StB", "MoF", "SWR", "Soku", "HM", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "9 Medicine Melancholy",
    img: "IImsp7K.png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st4"] }
  },
  {
    name: "9 Kazami Yuuka",
    img: "MZXJQq5.png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st5"] }
  },
  {
    name: "9 Onozuka Komachi",
    img: "aX4WIH8.png",
    opts: {
      series: ["book", "PoFV", "StB", "MoF", "Soku", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "9 Shiki Eiki, Yamaxanadu",
    img: "nPBvatH.png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "9 Aki Shizuha",
    img: "3pDRgvR.png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "9 Aki Minoriko",
    img: "bV0DaN7.png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "9 Kagiyama Hina",
    img: "J11NjNj.png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st2"] }
  },
  {
    name: "9 Kawashiro Nitori",
    img: "4Ufced2.png",
    opts: { series: ["SWR", "DS", "HM", "ISC", "ULiL"], stage: ["st3"] }
  },
  {
    name: "9 Inubashiri Momiji",
    img: "qGMjnYk.png",
    opts: { series: ["SWR", "DS", "ISC"], stage: ["st4"] }
  },
  {
    name: "9 Kochiya Sanae",
    img: "ATTRSWU.png",
    opts: {
      series: ["SWR", "SA", "UFO", "Soku", "DS", "TD", "HM", "ISC", "LoLK"],
      stage: ["st5", "ex"]
    }
  },
  {
    name: "9 Yasaka Kanako",
    img: "nQ78Lz7.png",
    opts: { series: ["SWR", "Soku", "DS", "HM", "ISC"], stage: ["st6", "ex"] }
  },
  {
    name: "9 Moriya Suwako",
    img: "yJaD5ZV.png",
    opts: { series: ["SWR", "SA", "Soku", "DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "9 Nagae Iku",
    img: "xgAlECj.png",
    opts: { series: ["MoF", "Soku", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "9 Hinanawi Tenshi",
    img: "tZLYivt.png",
    opts: { series: ["MoF", "Soku", "DS", "HM", "ISC"], stage: ["st6"] }
  },
  {
    name: "9 Kisume",
    img: "VgJgaEf.png",
    opts: { series: ["SA", "DS"], stage: ["st1"] }
  },
  {
    name: "9 Kurodani Yamame",
    img: "sqgJ2St.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "9 Mizuhashi Parsee",
    img: "lkoAJod.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st2"] }
  },
  {
    name: "9 Hoshiguma Yuugi",
    img: "tDO653L.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st3"] }
  },
  {
    name: "9 Komeiji Satori",
    img: "dup7Nt6.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "9 Kaenbyou Rin (Orin)",
    img: "uQjbw1W.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4", "st5", "st6"] }
  },
  {
    name: "9 Reiuji Utsuho (Okuu)",
    img: "DfdaXPW.png",
    opts: { series: ["SA", "Soku", "DS", "HM"], stage: ["st6"] }
  },
  {
    name: "9 Komeiji Koishi",
    img: "wVCcens.png",
    opts: { series: ["SA", "DS", "HM", "ULiL"], stage: ["ex"] }
  },
  {
    name: "9 Nazrin",
    img: "EpHQbiY.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st1", "st5"] }
  },
  {
    name: "9 Tatara Kogasa",
    img: "kJbv4dc.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st2", "ex"] }
  },
  {
    name: "9 Kumoi Ichirin",
    img: "Fyn5yVx.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"] }
  },
  {
    name: "9 Murasa Minamitsu",
    img: "39KYpvW.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "9 Toramaru Shou",
    img: "8bMDDAo.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "9 Hijiri Byakuren",
    img: "2ppPxny.png",
    opts: { series: ["UFO", "DS", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "9 Houjuu Nue",
    img: "zL4S8Mj.png",
    opts: { series: ["UFO", "DS", "TD", "HM"], stage: ["st4", "st6", "ex"] }
  },
  {
    name: "9 Himekaidou Hatate",
    img: "LgvoTaJ.png",
    opts: { series: ["DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "9 Sunny Milk",
    img: "VbqXiB6.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "9 Luna Child",
    img: "OBqgP48.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "9 Star Sapphire",
    img: "sNw61ap.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "9 Kasodani Kyouko",
    img: "sLiqEBA.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st2"] }
  },
  {
    name: "9 Miyako Yoshika",
    img: "6jq6eh6.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st3", "st4"] }
  },
  {
    name: "9 Kaku Seiga",
    img: "090hLPL.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st4"] }
  },
  {
    name: "9 Soga no Tojiko",
    img: "y0UXwFO.png",
    opts: { series: ["TD", "HM"], stage: ["st5"] }
  },
  {
    name: "9 Mononobe no Futo",
    img: "WTZ97LE.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st5"] }
  },
  {
    name: "9 Toyosatomimi no Miko",
    img: "3Xiqd22.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "9 Futatsuiwa Mamizou",
    img: "gMpWdmA.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["ex"] }
  },
  {
    name: "9 Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: { series: ["book", "HM", "ULiL"], stage: ["st6"] }
  },
  {
    name: "9 Wakasagihime",
    img: "brWCLVx.png",
    opts: { series: ["DDC", "ISC"], stage: ["st1"] }
  },
  {
    name: "9 Sekibanki",
    img: "VAMLiJD.png",
    opts: { series: ["DDC", "ISC"], stage: ["st2"] }
  },
  {
    name: "9 Imaizumi Kagerou",
    img: "b5UMjD8.png",
    opts: { series: ["DDC", "ISC"], stage: ["st3"] }
  },
  {
    name: "9 Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "9 Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "9 Kijin Seija",
    img: "16RUacj.png",
    opts: { series: ["DDC", "ISC"], stage: ["st5", "st6"] }
  },
  {
    name: "9 Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: { series: ["DDC", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "9 Horikawa Raiko",
    img: "SLLEccR.png",
    opts: { series: ["DDC", "ISC"], stage: ["ex"] }
  },
  {
    name: "9 Usami Sumireko",
    img: "mc7ICW6.png",
    opts: { series: ["ULiL"], stage: ["st6"] }
  },
  {
    name: "9 Seiran",
    img: "0ra00WG.png",
    opts: { series: ["LoLK"], stage: ["st1"] }
  },
  {
    name: "9 Ringo",
    img: "xQOsFlZ.png",
    opts: { series: ["LoLK"], stage: ["st2"] }
  },
  {
    name: "9 Doremy Sweet",
    img: "rGS7dyn.png",
    opts: { series: ["LoLK"], stage: ["st3", "ex"] }
  },
  {
    name: "9 Kishin Sagume",
    img: "HLT338X.png",
    opts: { series: ["LoLK"], stage: ["st4"] }
  },
  {
    name: "9 Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: { series: ["LoLK"], stage: ["st5"] }
  },
  {
    name: "9 Junko",
    img: "NsfLZjY.jpg",
    opts: { series: ["LoLK"], stage: ["st6", "ex"] }
  },
  {
    name: "9 Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: { series: ["LoLK"], stage: ["ex"] }
  },
  {
    name: "9 Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: { series: ["book"], stage: [] }
  },
  { name: "9 Tokiko", img: "Y4maOc8.png", opts: { series: ["book"], stage: [] } },
  {
    name: "9 Rei'sen (Manga)",
    img: "cWjCo2j.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "9 Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "9 Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "9 Maribel Hearn",
    img: "XUI9vPo.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "9 Usami Renko",
    img: "1P5EXRt.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "9 Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: { series: ["book", "ULiL"], stage: ["st5"] }
  },
  {
    name: "9 Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "9 Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "9 Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: { series: ["HRtP"], stage: ["st1"] }
  },
  {
    name: "9 Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "9 Elis",
    img: "ytnL1xd.png",
    opts: { series: ["HRtP"], stage: ["st5"] }
  },
  {
    name: "9 Kikuri",
    img: "fX2Kqik.png",
    opts: { series: ["HRtP"], stage: ["st5"] }
  },
  {
    name: "9 Sariel",
    img: "Wyc7YFw.png",
    opts: { series: ["HRtP"], stage: ["st6"] }
  },
  {
    name: "9 Konngara",
    img: "dg9jLHv.png",
    opts: { series: ["HRtP"], stage: ["st6"] }
  },
  {
    name: "9 Rika",
    img: "02Xb4pU.png",
    opts: { series: ["SoEW"], stage: ["st1", "ex"] }
  },
  {
    name: "9 Meira",
    img: "p529JgT.png",
    opts: { series: ["SoEW"], stage: ["st2"] }
  },
  {
    name: "9 Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: ["st4"], pc98: true }
  },
  { name: "9 Ellen", img: "3iNNL0c.png", opts: { series: ["PoDD"], stage: [] } },
  {
    name: "9 Kotohime",
    img: "kRSGtpq.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "9 Kana Anaberal",
    img: "rBvKMk5.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "9 Asakura Rikako",
    img: "VIf5gUK.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "9 Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: { series: ["PoDD"], stage: ["st5"] }
  },
  {
    name: "9 Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: { series: ["PoDD"], stage: ["st6"] }
  },
  {
    name: "9 Ruukoto",
    img: "dko67SJ.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "9 Orange",
    img: "m8wXE5U.png",
    opts: { series: ["LLS"], stage: ["st1"] }
  },
  {
    name: "9 Kurumi",
    img: "0rvq1ph.png",
    opts: { series: ["LLS"], stage: ["st2"] }
  },
  {
    name: "9 Elly",
    img: "iIPftHn.png",
    opts: { series: ["LLS"], stage: ["st3"] }
  },
  {
    name: "9 Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: { series: ["LLS", "MS"], stage: ["st5", "st6"], pc98: true }
  },
  {
    name: "9 Mugetsu",
    img: "bYA9E16.png",
    opts: { series: ["LLS"], stage: ["ex"] }
  },
  {
    name: "9 Gengetsu",
    img: "TIOTtV9.png",
    opts: { series: ["LLS"], stage: ["ex"] }
  },
  {
    name: "9 Sara",
    img: "2QUbCrU.png",
    opts: { series: ["MS"], stage: ["st1"] }
  },
  {
    name: "9 Louise",
    img: "nDM5aB6.png",
    opts: { series: ["MS"], stage: ["st2", "st4"] }
  },
  {
    name: "9 Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: { series: ["MS"], stage: ["st3", "ex"], pc98: true }
  },
  {
    name: "9 Yuki",
    img: "FfcmDgp.png",
    opts: { series: ["MS"], stage: ["st4"] }
  },
  { name: "9 Mai", img: "r6w7TX1.png", opts: { series: ["MS"], stage: ["st4"] } },
  {
    name: "9 Yumeko",
    img: "PcPqkdO.png",
    opts: { series: ["MS"], stage: ["st5"] }
  },
  {
    name: "9 Shinki",
    img: "gPE95S7.png",
    opts: { series: ["MS"], stage: ["st6"] }
  },
  {
    name: "9 Mimi-chan",
    img: "zBl2zlv.png",
    opts: { series: ["PoDD"], stage: [], notgirl: true }
  },
  {
    name: "9 Unzan",
    img: "r5eWREh.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"], notgirl: true }
  },
  {
    name: "9 Genji",
    img: "LoUqOuH.png",
    opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: [], notgirl: true }
  },
  {
    name: "9 Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: { series: ["HRtP"], stage: ["st1"], notgirl: true }
  },
  {
    name: "9 YuugenMagan",
    img: "IOW8GdU.png",
    opts: { series: ["HRtP"], stage: ["st3"], notgirl: true }
  },
  {
    name: "9 Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: { series: ["SoEW"], stage: ["ex"], notgirl: true }
  },
  {
    name: "9 Great Catfish",
    img: "BgRi9Oh.png",
    opts: { series: ["Soku"], stage: ["st6"], notgirl: true }
  },
  {
    name: "9 Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: { series: ["book", "HM"], stage: [], notgirl: true }
  },
  {
    name: "9 Fortune Teller",
    img: "BYot23O.png",
    opts: { series: ["book"], stage: [], notgirl: true }
  },
  {
    name: "9 Hisoutensoku",
    img: "P4JZ2it.png",
    opts: { series: ["Soku"], stage: [], notgirl: true }
  },

{
  name: "9 Saigyouji Yuyuko",
  img: "VT9mTGb.png",
  opts: {
    series: [ "book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "TD", "HM", "ISC"
    ],
    stage: ["st1", "st6"]
  }
},
{
  name: "9 Yakumo Ran",
  img: "rshnJPV.png",
  opts: {
    series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM"],
    stage: ["ex"]
  }
},
{
  name: "9 Yakumo Yukari",
  img: "qsceD4I.png",
  opts: {
    series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM", "ISC"],
    stage: ["ex"]
  }
},
{
  name: "9 Ibuki Suika",
  img: "pLdMjQ3.png",
  opts: {
    series: ["book", "IaMP", "StB", "MoF", "Soku", "DS", "HM", "ISC"],
    stage: ["st6"]
  }
},
{
  name: "9 Wriggle Nightbug",
  img: "8DLUAPf.png",
  opts: { series: ["book", "IN", "StB", "HM"], stage: ["st1"] }
},
{
  name: "9 Mystia Lorelei",
  img: "6KyhLqE.png",
  opts: { series: ["book", "IN", "PoFV", "StB", "HM"], stage: ["st2"] }
},
{
  name: "9 Kamishirasawa Keine",
  img: "99w0Chm.png",
  opts: { series: ["book", "IN", "StB", "HM", "ISC"], stage: ["st3", "ex"] }
},
{
  name: "9 Inaba Tewi",
  img: "yqNfNje.png",
  opts: { series: ["book", "IN", "PoFV", "StB", "HM"], stage: ["st5"] }
},
{
  name: "9 Reisen Udongein Inaba",
  img: "PrYzRcC.png",
  opts: {
    series: ["book", "IN", "PoFV", "StB", "Soku", "HM", "LoLK"],
    stage: ["st5"]
  }
},
{
  name: "9 Yagokoro Eirin",
  img: "ceo4DhK.png",
  opts: { series: ["book", "IN", "StB", "HM"], stage: ["st6"] }
},
{
  name: "9 Houraisan Kaguya",
  img: "2YDuTk3.png",
  opts: { series: ["book", "IN", "StB", "HM"], stage: ["st6"] }
},
{
  name: "9 Fujiwara no Mokou",
  img: "3zo4VKV.png",
  opts: { series: ["book", "IN", "StB", "HM", "ISC", "ULiL"], stage: ["ex"] }
},
{
  name: "9 Shameimaru Aya",
  img: "8TLXMST.png",
  opts: {
    series: ["book", "PoFV", "StB", "MoF", "SWR", "Soku", "HM", "ISC"],
    stage: ["st4"]
  }
},
{
  name: "9 Medicine Melancholy",
  img: "IImsp7K.png",
  opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st4"] }
},
{
  name: "9 Kazami Yuuka",
  img: "MZXJQq5.png",
  opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st5"] }
},
{
  name: "9 Onozuka Komachi",
  img: "aX4WIH8.png",
  opts: {
    series: ["book", "PoFV", "StB", "MoF", "Soku", "HM"],
    stage: ["st5"]
  }
},
{
  name: "9 Shiki Eiki, Yamaxanadu",
  img: "nPBvatH.png",
  opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st6"] }
},
{
  name: "9 Aki Shizuha",
  img: "3pDRgvR.png",
  opts: { series: ["SWR", "DS", "HM"], stage: ["st1"] }
},
{
  name: "9 Aki Minoriko",
  img: "bV0DaN7.png",
  opts: { series: ["SWR", "DS", "HM"], stage: ["st1"] }
},
{
  name: "9 Kagiyama Hina",
  img: "J11NjNj.png",
  opts: { series: ["SWR", "DS", "HM"], stage: ["st2"] }
},
{
  name: "9 Kawashiro Nitori",
  img: "4Ufced2.png",
  opts: { series: ["SWR", "DS", "HM", "ISC", "ULiL"], stage: ["st3"] }
},
{
  name: "9 Inubashiri Momiji",
  img: "qGMjnYk.png",
  opts: { series: ["SWR", "DS", "ISC"], stage: ["st4"] }
},
{
  name: "9 Kochiya Sanae",
  img: "ATTRSWU.png",
  opts: {
    series: ["SWR", "SA", "UFO", "Soku", "DS", "TD", "HM", "ISC", "LoLK"],
    stage: ["st5", "ex"]
  }
},
{
  name: "9 Yasaka Kanako",
  img: "nQ78Lz7.png",
  opts: { series: ["SWR", "Soku", "DS", "HM", "ISC"], stage: ["st6", "ex"] }
},
{
  name: "9 Moriya Suwako",
  img: "yJaD5ZV.png",
  opts: { series: ["SWR", "SA", "Soku", "DS", "HM", "ISC"], stage: ["ex"] }
},
{
  name: "9 Nagae Iku",
  img: "xgAlECj.png",
  opts: { series: ["MoF", "Soku", "DS", "HM"], stage: ["st5"] }
},
{
  name: "9 Hinanawi Tenshi",
  img: "tZLYivt.png",
  opts: { series: ["MoF", "Soku", "DS", "HM", "ISC"], stage: ["st6"] }
},
{
  name: "9 Kisume",
  img: "VgJgaEf.png",
  opts: { series: ["SA", "DS"], stage: ["st1"] }
},
{
  name: "9 Kurodani Yamame",
  img: "sqgJ2St.png",
  opts: { series: ["SA", "DS", "HM"], stage: ["st1"] }
},
{
  name: "9 Mizuhashi Parsee",
  img: "lkoAJod.png",
  opts: { series: ["SA", "DS", "HM"], stage: ["st2"] }
},
{
  name: "9 Hoshiguma Yuugi",
  img: "tDO653L.png",
  opts: { series: ["SA", "DS", "HM"], stage: ["st3"] }
},
{
  name: "9 Komeiji Satori",
  img: "dup7Nt6.png",
  opts: { series: ["SA", "DS", "HM"], stage: ["st4"] }
},
{
  name: "9 Kaenbyou Rin (Orin)",
  img: "uQjbw1W.png",
  opts: { series: ["SA", "DS", "HM"], stage: ["st4", "st5", "st6"] }
},
{
  name: "9 Reiuji Utsuho (Okuu)",
  img: "DfdaXPW.png",
  opts: { series: ["SA", "Soku", "DS", "HM"], stage: ["st6"] }
},
{
  name: "9 Komeiji Koishi",
  img: "wVCcens.png",
  opts: { series: ["SA", "DS", "HM", "ULiL"], stage: ["ex"] }
},
{
  name: "9 Nazrin",
  img: "EpHQbiY.png",
  opts: { series: ["UFO", "DS", "HM"], stage: ["st1", "st5"] }
},
{
  name: "9 Tatara Kogasa",
  img: "kJbv4dc.png",
  opts: { series: ["UFO", "DS", "HM"], stage: ["st2", "ex"] }
},
{
  name: "9 Kumoi Ichirin",
  img: "Fyn5yVx.png",
  opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"] }
},
{
  name: "9 Murasa Minamitsu",
  img: "39KYpvW.png",
  opts: { series: ["UFO", "DS", "HM"], stage: ["st4"] }
},
{
  name: "9 Toramaru Shou",
  img: "8bMDDAo.png",
  opts: { series: ["UFO", "DS", "HM"], stage: ["st5"] }
},
{
  name: "9 Hijiri Byakuren",
  img: "2ppPxny.png",
  opts: { series: ["UFO", "DS", "HM", "ISC", "ULiL"], stage: ["st6"] }
},
{
  name: "9 Houjuu Nue",
  img: "zL4S8Mj.png",
  opts: { series: ["UFO", "DS", "TD", "HM"], stage: ["st4", "st6", "ex"] }
},
{
  name: "9 Himekaidou Hatate",
  img: "LgvoTaJ.png",
  opts: { series: ["DS", "HM", "ISC"], stage: ["ex"] }
},
{
  name: "9 Sunny Milk",
  img: "VbqXiB6.png",
  opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
},
{
  name: "9 Luna Child",
  img: "OBqgP48.png",
  opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
},
{
  name: "9 Star Sapphire",
  img: "sNw61ap.png",
  opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
},
{
  name: "9 Kasodani Kyouko",
  img: "sLiqEBA.png",
  opts: { series: ["TD", "HM", "ISC"], stage: ["st2"] }
},
{
  name: "9 Miyako Yoshika",
  img: "6jq6eh6.png",
  opts: { series: ["TD", "HM", "ISC"], stage: ["st3", "st4"] }
},
{
  name: "9 Kaku Seiga",
  img: "090hLPL.png",
  opts: { series: ["TD", "HM", "ISC"], stage: ["st4"] }
},
{
  name: "9 Soga no Tojiko",
  img: "y0UXwFO.png",
  opts: { series: ["TD", "HM"], stage: ["st5"] }
},
{
  name: "9 Mononobe no Futo",
  img: "WTZ97LE.png",
  opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st5"] }
},
{
  name: "9 Toyosatomimi no Miko",
  img: "3Xiqd22.png",
  opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st6"] }
},
{
  name: "9 Futatsuiwa Mamizou",
  img: "gMpWdmA.png",
  opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["ex"] }
},
{
  name: "9 Hata no Kokoro",
  img: "fxCGmUk.png",
  opts: { series: ["book", "HM", "ULiL"], stage: ["st6"] }
},
{
  name: "9 Wakasagihime",
  img: "brWCLVx.png",
  opts: { series: ["DDC", "ISC"], stage: ["st1"] }
},
{
  name: "9 Sekibanki",
  img: "VAMLiJD.png",
  opts: { series: ["DDC", "ISC"], stage: ["st2"] }
},
{
  name: "9 Imaizumi Kagerou",
  img: "b5UMjD8.png",
  opts: { series: ["DDC", "ISC"], stage: ["st3"] }
},
{
  name: "9 Tsukumo Benben",
  img: "vWNeMaH.png",
  opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
},
{
  name: "9 Tsukumo Yatsuhashi",
  img: "EJFQHQN.png",
  opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
},
{
  name: "9 Kijin Seija",
  img: "16RUacj.png",
  opts: { series: ["DDC", "ISC"], stage: ["st5", "st6"] }
},
{
  name: "9 Sukuna Shinmyoumaru",
  img: "Zl2tN7W.png",
  opts: { series: ["DDC", "ISC", "ULiL"], stage: ["st6"] }
},
{
  name: "9 Horikawa Raiko",
  img: "SLLEccR.png",
  opts: { series: ["DDC", "ISC"], stage: ["ex"] }
},
{
  name: "9 Usami Sumireko",
  img: "mc7ICW6.png",
  opts: { series: ["ULiL"], stage: ["st6"] }
},
{
  name: "9 Seiran",
  img: "0ra00WG.png",
  opts: { series: ["LoLK"], stage: ["st1"] }
},
{
  name: "9 Ringo",
  img: "xQOsFlZ.png",
  opts: { series: ["LoLK"], stage: ["st2"] }
},
{
  name: "9 Doremy Sweet",
  img: "rGS7dyn.png",
  opts: { series: ["LoLK"], stage: ["st3", "ex"] }
},
{
  name: "9 Kishin Sagume",
  img: "HLT338X.png",
  opts: { series: ["LoLK"], stage: ["st4"] }
},
{
  name: "9 Clownpiece",
  img: "9Jje7ZQ.jpg",
  opts: { series: ["LoLK"], stage: ["st5"] }
},
{
  name: "9 Junko",
  img: "NsfLZjY.jpg",
  opts: { series: ["LoLK"], stage: ["st6", "ex"] }
},
{
  name: "9 Hecatia Lapislazuli",
  img: "EH3Ulol.png",
  opts: { series: ["LoLK"], stage: ["ex"] }
},
{
  name: "9 Hieda no Akyuu",
  img: "ogONuLZ.png",
  opts: { series: ["book"], stage: [] }
},
{ name: "9 Tokiko", img: "Y4maOc8.png", opts: { series: ["book"], stage: [] } },
{
  name: "9 Rei'sen (Manga)",
  img: "cWjCo2j.png",
  opts: { series: ["book"], stage: [] }
},
{
  name: "9 Watatsuki no Toyohime",
  img: "uEBxsEX.png",
  opts: { series: ["book"], stage: [] }
},
{
  name: "9 Watatsuki no Yorihime",
  img: "Txu2P7S.png",
  opts: { series: ["book"], stage: [] }
},
{
  name: "9 Maribel Hearn",
  img: "XUI9vPo.png",
  opts: { series: ["book"], stage: [] }
},
{
  name: "9 Usami Renko",
  img: "1P5EXRt.png",
  opts: { series: ["book"], stage: [] }
},
{
  name: "9 Ibaraki Kasen",
  img: "dQHnPPe.png",
  opts: { series: ["book", "ULiL"], stage: ["st5"] }
},
{
  name: "9 Motoori Kosuzu",
  img: "jEsJJo8.png",
  opts: { series: ["book"], stage: [] }
},
{
  name: "9 Hakurei Reimu (PC-98)",
  img: "IZsGAMS.png",
  opts: {
    series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
    stage: ["st4"],
    pc98: true
  }
},
{
  name: "9 Shingyoku (Female)",
  img: "KuPiR2k.png",
  opts: { series: ["HRtP"], stage: ["st1"] }
},
{
  name: "9 Mima",
  img: "odH03t2.png",
  opts: {
    series: ["HRtP", "SoEW", "PoDD", "MS"],
    stage: ["st3", "st5", "st6"]
  }
},
{
  name: "9 Elis",
  img: "ytnL1xd.png",
  opts: { series: ["HRtP"], stage: ["st5"] }
},
{
  name: "9 Kikuri",
  img: "fX2Kqik.png",
  opts: { series: ["HRtP"], stage: ["st5"] }
},
{
  name: "9 Sariel",
  img: "Wyc7YFw.png",
  opts: { series: ["HRtP"], stage: ["st6"] }
},
{
  name: "9 Konngara",
  img: "dg9jLHv.png",
  opts: { series: ["HRtP"], stage: ["st6"] }
},
{
  name: "9 Rika",
  img: "02Xb4pU.png",
  opts: { series: ["SoEW"], stage: ["st1", "ex"] }
},
{
  name: "9 Meira",
  img: "p529JgT.png",
  opts: { series: ["SoEW"], stage: ["st2"] }
},
{
  name: "9 Kirisame Marisa (PC-98)",
  img: "wxE7cBm.png",
  opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: ["st4"], pc98: true }
},
{ name: "9 Ellen", img: "3iNNL0c.png", opts: { series: ["PoDD"], stage: [] } },
{
  name: "9 Kotohime",
  img: "kRSGtpq.png",
  opts: { series: ["PoDD"], stage: [] }
},
{
  name: "9 Kana Anaberal",
  img: "rBvKMk5.png",
  opts: { series: ["PoDD"], stage: [] }
},
{
  name: "9 Asakura Rikako",
  img: "VIf5gUK.png",
  opts: { series: ["PoDD"], stage: [] }
},
{
  name: "9 Kitashirakawa Chiyuri",
  img: "tZFBycy.png",
  opts: { series: ["PoDD"], stage: ["st5"] }
},
{
  name: "9 Okazaki Yumemi",
  img: "c9rnG3n.png",
  opts: { series: ["PoDD"], stage: ["st6"] }
},
{
  name: "9 Ruukoto",
  img: "dko67SJ.png",
  opts: { series: ["PoDD"], stage: [] }
},
{
  name: "9 Orange",
  img: "m8wXE5U.png",
  opts: { series: ["LLS"], stage: ["st1"] }
},
{
  name: "9 Kurumi",
  img: "0rvq1ph.png",
  opts: { series: ["LLS"], stage: ["st2"] }
},
{
  name: "9 Elly",
  img: "iIPftHn.png",
  opts: { series: ["LLS"], stage: ["st3"] }
},
{
  name: "9 Yuuka (PC-98)",
  img: "ivUSwxp.png",
  opts: { series: ["LLS", "MS"], stage: ["st5", "st6"], pc98: true }
},
{
  name: "9 Mugetsu",
  img: "bYA9E16.png",
  opts: { series: ["LLS"], stage: ["ex"] }
},
{
  name: "9 Gengetsu",
  img: "TIOTtV9.png",
  opts: { series: ["LLS"], stage: ["ex"] }
},
{
  name: "9 Sara",
  img: "2QUbCrU.png",
  opts: { series: ["MS"], stage: ["st1"] }
},
{
  name: "9 Louise",
  img: "nDM5aB6.png",
  opts: { series: ["MS"], stage: ["st2", "st4"] }
},
{
  name: "9 Alice (PC-98)",
  img: "KaBuRTW.png",
  opts: { series: ["MS"], stage: ["st3", "ex"], pc98: true }
},
{
  name: "9 Yuki",
  img: "FfcmDgp.png",
  opts: { series: ["MS"], stage: ["st4"] }
},
{ name: "9 Mai", img: "r6w7TX1.png", opts: { series: ["MS"], stage: ["st4"] } },
{
  name: "9 Yumeko",
  img: "PcPqkdO.png",
  opts: { series: ["MS"], stage: ["st5"] }
},
{
  name: "9 Shinki",
  img: "gPE95S7.png",
  opts: { series: ["MS"], stage: ["st6"] }
},
{
  name: "9 Mimi-chan",
  img: "zBl2zlv.png",
  opts: { series: ["PoDD"], stage: [], notgirl: true }
},
{
  name: "9 Unzan",
  img: "r5eWREh.png",
  opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"], notgirl: true }
},
{
  name: "9 Genji",
  img: "LoUqOuH.png",
  opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: [], notgirl: true }
},
{
  name: "9 Shingyoku (Male)",
  img: "a5uwlgN.png",
  opts: { series: ["HRtP"], stage: ["st1"], notgirl: true }
},
{
  name: "9 YuugenMagan",
  img: "IOW8GdU.png",
  opts: { series: ["HRtP"], stage: ["st3"], notgirl: true }
},
{
  name: "9 Evil Eye Sigma",
  img: "rAFUMwE.png",
  opts: { series: ["SoEW"], stage: ["ex"], notgirl: true }
},
{
  name: "9 Great Catfish",
  img: "BgRi9Oh.png",
  opts: { series: ["Soku"], stage: ["st6"], notgirl: true }
},
{
  name: "9 Morichika Rinnosuke",
  img: "ITUhsGj.png",
  opts: { series: ["book", "HM"], stage: [], notgirl: true }
},
{
  name: "9 Fortune Teller",
  img: "BYot23O.png",
  opts: { series: ["book"], stage: [], notgirl: true }
},
{
  name: "9 Hisoutensoku",
  img: "P4JZ2it.png",
  opts: { series: ["Soku"], stage: [], notgirl: true }
}
];
