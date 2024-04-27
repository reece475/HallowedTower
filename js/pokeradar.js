
//Makes sure the input stays above 1 and under 41
function chain(){
    encounters = document.getElementById("chainNum").value;
    if (encounters > 40){
        encounters = 40;
        chainCalc();
    }else if (encounters < 1){
        encounters = 1;
        chainCalc();
    }else{
        chainCalc();
    }
}

//Takes chain number and calculates shiny odds
function chainCalc(){
    //Calculates the numbers we need
    odds = ((65535/(8200-encounters*200))/65536)*100;
    //Rounds it to 3 decimal points
    odds = odds.toFixed(3);

    //Prints string
    document.getElementById("results").innerHTML = `At a chain of <u>${encounters}</u>, each patch has a chance of <u>${odds}%</u> of being shiny, or approximately <u>${odds*4}%</u> per use. `;


}


