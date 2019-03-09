function addElement(counter){

    var iDiv = createDiv();
    var img = createImg("https://source.unsplash.com/random/400x200");
    var p2 = createParagraph(counter);
      
    iDiv.appendChild(img);
    iDiv.appendChild(p2);
}

function createDiv(){
    // Your existing code unmodified...
    var iDiv = document.createElement('div');
    iDiv.id = 'block' + counter;
    iDiv.className = 'section-style';
    document.getElementsByClassName('image-section')[0].appendChild(iDiv);

    return iDiv;
}

function createImg(source){
    var img = document.createElement('img');
    img.src = source;
    img.alt="";

    return img;
}

function createParagraph(stringValue){
    var p2 = document.createElement('p');
    p2.textContent = stringValue;

    return p2;
}