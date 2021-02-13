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
            <p class="content-text">Задача #1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по&nbsp;своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и&nbsp;белые ячейки. Строки должны нумероваться числами от&nbsp;1&nbsp;до&nbsp;8, столбцы&nbsp;&mdash; латинскими буквами A, B, C, D, E, F, G, H.</p>
            <p class="content-text">Задача #2. Заполнить созданную таблицу буквами, отвечающими за&nbsp;шахматную фигуру, например К&nbsp;&mdash; король, Ф&nbsp;&mdash; ферзь и&nbsp;т.п., причем все фигуры должны стоять на&nbsp;своих местах и&nbsp;быть соответственно черными и&nbsp;белыми.</p>
            <p class="content-text">Задача #3. Заменить буквы, обозначающие фигуры картинками.</p>
            <form class="content-form form-center-button" action="javascript:void(0)">
                <button class="content-form-button" onclick="chessBoard();">Выполнить</button></p>
            </form>
            <div class="chess"></div> <!-- Здесь будут отображаться шахматы -->
        </section>
    </main>
    <footer class="site-footer">
        <? include_once "footer.php"; ?>
    </footer>
</body>
</html>