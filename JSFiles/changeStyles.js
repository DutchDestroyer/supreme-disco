function changeElementStyleOfClass(className, styleToChange){
    var elems = document.getElementsByClassName(className);
    
    for(i = 0; i < elems.length; i++){
        elems[i].style = styleToChange;
    }
}