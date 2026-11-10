///////////////////////////////////////
//
// Function Name : Display
// Description   : Displays HELLO if number is less than 10 otherwise DEMO
// Input         : Integer
// Output        : HELLO / DEMO
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Display(iNo)
{
   if(iNo < 10)
   {
      console.log("HELLO")
   }
   else
   {
      console.log("DEMO")
   }
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter Number :"))

   Display(iValue)
}

main()
