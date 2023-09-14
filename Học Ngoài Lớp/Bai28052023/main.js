danhsach = []

function xuly() {
    hs = {
        ten: "",
        tuoi: null,
        khoa: "",
        email: ""
    }
    var inputA = document.getElementsByClassName("form - input")
    hs.ten = inputA[0].value
    hs.tuoi = inputA[1].value
    hs.khoa = inputA[2].value
    hs.email = inputA[3].value
    console.log(hs)
    this.danhsach.push(hs)
    console.log(danhsach)
}