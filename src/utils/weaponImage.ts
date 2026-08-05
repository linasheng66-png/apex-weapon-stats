export function getWeaponImage(name:string){


return `/weapons/${

name

.toLowerCase()

.replaceAll(" ","-")

.replace(".","")

.replace("-cal","")

}.png`;


}