// Variables for SID and TID
let A;
let B;
let C;
let D;
let tid;
let sid;

//Variables for just TID
let ATID;
let BTID;
let tidOnly;

// Our array of honey trees
const honeyTrees = ["Route 205 South", "Route 205 North", "Route 206", "Route 207", 
"Route 208", "Route 209", "Route 210 South", "Route 210 North", "Route 211",
"Route 212 North", "Route 212 South", "Route 213", "Route 214", "Route 215", "Route 218",
"Route 221", "Route 222", "Valley Windworks", "Eterna Forest", "Fuego Ironworks", "Floaroma Meadow"]

// Does the math and magic to give us our honey trees
// Based on the TID and SID the user enters
function honeyTree(){
    // Rounds each decimal DOWN
    A = Math.floor((sid%256)%21);
    B = Math.floor((sid/256)%21);
    C = Math.floor((tid%256)%21);
    D = Math.floor((tid/256)%21);

    //Stops numbers from being the same or higher than our
    //     highest value in the array
    if (A == B){
        B+=1;
        if (B == 21){
            B=0;
        }
    }

    if (A == C){
        C+=1;
        if (C == 21){
            C=0;
        }
    }

    if (B == C){
        C+=1;
        if (C == 21){
            C=0;
        }
    }

    if (A == D){
        D+=1;
        if (D == 21){
            D=0;
        }
    }

    if (B == D){
        D+=1;
        if (D == 21){
            D=0;
        }
    }

    if (C == D){
        D+=1;
        if (D == 21){
            D=0;
        }
    }

    // Shoots the answer back to the HTML page
    document.getElementById('here').innerHTML = 
    "Your trees are <u>" + honeyTrees[A] + "</u>, <u>" + honeyTrees[B] + "</u>, <u>" +
    honeyTrees[C] + "</u>, and <u>" + honeyTrees[D] + "</u>";

}

//Code for JUST the TID
function honeyTreeTID(){
    tidOnly = document.getElementById('TIDOnly').value;

    // Rounds each decimal DOWN
    ATID = Math.floor((tidOnly%256)%21);
    BTID = Math.floor((tidOnly/256)%21);

    //Stops numbers from being the same or higher than our
    //     highest value in the array

    if (ATID == BTID){
        BTID+=1;
        if (BTID == 21){
            BTID=0;
        }
    }
    // Shoots the answer back to the HTML page
    document.getElementById('here').innerHTML = 
    "Your trees are <u>" + honeyTrees[ATID] + "</u>, and <u>" + honeyTrees[BTID];

}

//BOTH SID AND TID
function calculate(){
    tid = document.getElementById('TID').value;
    sid = document.getElementById('SID').value;

    if (isNaN(tid)){
        document.getElementById('here').innerHTML = "Please enter a valid TID/SID"
    }else if (isNaN(sid)){
        document.getElementById('here').innerHTML = "Please enter a valid TID/SID"
    }else if (tid > 65535){
        document.getElementById('here').innerHTML = "Please enter a valid TID/SID"
    }else if (sid > 65535){
        document.getElementById('here').innerHTML = "Please enter a valid TID/SID"
    }else{
        honeyTree()
    }
}

//ONLY TID
function calculateTID(){
    ATID = document.getElementById('TIDOnly').value;

    if (isNaN(ATID)){
        document.getElementById('here').innerHTML = "Please enter a valid TID/SID"
    }else if (ATID > 65535){
        document.getElementById('here').innerHTML = "Please enter a valid TID/SID"
    }else{
        honeyTreeTID()
    }
}

//Hides the TID menu when SID + TID radio button is pressed and makes the SID + TID menu appear
function hideTID(){
    document.getElementById("TID_SID_Input").hidden = false;
    document.getElementById("TID_Input").hidden = true;
}

//Hides the SID + TID menu when TID radio button is pressed and makes the TID menu appear
function hideSID(){
    document.getElementById("TID_Input").hidden = false;
    document.getElementById("TID_SID_Input").hidden = true;

}

function hideLocations(){
    if (document.getElementById("honeyTreeLocations").style.display === "none"){
        document.getElementById("honeyTreeLocations").style.display = "block";
    }else{
        document.getElementById("honeyTreeLocations").style.display = "none";
    }
}









