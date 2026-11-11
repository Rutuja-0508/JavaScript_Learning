///////////////////////////////////////
//
// Function Name : FindGreatest
// Description   : Finds the greatest of three numbers
// Input         : Three integers
// Output        : Greatest number
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function FindGreatest(iFirst, iSecond, iThird)
{
   if((iFirst > iSecond) && (iFirst > iThird))
   {
      console.log(" The Greatest Number is " + iFirst)
   }
   else if((iSecond > iThird) && (iSecond > iFirst))
   {
      console.log("The Greatest Number is " + iSecond)
   }
   else
   {
      console.log(" The Greatest Number is " + iThird + " ")
   }
}

function main()
{
   let iValue1 = 0, iValue2 = 0, iValue3 = 0

   iValue1 = parseInt(prompt("Enter First Number :"))

   iValue2 = parseInt(prompt("Enter Second Number :"))

   iValue3 = parseInt(prompt("Enter Third Number :"))

   FindGreatest(iValue1, iValue2, iValue3)
}

main()
