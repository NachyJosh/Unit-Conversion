let inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

 convertBtn.addEventListener ("click",function() {
    displayConvertButton()
    showVolume()
    showMass()
}
    
    )
function displayConvertButton(){
    let inputString = `${inputEl.value} 
    meters = ${Number(inputEl.value * 3.281).toFixed(2)} 
    feets | 
    ${inputEl.value} feet =
     ${Number((inputEl.value)/3.281).toFixed(2)} meters` 
    lengthEl.innerHTML = inputString   
    

}
function showVolume(){
    let inputString = `${inputEl.value} 
    Volume = ${Number(inputEl.value * 0.264).toFixed(2)} 
    gallons | 
    ${inputEl.value} gallons =
    ${Number((inputEl.value)/0.264).toFixed(2)} litres ` 
    volumeEl.innerHTML = inputString   
    
}


function showMass(){
    let inputString = `${inputEl.value} 
    Kilogram = ${Number(inputEl.value * 2.204).toFixed(2)} 
    pounds | 
    ${inputEl.value} pounds =
     ${Number((inputEl.value)/2.204).toFixed(2)} kilogram ` 
    massEl.innerHTML = inputString  
    
}
