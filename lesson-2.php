<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://timur.best/javascript-gb/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Ответы на вопросы курса GeekBrains по JavaScript. Урок 2.</title>
    <script src="js/script.js"></script>
</head>
<body class="web-site">
    <header></header>
    <main class="site-content">
        <h1 class="content-header">Lesson two.</h1>
        <section class="first-task-lesson2 section-tasks">
            <p class="content-text">Задача #1. Дан код:</p>
            <div class="first-task-lesson2-form content-form-div">
                <code class="content-section-result first-task-lesson2-result">
                    01 <span class="code">var</span> <span class="variable">a</span> = 1, <span class="variable">b</span> = 1, <span class="variable">c</span>, <span class="variable">d</span>;<br>
                    02 <span class="variable">c</span> = ++<span class="variable">a</span>; <span class="code">alert</span>(<span class="variable">c</span>)); <span class="comment">// 2</span><br>
                    03 <span class="variable">d</span> = <span class="variable">b</span>++; <span class="code">alert</span>(<span class="variable">d</span>); <span class="comment">// 1</span><br>
                    04 <span class="variable">c</span> = (2+&nbsp;++<span class="variable">a</span>); <span class="code">alert</span>(<span class="variable">c</span>)); <span class="comment">// 5</span><br>
                    05 <span class="variable">d</span> = (2+&nbsp;<span class="variable">b</span>++); <span class="code">alert</span>(<span class="variable">d</span>); <span class="comment">// 4</span><br>
                    06 <span class="code">alert</span>(<span class="variable">a</span>); <span class="comment">// 3</span><br>
                    07 <span class="code">alert</span>(<span class="variable">b</span>); <span class="comment">// 3</span><br>
                </code>
            </div>
            <p class="content-text">Почему код даёт именно такие результаты?</p>
            <article class="first-task-lesson2-form content-form-answer">
                <h1 class="form-answer-header content-header">Ответы на&nbsp;вопрос &#8470;&nbsp;1.</h1>
                <p class="form-answer-text">02&nbsp;строка: Префиксный оператор &laquo;++&raquo; прибавляет единицу к&nbsp;значению переменной &laquo;а&raquo; до&nbsp;того, как запишет полученное значение в&nbsp;переменную &laquo;с&raquo;, в&nbsp;итоге 1 + 1&nbsp;равняется 2. Стоит отметить, что и&nbsp;переменная&nbsp;а, после исполнения строки кода, будет равна 2.</p>
                <p class="form-answer-text">03&nbsp;строка: Постфиксный оператор &laquo;++&raquo; прибавит единицу к&nbsp;&laquo;b&raquo; уже после того, как отработает присвоение. В&nbsp;связи с&nbsp;этим &laquo;d&raquo; фактически равно значению &laquo;b&raquo; в&nbsp;его изначальном варианте. Но, стоит отметить, что само &laquo;b&raquo; уже не&nbsp;будет равно&nbsp;1, оно станет равно 2.</p>
                <p class="form-answer-text">04&nbsp;строка: Аналогично строке&nbsp;02, префиксный оператор также прибавит единицу до&nbsp;того, как сложит значение переменной &laquo;а&raquo; с&nbsp;числом 2. Вам наверное интересно, почему&nbsp;5, а&nbsp;не&nbsp;4 :). Всё просто. В&nbsp;тойже самой 02&nbsp;строке переменная &laquo;a&raquo;, после исполнения кода, получила значение 2. Следовательно 2 + 1 + 2 = 5. Кстати, отмечу, что значение переменной a&nbsp;теперь равно 3.</p>
                <p class="form-answer-text">05&nbsp;строка: Аналогично строке 03&nbsp;постфиксный оператор &laquo;++&raquo; прибавит единицу к&nbsp;&laquo;b&raquo; уже после того, как отработает присвоение. Так как в&nbsp;строке 03&nbsp;значение переменной &laquo;b&raquo; стало равным&nbsp;2, то&nbsp;сработает пример 2 + 2. Но, стоит отметить, что значение переменной &laquo;b&raquo; станет равным&nbsp;3, так как постфиксный оператор сделает в&nbsp;итоге своё коварное действиет.</p>
                <p class="form-answer-text">06&nbsp;и&nbsp;07&nbsp;строки: Исходя из&nbsp;разъяснения строк 04&nbsp;и&nbsp;05, мы&nbsp;убеждены и&nbsp;свято верим в&nbsp;тот факт, что значения переменных &laquo;а&raquo; и&nbsp;&laquo;b&raquo; в&nbsp;процессе исполнение предыдущих строк кода, стали равны&nbsp;3.</p>
            </article>
        </section>

        <section class="second-task-lesson2 section-tasks">
            <p class="content-text">Задача #2. ему будет равен x&nbsp;в&nbsp;примере var a = 2; var x = 1 + (a *= 2); ?</p>
            <div class="second-task-lesson2-form content-form-div">
                <button class="second-task-lesson2-button content-section-button long-button" onclick="lessonTwoTaskTwo();">Вывести результат</button>
                <code class="content-section-result second-task-lesson2-result"></code>
            </div>
        </section>

        <section class="third-task-lesson2 section-tasks">
            <p class="content-text">Задача #3. Объявить две целочисленные переменные a&nbsp;и&nbsp;b&nbsp;и&nbsp;задать им&nbsp;произвольные начальные значения. Затем написать скрипт, который работает по&nbsp;следующему принципу:</p>
            если a&nbsp;и&nbsp;b&nbsp;положительные, вывести их&nbsp;разность;<br>
            если а&nbsp;и&nbsp;b&nbsp;отрицательные, вывести их&nbsp;произведение;<br>
            если а&nbsp;и&nbsp;b&nbsp;разных знаков, вывести их&nbsp;сумму; ноль можно считать положительным числом.</p>
            <form class="third-task-lesson2-form content-form" action="javascript:void(0)">
                <div class="third-task-lesson2-inputs">
                    <p><label>Введите значение переменной a: <input class="third-task-lesson2-a content-form-number" step="1" type="number"></label></p>
                    <p><label>Введите значение переменной b: <input class="third-task-lesson2-b content-form-number" step="1" type="number"></label></p>
                </div>
                <button class="third-task-lesson2-button content-form-button" onclick="lessonTwoTaskThird();">Результат</button>
            </form>
        </section>

        <section class="fourth-task-lesson2 section-tasks">
            <p class="content-text">Задача #4. Присвоить переменной а&nbsp;значение в&nbsp;промежутке [0..15]. С&nbsp;помощью оператора switch организовать вывод чисел от&nbsp;a&nbsp;до&nbsp;15.</p>
            <form class="fourth-task-lesson2-form content-form" action="javascript:void(0)">
                <button class="fourth-task-lesson2-button content-form-button" onclick="lessonTwoTaskFourth();">Выполнить</button>
            </form>
        </section>
    </main>
    <footer class="site-footer">
        <? include_once "footer-menu.php"; ?>
    </footer>
</body>
</html>