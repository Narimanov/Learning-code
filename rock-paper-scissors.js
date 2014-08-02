var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
        computerChoice = "rock";
}else if(computerChoice <=0.67){
        computerChoice = "paper";
}else{
        computerChoice = "scissors";
}
 
var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
                return("The result is a tie!");
        }
       
        if (choice1 === "rock") {
                if (choice2 === "scissors") {
                        return("Rock wins.");
                } else {
                        return("Paper wins.");
                }
        }
       
        if (choice1 === "paper") {
                if (choice2 === "rock") {
                        return("paper wins.");
                } else {
                        return ("Scissors win");
                }
        }
       
        if (choice1 === "scissors") {
                if (choice2 === "paper") {
                        return("Scissors wins.");
                } else {
                        return ("rock wins");
                }
        } else {
                console.log("I know you did something wrong. It may be just because you tried to troll me, so fuck you, user.")
        }
       
};
compare(userChoice, computerChoice);
