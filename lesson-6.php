<!DOCTYPE html>
<html lang="ru">
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
        <h1 class="content-header">Lesson four.</h1>
        <section class="section-tasks">
            <p class="content-text">Задача #1. Доработать функцию замены картинки в&nbsp;галерее таким образом, чтобы она проверяла наличие картинки по&nbsp;указанному в&nbsp;src адресу.</p>
            <div class="site-images">
                <img src="images/small/f1.jpg" alt="Картинка 1" class="images-item">
                <img src="images/small/f2.jpg" alt="Картинка 2" class="images-item">
                <img src="images/small/f3.jpg" alt="Картинка 3" class="images-item">
                <img src="images/small/f4.jpg" alt="Картинка 4" class="images-item">
            </div>
        </section>
        <section class="section-tasks">
            <p class="content-text">Задача #2. Реализовать модуль корзины. Создать блок товаров и&nbsp;блок корзины. У&nbsp;каждого товара есть кнопка &laquo;Купить&raquo;, при нажатии на&nbsp;которую происходит добавление имени и&nbsp;цены товара в&nbsp;блок корзины. Корзина должна уметь считать общую сумму заказа.</p>
            <form class="content-form form-center-button" action="javascript:void(0)">
            <div class="content-cart"></div>
            <div class="content-item">
                <div class="item-box" data-id="1">
                    <img src="images/televizor.jpg" alt="Телевизор" class="item-box-image" width="150px" height="150px">
                    <span class="item-box-text">Телевизор</span>
                    <span class="item-box-price" data-price="17999.00">17999.00 руб.</span>
                    <span class="item-box-quantity-text">введите кол-во:</span>
                    <input type="number" class="item-box-quantity content-form-number" step="1">
                    <button class="shop content-form-button long-button">Купить</button>
                </div>
                <div class="item-box" data-id="2">
                    <img src="images/smatphone.jpg" alt="Смартфон" class="item-box-image" width="150px" height="150px">
                    <span class="item-box-text">Смартфон</span>
                    <span class="item-box-price" data-price="8641.00">8641.00 руб.</span>
                    <span class="item-box-quantity-text">введите кол-во:</span>
                    <input type="number" class="item-box-quantity content-form-number" step="1">
                    <button class="shop content-form-button long-button">Купить</button>
                </div>
                <div class="item-box" data-id="3">
                    <img src="images/beer.jpg" alt="Пиво" class="item-box-image" width="150px" height="150px">
                    <span class="item-box-text">Пиво</span>
                    <span class="item-box-price" data-price="45.07">45.07 руб.</span>
                    <span class="item-box-quantity-text">введите кол-во:</span>
                    <input type="number" class="item-box-quantity content-form-number" step="1">
                    <button class="shop content-form-button long-button">Купить</button>
                </div>
            </div>
            </form>
        </section>
    </main>
    <footer class="site-footer">
        <? include_once "footer.php"; ?>
    </footer>
</body>
</html>