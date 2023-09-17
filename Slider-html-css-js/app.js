
document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.slide-item');
    document.getElementById('slide').appendChild(lists[0]);
    // appendChild thay vị trí 0 thành vị trí cuối cùng
}

document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.slide-item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    // prepend ngược lại
}