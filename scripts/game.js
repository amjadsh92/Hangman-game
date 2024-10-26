

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


function createDashes(){
    n = randomword.length
    var dashes = ""
    for (let i = 0; i < n; i++){

        dashes += "_" + " "
    }

    return dashes


}

var updatedword = updatedRandomWord() 
var dash = createDashes()


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
    spannode.style.visibility= "hidden"
    document.getElementById("answer-section").appendChild(letternode);



}

















