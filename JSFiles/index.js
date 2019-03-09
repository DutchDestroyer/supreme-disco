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
        addPicture(a);
    }
}, 50);

function setPicturesToVisible(){
    var elems = document.getElementsByClassName('image-section');
    
    for(i = 0; i < elems.length; i++){
        elems[i].style = "visibility: visible;"
    }
}

function addPicture(counter){
    // Your existing code unmodified...
    var iDiv = document.createElement('div');
    iDiv.id = 'block' + counter;
    iDiv.className = 'section-style';
    document.getElementsByClassName('image-section')[0].appendChild(iDiv);

    var img = document.createElement('img');
    img.src = "https://source.unsplash.com/random/400x200";
    img.alt="";

    var p2 = "<p>A random image courtesy of unsplash.com.</p>";

    iDiv.appendChild(img);
    iDiv.appendChild(p2);

}
