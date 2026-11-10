///////////////////////////////////////
//
// Function Name : Display
// Description   : Displays numbers from 5 to 1
// Input         : None
// Output        : 5 4 3 2 1 (without spaces)
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

function Display()
{
   let sOutput = ""
   let i = 0
   i = 5
   while(i >= 1)
   {
      sOutput += "" + i
      i--
   }
   console.log(sOutput)
}

function main()
{
   Display()
}

main()
