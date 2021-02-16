var number, ok, sum = 0, textLose;

for (var item of works.allQuestions){
    console.log(works[item]);
    works[item].runQustion = rQ;
    works[item].runQustion(item);
    if (works[item].lose){
        if (textLose){
            alert(textLose);
        }else{
            alert("Вы проиграли.\nПравильный ответ: " + works[item].answers[works[item].aRight-1] + "\nВы потеряли: " + sum + " руб.");
        }
        break;
    }
}

if (!works[item].lose){
    alert("Поздравляем!\nВы правильно ответили на все вопросы!\nВаш баланс: " + sum + " руб.");
}

function rQ(money){
    do {
        ok = false;
        number = +prompt("Вопрос на " + money + " руб.: " + this.question + '\n' + this.answers.join('\n') + '\n-1 - Забрать деньги и выйти из игры');
        if (number == -1) {
            textLose = "Вы вышли из игры.\nВаш баланс: " + sum + " руб.";
            break;
        }else{
            ok = isAnswer(number);
        }
    } while (!ok);
    if (number == this.aRight){
        sum += money;
    }else{
        this.lose = true;
    }
}

function isAnswer(number) {
    if (isNaN(number) || !isFinite(number)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (number < 1 || number > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

