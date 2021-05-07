var regInput = document.querySelector(".textNum")
var radioInput = document.querySelector(".radio-btn")
var addButton = document.querySelector(".add")
var clearButton = document.querySelector(".clear")
var errorMessage = document.querySelector(".errorMessage")
// var nameText = nameInput.querySelector(".textName")
var counterDis = document.querySelector(".counterValue")
var message = document.querySelector(".message")
var regDisplay = document.querySelector(".reg-display")

// var regDisplay2 = document.querySelector(".reg2")
// var regDisplay3 = document.querySelector(".reg3")
var checkedRadio1 = document.querySelector("input[name='town']:checked");
checkedRadio1.checked = false

var factoryFunc = registrations()


function registrationNumbers(){
    factoryFunc.getRegNumber(regInput.value)
    
    
    if(regInput.value != "" ){
        factoryFunc.addRegNumber()

        
        message.innerHTML = factoryFunc.values().addMessage
        errorMessage.innerHTML = factoryFunc.values().type
        errorMessage.innerHTML = factoryFunc.values().chars
        errorMessage.innerHTML = factoryFunc.values().invalid
        errorMessage.innerHTML = factoryFunc.values().added
        
        setTimeout(function(){ message.innerHTML = "" }, 4000);
        setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);

        var array = factoryFunc.getArr()
        console.log(array.length)
        
        for(i=0; i<array.length; i++){
            // var myobj = document.querySelector("div");
            // myobj.remove(array[i]);
            for(i in array){
                var nodeExample = document.createElement("li")
                var textNode = document.createTextNode(array[i])
                nodeExample.appendChild(textNode)
            
                document.getElementById("regs").appendChild(nodeExample)
            }
            // var nodeExample = document.createElement("li")
            // var textNode = document.createTextNode(array[i])
            // nodeExample.appendChild(textNode)
            // var list = document.getElementById("myList");
            // document.getElementById("regs").appendChild(nodeExample)
            
           // console.log(array[i])            
            // var nodeEx = nodeExample.appendChild(textNode)
            
            // myobj.appendChild(nodeEx)
            // console.log(myobj)    
            
        }
    }
    
    else{

        if(regInput.value == ''){
            errorMessage.innerHTML = factoryFunc.values().noInput
            // errorMessage.innerHTML = factoryFunc.values().invalid
            setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
        }
        
        if(!(regInput.value).match(/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g) || !(regInput.value).match(/[A-Z]{2}\s[0-9]{5}/g) || !(regInput.value).match(/[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g)){
            errorMessage.innerHTML = factoryFunc.values().addMessage
            setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
        }
        
    }
    regInput.value = ""
    

}
addButton.addEventListener("click", registrationNumbers)

function clearReg(){
    factoryFunc.clearTheCountButton()
    counterDis.innerHTML = 0
}