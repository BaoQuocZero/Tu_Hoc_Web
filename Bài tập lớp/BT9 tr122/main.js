function mua() {
    var gia1 = document.banggia.a1.value;
    var gia2 = document.banggia.a2.value;
    var gia3 = document.banggia.a3.value;
    var gia4 = document.banggia.a4.value;
    var gia5 = document.banggia.a5.value;

    if (gia1 != 0 || gia2 != 0 || gia3 != 0 || gia4 != 0 || gia5 != 0) {
        document.getElementById("tong").innerHTML = gia1 * 90000 + gia2 * 200000 + gia3 * 150000 + gia4 * 120000 + gia5 * 100000;
    }
}