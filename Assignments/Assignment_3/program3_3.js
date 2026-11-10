///////////////////////////////////////
//
// Function Name : DisplayEvenFactor
// Description   : Accept a number and display its even factors
// Input         : Integer
// Output        : Even factors of the given number
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function DisplayEvenFactor(iNo)
{
   let i = 0
   if(iNo < 0)
   {
      iNo = -iNo
   }
   if(iNo == 0)
   {
      return
   }
   for(i = 1; i <= iNo; i++)
   {
      if((iNo % i == 0) && (i % 2 == 0))
      {
         console.log(i)
      }
   }
}

function main()
{
   let iValue = 0
   iValue = parseInt(prompt("Enter number\n"))
   DisplayEvenFactor(iValue)
}

main()
