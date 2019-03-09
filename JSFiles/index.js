document.getElementById('date').innerHTML = new Date().toDateString();

var counter = 1;
var isDone = false;
setInterval(() => {
    counter+=1;
    document.getElementById('countDown').innerHTML = counter;

    if(counter > 100 && !isDone)
    {
        isDone = true;
        changeElementStyleOfClass('image-section', "visibility: visible;");
    }
    if(counter % 100 == 0){
        addElement(counter);
    }
}, 50);




