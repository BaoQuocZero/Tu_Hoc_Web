function nhaplieu() {
    var ht = document.formBT8.ht.value;
    var tdn = document.formBT8.tdn.value;
    var mk = document.formBT8.mk.value;
    var qq = document.formBT8.qq.value;

    var show = document.getElementById('table')
    show.style.display='flex'

    if(tdn==""){
        alert("Chưa có tên đăng nhập");
        document.formBT8.tdn.focus();
        return false;
    }else if(mk.length < 6 && mk.length > 12){
        alert("Mật khẩu từ 6 đến 12 ký tự")
        document.formBT8.tdn.value="";
        document.formBT8.tdn.focus();
        return false;
    }else{
        document.getElementById("ht1").innerHTML = ht;
        document.getElementById("tdn1").innerHTML = tdn;
        document.getElementById("mk1").innerHTML = mk;
        document.getElementById("qq1").innerHTML = qq;
        return true;
    }

}