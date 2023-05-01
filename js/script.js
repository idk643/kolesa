'use strict'
    let countt = 0;
    const btns = document.getElementsByClassName('btn');

    btns[0].addEventListener('click', function onClick() {
        if (countt < 10)
        {
            document.getElementById("counter").innerHTML = countt;
        }
        else
            alert("Нельзя добавить больше товаров в корзину");
    });

    for (const btn of btns) {
    btn.addEventListener('click', function onClick() {
        if (countt < 10)
        {
            countt++;
            document.getElementById("counter").innerHTML = countt;
        }
        else
            alert("Нельзя добавить больше товаров в корзину");
    });
    }
    clear.addEventListener('click', function(){
        countt = 0;
        document.getElementById("counter").innerHTML = countt;
    });