var product
var inName = document.getElementById('Name');
var inPhone = document.getElementById('Phone')
var inEmail  = document.getElementById('Email')
var inAddress  = document.getElementById('Address')

var show = document.getElementById('mua');
var check = false;
function MUTOSI(){
if (check)  {

  show.style.display='block';
 check = false;
}
else{
    show.style.display='none';
    check = true;
}



}