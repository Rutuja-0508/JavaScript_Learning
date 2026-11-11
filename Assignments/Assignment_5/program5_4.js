///////////////////////////////////////
//
// Function Name : CheckMultipleDivisibility
// Description   : Checks divisibility by 3 and 5
// Input         : Integer number
// Output        : Divisibility result
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckMultipleDivisibility(iValue)
{
   if (((iValue % 5) == 0) && ((iValue % 3) == 0))
   {
      console.log("The number is Divisible by Both 5 and 3")
   }
   else if((iValue % 5) == 0)
   {
      console.log("The number is Only Divisible by 5")
   }
   else if((iValue % 3) == 0)
   {
      console.log("The Number is Only Divisible by 3")
   }
   else
   {
      console.log("The number is not Divisible by Either")
   }
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter Number :"))

   CheckMultipleDivisibility(iValue)
}

main()
