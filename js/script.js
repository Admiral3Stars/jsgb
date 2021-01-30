function insertValueToSelector($selector, $value, $operator = "add more"){
    let tag = document.querySelector($selector);
    if (tag){
        if ($operator == "equal") tag.innerHTML = $value;
        if ($operator == "add more") tag.innerHTML += $value;
    }else{
        alert("Обратитесь к администратору и скажите что не найден селектор.");
        return false;
    }
}

function getTemp(){
    // Объявляем переменные
    let input = document.querySelector('.first-task-input'),
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
    document.querySelector('.second-task-button').disabled = true;
    document.querySelector('.second-task-button').classList.add("disable-button");

    // Объявляем переменные
    let admin,
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
    document.querySelector('.third-task-button').disabled = true;
    document.querySelector('.third-task-button').classList.add("disable-button");

    // Объявляем переменные
    let js = 1000 + "108";

    // Выводим результат
    setTimeout(() => {  insertValueToSelector(".third-task-result", "<span class=\"code\">var</span> <span class=\"variable\">js</span> = 1000 + \"108\"; // <span class=\"comment\">Объявляем переменные</span><br>", "equal"); }, 700);
    setTimeout(() => {  insertValueToSelector(".third-task-result", "<span class=\"code\">alert(</span><span class=\"variable\">js</span><span class=\"code\">)</span>; // <span class=\"comment\">Выводим результат</span><br>"); }, 1400);
    setTimeout(() => {  
        alert(js); 
        document.querySelector('.third-task-button').disabled = false;
        document.querySelector('.third-task-button').classList.remove("disable-button");
    }, 2100);
}