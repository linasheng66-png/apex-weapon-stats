import Image from "next/image";
import Link from "next/link";


export default function Home(){


return (

<main className="
min-h-screen
bg-black
text-white
overflow-hidden
">


{/* Hero */}

<section className="
relative
h-screen
flex
items-center
justify-center
">


{/* Background */}

<div className="
absolute
inset-0
bg-gradient-to-b
from-orange-900/40
via-black
to-black
"/>



<div className="
relative
z-10
text-center
">


<h1 className="
text-7xl
font-black
tracking-wide
mb-6
animate-pulse
">

APEX
<br/>
WEAPON STATS

</h1>



<p className="
text-xl
text-gray-400
mb-10
">

Analyze every weapon.
Damage • DPS • RPM • Ballistics

</p>



<div className="
flex
justify-center
gap-6
">


<Link

href="/weapons"

className="
bg-orange-500
px-10
py-4
rounded-xl
font-bold
text-xl
hover:scale-110
transition
"

>

ENTER DATABASE

</Link>



<Link

href="/compare"

className="
bg-white
text-black
px-10
py-4
rounded-xl
font-bold
text-xl
hover:scale-110
transition
"

>

COMPARE

</Link>



</div>


</div>


</section>





{/* Features */}


<section className="
p-10
grid
md:grid-cols-3
gap-8
">



<Card

title="30+ Weapons"

text="Complete Apex Legends weapon database"

/>



<Card

title="DPS Analysis"

text="Compare damage output and fire rate"

/>



<Card

title="Ballistic Simulation"

text="Analyze bullet speed and drop"

/>



</section>




</main>

);

}



function Card({

title,

text

}:{

title:string;

text:string;

}){


return (

<div className="
bg-zinc-900
rounded-2xl
p-8
border
border-zinc-800
hover:border-orange-500
transition
">


<h2 className="
text-3xl
font-bold
mb-3
">

{title}

</h2>


<p className="
text-gray-400
">

{text}

</p>


</div>

);

}