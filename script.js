function compute()
{

     var principal = document.getElementById("principal").value;
     var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
      var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
/*
Below is a function that reads the value of the range slider and displays
*/
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
    
}
        
