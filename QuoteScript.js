let quotes = [
    { content: "Aus der südlichen Region des Herzens", index: 0 },
    { content: "Aus logistischen Gründen", index: 1 },
    { content: "Das Verdauungssystem Deutschlands", index: 2 },
    { content: "Das Orakel von Delphi ist schneller als die deutsche Post", index: 3 },
    { content: "Latein muss zwischen den Ohren stattfinden", index: 4 },
    { content: "Luis, bitte", index: 5 },
];

let values = [
    { likes: 0, dislikes: 0, giveFeedback: false},
    { likes: 0, dislikes: 0, giveFeedback: false},
    { likes: 0, dislikes: 0, giveFeedback: false},
    { likes: 0, dislikes: 0, giveFeedback: false},
    { likes: 0, dislikes: 0, giveFeedback: false},
    { likes: 0, dislikes: 0, giveFeedback: false},
];


let lastQuote = quotes[0];
let lastValues = values[0];

const likeButton = document.getElementById("likeButton");
const dislikeButton = document.getElementById("dislikeButton");
//let firstEverLogin = JSON.parse(localStorage.getItem("FELogin"));

//if(firstEverLogin === "")
//{
    //localStorage.setItem("FELogin", true);
    //localStorage.setItem("quoteValues", JSON.stringify(values));
//}
//else
    //values = JSON.parse(localStorage.getItem("quoteValues"));


function RandomQuote() {
    let randomQuote;
    
    likeButton.style.backgroundColor = '#bcc4db80'; //Zurück zum normalen Bild, wenn Maus den Button verlässt
    dislikeButton.style.backgroundColor = ' #bcc4db80'; //Zurück zum normalen Bild, wenn Maus den Button verlässt

    // Solange ein Zitat auswählen, bis es sich vom zuletzt angezeigten Zitat unterscheidet
    do {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[randomIndex];
        randomValues = values[randomIndex];
    } while (randomQuote === lastQuote);
    document.getElementById("quoteText").textContent = randomQuote.content;
    lastQuote = randomQuote;
    lastValues = randomValues;

    //document.getElementById("likeCount").textContent = randomValues.likes;
    //document.getElementById("dislikeCount").textContent = randomValues.dislikes;
    
    if(lastValues !== "" && lastValues.giveFeedback){
        likeButton.disabled = true;
        dislikeButton.disabled = true;
        if(lastValues.likes >= 1)
            likeButton.style.backgroundColor = '#5BBA6F'; // Bild ändern, wenn Maus darüber gleitet
        else
            dislikeButton.style.backgroundColor = '#EE2E31'; // Bild ändern, wenn Maus darüber gleitet
    }
    else{
        likeButton.disabled = false;
        dislikeButton.disabled = false;
    }
}

function NextQoute() {
    let nextQuote;
    let nextValues;
    
    likeButton.style.backgroundColor = '#bcc4db80'; //Zurück zum normalen Bild, wenn Maus den Button verlässt
    dislikeButton.style.backgroundColor = ' #bcc4db80'; //Zurück zum normalen Bild, wenn Maus den Button verlässt

    if(lastQuote.index < quotes.length - 1)
    {
        nextQuote = quotes[lastQuote.index + 1];
        nextValues = values[lastQuote.index + 1];
    }
    else
    {
        nextQuote = quotes[0];
        nextValues = values[0];
    }

    document.getElementById("quoteText").textContent = nextQuote.content;
    lastQuote = nextQuote;
    lastValues = nextValues;


    //document.getElementById("likeCount").textContent = nextValues.likes;
    //document.getElementById("dislikeCount").textContent = nextValues.dislikes;


    if(lastValues !== "" && lastValues.giveFeedback){
        likeButton.disabled = true;
        dislikeButton.disabled = true;
        if(lastValues.likes >= 1)
            likeButton.style.backgroundColor = '#5BBA6F'; // Bild ändern, wenn Maus darüber gleitet
        else
            dislikeButton.style.backgroundColor = '#EE2E31'; // Bild ändern, wenn Maus darüber gleitet
    }
    else{
        likeButton.disabled = false;
        dislikeButton.disabled = false;
    }
}

function PerviousQuote() {
    let perviousQuote;
    let perviousValues;
    
    likeButton.style.backgroundColor = '#bcc4db80'; //Zurück zum normalen Bild, wenn Maus den Button verlässt
    dislikeButton.style.backgroundColor = ' #bcc4db80'; //Zurück zum normalen Bild, wenn Maus den Button verlässt

    if(lastQuote.index > 0){
        perviousQuote = quotes[lastQuote.index - 1];
        perviousValues = values[lastQuote.index - 1];
    }
    else{
        perviousQuote = quotes[quotes.length - 1];
        perviousValues = values[quotes.length - 1];
    }
    document.getElementById("quoteText").textContent = perviousQuote.content;
    lastQuote = perviousQuote;
    lastValues = perviousValues;


    //document.getElementById("likeCount").textContent = perviousValues.likes;
    //document.getElementById("dislikeCount").textContent = perviousValues.dislikes;

    
    if(lastValues !== "" && lastValues.giveFeedback)
    {
        likeButton.disabled = true;
        dislikeButton.disabled = true;
        if(lastValues.likes >= 1)
            likeButton.style.backgroundColor = '#5BBA6F'; // Bild ändern, wenn Maus darüber gleitet
        else
            dislikeButton.style.backgroundColor = '#EE2E31'; // Bild ändern, wenn Maus darüber gleitet
    }
    else
    {
        likeButton.disabled = false;
        dislikeButton.disabled = false;
    }
}

function likeQuote() {
    if(lastValues !== "" && !lastValues.giveFeedback){
        lastValues.likes++;
        lastValues.giveFeedback = true;
        likeButton.disabled = true;
        dislikeButton.disabled = true;
        likeButton.style.backgroundColor = '#5BBA6F'; // Bild ändern, wenn Maus darüber gleitet
        //localStorage.setItem("quoteValues", JSON.stringify(values));
    }
}

function dislikeQuote() {
    if(lastValues !== "" && !lastValues.giveFeedback){
        lastValues.dislikes++;
        lastValues.giveFeedback = true; 
        likeButton.disabled = true;
        dislikeButton.disabled = true;
        dislikeButton.style.backgroundColor = '#EE2E31'; // Bild ändern, wenn Maus darüber gleitet
        //localStorage.setItem("quoteValues", JSON.stringify(values));
    }
}

document.getElementById("randomQuoteButton").addEventListener("click", RandomQuote);
document.getElementById("nextQuoteButton").addEventListener("click", NextQoute);
document.getElementById("previousQuoteButton").addEventListener("click", PerviousQuote);


//zeigeZufallsZitat();

document.getElementById("quoteText").textContent = lastQuote.content;
//resetButtons();



likeButton.addEventListener('mouseenter', () => {
    if(!likeButton.disabled)
        likeButton.style.backgroundColor = '#5BBA6F'; // Bild ändern, wenn Maus darüber gleitet
});

likeButton.addEventListener('mouseleave', () => {
    if(!likeButton.disabled)
        likeButton.style.backgroundColor = '#bcc4db80'; //Zurück zum normalen Bild, wenn Maus den Button verlässt
});

likeButton.addEventListener('click', () => {
    likeQuote();
});

dislikeButton.addEventListener('mouseenter', () => {
    if(!dislikeButton.disabled)
        dislikeButton.style.backgroundColor = '#EE2E31'; // Bild ändern, wenn Maus darüber gleitet
});

dislikeButton.addEventListener('mouseleave', () => {
    if(!dislikeButton.disabled)
        dislikeButton.style.backgroundColor = ' #bcc4db80'; //Zurück zum normalen Bild, wenn Maus den Button verlässt
});

dislikeButton.addEventListener('click', () => {
    dislikeQuote();
});







const swipeArea = document.getElementById('swipeArea');
const pullElement = document.getElementById('quoteText');

let StartSwipe;
let Result;
let pressed = false;
const userAgent = navigator.userAgent;



if (userAgent.match(/Android/i) || userAgent.match(/iPhone|iPad|iPod/i)) {
    swipeArea.addEventListener('touchstart', (e) => {
        StartSwipe = e.changedTouches[0].clientX;
        pressed = true;

        const currentTime = new Date().getTime();
        const tapInterval = currentTime - lastTapTime;
        if (tapInterval < 300) {
            const beruehrungsX = e.touches[0].clientX;
            const seitenBreite = window.innerWidth;
    
            if (beruehrungsX > seitenBreite / 2) {
                NextQoute();
            } else {
                PerviousQuote();
            }
        }
        lastTapTime = currentTime;
    });

    swipeArea.addEventListener('touchmove', (e) => {
        if(pressed){
            const displacementX  = (e.touches[0].clientX - StartSwipe) - (pullElement.clientWidth / 2);
            const rotationAngle  = (e.touches[0].clientX - StartSwipe) / 10;
            pullElement.style.transform = `translateX(${displacementX }px) translateY(-50%) rotate(${rotationAngle }deg)`;

            const positionRatio = (e.touches[0].clientX - StartSwipe) / pullElement.clientWidth;

            if (positionRatio < -0.1) {
                pullElement.style.color = "#EE2E31";
                Result = 1;
            } else if (positionRatio < 0.1) {
                pullElement.style.color = 'black';
                Result = 0;
            } else {
                pullElement.style.color = "#5BBA6F";
                Result = 2;
            }
        }
        else StartSwipe = null;
    });

    swipeArea.addEventListener('touchend', (e) => {
        if (Result == 2) {
            likeQuote();
            NextQoute();
        } else if (Result == 1) {
            dislikeQuote();
            NextQoute();
        }
        Result = 0;
        StartSwipe = null;
        pressed = false;
        pullElement.style.transform = `translate(-50%, -50%)`;
        pullElement.style.color = 'black';
    });
} 
else
{
    swipeArea.addEventListener('mousedown', (e) => {
        StartSwipe = e.clientX;
        pressed = true;
    });

    swipeArea.addEventListener('mousemove', (e) => {
        if(pressed){
            const displacementX  = (e.clientX - StartSwipe) - (pullElement.clientWidth / 2);
            const rotationAngle  = (e.clientX - StartSwipe) / 10;
            pullElement.style.transform = `translateX(${displacementX }px) translateY(-50%) rotate(${rotationAngle }deg)`;

            const positionRatio = (e.clientX - StartSwipe) / pullElement.clientWidth;

            if (positionRatio < -0.1) {
                pullElement.style.color = "#EE2E31";
                Result = 1;
            } else if (positionRatio < 0.1) {
                pullElement.style.color = 'black';
                Result = 0;
            } else {
                pullElement.style.color = "#5BBA6F";
                Result = 2;
            }
            //alert(positionRatio);
        }
        else StartSwipe = null;
    });

    swipeArea.addEventListener('mouseup', (e) => {
        if (Result == 2) {
            likeQuote();
            NextQoute();
        } else if (Result == 1) {
            dislikeQuote();
            NextQoute();
        }
        Result = 0;
        StartSwipe = null;
        pressed = false;
        pullElement.style.transform = `translate(-50%, -50%)`;
        pullElement.style.color = 'black';
    });

    swipeArea.addEventListener('dblclick', (e) => {
        const mausX = e.clientX;
        const seitenBreite = window.innerWidth;
    
        if (mausX > seitenBreite / 2) {
            NextQoute();
        } else {
            PerviousQuote();
        }
    });
} 
