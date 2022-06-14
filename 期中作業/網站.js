function countrySelect(){

    var du = document.getElementById("country").value;
    
    var link = "https://corona.lmao.ninja/v2/countries/"+du;
    
     fetch(link)
    
    .then((response) => {
    
    return response.json();
    })
    .then((data) => {
    
    var number1=parseFloat(data.cases);
    
    var number2= parseFloat(data.deaths);
    
    var number3=((number2/number1)*100).toFixed(2)+'%';
    
    
    document.getElementById("today").innerHTML= data.todayCases.toLocaleString();
    
    document.getElementById("cases").innerHTML= data.cases.toLocaleString();
    
    document.getElementById("rate").innerHTML= number3;
    
    document.getElementById("death").innerHTML= data.deaths.toLocaleString();
    
    
    });
    
    }