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
        <h1 class="content-header">Lesson four.</h1>
        <section class="section-tasks">
            <p class="content-text">Задача #1. Написать функцию, преобразующую число в&nbsp;объект. Передавая на&nbsp;вход число от&nbsp;0&nbsp;до&nbsp;999, мы&nbsp;должны получить на&nbsp;выходе объект, в&nbsp;котором в&nbsp;соответствующих свойствах описаны единицы, десятки и&nbsp;сотни. Например, для числа 245&nbsp;мы должны получить следующий объект: {&lsquo;единицы&rsquo;: 5, &lsquo;десятки&rsquo;: 4, &lsquo;сотни&rsquo;: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с&nbsp;помощью console.log и&nbsp;вернуть пустой объект.</p>
            <form class="content-form" action="javascript:void(0)">
                <p><label>Введите значение переменной a: <input class="first-task-lesson4-a content-form-number" step="1" type="number"></label></p>
                <p>откройте консоль и нажмите на кнопку:
                <button class="content-form-button" onclick="lessonFourTaskFirst();">Выполнить</button></p>
            </form>
        </section>

        <section class="section-tasks">
            <p class="content-text">Задача #2. Для игры, реализованной на&nbsp;уроке, добавить возможность вывода хода номер&nbsp;n (номер задается пользователем).</p>
            <a class="second-task-lesson4-link" href="game-four-lesson/">Перейти к игре</a>        
            </section>
    </main>
    <footer class="site-footer">
        <? include_once "footer.php"; ?>
    </footer>
</body>
</html>