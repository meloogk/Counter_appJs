
let  counterPlus=document.getElementById ("counter")
let saveEl=document.getElementById ("show-el")
let count= 0 

//fonction incrementation 
 function increment(){
    count = count +1 
   console.log(count)
   counterPlus.innerText = count
   
 }
    increment();

//fonction decrementation
    function decrement(){
    count = count -1 
   console.log(count)
   counterPlus.innerText = count
   
 }
    decrement();


    //fonction save
    function save(){
       let countstr = count + " _"
        console.log("save button clicked")
        saveEl.textContent += countstr
        //redemarrage du compteur a 0 apres sauvegarde
        counterPlus.innerText = 0
        count = 0

    }
    save();
 


