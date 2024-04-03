/* Array where D/P Events are stored*/
const dpEvents = [
    "Nzone Pikachu",
    "Toys R Us Shaymin",
    "Worlds '08 Lucario",
    "Toys R Us Regigigas",
    "Movie 11 Shaymin",
    "Shiny Milotic",
    "European Summer 2009 Regigigas",
    "Worlds '09 Weavile",
    "Member Card",
    "Australian Michina Arceus",
    "Arceus",
    "Toys R Us Manaphy",
    "Matchup Checker",
    "Stopwatch (Unofficial)",
    "Alarm Clock (Unofficial)",
    "Azure Flute (Unofficial)",
    "Lucario Doll",
    "Oak's Letter",
    "Pikachu Colored Pichu",
    "Latin America Jirachi",
    "Manaphy Event",
    "Shiny Raikou",
    "Shiny Entei",
    "Shiny Suicune",
    "Winter 2011 Celebi",
    "Ash's Pikachu",
    "Worlds '10 Crobat",
    "E 4 All Manaphy",
    "Gamestop Deoxys",
    "Darkrai",
    "European Darkrai",
    "Rise of Darkrai",
    "Toys R Us Dragonite"
];

/* Array where D/P dates are stored for each event */
const dpDates = [
    "05/18",
    "05/19",
    "05/20",
    "05/21",
    "05/22",
    "05/23",
    "05/24",
    "05/25",
    "05/26",
    "05/27",
    "05/28",
    "05/30",
    "05/31",
    "06/01",
    "06/02",
    "06/03",
    "06/04",
    "06/05",
    "06/06",
    "06/08",
    "06/12",
    "06/13",
    "06/16",
    "06/18",
    "06/20",
    "06/23",
    "06/24",
    "06/25",
    "06/27",
    "06/28",
    "06/29",
    "06/30",
    "07/01"
];

/* Array where Platinum Events are stored*/
const platEvents = [
    "Shiny Raikou",
    "Shiny Entei",
    "Shiny Suicune",
    "Celebi",
    "Ash's Pikachu",
    "Kona Crobat",
    "Shiny Milotic",
    "Secret Key",
    "Regigigas",
    "Member Card",
    "Arceus",
    "Stopwatch (Unofficial)",
    "Alarm Clock (Unofficial)_",
    "Azure Flute (Unofficial)",
    "Lucario Doll",
    "Oak's Letter",
    "Pikachu Colored Pichu",
    "Jirachi"
];

/* Array where Platinum dates are stored for each event */
const platDates = [
    "05/15",
    "05/17",
    "05/19",
    "05/21",
    "05/24",
    "05/25",
    "05/26",
    "05/27",
    "05/28",
    "05/29",
    "05/30",
    "06/02",
    "06/03",
    "06/04",
    "06/05",
    "06/06",
    "06/07",
    "06/09"
];

/* Array where HG/SS Events are stored*/
const hgssEvents = [
"Route Map - Rally",
"Route Map - Amity Meadow",
"Lock Capsule (Unofficial)",
"Make a Wish with Jirachi!",
"Route Map - Yellow Forest",
"Route Map - Winner's Path",
"Shiny Eevee",
"Mew",
"The Enigma Stone",
"Shiny Raikou",
"Shiny Entei",
"Shiny Suicune",
"Celebi",
"Ash's Pikachu",
"Kona Crobat",
"Route Map - Sightseeing",
];

/* Array where HG/SS dates are stored for each event */
const hgssDates = [
"01/02",
"01/03",
"01/04",
"01/05",
"01/07",
"01/08",
"01/09",
"01/10",
"01/11",
"01/12",
"01/14",
"01/16",
"01/18",
"01/21",
"01/22",
"01/23",
];

/* Grabs the eventSelection as a variable */
var select = document.getElementById("eventSelection");


/* Code for DP Events */
function populateDP(){
    document.getElementById("eventSelection").innerHTML = "";
    for(var i = 0; i < dpEvents.length; i++) {
        var opt = dpEvents[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

/* Code for Plat Events */
function populatePlat(){
    document.getElementById("eventSelection").innerHTML = "";
    for(var i = 0; i < platEvents.length; i++) {
        var opt = platEvents[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

/* Code for HGSS Events */
function populateHGSS(){
    document.getElementById("eventSelection").innerHTML = "";
    for(var i = 0; i < hgssEvents.length; i++) {
        var opt = hgssEvents[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

/* This function is called when the user chooses a game from the game list
    When a game is clicked, it will clear the options first, then it will populate 
    the event list with the corresponding array
 */
function eventChanger(){
    if (document.getElementById("gameSelection").value === "dpGame"){
        populateDP();
    }else if(document.getElementById("gameSelection").value === "platGame"){
        populatePlat();
    }else if (document.getElementById("gameSelection").value === "hgssGame"){
        populateHGSS();
    }
}

/* 
This function is called when the user clicks the calculate button
It checks the current game selected, then checks the index of the event chosen
It then uses that index to check the corresponding date array, then prints out
that result on the webpage
*/
function getDate(){
    var date = document.getElementById("eventSelection").selectedIndex;
    if (document.getElementById("gameSelection").value === "dpGame"){
        document.getElementById("result").innerHTML = "For this event change your date to: " + dpDates[date];        
    }else if(document.getElementById("gameSelection").value === "platGame"){
        document.getElementById("result").innerHTML = "For this event change your date to: " + platDates[date];        
    }else if (document.getElementById("gameSelection").value === "hgssGame"){
        document.getElementById("result").innerHTML = "For this event change your date to: " + hgssDates[date];        
    } 
}



