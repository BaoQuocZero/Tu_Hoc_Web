//Các câu lệnh không cần thiết phải có dấu ; vì xuống dòng sẽ tương đương với dấu ;
var fullName=('Nguyễn Lâm Quốc Bảo')
var age=20
// alert('Hi')
// alert(fullName)
// alert(age)

// =============================================================================================================

/**
Một số hàm built-in
    alert
    console
    confim
    prompt
    set timeout
    set interval
*/ 

// alert('Đây là công dụng của alert')

// console.log('In dòng chữ thông báo ở phần Console F12')
// console.log(fullName+' có thể in biến')

// confirm('Xác nhận bạn đủ tuổi')//hiện hộp thoại có ok và cancel

// prompt('Xác nhận bạn đủ tuổi')//giống confim nhưng có thêm ô nhập dữ liệu

// setTimeout(function() {
//     alert('1000 mili giây đã qua')
// }, 1000)//Thực hiện lệnh 1 lần sau 1000 mili giây

// setInterval(function() {
//     console.log('Đây là log'+Math.random())
// }, 1000)//Thực hiện lệnh liên tục 1 lần mỗi 1000 mili giây

// =============================================================================================================

/*
Toán tử trong Java
    Toán tử số học
    Toán tử gán
    Toán tử so sánh
    Toán tử logic
*/

// var a=1
// var b=2

// if(a>b) {
//     alert('Đúng')
// }

// if(a>0 && b>0) {
//     alert('a & b >0')
// }

// =============================================================================================================

/*
Toán tử số học
    +       >> cộng
    -       >> trừ
    *       >> nhân
    **      >> lũy thừa
    /       >> chia
    %       >> chia lấy dư
    ++      >> tăng 1
    --      >> giảm 1
*/

// var a=2
// var b=2

// var c=a/b
// console.log(c)

// var c=a**b
// console.log(c)

// var c=a%b
// console.log(c)

// var c=a-b
// console.log(c)

// =============================================================================================================

//Toán tử ++ --
//Prefix & Postfix (Tiền tố & Hậu tố)

/*
++a 
Tiền tố   
    a=a+1  
    trả về a+1
*/

/*
a++ 
Hậu tố   
    tạo 'a copy' >> 'a copy'= a
    a=a+1  
    trả về 'a copy'
*/

// var a=6
// var b=6

// var output = ++a
// alert(output)

// var output = b++
// alert(output)

// =============================================================================================================

/*
Toán tử gán

Toán tử     Ví dụ       Tương đương
=           x=y         x= y
+=          x+=y        x= x+y
-=          x-=y        x= x-y
*=          x*=y        x= x*y
/=          x/=y        x= x/y
**=         x**=y       x= x**y

*/

// var a=2
// a += 2

// console.log(a)

// =============================================================================================================

