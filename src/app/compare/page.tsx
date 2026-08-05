"use client";


import { useState } from "react";
import { weapons } from "@/data/weapons";



export default function ComparePage() {


  const [weapon1,setWeapon1] = useState(
    weapons[0].name
  );


  const [weapon2,setWeapon2] = useState(
    weapons[1].name
  );



  const firstWeapon = weapons.find(
    (weapon)=>
      weapon.name === weapon1
  );


  const secondWeapon = weapons.find(
    (weapon)=>
      weapon.name === weapon2
  );



  if(!firstWeapon || !secondWeapon){

    return null;

  }



  const dps1 =
    firstWeapon.damage *
    firstWeapon.rpm /
    60;


  const dps2 =
    secondWeapon.damage *
    secondWeapon.rpm /
    60;



  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      p-10
    ">



      <h1 className="
        text-5xl
        font-bold
        mb-10
      ">

        Weapon Compare

      </h1>





      <div className="
        flex
        gap-5
        mb-10
      ">



        <select

          value={weapon1}

          onChange={(e)=>
            setWeapon1(e.target.value)
          }

          className="
          bg-zinc-900
          p-3
          rounded-lg
          "

        >


          {
            weapons.map((weapon)=>(

              <option
                key={weapon.name}
              >

                {weapon.name}

              </option>

            ))
          }


        </select>





        <select

          value={weapon2}

          onChange={(e)=>
            setWeapon2(e.target.value)
          }

          className="
          bg-zinc-900
          p-3
          rounded-lg
          "

        >


          {
            weapons.map((weapon)=>(

              <option
                key={weapon.name}
              >

                {weapon.name}

              </option>

            ))
          }


        </select>



      </div>








      <div className="
        grid
        md:grid-cols-2
        gap-8
      ">



        <WeaponCompareCard

          weapon={firstWeapon}

          dps={dps1}

        />



        <WeaponCompareCard

          weapon={secondWeapon}

          dps={dps2}

        />



      </div>




    </main>

  );


}





function WeaponCompareCard({

weapon,

dps

}:{

weapon:any;

dps:number;

}){


return (

<div className="
bg-zinc-900
rounded-2xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

{weapon.name}

</h2>



<p>
Category:
{" "}
{weapon.category}
</p>


<p>
Damage:
{" "}
{weapon.damage}
</p>


<p>
RPM:
{" "}
{weapon.rpm}
</p>


<p>
Ammo:
{" "}
{weapon.ammo}
</p>


<p>
Magazine:
{" "}
{weapon.magazine}
</p>



<p>
Bullet Speed:
{" "}
{weapon.bulletSpeed}
{" "}
m/s
</p>



<p className="
text-orange-400
text-xl
mt-5
">

DPS:
{" "}
{dps.toFixed(1)}

</p>



</div>

);


}