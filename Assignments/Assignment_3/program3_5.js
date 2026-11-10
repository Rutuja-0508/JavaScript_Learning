///////////////////////////////////////
//
// Function Name : CheckVowel
// Description   : Accept a character and check whether it is a vowel
// Input         : Character
// Output        : TRUE if vowel, otherwise FALSE
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

// typedef int BOOL in C -> plain numbers 1 / 0 in JavaScript
const TRUE = 1
const FALSE = 0

function CheckVowel(cValue)
{
   if(cValue == 'a' || cValue == 'e' || cValue == 'i' || cValue == 'o' || cValue == 'u' || cValue == 'A' || cValue == 'E' || cValue == 'I' || cValue == 'O' || cValue == 'U')
   {
      return TRUE
   }
   else
   {
      return FALSE
   }
}

function main()
{
   let cValue = ''
   let bRet = FALSE

   cValue = prompt("Enter character\n").trim().charAt(0)

   bRet = CheckVowel(cValue)

   if(bRet == TRUE)
   {
      console.log("TRUE")
   }
   else
   {
      console.log("FALSE")
   }
}

main()
