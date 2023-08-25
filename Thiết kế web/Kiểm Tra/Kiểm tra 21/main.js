function tinhtien() {
    var ten = document.fromBT.hten.value
    var chi = document.fromBT.dchi.value

    var trKW = document.fromBT.KWtruoc.value
    var saKW = document.fromBT.KWsau.value

    if (ten == "") {
        alert("Tên rỗng")
        document.fromBT.hten.value = ""
        document.fromBT.hten.focus()
    } else {
        if (chi == "") {
            alert("Địa chỉ rỗng")
            document.fromBT.dchi.value = ""
            document.fromBT.dchi.focus()
        } else {
            if (trKW <= 0) {
                alert("Số KW trước không âm")
                document.fromBT.KWtruoc.focus()
            } else {
                if (saKW <= 0) {
                    alert("Số KW sau không âm")
                    document.fromBT.KWsau.focus()
                } else {
                    if (trKW > saKW) {
                        alert("Số KW trước phải nhỏ hơn KW sau")
                        document.fromBT.KWtruoc.value = ""
                        document.fromBT.KWsau.value = ""
                        document.fromBT.KWtruoc.focus()
                    } else {
                        if (saKW - trKW <= 100) {
                            document.getElementById('inHten').innerHTML = ten
                            document.getElementById('inDchi').innerHTML = chi
                            document.getElementById('inKWtruoc').innerHTML = trKW
                            document.getElementById('inKWsau').innerHTML = saKW
                            document.getElementById('inTien').innerHTML = (saKW - trKW) * 1.05
                        } else {
                            document.getElementById('inHten').innerHTML = ten
                            document.getElementById('inDchi').innerHTML = chi
                            document.getElementById('inKWtruoc').innerHTML = trKW
                            document.getElementById('inKWsau').innerHTML = saKW
                            document.getElementById('inTien').innerHTML = 105 + ((saKW - trKW) - 100)
                        }
                    }
                }
            }
        }
    }
}