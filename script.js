function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100; //Calculate interest received
    var year = new Date().getFullYear()+parseInt(years); //Create date object for output
    
    document.getElementById("result").innerHTML= ""; //Clear previous outputs, if any 
    if (principal == "" || principal <= 0) { //Add validation for Principal
    alert("Enter a positive number");
    document.getElementById("principal").focus() //Center user on the principal input
    }
    else { //If positive principal, provide output with highlighted results
    document.getElementById("result").innerHTML=
    "If you deposit \<span class\='highlight'\>$"+principal+"\<\/span\>,\<br\>at an interest rate of \<span class\='highlight'\>"+rate+"%\<\/span\>.\<br\>You will receive an amount of \<span class\='highlight'\>"+interest+"\<\/span\>,\<br\>in the year \<span class\='highlight'\>"+year+"\<\/span\>\<br\>";
    }
}
function updateRate()
{
    //Dynamically update the range text as user drags the slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
