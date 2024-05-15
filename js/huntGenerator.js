//Creates a class called HUNT to store all the data for each hunt
//Lets us also call on each individual piece of information for each hunt
class Hunt{
    constructor(pokemon, sprite, type, method, encounterRate, location){
        this.pokemon = pokemon;
        this.sprite = sprite;
        this.type = type;
        this.method = method;
        this.encounterRate = encounterRate;
        this.location = location;
    }
}

//Code to create each individual hunt as an object we can store in the arrays
let spiritomb = new Hunt(
    "Spiritomb", "<img src=../../images/huntGenerator/spiritombShiny.gif class='sprites'>", "Soft Resets", 
    "After talking to 32 people underground, you can encounter and soft reset for Spiritomb at the Hallowed Tower.", 
    "100%", "Route 209"
);
let dusclops = new Hunt(
    "Dusclops", "<img src=../../images/huntGenerator/dusclopsShiny.gif class='sprites'>", "Random Encounters/Repel Trick", 
    "At <u>night</u>, there is a <u>Level 39 Repel Trick</u> to find Dusclops", 
    "50%", "Sendoff Spring"
);
let hgssStarter = new Hunt(
    "Cyndaquil/Chikorita/Totodile", "<img src=../../images/huntGenerator/cyndaquilShiny.gif class='sprites'> <img src=../../images/huntGenerator/chikoritaShiny.gif class='sprites'> <img src=../../images/huntGenerator/totodileShiny.gif class='sprites'>", "Soft Resets",
    "Resetting for these at Birch's Lab is great because you can check if they're shiny without having to actually pick one! Simply scroll through all three, and if none of them are shiny, reset! This is likely the fastest 8192 hunt in Generation 4.", "100%", "Professor Birch's Lab"
);
let bronzongDP = new Hunt(
    "Bronzong", "<img src=../../images/huntGenerator/bronzongShiny.gif class='sprites'>", "Random Encounters/Magnet Pull", 
    "Random encounters with a Magnet Pull Pokemon at the front of your party makes this hunt super easy to do!", 
    "62.5%", "Mt. Coronet (4F-7F)"
);
let bronzongPlat = new Hunt(
    "Bronzong", "<img src=../../images/huntGenerator/bronzongShiny.gif class='sprites'>", "Random Encounters/Magnet Pull", 
    "Random encounters with a Magnet Pull Pokemon at the front of your party makes this hunt super easy to do!", 
    "60%", "Mt. Coronet (2F-7F)"
);
let miltank = new Hunt(
    "Miltank", "<img src=../../images/huntGenerator/miltankShiny.gif class='sprites'>", "Random Encounters/Repel Trick",
    "With a <u>Level 35 Repel Trick</u> this is one of the easiest ways to hunt Miltank in HGSS!", 
    "48.78%", "Route 47 (Grass Patch Up the Waterfall)" 
);
let scyther = new Hunt(
    "Scyther", "<img src=../../images/huntGenerator/scytherShiny.gif class='sprites'>", "Random Encounters/Repel Trick",
    "In <u>the morning</u>, with a <u>Level 22</u> repel trick, this is definitely the easiest way of hunting a Scyther in the Sinnoh games! You also have the chance to phase on Marill or Kadabra, which are both great phases.",
    "50%", "Route 215"
);
let magikarp = new Hunt(
    "Magikarp", "<img src=../../images/huntGenerator/magikarpShiny.gif class='sprites'>", "Fishing Encounters",
    "In the Resort Area, when fishing with the Super Rod, you have a chance of finding a Magikarp ranging from Level 1-100!",
    "100%", "Resort Area"
);
let chatot = new Hunt(
    "Chatot", "<img src=../../images/huntGenerator/chatotShiny.gif class='sprites'>", "Random Encounters", 
    "Chatot can be hunted during the <u>Morning and Day</u>. In Gen 4 you still have access to using the Microphone for Chatter, making this a unique Gen 4 shiny to get!",
    "20%", "Route 222"
);
let finneon = new Hunt(
    "Finneon", "<img src=../../images/huntGenerator/finneonShiny.gif class='sprites'>", "Fishing Encounters",
    "Using a <u>Good Rod</u> combined with Sticky Hold (which was fixed in Platinum) this hunt is not nearly as bad as it seems! You can also use a <u>Super Rod</u> to find Lumineon instead.",
    "45%", "Route 219"
);
let munchlax = new Hunt(
    "Munchlax", "<img src=../../images/huntGenerator/munchlaxShiny.gif class='sprites'>", "Soft Resets",
    "Once you know your <a href='../guides/honeyTrees' class='link'>Honey Trees</a> and read the guide on how to hunt them, the hardest part of this hunt is simply finding your first Munchlax! After that it's simple Soft Resets.",
    "1% encounter, 100% once you find it", "Honey Trees"
);
let zangoose = new Hunt(
    "Zangoose", "<img src=../../images/huntGenerator/zangooseShiny.gif class='sprites'>", "Random Encounters/Repel Trick",
    "In the postgame, if you insert a <u>Ruby Cartridge</u>, you can find Zangoose for a whopping 80% encounter rate with a Repel Trick (Level 18 - D/P) (Level 20 - Pt). Just bring a Pokemon with <u>No Guard/Illuminate and a White Flute</u>, as the encounter rate is pretty low!",
    "80%", "Route 208"
);
let seviper = new Hunt(
    "Seviper", "<img src=../../images/huntGenerator/seviperShiny.gif class='sprites'>", "Random Encounters/Repel Trick",
    "In the postgame, if you insert a <u>Sapphire Cartridge</u>, you can find Seviper for a whopping 80% encounter rate with a Repel Trick (Level 18 - D/P) (Level 20 - Pt). Just bring a Pokemon with <u>No Guard/Illuminate and a White Flute</u>, as the encounter rate is pretty low!",
    "80%", "Route 208"
);
let tropius = new Hunt(
    "Tropius", "<img src=../../images/huntGenerator/tropiusShiny.gif class='sprites'>", "Random Encounters/Safari", "In <u>Areas 1 and 2</u> in the Great Marsh, during the <u>Morning and Day</u> there is a 20% chance you can find Tropius. This rate goes up even more if it happens to be one of the binocular Pokemon!",
    "20% (Higher if Binocular Encounter)", "Great Marsh"
);
let gligar = new Hunt(
    "Gligar", "<img src=../../images/huntGenerator/gligarShiny.gif class='sprites'>", "Random Encounters/Repel Trick", "This was submitted by LegendLinke! In <u>HeartGold</u>, on Route 45 with a <u>Level 24</u> repel trick, it brings Gligar all the way up to 66.67%! ",
    "66.67%", "Route 45"
)
let skarmory = new Hunt(
    "Skarmory", "<img src=../../images/huntGenerator/skarmoryShiny.gif class='sprites'>", "Random Encounters/Repel Trick", "This was submitted by LegendLinke! In <u>SoulSilver</u>, on Route 45, with a <u>Level 26</u> repel trick, Skarmory is a guaranteed 100% encounter! The encounter rate is low however, so bring Illuminate and a White Flute!",
    "100%", "Route 45" 
)
let drifloon = new Hunt(
    "Drifloon", "<img src=../../images/huntGenerator/drifloonShiny.gif class='sprites'>", "Soft Resets", "This was submitted by TalesOfTaylor! On <u>Fridays</u> you can stop outside the Valley Windworks to do a simple soft reset for Drifloon! Once you save in front of it, even if the DS clock changes, Drifloon will stay as long as you don't leave the area.",
    "100%", "Valley Windworks"
)
let trophyGarden = new Hunt(
    "Trophy Garden Exclusives", "<img src=../../images/huntGenerator/drifloonShiny.gif class='sprites'> <img src=../../images/huntGenerator/clefairyShiny.gif class='sprites'><img src=../../images/huntGenerator/jigglyPuffShiny.gif class='sprites'><img src=../../images/huntGenerator/meowthShiny.gif class='sprites'><img src=../../images/huntGenerator/chanseyShiny.gif class='sprites'><img src=../../images/huntGenerator/eeveeShiny.gif class='sprites'><img src=../../images/huntGenerator/porygonShiny.gif class='sprites'><img src=../../images/huntGenerator/cleffaShiny.gif class='sprites'><img src=../../images/huntGenerator/igglybuffShiny.gif class='sprites'><img src=../../images/huntGenerator/marillShiny.gif class='sprites'><img src=../../images/huntGenerator/azurillShiny.gif class='sprites'><img src=../../images/huntGenerator/plusleShiny.gif class='sprites'><img src=../../images/huntGenerator/minunShiny.gif class='sprites'><img src=../../images/huntGenerator/castformShiny.gif class='sprites'><img src=../../images/huntGenerator/bonslyShiny.gif class='sprites'><img src=../../images/huntGenerator/mimejrShiny.gif class='sprites'><img src=../../images/huntGenerator/happinyShiny.gif class='sprites'>", "Random Encounters/Repel Trick", "This was submitted by MarkyMark! In Diamond and Pearl, with a <u>Level 18</u> Repel Trick, you can bring the daily Trophy Garden Pokemon up to 50% alongside Pikachu!", "50%", "Trophy Garden"
);

//Array of each hunt for each game
const pearlHunts = [spiritomb, bronzongDP, chatot, munchlax, zangoose, seviper, drifloon, trophyGarden];
const diamondHunts = [spiritomb, bronzongDP, chatot, munchlax, zangoose, seviper, drifloon, trophyGarden];
const platHunts = [spiritomb, dusclops, bronzongPlat, scyther, magikarp, finneon, munchlax, zangoose, seviper, tropius, drifloon];
const hgHunts = [hgssStarter, miltank, gligar];
const ssHunts = [hgssStarter, miltank, skarmory];


//Each function will generate a random number, and grab all the information from each hunt within the array
function generateDiamondHunt(){
    let huntNum = Math.floor(Math.random() * diamondHunts.length);
    document.getElementById("pokemon").innerHTML = diamondHunts[huntNum].pokemon;
    document.getElementById("sprite").innerHTML = diamondHunts[huntNum].sprite;
    document.getElementById("type").innerHTML = diamondHunts[huntNum].type;
    document.getElementById("method").innerHTML = diamondHunts[huntNum].method;
    document.getElementById("encounterRate").innerHTML = diamondHunts[huntNum].encounterRate;
    document.getElementById("location").innerHTML = diamondHunts[huntNum].location;

    document.getElementById("encounterTitle").innerHTML = "Encounter Rate";
    document.getElementById("typeTitle").innerHTML = "Encounter Type";
    document.getElementById("methodTitle").innerHTML = "Method";
    document.getElementById("locationTitle").innerHTML = "Location";
}

function generatePearlHunt(){
    let huntNum = Math.floor(Math.random() * pearlHunts.length);
    document.getElementById("pokemon").innerHTML = pearlHunts[huntNum].pokemon;
    document.getElementById("sprite").innerHTML = pearlHunts[huntNum].sprite;
    document.getElementById("type").innerHTML = pearlHunts[huntNum].type;
    document.getElementById("method").innerHTML = pearlHunts[huntNum].method;
    document.getElementById("encounterRate").innerHTML = pearlHunts[huntNum].encounterRate;
    document.getElementById("location").innerHTML = pearlHunts[huntNum].location;

    document.getElementById("encounterTitle").innerHTML = "Encounter Rate";
    document.getElementById("typeTitle").innerHTML = "Encounter Type";
    document.getElementById("methodTitle").innerHTML = "Method";
    document.getElementById("locationTitle").innerHTML = "Location";
}

function generatePlatHunt(){
    let huntNum = Math.floor(Math.random() * platHunts.length);
    document.getElementById("pokemon").innerHTML = platHunts[huntNum].pokemon;
    document.getElementById("sprite").innerHTML = platHunts[huntNum].sprite;
    document.getElementById("type").innerHTML = platHunts[huntNum].type;
    document.getElementById("method").innerHTML = platHunts[huntNum].method;
    document.getElementById("encounterRate").innerHTML = platHunts[huntNum].encounterRate;
    document.getElementById("location").innerHTML = platHunts[huntNum].location;

    document.getElementById("encounterTitle").innerHTML = "Encounter Rate";
    document.getElementById("typeTitle").innerHTML = "Encounter Type";
    document.getElementById("methodTitle").innerHTML = "Method";
    document.getElementById("locationTitle").innerHTML = "Location";
}

function generateHGHunt(){
    let huntNum = Math.floor(Math.random() * hgHunts.length);
    document.getElementById("pokemon").innerHTML = hgHunts[huntNum].pokemon;
    document.getElementById("sprite").innerHTML = hgHunts[huntNum].sprite;
    document.getElementById("type").innerHTML = hgHunts[huntNum].type;
    document.getElementById("method").innerHTML = hgHunts[huntNum].method;
    document.getElementById("encounterRate").innerHTML = hgHunts[huntNum].encounterRate;
    document.getElementById("location").innerHTML = hgHunts[huntNum].location;

    document.getElementById("encounterTitle").innerHTML = "Encounter Rate";
    document.getElementById("typeTitle").innerHTML = "Encounter Type";
    document.getElementById("methodTitle").innerHTML = "Method";
    document.getElementById("locationTitle").innerHTML = "Location";
}

function generateSSHunt(){
    let huntNum = Math.floor(Math.random() * ssHunts.length);
    document.getElementById("pokemon").innerHTML = ssHunts[huntNum].pokemon;
    document.getElementById("sprite").innerHTML = ssHunts[huntNum].sprite;
    document.getElementById("type").innerHTML = ssHunts[huntNum].type;
    document.getElementById("method").innerHTML = ssHunts[huntNum].method;
    document.getElementById("encounterRate").innerHTML = ssHunts[huntNum].encounterRate;
    document.getElementById("location").innerHTML = ssHunts[huntNum].location;

    document.getElementById("encounterTitle").innerHTML = "Encounter Rate";
    document.getElementById("typeTitle").innerHTML = "Encounter Type";
    document.getElementById("methodTitle").innerHTML = "Method";
    document.getElementById("locationTitle").innerHTML = "Location";
}

//The function that get's called on when the button is clicked
//Checks to see which radio button is checked, and generates a hunt from the appropriate array
function checkButton(){
    if (document.getElementById("diamond").checked){
        generateDiamondHunt();
    }else if (document.getElementById("pearl").checked){
        generatePearlHunt();
    }else if (document.getElementById("platinum").checked){
        generatePlatHunt();
    }else if (document.getElementById("hg").checked){
        generateHGHunt();
    }else if (document.getElementById("ss").checked){
        generateSSHunt();
    }
}




