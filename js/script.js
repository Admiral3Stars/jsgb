function insertValueToSelector($selector, $value, $operator = "add more"){
    if ($operator == "equal") document.querySelector($selector).innerHTML = $value;
    if ($operator == "add more") document.querySelector($selector).innerHTML += $value;
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
    if (parseFloat(celsium)){
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
    let admin,
        name;
    name = "Василий";
    admin = name;

    setTimeout(() => {  insertValueToSelector(".second-task-result", "<span class=\"code\">var</span> <span class=\"variable\">admin</span>, <span class=\"variable\">name</span>; // <span class=\"comment\">Объявляем переменные</span><br>", "equal"); }, 700);
    setTimeout(() => {  insertValueToSelector(".second-task-result", "<span class=\"variable\">name</span> = \"Василий\"; // <span class=\"comment\">Вносим значение переменной name</span><br>"); }, 1400);
    setTimeout(() => {  insertValueToSelector(".second-task-result", "<span class=\"variable\">admin</span> = <span class=\"variable\">name</span>; // <span class=\"comment\">Присваиваем значение переменной name переменной admin</span><br>"); }, 2100);
    setTimeout(() => {  insertValueToSelector(".second-task-result", "<span class=\"code\">alert(</span><span class=\"variable\">admin</span><span class=\"code\">)</span>; // <span class=\"comment\">Выводим результат</span><br>"); }, 2800);
    setTimeout(() => {  
        alert(admin); 
        document.querySelector('.content-section-button').disabled = false;
    }, 3500);
}