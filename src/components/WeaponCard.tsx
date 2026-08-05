import Link from "next/link";


type WeaponCardProps = {

  name: string;

  damage: number;

  rpm: number;

  ammo: string;

  category: string;

};



export default function WeaponCard({

  name,

  damage,

  rpm,

  ammo,

  category,

}: WeaponCardProps) {


  const dps =
    (damage * rpm) / 60;



  const id =
    name
      .toLowerCase()
      .replaceAll(" ", "-");



  return (


    <Link href={`/weapons/${id}`}>


      <div

        className="
        bg-zinc-900
        text-white
        rounded-xl
        p-6
        w-72
        hover:scale-105
        transition
        "

      >


        <h2 className="
          text-2xl
          font-bold
        ">

          {name}

        </h2>



        <p className="text-orange-400">

          {category}

        </p>



        <p>
          Damage: {damage}
        </p>



        <p>
          RPM: {rpm}
        </p>



        <p>
          Ammo: {ammo}
        </p>



        <p>
          DPS: {dps.toFixed(1)}
        </p>



      </div>


    </Link>


  );

}