function add(){
    var r=parseFloat(document.getElementById('n1').value);
    var s=parseFloat(document.getElementById('n2').value);
    document.getElementById('n3').value=r+s;
}
function sub(){
    var r=parseFloat(document.getElementById('n1').value);
    var s=parseFloat(document.getElementById('n2').value);
    document.getElementById('n3').value=r-s;
}
function mul(){
    var r=parseFloat(document.getElementById('n1').value);
    var s=parseFloat(document.getElementById('n2').value);
    document.getElementById('n3').value=r*s;
}
function div(){
    var r=parseFloat(document.getElementById('n1').value);
    var s=parseFloat(document.getElementById('n2').value);
    if(s!=0){
        parseFloat(document.getElementById('n3').value=r/s);
    }
    else{
        alert(document.write("cannot divide by zero"));
    }
}
    