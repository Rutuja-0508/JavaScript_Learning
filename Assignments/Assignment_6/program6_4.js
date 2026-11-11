///////////////////////////////////////
//
// Function Name : CheckTriangle
// Description   : Checks whether a triangle is valid
// Input         : Three integers
// Output        : Triangle validity
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckTriangle(iSide1, iSide2, iSide3)
{
   if(iSide1 <= 0 || iSide2 <= 0 || iSide3 <= 0)
   {
      console.log("Invalid Triangle")
   }
   else if(iSide1 + iSide2 > iSide3 && iSide2 + iSide3 > iSide1 && iSide1 + iSide3 > iSide2)
   {
      console.log("Valid Triangle")
   }
   else
   {
      console.log("Invalid Triangle")
   }
}

function main()
{
   let iSide1 = 0, iSide2 = 0, iSide3 = 0

   let aInput = prompt("Enter three sides: ").trim().split(/\s+/)
   iSide1 = parseInt(aInput[0])
   iSide2 = parseInt(aInput[1])
   iSide3 = parseInt(aInput[2])

   CheckTriangle(iSide1, iSide2, iSide3)
}

main()
