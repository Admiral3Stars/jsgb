<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://timur.best/javascript-gb/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Ответы на вопросы курса GeekBrains по JavaScript. Урок 3.</title>
    <script src="js/script.js"></script>
</head>
<body class="web-site">
    <header></header>
    <main class="site-content">
        <h1 class="content-header">Lesson three.</h1>
        <section class="section-tasks">
            <p class="content-text">Задача #1. С&nbsp;помощью цикла while вывести все простые числа в&nbsp;промежутке от&nbsp;0&nbsp;до&nbsp;100</p>
            <form class="content-form" action="javascript:void(0)">
                <p>откройте консоль и нажмите на кнопку:
                <button class="content-form-button" onclick="lessonTreeTaskFirst();">Выполнить</button></p>
            </form>
        </section>
        <section class="section-tasks">
            <p class="content-text">Задача #2 и 3. С&nbsp;этого урока начинаем работать с&nbsp;функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в&nbsp;зависимости от&nbsp;находящихся в&nbsp;ней товаров.</p>
            <p class="content-text">Товары в&nbsp;корзине хранятся в&nbsp;массиве. Задачи:</p>
            <ol class="content-list">
                <li class="content-list-item">Организовать такой массив для хранения товаров в&nbsp;корзине;</li>
                <li class="content-list-item">Организовать функцию countBasketPrice, которая будет считать стоимость корзины.</li>
            </ol>
            <div class="content-item">
                <div class="item-box">
                    <img src="images/televizor.jpg" alt="Телевизор" class="item-box-image" width="150px" height="150px">
                    <span class="item-box-text">Телевизор</span>
                    <span class="item-box-price" data-price="17999">17999.00 руб.</span>
                    <span class="item-box-quantity-text">введите кол-во:</span>
                    <input type="number" class="item-box-quantity content-form-number" step="1">
                </div>
                <div class="item-box">
                    <img src="images/smatphone.jpg" alt="Смартфон" class="item-box-image" width="150px" height="150px">
                    <span class="item-box-text">Смартфон</span>
                    <span class="item-box-price" data-price="8641.00">8641.00 руб.</span>
                    <span class="item-box-quantity-text">введите кол-во:</span>
                    <input type="number" class="item-box-quantity content-form-number" step="1">
                </div>
                <div class="item-box">
                    <img src="images/beer.jpg" alt="Пиво" class="item-box-image" width="150px" height="150px">
                    <span class="item-box-text">Пиво</span>
                    <span class="item-box-price" data-price="45.07">45.07 руб.</span>
                    <span class="item-box-quantity-text">введите кол-во:</span>
                    <input type="number" class="item-box-quantity content-form-number" step="1">
                </div>
                <span class="item-button"><button class="content-form-button long-button" onclick="lessonTreeTaskSecond();">Купить</button></span>
            </div>
        </section>
    </main>
    <footer class="site-footer">
        <? include_once "footer.php"; ?>
    </footer>
</body>
</html>