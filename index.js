
let meterEl = document.getElementById("meter-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el")

let input = document.getElementById("input-el");

//---------------------------------------------------------

function result(){
    
    let x = Number(input.value)
    
    //1 meter = 3.2808 feet | 1 foot = 0.3048 meters
    let meterConversion = (x * 3.2808).toFixed(4)
    let feetConversion = (x * 0.3048).toFixed(4)

    //1 liter = 0.2641 gallon | 1 gallon = 3.7854 liters
    let literConversion = (x*0.2641).toFixed(4)
    let gallonConversion = (x*3.7854).toFixed(4)

     // 1 kg = 2.2046 pounds  | 1 pound = 0.4535
     let kgConversion = (x*2.2046).toFixed(4)
     let poundconversion = (x*0.4535).toFixed(4)

     volumeEl.textContent = (x + " liters = " + literConversion + " gallons | " + x + " gallon = "+ gallonConversion     + " liters")  
     
     meterEl.textContent = (x + " meters = " + meterConversion + " feets | " + x + " feet = "+ feetConversion + " meters") 
     
     massEl.textContent = (x + " kilogram = " + kgConversion + " pounds | " + x + " pound = "+ gallonConversion  + " kilograms")  
}
