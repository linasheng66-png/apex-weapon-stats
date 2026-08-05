"use client";


import { useState } from "react";
import WeaponCard from "@/components/WeaponCard";
import { weapons } from "@/data/weapons";



export default function WeaponsPage() {


  const [search, setSearch] = useState("");



  const filteredWeapons = weapons.filter(

    (weapon)=>

      weapon.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

  );



  const categories = [

    ...new Set(

      filteredWeapons.map(

        (weapon)=>
          weapon.category

      )

    )

  ];



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
        mb-4
      ">

        Weapon Database

      </h1>



      <p className="
        text-gray-400
        mb-10
      ">

        Apex Legends Weapon Stats

      </p>




      <input

        type="text"

        placeholder="Search weapon..."

        value={search}

        onChange={(e)=>
          setSearch(e.target.value)
        }

        className="
          bg-zinc-900
          p-3
          rounded-lg
          w-80
          mb-10
          text-white
        "

      />






      {

        categories.map((category)=>(


          <section

            key={category}

            className="
              mb-12
            "

          >



            <h2 className="
              text-3xl
              font-bold
              mb-6
            ">

              {category}

            </h2>





            <div className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            ">



              {

                filteredWeapons

                .filter(

                  (weapon)=>

                    weapon.category === category

                )


                .map((weapon)=>(



                  <WeaponCard


                    key={weapon.name}


                    name={weapon.name}


                    damage={weapon.damage}


                    rpm={weapon.rpm}


                    ammo={weapon.ammo}


                    category={weapon.category}



                  />



                ))

              }



            </div>




          </section>


        ))

      }




    </main>

  );


}