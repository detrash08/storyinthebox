var folds = document.querySelectorAll('.fold');
var counter = 0;
folds.forEach(function (el) {
    el.onclick = function () {
        var opened = el.classList.toggle('open');
        if (!opened)
            el.style.zIndex = counter++;
    };
});
