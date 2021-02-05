function insertValueToSelector($selector, $value, $operator = "add more"){
    var tag = document.querySelector($selector);
    if (tag){
        if ($operator == "equal") tag.innerHTML = $value;
        if ($operator == "add more") tag.innerHTML += $value;
    }else{
        alert("Обратитесь к администратору и скажите что не найден селектор.");
        return false;
    }
}

function blockingButton ($selector){
    document.querySelector($selector).disabled = true;
    document.querySelector($selector).classList.add("disable-button");
}

function getTemp(){
    // Объявляем переменные
    var input = document.querySelector('.first-task-input'),
        celsium,
        fahrenheit;

    // Проверим, есть ли селектор и если есть, заберём значение
    if (input){
        celsium = input.value;
    }else{
        alert("Обратитесь к администратору и скажите что не найден селектор.");
        return false;
    }

    // Проверим, всё ли хорошо с типами. Если да, рассчитаем результат
    if (celsium && (parseFloat(celsium) || celsium == 0)){
        fahrenheit = (9 / 5) * celsium + 32;
    }else{
        if (!celsium) alert("Похоже Вы не ввели число. Попробуйте ещё разок и, если у Вас не получится, обратитесь к администратору.");
        else alert("oh shit, it's not number...");
        return false;
    }

    // Выводим результат пользователю
    alert("Указанная температура в градусах по Фаренгейту: "+ fahrenheit +" градусов");
}

function getNameAdmin(){
    //Блокируем кнопку
    blockingButton('.second-task-button');

    // Объявляем переменные
    var admin,
        name;
    name = "Василий";
    admin = name;

    // Выводим результат
    setTimeout(() => {  insertValueToSelector(".second-task-result", "<span class=\"code\">var</span> <span class=\"variable\">admin</span>, <span class=\"variable\">name</span>; // <span class=\"comment\">Объявляем переменные</span><br>", "equal"); }, 700);
    setTimeout(() => {  insertValueToSelector(".second-task-result", "<span class=\"variable\">name</span> = \"Василий\"; // <span class=\"comment\">Вносим значение переменной name</span><br>"); }, 1400);
    setTimeout(() => {  insertValueToSelector(".second-task-result", "<span class=\"variable\">admin</span> = <span class=\"variable\">name</span>; // <span class=\"comment\">Присваиваем значение переменной name переменной admin</span><br>"); }, 2100);
    setTimeout(() => {  insertValueToSelector(".second-task-result", "<span class=\"code\">alert(</span><span class=\"variable\">admin</span><span class=\"code\">)</span>; // <span class=\"comment\">Выводим результат</span><br>"); }, 2800);
    setTimeout(() => {  
        alert(admin); 
        document.querySelector('.second-task-button').disabled = false;
        document.querySelector('.second-task-button').classList.remove("disable-button");
    }, 3500);
}

function equalJs(){
    // Блокируем кнопку
    blockingButton('.third-task-button');

    // Объявляем переменные
    var js = 1000 + "108";

    // Выводим результат
    setTimeout(() => {  insertValueToSelector(".third-task-result", "<span class=\"code\">var</span> <span class=\"variable\">js</span> = 1000 + \"108\"; // <span class=\"comment\">Объявляем переменные</span><br>", "equal"); }, 700);
    setTimeout(() => {  insertValueToSelector(".third-task-result", "<span class=\"code\">alert(</span><span class=\"variable\">js</span><span class=\"code\">)</span>; // <span class=\"comment\">Выводим результат</span><br>"); }, 1400);
    setTimeout(() => {  
        alert(js); 
        document.querySelector('.third-task-button').disabled = false;
        document.querySelector('.third-task-button').classList.remove("disable-button");
    }, 2100);
}

function lessonTwoTaskTwo(){
    // Блокируем кнопку
    blockingButton('.second-task-lesson2-button');

    // Объявляем переменные
    var a = 2;
    var x = 1 + (a *= 2);

    // Выводим результат
    setTimeout(() => {  insertValueToSelector(".second-task-lesson2-result", "<span class=\"code\">var</span> <span class=\"variable\">a</span> = 2; // <span class=\"comment\">Объявляем переменную а</span><br>", "equal"); }, 700);
    setTimeout(() => {  insertValueToSelector(".second-task-lesson2-result", "<span class=\"code\">var</span> <span class=\"variable\">x</span> = 1 + (<span class=\"variable\">a</span> *= 2); // <span class=\"comment\">Объявляем переменную x</span><br>"); }, 1400);
    setTimeout(() => {  insertValueToSelector(".second-task-lesson2-result", "<span class=\"code\">alert(</span><span class=\"variable\">x</span><span class=\"code\">)</span>; // <span class=\"comment\">Выводим результат</span><br>"); }, 2100);
    setTimeout(() => {  
        alert(x); 
        document.querySelector('.second-task-lesson2-button').disabled = false;
        document.querySelector('.second-task-lesson2-button').classList.remove("disable-button");
    }, 2800);
}

function lessonTwoTaskThird(){
    // Объявляем переменные
    var inputA = document.querySelector('.third-task-lesson2-a'),
        inputB = document.querySelector('.third-task-lesson2-b'),
        a,
        b;

    // Проверим, есть ли селектор и значение и приведём к нужному типу
    if (inputA){
        if (inputA.value !== "undefined" && inputA.value !== null && inputA.value !== ""){
            a = parseInt(inputA.value);
            if (isNaN(a)){
                alert("Похоже Вы ввели не число в input для a.");
                return false;
            }
        }else{
            alert("Похоже Вы не ввели число в значение переменной a.");
            return false;
        }
    }else{
        return alert("Обратитесь к администратору и скажите что не найден селектор a.");
    }
    if (inputB){
        if (inputB.value !== "undefined" && inputB.value !== null && inputB.value !== ""){
            b = parseInt(inputB.value);
            if (isNaN(b)){
                alert("Похоже Вы ввели не число в input для b.");
                return false;
            }
        }else{
            alert("Похоже Вы не ввели число в значение переменной b.");
            return false;
        }
    }else{
        return alert("Обратитесь к администратору и скажите что не найден селектор b.");
    }

    // Решим задачу
    if (a >= 0 ^ b >= 0){
        return  alert ("Числа разных знаков. Вывожу сумму: " + (a + b));
    }else if(a >= 0 && b >= 0){
        return alert ("Числа положительные. Вывожу разность: " + (a - b));
    }else{
        return alert ("Числа отрицательные. Вывожу произведение: " + (a * b));
    }
}

function lessonTwoTaskFourth(){
    var a = (Math.random() * 15 + 0).toFixed(0),
        b = "";
    switch (a){
        case "0": b += " " + a++;
        case "1": b += " " + a++;
        case "2": b += " " + a++;
        case "3": b += " " + a++;
        case "4": b += " " + a++;
        case "5": b += " " + a++;
        case "6": b += " " + a++;
        case "7": b += " " + a++;
        case "8": b += " " + a++;
        case "9": b += " " + a++;
        case "10": b += " " + a++;
        case "11": b += " " + a++;
        case "12": b += " " + a++;
        case "13": b += " " + a++;
        case "14": b += " " + a++;
        case "15": b += " " + a; 
        alert(b);
        break;
        default:    alert("Что-то пошло не так. Число:" + a);
        break;
    }
}