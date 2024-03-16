// Function for calculating the percentage odds and fraction odds of finding a shiny
function generateOdds(){
    encounters = document.getElementById("encounters").value;
    odds = document.getElementById("odds").value;
    
    //Math for the percentage
    shinyPercentage = (100 * (1-(Math.pow(((odds-1)/odds), encounters))))
    shinyPercentage = Math.round(shinyPercentage*100)/100;

    //Math for the fraction
    shinyFractal = Math.round(((1 / (1 - ((1 - Math.pow(1 - (1 / odds), encounters)) * 100 / 100))) + Number.EPSILON) * 100) / 100;

    //Assembles the string
    document.getElementById("shinyChanceCalculation").innerHTML = `Doing <u>${encounters}</u> encounters at the odds of <u> 1/${odds}</u> has a ${shinyPercentage}%
    chance of getting at least one shiny. The odds of going this long without a shiny is 1/${shinyFractal}`
}

//Validates input
function validateShiny(){
    let encounters = document.getElementById("encounters").value;
    let odds = document.getElementById("odds").value;

    //Makes sure input is a number, as well greater than 0
    if (isNaN(odds)){
        document.getElementById('shinyChanceCalculation').innerHTML = "Please enter a number for Odds.";
    }else if (isNaN(encounters)){
        document.getElementById('shinyChanceCalculation').innerHTML = "Please enter a number for Encounters.";
    }else if(odds <= 0){
        document.getElementById('shinyChanceCalculation').innerHTML = "Please enter a number above zero for Odds."
    }else if(encounters <= 0){
        document.getElementById('shinyChanceCalculation').innerHTML = "Please enter a number above zero for Encounters"
    }else{
        generateOdds();
    }
}