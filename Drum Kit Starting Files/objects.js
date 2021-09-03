// const houseKeeper1 = {
//    yearsOfExperience: 12,
//    name: "Jane",
//    cleaningDuties: ["shower", "bedroom", "kitchen", "windows"]
// }
// console.log(houseKeeper1.name.toUpperCase())

// CONSTRUCTOR FUNCTION
const HouseKeeper1 = new HouseKeeper(10, "Alexander Msumba", ["loby", "bathroom"]);
 function HouseKeeper(yearsOfExperince, name, cleaningDuties) {
    this.yearsOfExperince = yearsOfExperince;
    this.name = name;
    this.cleaningDuties = cleaningDuties
    
 }

 
 console.log(HouseKeeper1.name);
