(this["webpackJsonppriconne-tierlist"]=this["webpackJsonppriconne-tierlist"]||[]).push([[0],{17:function(e,s,a){},18:function(e,s,a){},19:function(e,s,a){},22:function(e,s,a){"use strict";a.r(s);a(12);var n=a(1),t=a.n(n),c=a(10),i=a.n(c),r=(a(17),a(18),a(6)),o=a(9),l=a(4),b=a(2),p=(a(19),a(3)),h=a(0);var d=function(e){var s=Object(n.useState)(!1),a=Object(b.a)(s,2),t=a[0],c=a[1],i=Object(n.useState)(!1),r=Object(b.a)(i,2),o=r[0],l=r[1];function d(e){switch(e){case 0:return p.isMobile?Object(h.jsx)("span",{className:"tier char c",children:"C"}):Object(h.jsx)("span",{className:"tier char char-desktop c",children:"C"});case 1:return p.isMobile?Object(h.jsx)("span",{className:"tier char b",children:"B"}):Object(h.jsx)("span",{className:"tier char char-desktop b",children:"B"});case 2:return p.isMobile?Object(h.jsx)("span",{className:"tier char a",children:"A"}):Object(h.jsx)("span",{className:"tier char char-desktop a",children:"A"});case 3:return p.isMobile?Object(h.jsx)("span",{className:"tier char s",children:"S"}):Object(h.jsx)("span",{className:"tier char char-desktop s",children:"S"});case 4:return p.isMobile?Object(h.jsx)("span",{className:"tier char ss",children:"SS"}):Object(h.jsx)("span",{className:"tier char char-desktop ss",children:"SS"});case 5:return p.isMobile?Object(h.jsx)("span",{className:"tier char sss",children:"SSS"}):Object(h.jsx)("span",{className:"tier char char-desktop sss",children:"SSS"});default:return p.isMobile?Object(h.jsx)("span",{className:"tier char",children:"-"}):Object(h.jsx)("span",{className:"tier char char-desktop ",children:"-"})}}function m(e){switch(e){case"hard":return"https://i.ibb.co/hd6T7fq/hard-mode-icon.png";case"dungeon":return"https://i.ibb.co/GMrgJY0/dungeon-icon.png";case"arena":return"https://i.ibb.co/ChwG0gR/battle-arena.png";case"princess":return"https://i.ibb.co/d6Rm29k/princess-arena-icon.png";case"clan":return"https://i.ibb.co/jMqr5C0/cb-icon.png";default:return}}function j(e){switch(e){case 1:return"https://i.ibb.co/QD8P2nm/1star.png";case 2:return"https://i.ibb.co/MPdkP4N/2stars.png";case 3:return"https://i.ibb.co/hVs5mtR/3stars.png"}}function u(e){e.currentTarget.nextSibling.classList.toggle("show")}function f(){c(!t)}function k(){l(!o)}return p.isMobile?Object(h.jsxs)(p.MobileView,{viewclassName:"character-container",children:[Object(h.jsxs)("div",{className:"row char-row",onClick:u,children:[Object(h.jsx)("img",{className:"icon",src:e.info.icon,alt:"icon"}),Object(h.jsx)("span",{className:"name char",children:e.info.name}),d(e.info.pve),d(e.info.cb),d(e.info.pvp),Object(h.jsxs)("span",{className:"source char",children:[" ",Object(h.jsx)("img",{src:m(e.info.source),alt:"-",className:"src-img"})]})]}),Object(h.jsxs)("div",{className:"hidden",children:[Object(h.jsxs)("div",{className:"row hidden-row hidden-head",children:[Object(h.jsx)("span",{className:"base-star head",children:"Stars"}),Object(h.jsx)("span",{className:"position head",children:"Position"}),Object(h.jsx)("span",{className:"cb-rank head",children:"CB rank"}),Object(h.jsx)("span",{className:"rank-dif head",children:"Rank dif"}),Object(h.jsx)("span",{className:"notes head",children:"Notes"})]}),Object(h.jsxs)("div",{className:"row hidden-row hidden-char",children:[Object(h.jsx)("img",{src:j(e.info.stars),alt:e.info.stars,className:"base-star char"}),Object(h.jsx)("span",{className:"position char",children:e.info.position}),Object(h.jsx)("span",{className:"cb-rank char",children:e.info.cbRank}),Object(h.jsxs)("span",{className:"rank-dif char",onClick:k,children:["Touch ",o?Object(h.jsx)("div",{className:"show-rank-diff visible",children:e.info.rankDiff.map((function(e){return Object(h.jsx)("p",{className:e.includes("+")?"positive":"negative",children:e},e)}))}):Object(h.jsx)("div",{className:"show-rank-diff",children:"..."})," "]}),Object(h.jsxs)("span",{className:"notes char",onClick:f,children:["Touch",t?Object(h.jsx)("div",{className:"show-notes visible",children:e.info.comment}):Object(h.jsx)("div",{className:"show-notes",children:e.info.comment})]})]})]})]}):Object(h.jsx)(p.BrowserView,{children:Object(h.jsxs)("div",{className:"row char-row char-row-desktop row-desktop",children:[Object(h.jsx)("img",{className:"icon",src:e.info.icon,alt:"icon"}),Object(h.jsx)("img",{src:j(e.info.stars),alt:e.info.stars,className:"base-star char char-desktop"}),Object(h.jsx)("span",{className:"position char char-desktop",children:e.info.position}),Object(h.jsx)("span",{className:"name char char-desktop",children:e.info.name}),d(e.info.pve),d(e.info.cb),d(e.info.pvp),Object(h.jsxs)("span",{className:"cbRank char char-desktop",children:[e.info.cbRank," ",Object(h.jsx)("div",{className:"show-rank-diff visible",children:e.info.rankDiff.map((function(e){return Object(h.jsx)("p",{className:e.includes("+")?"positive":"negative",children:e},e)}))})]}),Object(h.jsx)("span",{className:"comment char char-desktop",children:Object(h.jsx)("p",{children:e.info.comment})}),Object(h.jsxs)("span",{className:"source char char-desktop",children:[" ",Object(h.jsx)("img",{src:m(e.info.source),alt:"-",className:"src-img"})]})]})})},m=[{name:"Miyako",icon:"https://i.ibb.co/r3D55yD/FNI9UAh.png",stars:2,position:125,pve:3,cb:2,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Pudding is the premier physical tank. The only reason why it's not getting SS rank in arena is due to mages melting her right now. Her invul still makes her one of the best tanks",source:"princess"},{name:"Rima",icon:"https://i.ibb.co/HBR7Mp9/170-w-Fri-Li1.png",stars:1,position:105,pve:0,cb:0,pvp:2,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Great PvP unit to be used in combo teams like Rino cannon / Ninon fan. Clumps the enemies together in arena due to late entry to allow AoEs to land on more targets",source:"hard"},{name:"Kuka",icon:"https://i.ibb.co/hRVCks0/154-m1qc3-YZ.png",stars:2,position:130,pve:1,cb:0,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"The magic tank version of pudding. A solid counter to Tamaki in arena with taunt if you can time it properly.",source:"dungeon"},{name:"Jun",icon:"https://i.ibb.co/vBKYFcb/jun.png",stars:3,position:135,pve:4,cb:4,pvp:3,cbRank:"R7-6/R8-5",rankDiff:["Only thing you lose is -4 HP drain. Some guilds might still as for R7-6 for earlier UB during CB. Ask your guild lead"],comment:"Currently one of the best mix tanks. Her kit is awesome: she can def shred, heal and MDEF up for EX. UB has dmg absorb. Clan Battle tank of choice due to def shred. Shines in PvP as the premier tank as well.",source:"none"},{name:"Kaori",icon:"https://i.ibb.co/JcnNNTk/071-3n-Ptv-EB.png",stars:2,position:145,pve:2,cb:4,pvp:2,cbRank:"R8-4/R8-5",rankDiff:["Unique CB Recommendation: farm but don't wear left middle piece. Extra tankiness can mess with UB. Super min-max. PvP wise R8-5"],comment:"Highest dmg output for the first CB or two. Going to pair nicely with def shred units like Makoto and later Jun. Poor in story due to position at the moment but will get better later on.",source:"princess"},{name:"Pecorine",icon:"https://i.ibb.co/mDj8HM7/178-9-Igs5x-T.png",stars:1,position:155,pve:1,cb:0,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Free tank. Use her if you don't have other options. Starts to shine at UE (unique equip) release.",source:"hard"},{name:"Nozomi",icon:"https://i.ibb.co/wMbkXZv/115-e4-DEe-WA.png",stars:3,position:160,pve:4,cb:2,pvp:4,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Due to her availability from the Dungeon shop, Nozo will reach 5 star relatively easily. Her stun and taunt skills are both great in PvP. Her kit works well in story too. As more tanks are released, she'll move to S but until then 5 star nozo is great.",source:"dungeon"},{name:"Makoto",icon:"https://i.ibb.co/n6FHWjD/150-t-XW1o-QL.png",stars:3,position:165,pve:2,cb:5,pvp:1,cbRank:"R8-4/R8-5",rankDiff:["Unique CB Recommendation: farm but don't wear left middle piece. Extra tankiness can mess with UB. Super min-max. PvP wise R8-5"],comment:"Def shred is too important. Makoto is a must have for competitive CB. You are missing out 30-40% dmg without her. She is bad in story but gets an A cuz of her PvE usefulness in event bosses.",source:"clan"},{name:"Akino",icon:"https://i.ibb.co/QrFsmPq/129-Rbt-FJ5h.png",stars:3,position:180,pve:1,cb:0,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Decent early game. Falls off fast.",source:"hard"},{name:"Hiyori",icon:"https://i.ibb.co/ssvpMLw/005-wtvv-Vrt.png",stars:1,position:200,pve:1,cb:2,pvp:0,cbRank:"R8-4/R8-5",rankDiff:["PvP R8-5 as well"],comment:"Had some appearances in the early CBs cuz you can obtain her shards relatively easy to make her 3 star. Quiet until UE.",source:"arena"},{name:"Misogi",icon:"https://i.ibb.co/L1h0cGW/022-Kba-Fb5r.png",stars:1,position:205,pve:0,cb:0,pvp:0,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Real bad.",source:"arena"},{name:"Ayane",icon:"https://i.ibb.co/7jLJk3p/Ayane-Icon.jpg",stars:2,position:210,pve:0,cb:2,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Niche uses in PvP against solo tanks due to knockback. Used in CB to interrupt boss mechanics.",source:"none"},{name:"Tamaki",icon:"https://i.ibb.co/rkWMG4C/156-4qq-UTe-A.png",stars:2,position:215,pve:0,cb:2,pvp:4,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Tamaki stall is a very strong arena meta team. Expect its variations to last until Ilya. She also sees some CB play due to TP manipulation and causing bosses to mistime UBs.",source:"arena"},{name:"Eriko",icon:"https://i.ibb.co/BqHPqj4/103-u-Bp9qxm.png",stars:2,position:230,pve:0,cb:3,pvp:0,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Might see some play early if 3 star+ for clan battle. Quiet until UE.",source:"hard"},{name:"Kurumi",icon:"https://i.ibb.co/RPz95D4/084-x0-Onhf-X.png",stars:1,position:240,pve:0,cb:0,pvp:0,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Some reddit troll said she's top tier and people fell for it... Will be part of stall teams after UE.",source:"hard"},{name:"Djeeta",icon:"https://i.ibb.co/k9X6XyY/176-la8dqwk.png",stars:3,position:245,pve:2,cb:3,pvp:2,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Useful in the first few CBs but replaced soon unless 4-5 star from amulets.",source:"hard"},{name:"Rei",icon:"https://i.ibb.co/Yb3Dt8w/017-6-Bqi112.png",stars:1,position:250,pve:0,cb:2,pvp:0,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"UE Rei and 6 Star Rei is top meta stuff but until then... benched.",source:"hard"},{name:"Shizuru",icon:"https://i.ibb.co/dJ0nvHn/161-4h4-R8-GA.png",stars:3,position:285,pve:2,cb:0,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Her position sucks. Can be used against tamaki / rino / ninon comps in arena. Not bad as sub tank in pos 3 for story. Otherwise, replaced soon.",source:"hard"},{name:"Mimi",icon:"https://i.ibb.co/VB4396T/079-x-WM3o-Pg.png",stars:2,position:360,pve:1,cb:2,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Really average at everything for now. Might see play in 3rd team in early CB if high star",source:"hard"},{name:"Shinobu",icon:"https://i.ibb.co/dbJ5Kkh/124-jyi-E5-Xb.png",stars:2,position:365,pve:0,cb:2,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Provides some defense shred and also skull daddy to tank some unique mechanics in CB. Needs 3 star ",source:"hard"},{name:"Mahiru",icon:"https://i.ibb.co/gW0KNLt/134-46-WVy-Bq.png",stars:2,position:395,pve:0,cb:0,pvp:0,cbRank:"R7-6",rankDiff:["PvP R8-5 as well"],comment:"Real bad.",source:"hard"},{name:"Yukari",icon:"https://i.ibb.co/26nRPwT/137-xb4e20-F.png",stars:1,position:405,pve:3,cb:2,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"One of the most versatile support units and she's a 1 star base unit with shards from dungeon coins. Get her to 3 star and save coins for 5 later. You might need to make her not too tanky so she can get off UB.",source:"dungeon"},{name:"Monika",icon:"https://i.ibb.co/cFdTpn6/172-z-G1-IEk-N.png",stars:3,position:410,pve:1,cb:2,pvp:4,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Premier PvP unit due to speed buff. Can see CB play for last hits and compensation mechanics.",source:"arena"},{name:"Ninon",icon:"https://i.ibb.co/KX3qc8D/119-j-Lc-Tib-Q.png",stars:3,position:415,pve:0,cb:0,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well. Make sure you monitor Rino / Ninon / Mitsuki / Saren ATK stats if you want hatsune to attack a certain unit during PvP for TP"],comment:"Ninon fan comp core with Saren. Multi targetting isn't that great outside of arena at the moment.",source:"hard"},{name:"Mifuyu",icon:"https://i.ibb.co/ykTRFvC/159-kwcxufe.png",stars:2,position:420,pve:0,cb:0,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Poop.",source:"hard"},{name:"Saren",icon:"https://i.ibb.co/9hn7GrJ/109-9r-Dku-Ug.png",stars:3,position:430,pve:2,cb:3,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Enables a lot of stuff in PvP and PvE. Charges closest team member for faster UB. Remember to farm her shards starting Day 1.",source:"hard"},{name:"Anna",icon:"https://i.ibb.co/RpbGThP/041-e-Lt-E7-GS.png",stars:3,position:440,pve:1,cb:1,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well. Less TP gain more MATK, actually good cuz u want to delay the UB that makes u weak. Esp in mirror Anna match"],comment:"Can be used for a mage melt PvP team. Needs a lot more to be useful in CB (S Kyaru/UE etc).",source:"princess"},{name:"Kokkoro",icon:"https://i.ibb.co/rw6WJL0/180-Zc-YCr2h.png",stars:1,position:500,pve:2,cb:3,pvp:1,cbRank:"R7-6/R8-4",rankDiff:["Gains 10 dodge at R8-5. Might want to hold off for a bit (you can prefarm gear) for CB. UB timing may be important. Again confirm with your clan"],comment:"Good in story due to self heal, tank swap, speed buff. Can be used in CB to help tank for damage tank early.",source:"hard"},{name:"Rin",icon:"https://i.ibb.co/FxXVjbR/099-J1-BVpy-U.png",stars:2,position:550,pve:1,cb:0,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Will be used in stall comps in PvP later.",source:"none"},{name:"Mitsuki",icon:"https://i.ibb.co/dQs5JPf/165-h-GY5igu.png",stars:2,position:560,pve:1,cb:4,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well. Make sure you monitor Rino / Ninon / Mitsuki / Saren ATK stats if you want hatsune to attack a certain unit during PvP for TP"],comment:"Good PvP and Clan Battle unit initially. AoE def down enables Rino and Ninon. Times well in CB with Shiori and manual Suzuna.",source:"dungeon"},{name:"Akari",icon:"https://i.ibb.co/qpW9Cy4/027-43c-Ap-Ej.png",stars:2,position:570,pve:1,cb:1,pvp:2,cbRank:"R7-6/R8-5",rankDiff:["PvP R8-5. However, CB you may want an earlier UB hence R7-6. Tho imo the tp-5 isn't gonna make much of a difference. Pre-farm is safest"],comment:"Can be used with the mage melt pvp team as debuffer. Not really used in CB and story much until higher stars. Lifesteal is very nice though.",source:"dungeon"},{name:"Yori",icon:"https://i.ibb.co/Z1G2wgP/088-r-LW0-T2r.png",stars:1,position:575,pve:0,cb:1,pvp:3,cbRank:"R7-6/R8-5",rankDiff:["Earlier UB or more MATK. Your call in PvP"],comment:"High star Yori hits very hard (4-5 star)in PvP. Bad otherwise.",source:"clan"},{name:"Arisa",icon:"https://i.ibb.co/QfZPYnw/arisa.png",stars:3,position:625,pve:3,cb:4,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"One of the better bow users on release. Upgrade to Suzuna / Shiori for the first few CBs. Also mainly cuz you can use the other 2 bow users on another team. Decent in arena too.",source:"none"},{name:"Rino",icon:"https://i.ibb.co/w7N5Ltq/050-Wa-Bh9-AQ.png",stars:3,position:700,pve:2,cb:0,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well. Make sure you monitor Rino / Ninon / Mitsuki / Saren ATK stats if you want hatsune to attack a certain unit during PvP for TP"],comment:"Rino cannon is potent in PvP at 4+ stars. S rank only if 3 star.",source:"arena"},{name:"Suzuna",icon:"https://i.ibb.co/R3czvQk/067-j-ZWl-GNw.png",stars:2,position:705,pve:3,cb:4,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Will shine in CB at launch. Needs manual to maximize damage against bosses to match def shred and also in story mode.",source:"princess"},{name:"Shiori",icon:"https://i.ibb.co/8NLRMb6/143-Xu9-QCv-H.png",stars:2,position:710,pve:3,cb:4,pvp:2,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Comparable damage to Suzuna in the long run. Going to be top tier CB unit on launch.",source:"hard"},{name:"Io",icon:"https://i.ibb.co/FxP311L/076-k-J5z-G3-J.png",stars:3,position:715,pve:1,cb:0,pvp:3,cbRank:"R7-6/R8-5",rankDiff:["Earlier UB or more MATK. Your call in PvP"],comment:"Good in PvP as control + mage melt. Can be used to prevent tamaki UB before Nozo taunt. Can be decent in story early. Bad in other PvE modes.",source:"clan"},{name:"Suzume",icon:"https://i.ibb.co/zXdjy4x/096-GPp9-Hm5.png",stars:1,position:720,pve:0,cb:0,pvp:0,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Poop again.",source:"clan"},{name:"Karyl",icon:"https://i.ibb.co/KGvKc8b/182-Jrj-Wn-Sz.png",stars:1,position:750,pve:1,cb:1,pvp:2,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Decent damage if coined to high stars. Slightly above average performance at 5 stars. Better in later patches.",source:"dungeon"},{name:"Hatsune",icon:"https://i.ibb.co/dg0s9tH/054-Yv-BLASY.png",stars:3,position:755,pve:2,cb:1,pvp:3,cbRank:"R7-6/R8-5",rankDiff:["Earlier UB or more MATK. Your call in PvP."],comment:"Premier PvP Mage. Also first event shard receipient so you can 4-5 star her relatively quickly. Snipes highest enemy physical attacker.",source:"princess"},{name:"Misaki",icon:"https://i.ibb.co/6bbNPm8/163-t-RK7j-Kb.png",stars:1,position:760,pve:0,cb:0,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Some success in PvP if 3+ stars. Otherwise not used.",source:"hard"},{name:"Aoi",icon:"https://i.ibb.co/vmtJGRZ/145-ALwm-A00.png",stars:1,position:785,pve:0,cb:0,pvp:0,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Bad.",source:"hard"},{name:"Chika",icon:"https://i.ibb.co/fpvqSCr/148-eh0v-VC8.png",stars:2,position:790,pve:2,cb:1,pvp:1,cbRank:"R7-6/R8-5",rankDiff:["Better heals at R8-5. However, R7-6 gives earlier UB AKA fairy for certain CB mechanics (like March CB Ox push counter). You can pre-farm. Imo vast majoirty R8-5 no problem"],comment:"Great in VH tower and Map push early. Can summon a spirit to tank or eat skills. In PvP, the spiriti is free TP.",source:"clan"},{name:"Maho",icon:"https://i.ibb.co/9yvpRcs/044-r7-LWef-P.png",stars:3,position:795,pve:3,cb:1,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Great single target burst heal and blind for PvP and PvE. Falls off in terms of heal later on due to AoE healers catching up. Can be used to bait Tamaki.",source:"dungeon"},{name:"Yui",icon:"https://i.ibb.co/x3vjvNq/010-P0-Ea6ph.png",stars:1,position:800,pve:3,cb:1,pvp:1,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"Good AoE heals and buffs at R7+. Used in VH dungeon boss cheese. Easy to farm shards.",source:"hard"},{name:"Yuki",icon:"https://i.ibb.co/Scq9hQz/AEbSSVy.png",stars:2,position:805,pve:1,cb:1,pvp:3,cbRank:"R8-5",rankDiff:["PvP R8-5 as well"],comment:"TP charge enabler in PvP. The blind can also come in clutch. Okayish damage for a support.",source:"hard"}];var j=function(){return Object(h.jsx)("div",{className:"side-bar",children:Object(h.jsxs)("section",{className:"credits-section",children:[Object(h.jsx)("a",{href:"https://priconne-tierlist.com/",className:"btn",children:" Go Home"}),Object(h.jsx)("a",{href:"https://priconne-tierlist.com/tierlist-tutorial",target:"_blank",className:"btn",children:"Tutorial"}),Object(h.jsx)("a",{href:"https://priconne-tierlist.com/tierlist-changelog",target:"_blank",className:"btn",children:"Changelog"}),Object(h.jsx)("a",{href:"https://priconne-tierlist.com/tierlist-disclaimer",target:"_blank",className:"btn",children:"Disclaimer"})]})})};var u=function(){var e=Object(n.useState)(m),s=Object(b.a)(e,2),a=s[0],t=s[1],c=Object(n.useState)(!1),i=Object(b.a)(c,2),u=i[0],f=i[1],k=Object(n.useState)(!1),v=Object(b.a)(k,2),O=v[0],x=v[1],g=Object(n.useState)(""),R=Object(b.a)(g,2),N=R[0],P=R[1],w=Object(n.useState)(!1),y=Object(b.a)(w,2),C=y[0],S=y[1],B=Object(n.useState)(["dungeon","arena","princess","clan","hard","none"]),D=Object(b.a)(B,2),M=D[0],A=D[1],E=Object(n.useState)({dungeon:!0,arena:!0,princess:!0,clan:!0,hard:!0}),T=Object(b.a)(E,2),U=T[0],G=T[1],H=Object(n.useState)(!0),L=Object(b.a)(H,2),q=L[0],z=L[1],K=Object(n.useState)(!0),Y=Object(b.a)(K,2),F=Y[0],V=Y[1],J=Object(n.useState)(!0),W=Object(b.a)(J,2),Q=W[0],X=W[1],I=Object(n.useState)(!0),Z=Object(b.a)(I,2),_=Z[0],$=Z[1],ee=Object(n.useState)(!0),se=Object(b.a)(ee,2),ae=se[0],ne=se[1],te=Object(n.useState)(!0),ce=Object(b.a)(te,2),ie=ce[0],re=ce[1];function oe(e){var s=e.target.id;G((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},s,!e[s]))}))}function le(e){switch(e.target.id){case"front":z(!q);break;case"mid":V(!F);break;case"back":X(!Q)}}function be(e){switch(e.target.id){case"star1":$(!_);break;case"star2":ne(!ae);break;case"star3":re(!ie)}}function pe(e){e.currentTarget.parentNode.nextSibling.classList.toggle("sidebar-show")}function he(e){"source"===e.target.id&&e.target.firstChild.nextSibling.classList.toggle("enter")}function de(e){e.target.parentNode.classList.remove("enter")}function me(){G({dungeon:!0,arena:!0,princess:!0,clan:!0,hard:!0}),z(!0),V(!0),X(!0),$(!0),ne(!0),re(!0)}function je(){G({dungeon:!1,arena:!1,princess:!1,clan:!1,hard:!1}),z(!1),V(!1),X(!1),$(!1),ne(!1),re(!1)}function ue(){x(!1),S(!1),t(u?function(e){return Object(l.a)(e).sort((function(e,s){return e.name<s.name?1:e.name>s.name?-1:0}))}:function(e){return Object(l.a)(e).sort((function(e,s){return e.name>s.name?1:e.name<s.name?-1:0}))}),f(!u)}function fe(){f(!1),x(!1),S(!1),t((function(e){return Object(l.a)(e).sort((function(e,s){return e.pvp<s.pvp?1:e.pvp>s.pvp?-1:0}))}))}function ke(){f(!1),x(!1),S(!1),t((function(e){return Object(l.a)(e).sort((function(e,s){return e.pve<s.pve?1:e.pve>s.pve?-1:0}))}))}function ve(){f(!1),x(!1),S(!1),t((function(e){return Object(l.a)(e).sort((function(e,s){return e.cb<s.cb?1:e.cb>s.cb?-1:0}))}))}return Object(n.useEffect)((function(){A((function(e){var s=Object(l.a)(e),a=function(e){if(U[e])s.some((function(s){return s===e.toString()}))||s.push(e.toString());else{var a=s.indexOf(e.toString());a>-1&&s.splice(a,1)}};for(var n in U)a(n);return s}))}),[U]),Object(h.jsxs)("div",{className:p.isBrowser?"table-container table-desktop":"table-container",children:[Object(h.jsxs)(p.MobileView,{viewClassName:"row head fixed",children:[Object(h.jsx)("span",{className:"icon head action",onClick:pe,children:Object(h.jsx)("i",{className:"fas fa-info-circle"})}),Object(h.jsxs)("span",{className:"name head action",onClick:ue,children:["Name ",u?Object(h.jsx)("i",{className:"fas fa-arrow-up"}):Object(h.jsx)("i",{className:"fas fa-arrow-up rotate"})]}),Object(h.jsx)("span",{className:"tier head action",onClick:ke,children:"PVE"}),Object(h.jsx)("span",{className:"tier head action",onClick:ve,children:"CB"}),Object(h.jsx)("span",{className:"tier head action",onClick:fe,children:"PVP"}),Object(h.jsxs)("span",{className:"source head action",id:"source",onClick:he,children:["Source",Object(h.jsxs)("div",{className:"filter-container",id:"filter-container",children:[Object(h.jsx)("h2",{children:"Filters"}),Object(h.jsx)("h4",{children:"Source:"}),Object(h.jsxs)("ul",{className:"source-filter",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"Dungeon"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",checked:U.dungeon,id:"dungeon",onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"Hard Shards"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"hard",checked:U.hard,onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:" Arena"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"arena",checked:U.arena,onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:" Princess Arena"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"princess",checked:U.princess,onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:" Clan Battle"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"clan",checked:U.clan,onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]})]}),Object(h.jsx)("h4",{children:"Position:"}),Object(h.jsxs)("ul",{className:"source-filter",children:[Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:["Front ","(<250)"]}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"front",checked:q,onChange:le}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:["Middle ","(<600)"]}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"mid",checked:F,onChange:le}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:[" Back ","(>600)"]}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"back",checked:Q,onChange:le}),Object(h.jsx)("span",{className:"mark"})]})]})]}),Object(h.jsx)("h4",{children:"Base Stars:"}),Object(h.jsxs)("ul",{className:"source-filter",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"1 Star"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"star1",checked:_,onChange:be}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"2 Stars"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"star2",checked:ae,onChange:be}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"3 Stars"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"star3",checked:ie,onChange:be}),Object(h.jsx)("span",{className:"mark"})]})]})]}),Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsx)("button",{className:"btn select-all",onClick:me,children:"Select all"}),Object(h.jsx)("button",{className:"btn unselect-all",onClick:je,children:"Erase all"})]}),Object(h.jsx)("button",{className:"btn filter-close",onClick:de,children:"Close"})]})]})]}),Object(h.jsxs)(p.BrowserView,{viewClassName:"row head fixed row-desktop fixed-desktop",children:[Object(h.jsx)("span",{className:"icon head action",onClick:pe,children:Object(h.jsx)("i",{className:"fas fa-info-circle"})}),Object(h.jsxs)("span",{className:"stars head action",onClick:function(){f(!1),S(!1),t(O?function(e){return Object(l.a)(e).sort((function(e,s){return e.stars<s.stars?1:e.stars>s.stars?-1:0}))}:function(e){return Object(l.a)(e).sort((function(e,s){return e.stars>s.stars?1:e.stars<s.stars?-1:0}))}),x(!O)},children:["Stars ",O?Object(h.jsx)("i",{className:"fas fa-arrow-up"}):Object(h.jsx)("i",{className:"fas fa-arrow-up rotate"})," "]}),Object(h.jsxs)("span",{className:"position head action",onClick:function(){f(!1),x(!1),t(C?function(e){return Object(l.a)(e).sort((function(e,s){return e.position<s.position?1:e.position>s.position?-1:0}))}:function(e){return Object(l.a)(e).sort((function(e,s){return e.position>s.position?1:e.position<s.position?-1:0}))}),S(!C)},children:["Position ",C?Object(h.jsx)("i",{className:"fas fa-arrow-up"}):Object(h.jsx)("i",{className:"fas fa-arrow-up rotate"})]}),Object(h.jsxs)("span",{className:"name head action",onClick:ue,children:["Name ",u?Object(h.jsx)("i",{className:"fas fa-arrow-up"}):Object(h.jsx)("i",{className:"fas fa-arrow-up rotate"})]}),Object(h.jsx)("span",{className:"tier head action",onClick:ke,children:"PVE"}),Object(h.jsx)("span",{className:"tier head action",onClick:ve,children:"CB"}),Object(h.jsx)("span",{className:"tier head action",onClick:fe,children:"PVP"}),Object(h.jsx)("span",{className:"cbRank head action",onClick:function(){f(!1),x(!1),S(!1),t((function(e){return Object(l.a)(e).sort((function(e,s){return e.cbRank<s.cbRank?-1:e.cbRank>s.cbRank?1:0}))}))},children:"CB Rank"}),Object(h.jsx)("span",{className:"comment head",children:"Comment"}),Object(h.jsxs)("span",{className:"source head action",id:"source",onClick:he,children:["Source",Object(h.jsxs)("div",{className:"filter-container",id:"filter-container",children:[Object(h.jsx)("h2",{children:"Filters"}),Object(h.jsx)("h4",{children:"Source:"}),Object(h.jsxs)("ul",{className:"source-filter",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"Dungeon"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",checked:U.dungeon,id:"dungeon",onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"Hard Shards"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"hard",checked:U.hard,onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:" Arena"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"arena",checked:U.arena,onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:" Princess Arena"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"princess",checked:U.princess,onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:" Clan Battle"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"clan",checked:U.clan,onChange:oe}),Object(h.jsx)("span",{className:"mark"})]})]})]}),Object(h.jsx)("h4",{children:"Position:"}),Object(h.jsxs)("ul",{className:"source-filter",children:[Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:["Front ","(<250)"]}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"front",checked:q,onChange:le}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:["Middle ","(<600)"]}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"mid",checked:F,onChange:le}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:[" Back ","(>600)"]}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"back",checked:Q,onChange:le}),Object(h.jsx)("span",{className:"mark"})]})]})]}),Object(h.jsx)("h4",{children:"Base Stars:"}),Object(h.jsxs)("ul",{className:"source-filter",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"1 Star"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"star1",checked:_,onChange:be}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"2 Stars"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"star2",checked:ae,onChange:be}),Object(h.jsx)("span",{className:"mark"})]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:"3 Stars"}),Object(h.jsxs)("label",{className:"input-container",children:[Object(h.jsx)("input",{type:"checkbox",id:"star3",checked:ie,onChange:be}),Object(h.jsx)("span",{className:"mark"})]})]})]}),Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsx)("button",{className:"btn select-all",onClick:me,children:"Select all"}),Object(h.jsx)("button",{className:"btn unselect-all",onClick:je,children:"Erase all"})]}),Object(h.jsx)("button",{className:"btn filter-close",onClick:de,children:"Close"})]})]})]}),Object(h.jsx)(j,{}),Object(h.jsxs)("div",{className:"search-icon",children:[Object(h.jsx)("input",{className:"search-txt",type:"text",placeholder:"search",value:N,onChange:function(e){var s=e.target.value;P(s)}}),Object(h.jsxs)("span",{className:"search-btn",children:[Object(h.jsx)("i",{className:"fas fa-search"})," "]})]}),Object(h.jsx)("div",{className:"list-container",children:a.filter((function(e){return e.name.toLocaleLowerCase().includes(N.toLocaleLowerCase())&&M.some((function(s){return s===e.source}))&&(a=e.position,!!(q&&a<250)||!!(F&&a>=250&&a<600)||!!(Q&&a>600))&&(s=e.stars,!(!_||1!==s)||!(!ae||2!==s)||!(!ie||3!==s));var s,a})).map((function(e){return Object(h.jsx)(d,{info:e},e.name)}))})]})};var f=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(u,{})})},k=a(11),v=a.n(k);i.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),v()(document.body,{nativeScrollbarsOverlaid:{initialize:!1}})}},[[22,1,2]]]);
//# sourceMappingURL=main.978fb6aa.chunk.js.map