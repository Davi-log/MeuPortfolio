var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 3000);

var val = 1;
setInterval(function(){
    document.getElementById('radial' + val).checked = true;
    val++;
    if(val > 4){
        val = 1;
    }
}, 3000);
