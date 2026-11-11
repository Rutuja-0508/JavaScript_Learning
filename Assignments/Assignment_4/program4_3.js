///////////////////////////////////////
//
// Function Name : FindGreater
// Description   : Finds the greater of two numbers.
// Input         : Two integers
// Output        : Greater Number / Both Numbers Are Equal
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function FindGreater(iFirst, iSecond)
{
   if(iFirst > iSecond)
   {
      console.log(iFirst + " is Greater than")
   }
   else if(iSecond > iFirst)
   {
      console.log(iSecond + " is Greater than")
   }
   else
   {
      console.log("Both are equal")
   }
}

function main()
{
   let iValue1 = 0
   let iValue2 = 0

   let aInput = prompt("Enter Two Numbers :").trim().split(/\s+/)
   iValue1 = parseInt(aInput[0])
   iValue2 = parseInt(aInput[1])

   FindGreater(iValue1, iValue2)
}

main()
