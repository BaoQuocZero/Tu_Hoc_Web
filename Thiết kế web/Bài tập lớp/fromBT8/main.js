function nhaplieu() {
    var ht = document.formBT8.ht.value;
    var tdn = document.formBT8.tdn.value;
    var mk = document.formBT8.mk.value;
    var qq = document.formBT8.qq.value;

    if(tdn==""){
        alert("Chưa có tên đăng nhập");
        document.formBT8.tdn.focus();
        return false;
    }else if(tdn.length < 6){
        alert("Mật khẩu sai")
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