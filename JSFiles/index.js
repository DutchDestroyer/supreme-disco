document.getElementById('date').innerHTML = new Date().toDateString();

var a = 1;
var isDone = false;
setInterval(() => {
    a+=1;
    document.getElementById('countDown').innerHTML = a;

    if(a > 100 && !isDone)
    {
        isDone = true;
        setPicturesToVisible();
    }
    if(a % 100 == 0){
        addElement(a);
    }
}, 50);

function setPicturesToVisible(){
    var elems = document.getElementsByClassName('image-section');
    
    for(i = 0; i < elems.length; i++){
        elems[i].style = "visibility: visible;"
    }
}


