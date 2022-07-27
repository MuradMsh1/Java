do {
    var num = prompt("Regem Daxil edin")
} while (!parseInt(num) || num < 0);

if (num % 7 == 0) {
    alert("Regem 7 ye bolunur")
}
else if (num % 7 < 4) {
    for (; ;) {
        num--;
        if (num % 7 == 0) {
            break;
        }

    }
    alert(`${num} 7 ye tam bolunur`)
}
else {
    for (; ;) {
        num++;
        if (num % 7 == 0) {
            break;
        }

    }
    alert(`${num} 7 ye tam bolunur`)
}



