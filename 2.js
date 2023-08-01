
let element= document.getElementById('ss')

    function table1() {
        element.innerHTML=""
        let num1= parseInt (document.getElementById(`s1`).value);
for(let num=1; num< 11; num++){
    element.innerHTML+= `${num1} x ${num} = ${num* num1} <br>`
}}

let element2= document.getElementById('s2')
function table() {
    element2.innerHTML=""
    let num2=document.getElementById(`s3`).value;
for(let num=1; num< 11; num++){
element2.innerHTML+= `${num2} x ${num} = ${num* num2} <br>`
}}

let element5=document.getElementById('s5')
function table3() {
    element5.innerHTML=""
    let start=parseInt (document.getElementById(`startNumber`).value);
    let end=parseInt(document.getElementById(`endNumber`).value);
    let input=parseInt(document.getElementById(`inputNumber`).value);
for(let num=start; num<= end; num++){
element5.innerHTML+= `${input} x ${num} = ${num* input} <br>`
}
}

function reset(){
    element.innerHTML="";
    element.innerHTML='view table on click';
}

function reset1(){
    element2.innerHTML="";
    element2.innerHTML="view table auto";
}
function reset5(){
    element5.innerHTML="";
    element5.innerHTML="view table on click";
}