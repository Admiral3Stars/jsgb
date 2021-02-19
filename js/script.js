window.addEventListener("load", function() {
    var element = document.getElementById("footer-closer");
    element.onclick = function(){
        if (element.className == "site-footer-close"){
            document.querySelector(".site-footer").classList.remove("footer-closed");
            document.querySelector(".site-footer").classList.add("footer-opened");
            // document.querySelector(".site-content").classList.remove("site-content-no-margin");
            // document.querySelector(".site-content").classList.add("site-content-yes-margin");
            element.classList.remove("site-footer-close");
            element.classList.add("site-footer-open");
        }else{
            document.querySelector(".site-footer").classList.remove("footer-opened");
            document.querySelector(".site-footer").classList.add("footer-closed");
            // document.querySelector(".site-content").classList.remove("site-content-yes-margin");
            // document.querySelector(".site-content").classList.add("site-content-no-margin");
            element.classList.remove("site-footer-open");
            element.classList.add("site-footer-close");
        }
    };

    // Увеличим изображение
    var images = document.querySelectorAll(".images-item");
    for (var val of images){
        val.onclick = imgBigSmall;
    }

    // Корзина магазина
    var prodButton = document.querySelectorAll(".shop");
    for (var val of prodButton){
        val.onclick = cart;
    }
});

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

function mathOperation(a, b, action){
    console.log(a,b,action);
    switch (action){
        case "plus": return a + b;
        break;
        case "minus": return a - b;
        break;
        case "multiply": return a * b;
        break;
        case "share": return a / b;
        break;
        default: return "Что-то пошло не так.";
        break;
    }
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

function lessonTwoTaskFifth(){
    // Объявляем переменные
    var a = document.querySelector('.fifth-task-lesson2-a').value,
        b = document.querySelector('.fifth-task-lesson2-b').value,
        action = document.querySelector('.fifth-task-lesson2-select').value;

    // Приведём и проверим значения
    if (a !== "undefined" && a !== null && a !== ""){
        if (isNaN(+a)){
            alert("Похоже Вы ввели не число в input для a.");
            return false;
        }
    }else{
        alert("Похоже Вы не ввели число в значение переменной a.");
        return false;
    }
    if (b !== "undefined" && b !== null && b !== ""){
        if (isNaN(+b)){
            alert("Похоже Вы ввели не число в input для b.");
            return false;
        }
    }else{
        alert("Похоже Вы не ввели число в значение переменной b.");
        return false;
    }

    // Решим задачу
    alert ("Результат выражения: " + mathOperation(+a, +b, action));
}

function lessonTwoTaskEighth(){

    // Объявляем переменные
    var a = document.querySelector('.eighth-task-lesson2-a').value

    // Приведём и проверим значения
    if (a !== "undefined" && a !== null && a !== ""){
        if (isNaN(parseInt(a))){
            alert("Похоже Вы ввели не число в поле для числа.");
            return false;
        }
    }else{
        alert("Похоже Вы не ввели число в значение переменной a.");
        return false;
    }

    function power(val, pow = 0){
        console.log("число: " + val, "степень: " + pow, "результат: " + Math.pow(val, pow++));
        if (pow > 25) return;
        else power(val, pow);
    }
    
    power(a, 0);
}

function lessonTreeTaskFirst(){
    var i = 0, n, c; // назначим 3 переменные. i - число от 0 до 100; n - число, на которое будем делить; с - кол-во true при деление без остатка.
    while (i <= 100){
        n = 1; c = 0;
        do{
            if (i % n == 0) c++;
            n++;
        }while (n <= i);
        if (c == 2) console.log("Найдено простое число: " + i);
        i++;
    }
}

function lessonTreeTaskSecond(){
    var items = [],
        sum = 0,
        total = 0;
    element = document.querySelectorAll(".item-box");
    for (var item of element){
        var quantity = parseInt(item.querySelector('.item-box-quantity').value);
        if (quantity > 0){
            items.push({
                "name":     item.querySelector('.item-box-text').innerHTML,
                "price":    +item.querySelector('.item-box-price').getAttribute('data-price'),
                "quantity": quantity
            });
        }
    }
    for (var item of items){
        sum = item.price * item.quantity;
        total += sum;
        alert(item.name + ": " + item.quantity + " шт." + " на сумму " + sum + " руб. (" + item.price + " руб. за штуку).");
    }
    alert("Общая сумма заказа: " + total + " руб.");
}

function lessonTreeTaskFourth(method = "alert"){
    switch (method){
        case "alert": for (var i = 0; i < 10; alert(i++)){};
        break;
        case "console": for (var i = 0; i < 10; console.log(i++)){}
        break;
        default: alert("Что-то пошло не так");
        break;
    }
}

function lessonTreeTaskFifth(){
    var x = "";
    for (var i = 0; i < 20; i++){
        console.log(x += "x");
    }
}

function crushing(){
    console.log(this);
    if (!this.number){
        console.log(this.error = "Не задано свойство с числом");
    }else if (this.number < this.min){
        console.log(this.error = "Число меньше " + this.min);
    }else if (this.number > this.max){
        console.log(this.error = "Число больше " + this.max);
    }else{
        this.number += ""; // Преобразуем в строку, join() со свойством не работает, может я чего-то не так делаю.
        var i = -1;
        for (var n of this.number){
            i++;
        }
        this.unit = this.number[i];
        this.dozen = (this.number[i-1] === undefined) ? 0 : this.number[i-1];
        this.hundred = (this.number[i-2] === undefined) ? 0 : this.number[i-2];
        console.log("сотни: " + this.hundred + " десятки: " + this.dozen + " единицы: " + this.unit);
    }
}

function lessonFourTaskFirst(){
    var object = {
        min : 0,
        max : 999,
        number : parseInt(document.querySelector('.first-task-lesson4-a').value),
    };
    object.crush = crushing;
    object.crush();
}

// Функция для создания шахматной доски
function chessBoard(){
    // Формируем объект, со свойствами для вёрстки поля, а также данными по фигурам
    var game = {
        element: document.querySelector(".chess"),
        topLine: document.createElement("div"),
        centerLine: document.createElement("div"),
        rightLine: document.createElement("div"),
        bottomLine: document.createElement("div"),
        leftLine: document.createElement("div"),
        board: document.createElement("div"),
        stringNameLines: ["a","b","c","d","e","f","g","h"],
        numberNameLines: ["1","2","3","4","5","6","7","8"],
        figures:{
            0: {
                0: {
                    figureName: "Ладья",
                    code: "&#9814;"
                },
                1: {
                    figureName: "Конь",
                    code: "&#9816;"
                },
                2: {
                    figureName: "Слон",
                    code: "&#9815;"
                },
                3: {
                    figureName: "Ферзь",
                    code: "&#9813;"
                },
                4: {
                    figureName: "Король",
                    code: "&#9812;"
                },
                5: {
                    figureName: "Слон",
                    code: "&#9815;"
                },
                6: {
                    figureName: "Конь",
                    code: "&#9816;"
                },
                7: {
                    figureName: "Ладья",
                    code: "&#9814;"
                }
            },

            1: {
                0: {
                    figureName: "Пешка",
                    code: "&#9817;"
                },
                1: {
                    figureName: "Пешка",
                    code: "&#9817;"
                },
                2: {
                    figureName: "Пешка",
                    code: "&#9817;"
                },
                3: {
                    figureName: "Пешка",
                    code: "&#9817;"
                },
                4: {
                    figureName: "Пешка",
                    code: "&#9817;"
                },
                5: {
                    figureName: "Пешка",
                    code: "&#9817;"
                },
                6: {
                    figureName: "Пешка",
                    code: "&#9817;"
                },
                7: {
                    figureName: "Пешка",
                    code: "&#9817;"
                }
            },

            6: {
                0: {
                    figureName: "Пешка",
                    code: "&#9823;"
                },
                1: {
                    figureName: "Пешка",
                    code: "&#9823;"
                },
                2: {
                    figureName: "Пешка",
                    code: "&#9823;"
                },
                3: {
                    figureName: "Пешка",
                    code: "&#9823;"
                },
                4: {
                    figureName: "Пешка",
                    code: "&#9823;"
                },
                5: {
                    figureName: "Пешка",
                    code: "&#9823;"
                },
                6: {
                    figureName: "Пешка",
                    code: "&#9823;"
                },
                7: {
                    figureName: "Пешка",
                    code: "&#9823;"
                }
            },
            
            7: {
                0: {
                    figureName: "Ладья",
                    code: "&#9820;"
                },
                1: {
                    figureName: "Конь",
                    code: "&#9822;"
                },
                2: {
                    figureName: "Слон",
                    code: "&#9821;"
                },
                3: {
                    figureName: "Ферзь",
                    code: "&#9819;"
                },
                4: {
                    figureName: "Король",
                    code: "&#9818;"
                },
                5: {
                    figureName: "Слон",
                    code: "&#9821;"
                },
                6: {
                    figureName: "Конь",
                    code: "&#9822;"
                },
                7: {
                    figureName: "Ладья",
                    code: "&#9820;"
                }
            }
        },
        // Метод объекта, отвечающий за построение шахматной доски
        addChess: function(){
            // Определяем классы для каждого элемента
            this.topLine.classList.add("chess-top-line");
            this.centerLine.classList.add("chess-center-line");
            this.rightLine.classList.add("chess-rigth-line");
            this.bottomLine.classList.add("chess-bottom-line");
            this.leftLine.classList.add("chess-left-line");
            this.board.classList.add("chess-board");

            this.element.innerHTML = ""; // очистим доску (вдруг кто кликнет дважды)

            this.element.append(this.topLine, this.centerLine, this.bottomLine); // сверстаем основные блоки поля (верх, низ и центр)

            var centerLine = document.querySelector(".chess-center-line");
            centerLine.append(this.leftLine, this.board, this.rightLine); // Поделим центр на 3 элемента (правая панель, левая и центральная доска)

            /* Почему-то append работает только для последнего элемента, пришлось поэтому делать несколько циклов, хотя можно было бы всё сделать в 1, если бы работало:
            topLine.append(block);
            bottomLine.append(block);
            */

            // Ниже наполняем верхний, правый, нижний и левый блок квадратными блоками (что-то вроде ячейки таблицы)
            var topLine = document.querySelector(".chess-top-line");
            for (var i = 0; i < this.stringNameLines.length; i++){
                var block = document.createElement("div");
                block.classList.add("chess-block");
                block.innerText = this.stringNameLines[i];
                topLine.append(block);
            }

            var bottomLine = document.querySelector(".chess-bottom-line");
            for (var i = 0; i < this.stringNameLines.length; i++){
                var block = document.createElement("div");
                block.classList.add("chess-block");
                block.innerText = this.stringNameLines[i];
                bottomLine.append(block);
            }

            var leftLine = document.querySelector(".chess-left-line");
            for (var i = 0; i < this.numberNameLines.length; i++){
                var block = document.createElement("div");
                block.classList.add("chess-block");
                block.innerText = this.numberNameLines[i];
                leftLine.append(block);
            }

            var rightLine = document.querySelector(".chess-rigth-line");
            for (var i = 0; i < this.numberNameLines.length; i++){
                var block = document.createElement("div");
                block.classList.add("chess-block");
                block.innerText = this.numberNameLines[i];
                rightLine.append(block);
            }

            // А теперь самое главное, наполним блоками центральный блок с фигурами
            var board = document.querySelector(".chess-board"),
                recolor, // нужно для смены цвета при переносе строки (иначе будет белый под белым, чёрный под чёрным)
                col = 0,
                row = 0; // col и row нам понадобятся для определения местоположения фигуры
            // определяем общее кол-во блоков и запускаем цикл от 0 до этого кол-ва
            for (var i = 0; i < (this.numberNameLines.length * this.numberNameLines.length); i++){
                var block = document.createElement("div");
                block.classList.add("chess-block");
                block.setAttribute("onclick", "alert(\"Пустое поле\");"); // Добавим атрибут onclick для клика. Изначально он будет содержать значение пустого поля
                // Если произошёл перенос строки, то мы делаем реколор, прибавляем номер строки и обнуляем значение столбца
                if (i % this.numberNameLines.length == 0){ 
                    recolor = (recolor) ? false : true;
                    if (i > 0){
                        col += 1;
                        row = 0;
                    }
                }
                // Проверим, существуют ли нужные свойства, если да, значит в этом поле будет находится фигура. Добавим атрибут для увеличения размера шрифта, всплывающую подсказку, а также ПЕРЕЗАПИШЕМ атрибут onclick со значением имени фигуры
                if (this.figures[col] && this.figures[col][row] && this.figures[col][row].code){
                    block.classList.add('figure-size');
                    block.setAttribute("title", this.figures[col][row].figureName);
                    block.setAttribute("onclick", "alert(\"" + this.figures[col][row].figureName + "\");");
                    block.innerHTML = this.figures[col][row].code;
                }
                row++; // идём на следующий стобец по таблице
                if (i % 2 == recolor) block.classList.add("white-block"); // замена цвета
                board.append(block); //добавление в конец сформированного выше блока
            }
        }
    };
    game.addChess();
    alert("Сейчас будет сгенерированно игровое поле и расставлены фигуры.\nОбязательно наведите курсором или кликнете по квадратику поля.");
}

function imgBigSmall(e){
    var image = e.target,
        bigImage = new Image;
        bigImage.src = image.src.replace("/small/", "/big/");

        bigImage.onload = function(){
            var site = document.querySelector(".web-site"),
                bigBlock = document.createElement("div");
            bigBlock.setAttribute("onclick", "var elem = document.querySelector(\".site-images-big\"); elem.parentNode.removeChild(elem);");
            bigImage.className = "images-big-item";
            bigBlock.classList.add("site-images-big");
            bigBlock.append(bigImage);
            site.append(bigBlock);
        }

        bigImage.onerror = function(){
            alert("Не найдена большая картинка");
        }
}

function cart(e){
    var prod = e.target.parentNode,
        pId = prod.getAttribute("data-id"),
        pName = prod.querySelector(".item-box-text").innerText,
        pQuantity = prod.querySelector(".item-box-quantity").value,
        pPrice = prod.querySelector(".item-box-price").getAttribute("data-price"),
        cart = document.querySelector(".content-cart"),
        items = cart.querySelectorAll(".cart-item"),
        i = false,
        total = 0;

        if (pQuantity < 1){
            return alert ("Вы не ввели кол-во");
        }

        for (var val of items){
            if (val.getAttribute("data-id") == pId){
                i = true;
            }
        }

        if (!i){
            var pblock = document.createElement("div"),
                pNameText = document.createElement("span"),
                pQuantityText = document.createElement("span"),
                pPriceText = document.createElement("span"),
                pTotalText = document.createElement("span");

            pblock.className = "cart-item";
            pNameText.className = "cart-item-name";
            pQuantityText.className = "cart-item-quantity";
            pPriceText.className = "cart-item-price";
            pTotalText.className = "cart-item-total";
            pNameText.innerText = pName;
            pblock.setAttribute("data-id", pId);

            pblock.append(pNameText, pQuantityText, pPriceText, pTotalText);
            cart.append(pblock);
        }

        items = cart.querySelectorAll(".cart-item");
        for (var val of items){
            if (val.getAttribute("data-id") == pId){
                
                val.querySelector(".cart-item-quantity").innerHTML = pQuantity + " шт.";
                val.querySelector(".cart-item-price").innerHTML = parseInt(pPrice).toFixed(2) + " &#8381;";
                var subtotal = val.querySelector(".cart-item-total");
                subtotal.innerHTML = "Сумма: " + parseInt(pPrice * pQuantity).toFixed(2) + " &#8381;";
                subtotal.setAttribute("data-total", parseInt(pPrice * pQuantity).toFixed(2));

            }
            total += parseInt(val.querySelector(".cart-item-total").getAttribute("data-total"));
            console.log(total);
        }
        var totalBlock = document.querySelector(".cart-total");
        if (!totalBlock){
            totalBlock = document.createElement("div");
            totalBlock.className = "cart-total";
            totalBlock.innerHTML = "Общая сумма заказа: " + parseInt(total).toFixed(2) + " &#8381;";
        }else{
            totalBlock.innerHTML = "Общая сумма заказа: " + parseInt(total).toFixed(2) + " &#8381;";
        }
        cart.append(totalBlock);
}