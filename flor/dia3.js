

function bisiesto(){
    var year = prompt ("Dime el año");
        if (year % 4 == 0 && year % 100 != 0){
            console.log("Amigo, el año " + year + " es bisiesto!");
        
        }else{
            if (year % 400 == 0 && year % 100 == 0){
                console.log("Amigo, el año " + year + " es bisiesto!");
            } else{
                console.log("Amigo, el año " + year + " NO es bisiesto!");
            }
        }
}

bisiesto();




function contador(){
    console.log("Empieza la cuenta");
        for (var i = 1; i <= 100; i++){
            console.log(i);           
        }        
}

contador();






function contador2(){
    console.log("Empieza la cuenta atrás");
        for (var i = 100; i >= 1; i--){
            console.log(i);           
        }        
}

contador2();






function contador3(){
    console.log("Empieza la cuenta");
        for (var i = 2; i <= 100; i = i + 2){
            console.log(i);           
        }        
}

contador3();

