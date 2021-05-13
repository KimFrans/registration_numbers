var regInput = document.querySelector(".textNum")
var radioInput = document.querySelector(".radio-btn")
var addButton = document.querySelector(".add")
var clearButton = document.querySelector(".clear")
var errorMessage = document.querySelector(".errorMessage")
var showReg = document.querySelector(".show")
var message = document.querySelector(".message")
var regDisplay = document.querySelector(".reg-display")
var clear = document.querySelector(".clear")
var checkedRadio1 = document.querySelector("input[name='town']:checked");
checkedRadio1.checked = false

var factoryFunc = registrations()

var localArray = []

if (localStorage['regNumberArray']){
    localArray = JSON.parse(localStorage['regNumberArray'])
    console.log(localArray)
}

factoryFunc.setArray(localArray)

if(localArray.length != 0){
    for(i=0; i<localArray.length; i++){
        var nodeExample = document.createElement("li")
        var textNode = document.createTextNode(localArray[i])
        nodeExample.appendChild(textNode)  
        document.getElementById("regs").appendChild(nodeExample)
    }
}


function registrationNumbers(){
    factoryFunc.getRegNumber(regInput.value)
    
    
    if(regInput.value != "" ){

        var array = factoryFunc.getArr()
        console.log(array.length)
       
        if(factoryFunc.addRegNumber() == true){
            for(i=0; i<array.length; i++){
                var nodeExample = document.createElement("li")
                var textNode = document.createTextNode(array[i])
                nodeExample.appendChild(textNode)  
            }

            document.getElementById("regs").appendChild(nodeExample)
            message.innerHTML = factoryFunc.values().addMessage
            setTimeout(function(){ message.innerHTML = "" }, 4000);
            
        }
        localStorage.setItem('regNumberArray', JSON.stringify(factoryFunc.getArr()))

        message.innerHTML = factoryFunc.values().addMessage
        setTimeout(function(){ message.innerHTML = "" }, 4000);

    }
    
    else{
        message.innerHTML = "please enter a registration number"
        setTimeout(function(){ message.innerHTML = "" }, 4000);
        
    }
    regInput.value = ""
    
}
addButton.addEventListener("click", registrationNumbers)

function radioButtons(){

    if(checkedRadio1 != ''){
        var checkedRadio1 = document.querySelector("input[name='town']:checked");
        factoryFunc.filterRegistration(checkedRadio1.value)
        
        if(checkedRadio1.value === "cape-town"){
            var cape = factoryFunc.getCape()
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            if(cape.length != 0){
              for(i=0; i<cape.length; i++){
                var capeTown = document.createElement("li")
                var capeRegNum = document.createTextNode(cape[i])
                capeTown.appendChild(capeRegNum)  
                }
            
                document.getElementById("regs").appendChild(capeTown)  
            }
            else{
                errorMessage.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
            }
        }

        else if(checkedRadio1.value === "stellenbosch"){
            var stell = factoryFunc.getStell()
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            if(stell.length != 0){
                for(i=0; i<stell.length; i++){
                    var stellTown = document.createElement("li")
                    var stellRegNum = document.createTextNode(stell[i])
                    stellTown.appendChild(stellRegNum)  
                
                }
            
                document.getElementById("regs").appendChild(stellTown)
            }
            else{
                errorMessage.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
            }
        
        }

        else if(checkedRadio1.value === "bellville"){
            var bell = factoryFunc.getBell()
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            if(bell.length != 0){
                for(i=0; i<bell.length; i++){
                    var bellTown = document.createElement("li")
                    var bellRegNum = document.createTextNode(bell[i])
                    bellTown.appendChild(bellRegNum)  
                }
            
                document.getElementById("regs").appendChild(bellTown)
            }
            else{
                errorMessage.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
            }
        }

        else if(checkedRadio1.value === "paarl"){
            var paar = factoryFunc.getPaar()
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            if(paar.length != 0){
                for(i=0; i<paar.length; i++){
                    var paarTown = document.createElement("li")
                    var paarRegNum = document.createTextNode(paar[i])
                    paarTown.appendChild(paarRegNum)  
                
                }
                document.getElementById("regs").appendChild(paarTown)
            }
            else{
                errorMessage.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
            }
            
        }
        
        else if(checkedRadio1.value === "all"){
            var allReg = factoryFunc.getArr()
           console.log(allReg)
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            for(i=0; i<allReg.length; i++){
                var allTown = document.createElement("li")
                var allRegNum = document.createTextNode(allReg[i])
                allTown.appendChild(allRegNum)  
                document.getElementById("regs").appendChild(allTown)
            }
            
        }

    }

}
showReg.addEventListener('click', radioButtons)

function clearReg(){
    factoryFunc.clearTheCountButton()
    var list = document.getElementById("regs");
    list.innerHTML = ''
    checkedRadio1.checked = false
    message.innerHTML = factoryFunc.values().cleared
    setTimeout(function(){ message.innerHTML = "" }, 4000);
}
clear.addEventListener("click", clearReg)