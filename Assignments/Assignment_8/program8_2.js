///////////////////////////////////////
//
// Function Name : Display
// Description   : Displays single digit number in words
// Input         : Integer
// Output        : Number in words
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Display(iNo)
{
   if(iNo < 0)
   {
      iNo = -iNo
   }

   switch(iNo)
   {
      case 0:
         console.log("Zero")
         break

      case 1:
         console.log("One")
         break

      case 2:
         console.log("Two")
         break

      case 3:
         console.log("Three")
         break

      case 4:
         console.log("Four")
         break

      case 5:
         console.log("Five")
         break

      case 6:
         console.log("Six")
         break

      case 7:
         console.log("Seven")
         break

      case 8:
         console.log("Eight")
         break

      case 9:
         console.log("Nine")
         break

      default:
         console.log("Invalid Number")
         break
   }
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number : "))

   Display(iValue)
}

main()
