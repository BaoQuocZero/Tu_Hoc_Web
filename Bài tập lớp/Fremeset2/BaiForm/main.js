function login(){
    var tendangnhap = "bao";
    var matkhau ="123";

    var inputtentaikhoang=document.getElementById("text").value;
    console.log(inputtentaikhoang);

    var inputpass=document.getElementById("password").value;
    console.log(inputpass);

    if (tendangnhap==inputtentaikhoang && matkhau==inputpass){
        alert('Đăng nhập thành công');
        window.location.href = 'indexBT.html';
    }
    else
    alert('Sai');
}