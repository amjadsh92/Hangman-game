

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
                                                     spannode.style.visibility = "visible"
        } )


    }


    
    






}

















