function dangky() {
    var ten = document.fromBT.hten.value
    var mssv = document.fromBT.Mssv.value
    var l = document.fromBT.lt.value
    var t = document.fromBT.th.value

    l = Number(l)
    t = Number(t)

    if (ten == "") {
        alert("Tên rỗng")
        document.fromBT.hten.value = ""
        document.fromBT.hten.focus()
    } else {
        if (mssv == "") {
            alert("MSSV rỗng")
            document.fromBT.Mssv.value = ""
            document.fromBT.Mssv.focus()
        } else {
            if (mssv.length != 9) {
                alert("Nhập lại MSSV")
                document.fromBT.Mssv.value = ""
                document.fromBT.Mssv.focus()
            } else {
                if (l == "" || l < 0) {
                    alert("Lý Thuyết không âm và không rỗng")
                    document.fromBT.lt.value = ""
                    document.fromBT.lt.focus()
                } else {
                    if (t == "" || t < 0) {
                        alert("Thực Hành không âm và không rỗng")
                        document.fromBT.th.value = ""
                        document.fromBT.th.focus()
                    }else{
                        document.getElementById('inHT').innerHTML = ten
                        document.getElementById('inMSSV').innerHTML = mssv
                        document.getElementById('inLT').innerHTML = l
                        document.getElementById('inTH').innerHTML = t                       
                        document.getElementById('inTONG').innerHTML = l + t
                        console.log(l + t)
                    }
                }
            }
        }
    }
}