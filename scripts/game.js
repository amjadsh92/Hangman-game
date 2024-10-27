

words = [
'information',
'available',
'copyright',
'university',
'management',
'international',
'development',
'education',
'community',
'technology',
]

alphabit="abcdefghigklmnopqrstuvwxyz"


function randomWholeNum() {

    // Only change code below this line
  
   
    return Math.floor(Math.random()*10);
  }

index = randomWholeNum();

//console.log(words[index])  

var randomword = words[index]




function updatedRandomWord(){
    n = randomword.length
    var updatedRandomWord = ""
    for (let i = 0; i < n; i++){

        updatedRandomWord += randomword[i] + " "
    }

    return updatedRandomWord


}




var updatedword = updatedRandomWord() 


function hanghead (){

    hanghead = document.getElementById("hang")
    headnode = document.createElement("img")
    headnode.setAttribute('src', "./assets/head.svg")
    headnode.setAttribute('class', "head")
    hanghead.appendChild(headnode)


}


function bodyhead (){

    hanghead = document.getElementById("hang")
    bodynode = document.createElement("img")
    bodynode.setAttribute('src', "./assets/body.svg")
    bodynode.setAttribute('class', "body")
    hanghead.appendChild(bodynode)


}


function hangrighthand (){

    hanghead = document.getElementById("hang")
    righthandnode = document.createElement("img")
    righthandnode.setAttribute('src', "./assets/right-hand.svg")
    righthandnode.setAttribute('class', "right-hand")
    hanghead.appendChild(righthandnode)


}

function hanglefthand (){

    hanghead = document.getElementById("hang")
    lefthandnode = document.createElement("img")
    lefthandnode.setAttribute('src', "./assets/left-hand.svg")
    lefthandnode.setAttribute('class', "left-hand")
    hanghead.appendChild(lefthandnode)


}


function hangleftleg (){

    hanghead = document.getElementById("hang")
    leftlegnode = document.createElement("img")
    leftlegnode.setAttribute('src', "./assets/left-leg.svg")
    leftlegnode.setAttribute('class', "left-leg")
    hanghead.appendChild(leftlegnode)


}

function hangrightleg (){

    hanghead = document.getElementById("hang")
    rightlegnode = document.createElement("img")
    rightlegnode.setAttribute('src', "./assets/right-leg.svg")
    rightlegnode.setAttribute('class', "right-leg")
    hanghead.appendChild(rightlegnode)


}




for (let i = 0; i < updatedword.length; i++){
    letter = updatedword[i]

    const letternode = document.createElement("p");
    if (letter != " "){
        
        letternode.setAttribute('style','border-bottom: 5px black solid; width:4em; text-align:center');
    }
    else{
        letternode.setAttribute('style',' width:2em');

    }
    
    spannode = document.createElement("span");
    const textnode = document.createTextNode(letter);
    spannode.appendChild(textnode);
    
    letternode.appendChild(spannode);
    spannode.style.visibility= "hidden";
    if (letter != " "){
        spannode.classList.add(letter)
    }
    
    document.getElementById("answer-section").appendChild(letternode);

    for (let letter of alphabit){

        var button = document.getElementById(letter);
        //var lett = document.getElementById(letter).innerHTML
        
        button.addEventListener("click", function (){spannode = document.querySelector("." + letter)
                                                    if (randomword.includes(letter)) {
                                                      spannode.style.visibility = "visible"
                                                    } 
                                                    else{
                                                        hanghead()
                                                        bodyhead()
                                                        hangrighthand()
                                                        hanglefthand()
                                                        hangrightleg()
                                                        hangleftleg()

                                                    }
                                                    })
                                                   


    }


    
    






}

















