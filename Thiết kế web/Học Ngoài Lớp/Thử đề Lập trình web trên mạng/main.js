var Ten = document.DN.usename.value;
function DangNhap() {
    var MatKhau = document.DN.pass.value;
    if (Ten == "") {
        document.DN.usename.focus();
        document.getElementById("usenameSai").innerHTML = "Tên không được rỗng"
    } else
        if (MatKhau == "") {
            document.DN.pass.focus();
            document.getElementById("passSai").innerHTML = "Mật khẩu không được rỗng"
        } else
            if (MatKhau != "admin") {
                document.DN.pass.value == ""
                document.DN.pass.focus();
                document.getElementById("passSai").innerHTML = "Mật khẩu là admin"
            }
}