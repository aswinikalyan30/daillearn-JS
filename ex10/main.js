function myFunction(){
    let str = document.getElementById("myText").value;
    let array = [...str];//the triple dot operator is called spread operator, newly introduced in es6. It takes in an iterable (e.g an array) and expands it into individual elements. 
    for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j <= array.length; j++)
        if (array[i] === array[j])
        array.splice(j, 1) //splice removes or adds a character. Here it is removing the j-th element appearing more than once
    }
    document.getElementById("res").innerHTML= array.join('');
}