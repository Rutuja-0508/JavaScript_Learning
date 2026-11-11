///////////////////////////////////////
//
// Function Name : CheckVotingEligibility
// Description   : Checks whether a person is eligible to vote.
// Input         : Age of a person
// Output        : Eligible for Voting / Not Eligible for Voting / Invalid Age
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckVotingEligibility(iAge)
{
   if(iAge >= 18)
   {
      console.log("Eligible for Voting")
   }
   else if((iAge < 18) && (iAge > 0))
   {
      console.log("Not Eligible for Voting")
   }
   else
   {
      console.log("Invalid Age")
   }
}

function main()
{
   let iAge = 0

   iAge = parseInt(prompt("Enter your Age :"))

   CheckVotingEligibility(iAge)
}

main()
