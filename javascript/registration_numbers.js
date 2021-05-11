var regInput = document.querySelector(".textNum")
var radioInput = document.querySelector(".radio-btn")
var addButton = document.querySelector(".add")
var clearButton = document.querySelector(".clear")
var errorMessage = document.querySelector(".errorMessage")
// var nameText = nameInput.querySelector(".textName")
var showReg = document.querySelector(".show")
var message = document.querySelector(".message")
var regDisplay = document.querySelector(".reg-display")
var clear = document.querySelector(".clear")

// var regDisplay2 = document.querySelector(".reg2")
// var regDisplay3 = document.querySelector(".reg3")
var checkedRadio1 = document.querySelector("input[name='town']:checked");
checkedRadio1.checked = false

var factoryFunc = registrations()

var localArray = []

// localStorage.getItem(JSON.parse(localStorage['regNumberArray']))
if (localStorage['regNumberArray']){
    // console.log("local")
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

    // document.getElementById("regs").appendChild(nodeExample)
    //errorMessage.innerHTML = factoryFunc.values().addMessage

}


function registrationNumbers(){
    factoryFunc.getRegNumber(regInput.value)
    
    
    if(regInput.value != "" ){
        //factoryFunc.addRegNumber()

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
        // console.log(JSON.stringify(factoryFunc.getArr()))

        message.innerHTML = factoryFunc.values().addMessage
       // message.innerHTML = factoryFunc.values().addMessage
        //message.innerHTML = factoryFunc.values().addMessage
        
        //setTimeout(function(){ message.innerHTML = "" }, 4000);
        setTimeout(function(){ message.innerHTML = "" }, 4000);
        //setTimeout(function(){ errorMessage.innerHTML = "" }, 2000);

        // regInput.value = ''

    }
    
    else{
        message.innerHTML = "please enter a registration number"
        setTimeout(function(){ message.innerHTML = "" }, 4000);
        // message.innerHTML = factoryFunc.values().addMessage
        // if(regInput.value == ''){
        //     
        //     // errorMessage.innerHTML = factoryFunc.values().invalid
        //     
        // }
        
        // if(!(regInput.value).match(/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g) || !(regInput.value).match(/[A-Z]{2}\s[0-9]{5}/g) || !(regInput.value).match(/[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g)){
        //     
        //     setTimeout(function(){ message.innerHTML = "" }, 4000);
        // }
        
    }
    regInput.value = ""

    
    
    
}
addButton.addEventListener("click", registrationNumbers)

function radioButtons(){

   // factoryFunc.filterRegistration(checkedRadio1.value)
    // var array1 = factoryFunc.getArr()
    //     console.log(array1.length)

    if(checkedRadio1 != ''){
        var checkedRadio1 = document.querySelector("input[name='town']:checked");
        factoryFunc.filterRegistration(checkedRadio1.value)
        //console.log('filter')   
        
        if(checkedRadio1.value === "cape-town"){
            var cape = factoryFunc.getCape()
           // console.log(cape)
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            if(cape.length != 0){
              for(i=0; i<cape.length; i++){
                var capeTown = document.createElement("li")
                var capeRegNum = document.createTextNode(cape[i])
                capeTown.appendChild(capeRegNum)  
                //console.log('filter1')
                // document.getElementById("regs").appendChild(capeTown)
                }
            
                document.getElementById("regs").appendChild(capeTown)  
            }
            else{
                //message.innerHTML = ""
                errorMessage.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
            }
            
            // document.getElementById("regs").appendChild(nodeExample)
        }

        else if(checkedRadio1.value === "stellenbosch"){
            var stell = factoryFunc.getStell()
           // console.log(cape)
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            if(stell.length != 0){
                for(i=0; i<stell.length; i++){
                var stellTown = document.createElement("li")
                var stellRegNum = document.createTextNode(stell[i])
                stellTown.appendChild(stellRegNum)  
                //console.log('filter1')
                // document.getElementById("regs").appendChild(stellTown)
                }
            
                document.getElementById("regs").appendChild(stellTown)
            }
            else{
               // message.innerHTML = ""
                errorMessage.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
            }
            // document.getElementById("regs").appendChild(nodeExample)
        }

        else if(checkedRadio1.value === "bellville"){
            var bell = factoryFunc.getBell()
           // console.log(cape)
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            if(bell.length != 0){
                for(i=0; i<bell.length; i++){
                var bellTown = document.createElement("li")
                var bellRegNum = document.createTextNode(bell[i])
                bellTown.appendChild(bellRegNum)  
                //console.log('filter1')
                // document.getElementById("regs").appendChild(bellTown)
                }
            
                document.getElementById("regs").appendChild(bellTown)
            }
            else{
                //message.innerHTML = ""
                errorMessage.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
            }
            
            // document.getElementById("regs").appendChild(nodeExample)
        }

        else if(checkedRadio1.value === "paarl"){
            var paar = factoryFunc.getPaar()
           // console.log(cape)
           
            var list = document.getElementById("regs");
            list.innerHTML = ''

            if(paar.length != 0){
                for(i=0; i<paar.length; i++){
                var paarTown = document.createElement("li")
                var paarRegNum = document.createTextNode(paar[i])
                paarTown.appendChild(paarRegNum)  
                //console.log('filter1')
                // document.getElementById("regs").appendChild(paarTown)
                }
            
                document.getElementById("regs").appendChild(paarTown)
            }
            else{
                //message.innerHTML = ""
                errorMessage.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
            }
            
            // document.getElementById("regs").appendChild(nodeExample)
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
                //console.log('filter1')
                document.getElementById("regs").appendChild(allTown)
            }
            
            // document.getElementById("regs").appendChild(allTown)
            
        }

    }

}
showReg.addEventListener('click', radioButtons)

function clearReg(){
    factoryFunc.clearTheCountButton()
    // counterDis.innerHTML = 0
    var list = document.getElementById("regs");
    list.innerHTML = ''
    checkedRadio1.checked = false
    message.innerHTML = factoryFunc.values().cleared
    setTimeout(function(){ message.innerHTML = "" }, 4000);
}
clear.addEventListener("click", clearReg)