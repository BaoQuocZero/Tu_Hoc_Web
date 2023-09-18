function searchFunction() {
    let input = document.getElementById('searchBox');
    let filter = input.value.toUpperCase();
    let content = document.getElementById('content');
    let textValue = content.textContent || content.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
        content.style.display = "";
    } else {
        content.style.display = "none";
    }
}