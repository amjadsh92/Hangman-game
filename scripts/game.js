

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

var updatedword = updatedRandomWord(randomword) 



const node = document.createElement("p");
const textnode = document.createTextNode(updatedword);
node.appendChild(textnode);
document.getElementById("answer-section").appendChild(node);








