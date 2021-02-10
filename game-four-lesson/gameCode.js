//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var number, ok, answers = [];

do {//Выводим первый вопрос
    ok = false;
    number = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (number == -1) {
        break;
    }else{
        ok = isAnswer(works.a0, number);
    }
} while (!ok);
answers.push(
    {
        "question" : works.a00,
        "answer" : (number == 1) ? works.a1 : works.a2,
    }
);
switch (number) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            number = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (number == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, number);
            }
        } while (!ok);
        answers.push(
            {
                "question" : works.b00,
                "answer" : (number == 1) ? works.b1 : works.b2,
            }
        );
        switch (number) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                // do {
                //     ok = false;
                //     number = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                //     if (number == -1) {
                //         break;
                //     }
                //     else {
                //         ok = isAnswer(works.d0, number);
                //     }
                // } while (!ok);
                // answers.push(
                //     {
                //         "question" : works.d00,
                //         "answer" : (number == 1) ? works.d1 : works.d2,
                //     }
                // );
                // break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    number = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (number == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, number);
                    }
                } while (!ok);
                answers.push(
                    {
                        "question" : works.d00,
                        "answer" : (number == 1) ? works.d1 : works.d2,
                    }
                );
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            number = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (number == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, number);
            }
        } while (!ok);
        answers.push(
            {
                "question" : works.c00,
                "answer" : (number == 1) ? works.c1 : works.c2,
            }
        );
        switch (number) {
            case 1: // Второе действие
                // do {
                //     ok = false;
                //     number = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                //     if (number == -1) {
                //         break;
                //     }
                //     else {
                //         ok = isAnswer(works.d0, number);
                //     }
                // } while (!ok);
                // answers.push(
                //     {
                //         "question" : works.d00,
                //         "answer" : (number == 1) ? works.d1 : works.d2,
                //     }
                // );
                // break;
            case 2: // Второе действие
                do {
                    ok = false;
                    number = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (number == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, number);
                    }
                } while (!ok);
                answers.push(
                    {
                        "question" : works.d00,
                        "answer" : (number == 1) ? works.d1 : works.d2,
                    }
                );
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

do {
    ok = false;
    number = +prompt('Введите номер окна или -1 - Выход из игры');
    if (number == -1) {
        break;
    }
    else {
        ok = isAnswer(answers.length, number);
    }
} while (!ok);

console.log (answers);
alert ('Вопрос: ' + answers[number-1]['question'] + '\nОтвет: ' + answers[number-1]['answer']);
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, number) {
    if (isNaN(number) || !isFinite(number)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (number < 1 || number > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

