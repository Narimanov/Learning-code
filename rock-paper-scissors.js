var userChoice = prompt("Ты выбираешь камень, ножницы или же бумагу?");
var computerChoice = Math.floor(Math.random() * 4);
if (computerChoice === 1){
        computerChoice = "камень";
} else if(computerChoice === 2){
        computerChoice = "бумага";
} else {
        computerChoice = "ножницы";
}
 
var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
                return("Ничья, хоуми! Давай ещё раз!");
        }
       
        if (choice1 === "камень") {
                if (choice2 === "ножницы") {
                        return("Ты выиграл! Если что, соперник выбрал ножницы.");
                } else {
                        return("Боюсь, что ты програл! Просто случилось так, что противник решил накрыть тебя бумагой.");
                }
        }
       
        if (choice1 === "бумага") {
                if (choice2 === "камень") {
                        return("Молодец! Ты только что накрыл пацана бумагой.");
                } else {
                        return ("Соперник разрезал твою ничтожную бумажку...");
                }
        }
       
        if (choice1 === "ножницы") {
                if (choice2 === "бумага") {
                        return("Вы разрезали врага на мелкие кусочки.");
                } else {
                        return ("Камень соперника даже лучше ваших ножниц!");
                }
        } else {
                console.log("Думал меня потриллить? Тролль нашелся у нас тут!")
        }
       
};
compare(userChoice, computerChoice);
