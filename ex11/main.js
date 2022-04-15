function mathTable(){
    let first=Number(document.getElementById("first").value);
    let second=Number(document.getElementById("second").value);
    let add = first+second;
    let subs = first-second;
    let mult = first * second;
    let divs = first/second;

    let content = `<tr>
       <td>${first} + ${second} = </td>
       <td>${add}</td>
    </tr>
    <tr>
        <td>${first} - ${second} = </td>
        <td>${subs}</td>
    </tr>
    <tr>
        <td>${first} * ${second} = </td>
        <td>${mult}</td>
    </tr>
    <tr>
        <td>${first} / ${second} = </td>
        <td>${divs}</td>
    </tr>`;
    document.getElementById("tables").innerHTML=content;
}
