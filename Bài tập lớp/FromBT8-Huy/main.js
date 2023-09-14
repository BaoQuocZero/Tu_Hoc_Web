function show1(){

    var a = document.querySelectorAll('form input[type = "text"]');
    var b = document.querySelector('form input[type = "password"]').value;
    var c = document.querySelector('form select').value;



if(a[1].value==""){
    alert("nhap lai ho bo may cai");
    a[1].focus();
    return false;
}
else if (b.length < 6 || b.length>12){
          alert("nhap lai mat khau di thang lo`")
            b="";
            b.focus();
            return false;
         }

         else{
            document.getElementById('hoten').innerHTML = a[0].value;

            document.getElementById('tendangnhap').innerHTML = a[1].value;
            document.getElementById('matkhau').innerHTML = b;
            document.getElementById('quequan').innerHTML = c;
            return true;
         }

}