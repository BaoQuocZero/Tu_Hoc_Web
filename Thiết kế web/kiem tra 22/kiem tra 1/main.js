function show1() {
    var a = document.querySelectorAll('form input[type = "text"]');

    var b = document.querySelectorAll('form input[type = "number"]');
    if (a[0].value == "") {
        alert("nhap lai ho ten di thang lo`");
        a[0].value = "";
        a[0].focus();
        return false;
    }
    if (a[1].value == "") {
        alert("m biet nhap mssv khong ha thang mat lo` ????");
        a[1].value = "";
        a[1].focus();
        return false;
    }
    if (a[1].value.length != 9) {
        alert("nhap du 9 ki tu ho bo may cai ????");
        a[1].value = "";
        a[1].focus();
        return false;
    }
    if (b[0].value == "" || b[1].value == "") {
        alert("nhap lai");
        b[0].value = "";
        b[0].focus();
        b[1].value = "";
        b[1].focus();
        return false;
    }

    if (b[0].value < 0 || b[1].value < 0) {
        alert("nhap lai lan 2");
        b[0].value = "";
        b[0].focus();
        b[1].value = "";
        b[1].focus();
        return false;

    } else if (b[0].value >= 0 || b[1].value >= 0) {
        d = parseInt(b[0].value);
        e = parseInt(b[1].value);
        var c = d + e;
    }

    document.getElementById('hotenn').innerHTML = a[0].value;
    document.getElementById('mssvv').innerHTML = a[1].value;
    document.getElementById('lt').innerHTML = b[0].value;
    document.getElementById('th').innerHTML = b[1].value;
    document.getElementById('tongtinchi').innerHTML = c;


}