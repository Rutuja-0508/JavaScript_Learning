///////////////////////////////////////
//
// Function Name : Number
// Description   : Checks whether number is small, medium or large
// Input         : Integer
// Output        : Small, Medium or Large
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Number(iNo)
{
   if(iNo < 50)
   {
      console.log("Small")
   }
   else if(iNo <= 100)
   {
      console.log("Medium")
   }
   else
   {
      console.log("Large")
   }
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number : "))

   Number(iValue)
}

main()
