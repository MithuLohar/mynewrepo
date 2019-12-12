function addNumber() {
    var firstNumber=parseInt(document.getElementById("firstnumber").value);
    if (firstNumber==="") {
        alert('please add number');
        return;
    } ; 
    var secondNumber=parseInt(document.getElementById("secondnumber").value);
    
    if (secondNumber==="") {
        alert('please add number');
        return;
    } ;   
    

    
    var result=firstNumber+secondNumber;
    document.getElementById('result').value=result;


    if (isNaN(firstNumber)) {
        alert('please add number') ;
        return;
    } ; 
    if (isNaN(secondNumber)) {
        alert('please add number');
        return;
    };  
}    

