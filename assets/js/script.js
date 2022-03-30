let a = document.querySelector('div.caculator_input');
let b = document.querySelectorAll('button.addBtn');
let c = document.getElementById('output');
let d = document.querySelector('button.resultBtn');
let e = document.querySelector('button.percent');

function Calculate() {
    let alterStr = a.innerHTML;
    alterStr = alterStr.replace(':', '/');
    alterStr = alterStr.replace('x', '*');
    c.innerHTML = eval(alterStr).toPrecision(3);
    a.innerHTML = c.innerHTML;
}

function addInput(num) {
    a.innerHTML += num;
}

function deleteAll() {
    a.innerHTML = '';
}

function percent() {
    if (0 <= Number(a.innerHTML) && Number(a.innerHTML) < 1) {
        // a.innerHTML += e.innerHTML;
        c.innerHTML = Number(a.innerHTML) * 100;
        return;

    }
    if (1 <= Number(a.innerHTML) && Number(a.innerHTML) <= 100) {
        let x = a.innerHTML + '*0.01';
        c.innerHTML = eval(x);

    } else {

        c.innerHTML = eval(a.innerHTML + '*0.01');

    }

    a.innerHTML = c.innerHTML;
}

function del() {
    a.innerHTML = a.innerHTML.slice(0, -1);
    console.log(a.innerHTML);
}

function reverse() {
    if (Number(a.innerHTML) != NaN) {
        a.innerHTML = (-1) * Number(a.innerHTML);

    }
}