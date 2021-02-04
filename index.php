<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://timur.best/javascript-gb/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Ответы на вопросы курса GeekBrains по JavaScript. Урок 1.</title>
    <script src="js/script.js"></script>
</head>
<body class="web-site">
    <header></header>
    <main class="site-content">
        <h1 class="content-header">Lesson one.</h1>
        <section class="first-task section-tasks">
            <p class="content-text">Задача #1. Задать температуру в&nbsp;градусах по&nbsp;Цельсию. Вывести в&nbsp;alert соответствующую температуру в&nbsp;градусах по&nbsp;Фаренгейту. Подсказка: расчёт идёт по&nbsp;формуле: Tf = (9&nbsp;/ 5) * Tc + 32, где Tf&nbsp;&mdash; температура по&nbsp;Фаренгейту, Tc&nbsp;&mdash; температура по&nbsp;Цельсию.</p>
            <form class="first-task-form content-form" action="javascript:void(0)">
                <label>Введите температуру (&deg;C): <input class="first-task-input content-form-number" step="0.01" type="number"></label>
                <button class="first-task-button content-form-button" onclick="getTemp();">Посчитать</button>
            </form>
        </section>

        <section class="second-task section-tasks">
            <p class="content-text">Задача #2. Работа с&nbsp;переменными. Объявить две переменные: admin и&nbsp;name. Записать в&nbsp;name строку &quot;Василий&quot;. Скопировать значение из&nbsp;name в&nbsp;admin. Вывести admin (должно вывести &laquo;Василий&raquo;).</p>
            <div class="second-task-form content-form-div">
                <button class="second-task-button content-section-button long-button" onclick="getNameAdmin();">Вывести результат</button>
                <code class="content-section-result second-task-result"></code>
            </div>
        </section>

        <section class="third-task section-tasks">
            <p class="content-text">Задача #3. Чему будет равно JS-выражение 1000 + &laquo;108&raquo;?</p>
            <div class="third-task-form content-form-div">
                <button class="third-task-button content-section-button long-button" onclick="equalJs();">Вывести результат</button>
                <code class="content-section-result third-task-result"></code>
            </div>
        </section>

        <section class="fourth-task section-tasks">
            <p class="content-text">Задача #4. Самостоятельно разобраться с&nbsp;атрибутами тега script (async и&nbsp;defer).</p>
            <article class="fourth-task-form content-form-answer">
                <h1 class="form-answer-header content-header">Атрибуты <span class="attr">async</span> или <span class="attr">defer</span> тега <span class="code">script</span>.</h1>
                <p class="form-answer-text">Существует 2 типа загрузки web-страницы: синхронная (она используется браузерами по умолчанию) и асинхронная (её дополнительно необходимо подключить при помощи атрибутов тега <span class="code">script</span> <span class="attr">async</span> или <span class="attr">defer</span>).</p>
                <h2 class="form-answer-h2 content-h2">Синхронная загрузка страницы.</h2>
                <p class="form-answer-text">Синхронная загрузка страницы используется браузерами по умолчанию. При данном методе загрузки, внешние скрипты загружаются и исполнены сразу, как только браузер увидит их. Часть страницы, находящаяся ниже внешних скриптов, загружается только после исполнения оных. При большом объёме файлов скриптов или при наличии медленного интернета, это существенно затягивает загрузку страницы. При этом приоритет исполнения самих внешних скриптов реализован в последовательности их расположения на странице (какой скрипт расположен выше, тот скрипт и будет выполнен раньше). Если скриптов много или они весомые, то для ускорения загрузки страницы, можно прибегнуть к методу расположения оных внизу страницы. Это не всегда удобно, так как, в случае, если один из скриптов будет загружаться долго, исполнения следующих за ним скриптов будет отложено, пока он не будет полностью загружен и исполнен.</p>
                <h2 class="form-answer-h2 content-h2">Асинхронная загрузка страницы.</h2>
                <p class="form-answer-text content-text">Для решения проблемы, описанной выше, была реализована возможность загрузки скриптов асинхронно (т.е. совместно с данными web-страницы). Загрузить внешние скрипты стало возможным двумя способами.</p>
                <h3 class="form-answer-h3 content-h3">Асинхронная загрузка страницы с атрибутом <span class="attr">defer</span>.</h3>
                <p class="form-answer-text content-text">Всё, чем отличается загрузка скриптов с атрибутом <span class="attr">defer</span> от синхронной загрузки - это одновременная загрузка вместе с данными web-страницы. Порядок исполнения скриптов по-прежнему остаётся в зависимости от их расположения (пока не будет исполнен скрипт выше, не будет исполнен скрипт ниже.).</p>
                <h3 class="form-answer-h3 content-h3">Асинхронная загрузка страницы с атрибутом <span class="attr">async</span>.</h3>
                <p class="form-answer-text content-text">Атрибут <span class="attr">async</span>, помимо описанной выше асинхронной загрузки имеет ещё одно существенное отличие в порядке исполнения внешних скриптов. Исполняется первым тот скрипт, который первым загрузился.</p>
                <p class="form-answer-text content-text">Уникальность текста 100% (по версии <a class="text-link" href="https://text.ru" rel="author" target="_blank">text.ru</a>). При использовании материаллов просьба уведомить автора &copy; <a class="text-link" href="https://vk.com/lroot" rel="author" target="_blank">Admiral</a>.</p>
            </article>
        </section>
    </main>
    <footer class="site-footer">
        <? include_once "footer-menu.php"; ?>
    </footer>
</body>
</html>