var input=document.getElementById('result');

input.addEventListener('keydown',(e)=>{
    let ch=e.key;
    if(ch>='A'&& ch<='Z' || ch>='a'&&ch<='z'){
        var interval=setInterval(() => {
            input.value="press only digits";
            clearInterval(interval);
        }, 100);
    }
})

function appendToDisplay(char){
    input.value+=char;
}
function Clear(){
    input.value="";
}
function square(){
    input.value=Math.pow(input.value,2);
}
function squareRoot(){
    input.value=Math.sqrt(input.value);
}
function calculate(){
    try{
        input.value=eval(input.value);
    }
    catch(e){
        input.value="Syntax error"
    }  
}
function Delete(){
    let inputArray=input.value.split('');
    inputArray.pop();
    input.value=inputArray.join('');
}