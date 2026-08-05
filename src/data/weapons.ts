import { Weapon } from "@/types/weapon";
import { getWeaponImage } from "@/utils/weaponImage";


const rawWeapons = [


{
name:"R-301 Carbine",
category:"Assault Rifle",
damage:14,
rpm:810,
ammo:"Light",
magazine:18,
bulletSpeed:290,
description:
"Reliable assault rifle with excellent accuracy."
},


{
name:"VK-47 Flatline",
category:"Assault Rifle",
damage:19,
rpm:600,
ammo:"Heavy",
magazine:20,
bulletSpeed:300,
description:
"High damage assault rifle with strong recoil."
},


{
name:"Hemlok Burst AR",
category:"Assault Rifle",
damage:20,
rpm:540,
ammo:"Heavy",
magazine:21,
bulletSpeed:310,
description:
"Burst fire assault rifle."
},


{
name:"Nemesis Burst AR",
category:"Assault Rifle",
damage:17,
rpm:900,
ammo:"Energy",
magazine:20,
bulletSpeed:305,
description:
"Energy burst rifle with increasing fire rate."
},


{
name:"Havoc Rifle",
category:"Assault Rifle",
damage:18,
rpm:750,
ammo:"Energy",
magazine:24,
bulletSpeed:290,
description:
"Energy assault rifle."
},



{
name:"R-99",
category:"SMG",
damage:12,
rpm:1080,
ammo:"Light",
magazine:20,
bulletSpeed:185,
description:
"Extremely fast firing SMG."
},


{
name:"Alternator",
category:"SMG",
damage:16,
rpm:600,
ammo:"Light",
magazine:19,
bulletSpeed:195,
description:
"Stable SMG with easy recoil control."
},


{
name:"CAR SMG",
category:"SMG",
damage:15,
rpm:930,
ammo:"Heavy",
magazine:20,
bulletSpeed:190,
description:
"Flexible ammunition SMG."
},


{
name:"Volt SMG",
category:"SMG",
damage:15,
rpm:720,
ammo:"Energy",
magazine:19,
bulletSpeed:270,
description:
"Smooth energy SMG."
},


{
name:"Prowler Burst PDW",
category:"SMG",
damage:15,
rpm:800,
ammo:"Heavy",
magazine:20,
bulletSpeed:200,
description:
"Burst fire SMG."
},



{
name:"Spitfire",
category:"LMG",
damage:18,
rpm:510,
ammo:"Light",
magazine:35,
bulletSpeed:275,
description:
"Large magazine machine gun."
},


{
name:"Devotion",
category:"LMG",
damage:16,
rpm:900,
ammo:"Energy",
magazine:36,
bulletSpeed:280,
description:
"Energy LMG with ramping fire rate."
},


{
name:"L-STAR",
category:"LMG",
damage:17,
rpm:600,
ammo:"Energy",
magazine:30,
bulletSpeed:240,
description:
"Energy projectile machine gun."
},{
name:"EVA-8 Auto",
category:"Shotgun",
damage:7,
rpm:150,
ammo:"Shotgun",
magazine:8,
bulletSpeed:160,
description:
"Automatic shotgun with high fire rate."
},


{
name:"Peacekeeper",
category:"Shotgun",
damage:9,
rpm:58,
ammo:"Shotgun",
magazine:5,
bulletSpeed:180,
description:
"High damage precision shotgun."
},


{
name:"Mastiff",
category:"Shotgun",
damage:11,
rpm:78,
ammo:"Shotgun",
magazine:6,
bulletSpeed:170,
description:
"Powerful close range shotgun."
},


{
name:"Mozambique",
category:"Shotgun",
damage:15,
rpm:132,
ammo:"Shotgun",
magazine:6,
bulletSpeed:125,
description:
"Compact shotgun pistol."
},




{
name:"Sentinel",
category:"Sniper",
damage:70,
rpm:37,
ammo:"Sniper",
magazine:4,
bulletSpeed:310,
description:
"Bolt action sniper rifle."
},


{
name:"Longbow DMR",
category:"Sniper",
damage:55,
rpm:78,
ammo:"Sniper",
magazine:6,
bulletSpeed:305,
description:
"Semi automatic sniper rifle."
},


{
name:"Charge Rifle",
category:"Sniper",
damage:75,
rpm:30,
ammo:"Energy",
magazine:4,
bulletSpeed:1000,
description:
"Energy beam sniper rifle."
},


{
name:"Kraber .50-Cal",
category:"Sniper",
damage:140,
rpm:36,
ammo:"Special",
magazine:4,
bulletSpeed:300,
description:
"Legendary bolt action sniper."
},




{
name:"G7 Scout",
category:"Marksman",
damage:34,
rpm:240,
ammo:"Light",
magazine:10,
bulletSpeed:300,
description:
"Semi automatic marksman rifle."
},


{
name:"30-30 Repeater",
category:"Marksman",
damage:42,
rpm:144,
ammo:"Heavy",
magazine:10,
bulletSpeed:280,
description:
"Lever action rifle with charge mechanic."
},


{
name:"Triple Take",
category:"Marksman",
damage:63,
rpm:78,
ammo:"Energy",
magazine:10,
bulletSpeed:300,
description:
"Triple projectile marksman rifle."
},


{
name:"Bocek Compound Bow",
category:"Marksman",
damage:70,
rpm:60,
ammo:"Arrow",
magazine:1,
bulletSpeed:250,
description:
"Silent bow weapon."
},{
name:"RE-45 Auto",
category:"Pistol",
damage:12,
rpm:780,
ammo:"Light",
magazine:16,
bulletSpeed:195,
description:
"Fast firing automatic pistol."
},


{
name:"Wingman",
category:"Pistol",
damage:45,
rpm:156,
ammo:"Heavy",
magazine:6,
bulletSpeed:290,
description:
"High damage hand cannon."
},


{
name:"P2020",
category:"Pistol",
damage:15,
rpm:450,
ammo:"Light",
magazine:14,
bulletSpeed:250,
description:
"Reliable semi automatic pistol."
},


{
name:"Mozambique",
category:"Shotgun",
damage:15,
rpm:132,
ammo:"Shotgun",
magazine:6,
bulletSpeed:125,
description:
"Compact shotgun pistol."
},


{
name:"30-30 Repeater",
category:"Marksman",
damage:42,
rpm:144,
ammo:"Heavy",
magazine:10,
bulletSpeed:280,
description:
"Lever action marksman rifle."
},


{
name:"HAVOC Rifle",
category:"Assault Rifle",
damage:18,
rpm:750,
ammo:"Energy",
magazine:24,
bulletSpeed:290,
description:
"Energy assault rifle."
},


{
name:"Kraber .50-Cal",
category:"Sniper",
damage:140,
rpm:36,
ammo:"Special",
magazine:4,
bulletSpeed:300,
description:
"Legendary sniper rifle."
}


];



export const weapons:Weapon[] =

rawWeapons.map((weapon)=>({

...weapon,

image:
getWeaponImage(
weapon.name
)

}));