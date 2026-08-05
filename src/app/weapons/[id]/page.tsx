import Image from "next/image";
import { weapons } from "@/data/weapons";
import BallisticChart from "@/components/BallisticChart";


export default async function WeaponDetail({

params,

}:{
params: Promise<{id:string}>
}){


const {id}=await params;



const weapon = weapons.find(

(w)=>

w.name
.toLowerCase()
.replaceAll(" ","-")
=== id

);





if(!weapon){

return(

<main className="
min-h-screen
bg-black
text-white
p-10
">

<h1 className="
text-4xl
font-bold
">

Weapon Not Found

</h1>

</main>

);

}





const dps =

weapon.damage *
weapon.rpm /
60;





return (

<main className="
min-h-screen
bg-black
text-white
p-10
">


<div className="
max-w-5xl
mx-auto
">





<h1 className="
text-6xl
font-bold
mb-4
">

{weapon.name}

</h1>




<p className="
text-orange-400
text-xl
mb-10
">

{weapon.category}

</p>







<div className="
grid
md:grid-cols-2
gap-10
">





{/* Image */}

<div className="
bg-zinc-900
rounded-2xl
p-6
">


<Image

src={weapon.image}

alt={weapon.name}

width={600}

height={300}

className="
rounded-xl
w-full
"

/>


</div>







{/* Stats */}

<div className="
grid
grid-cols-2
gap-5
">





<div className="
bg-zinc-900
rounded-xl
p-5
">

<p className="
text-gray-400
">

Damage

</p>


<h2 className="
text-4xl
font-bold
">

{weapon.damage}

</h2>


</div>







<div className="
bg-zinc-900
rounded-xl
p-5
">

<p className="
text-gray-400
">

RPM

</p>


<h2 className="
text-4xl
font-bold
">

{weapon.rpm}

</h2>


</div>







<div className="
bg-zinc-900
rounded-xl
p-5
">

<p className="
text-gray-400
">

DPS

</p>


<h2 className="
text-4xl
font-bold
">

{dps.toFixed(1)}

</h2>


</div>







<div className="
bg-zinc-900
rounded-xl
p-5
">

<p className="
text-gray-400
">

Ammo

</p>


<h2 className="
text-2xl
font-bold
">

{weapon.ammo}

</h2>


</div>




</div>



</div>








{/* Description */}


<section className="
mt-10
bg-zinc-900
rounded-xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-4
">

Weapon Analysis

</h2>


<p className="
text-gray-300
">

{weapon.description}

</p>


</section>








{/* Ballistic */}

<section className="
mt-10
bg-zinc-900
rounded-xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-6
">

Ballistic Simulation

</h2>



<BallisticChart

bulletSpeed={
weapon.bulletSpeed
}

/>



</section>






</div>


</main>

);


}