///////////////////////////////////////
//
// Function Name : CalculateElectricityBill
// Description   : Calculates the electricity bill
// Input         : Integer
// Output        : Electricity bill
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CalculateElectricityBill(iUnits)
{
   let fBill = 0.0

   if(iUnits < 0)
   {
      console.log("Invalid Input")
   }
   else if(iUnits <= 100)
   {
      fBill = Math.fround(iUnits * 5)
   }
   else if(iUnits <= 200)
   {
      fBill = Math.fround((100 * 5) + ((iUnits - 100) * 7))
   }
   else
   {
      fBill = Math.fround((100 * 5) + (100 * 7) + ((iUnits - 200) * 10))
   }

   if(iUnits >= 0)
   {
      console.log("Bill = " + fBill.toFixed(2))
   }
}

function main()
{
   let iUnits = 0

   iUnits = parseInt(prompt("Enter consumed units: "))

   CalculateElectricityBill(iUnits)
}

main()
