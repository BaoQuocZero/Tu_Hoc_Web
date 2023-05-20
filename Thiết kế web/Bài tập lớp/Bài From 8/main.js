function buy() {
    var kiemtra = true

    var prd_tonKho1 = 3;
    var prd_tonKho2 = 7;
    var prd_tonKho3 = 2;
    var prd_tonKho4 = 7;
    

    var prd1 = document.product.product1.value;
    var prd2 = document.product.product2.value;
    var prd3 = document.product.product3.value;
    var prd4 = document.product.product4.value;

    if (prd1 > prd_tonKho1 || prd1 < 0) {
        alert("Số lượng mua không hợp lệ")
        document.getElementById('tonkho1').style.color = 'red'
        kiemtra = false;
    } else {
        // kiemtra = true
        document.getElementById('tonkho1').style.color = 'black'
    }
    
    if (prd2 > prd_tonKho2 || prd2 < 0) {
        alert("Số lượng mua không hợp lệ")
        document.getElementById('tonkho2').style.color = 'red'
        kiemtra = false;
    } else {
        // kiemtra = true
        document.getElementById('tonkho2').style.color = 'black'
    }

    if (prd3 > prd_tonKho3 || prd3 < 0) {
        alert("Số lượng mua không hợp lệ")
        document.getElementById('tonkho3').style.color = 'red'
        kiemtra = false;
    } else {
        // kiemtra = true
        document.getElementById('tonkho3').style.color = 'black'
    }

    if (prd4 > prd_tonKho4 || prd4 < 0) {
        alert("Số lượng mua không hợp lệ")
        document.getElementById('tonkho4').style.color = 'red'
        kiemtra = false;
    } else {
        // kiemtra = true
        document.getElementById('tonkho4').style.color = 'black'
    }

    if (prd1 != 0 || prd2 != 0 || prd3 != 0 || prd4 != 0) {
        document.getElementById("tong").innerHTML = prd1 * 10 + prd2 * 10 + prd3 * 10 + prd4 * 10;
    }

    if (kiemtra == false) {
        document.getElementById('button_mua').style.display = 'none'
    }
    if (kiemtra == true) {
        document.getElementById('button_mua').style.display = 'block'
    }
}

function mua() {
    var prd1 = document.product.product1.value;
    var prd2 = document.product.product2.value;
    var prd3 = document.product.product3.value;
    var prd4 = document.product.product4.value;
    document.getElementById('idbuy').style.display = 'block'
    document.getElementById("thanhtoan").innerHTML = prd1 * 10 + prd2 * 10 + prd3 * 10 + prd4 * 10;
}

function xacnhan() {
    var tenkh = document.Fxacnhan.ten.value
    var phone = document.Fxacnhan.sdt.value
    var age = document.Fxacnhan.tuoi.value

    if (age < 18 || phone == "" || phone <=0 || tenkh == "") {
        alert("Thông tin không hợp lệ")
        document.Fxacnhan.tuoi.value = "";
        document.Fxacnhan.tuoi.focus();
    } else {
        alert("Hàng sẽ được gửi đến trong 7 ngày")
        document.getElementById('idbuy').style.display = 'none'
    }
}

