function myFunction() {
    let text = document.getElementById("myText").value;
    const arr = text.split(",");
    let counter = {};
    arr.forEach(function (val) {
    counter[val] = (counter[val] || 0) + 1;});
    console.log(counter);
    const values = Object.values(counter);
    document.getElementById("res").innerHTML = Math.max(...values);

}