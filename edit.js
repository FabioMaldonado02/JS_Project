const stimId = location.hash.substring(1)
const checks = getChecksData()

const check = checks.find(function (c){
    return c.id === stimId
})

if (check === undefined){
    location.assign('index.html')
}

// My functions for this page to checkamout 
const editCheckCalculator  = (statu,dependents, income ) => {
    let checkAmount = 0 ;
    let children = dependents * 300;
    

    if (statu === "single" && income < 75000){
        checkAmount = 1400  + children
    } else if (statu === "single" && income > 76000){
        checkAmount= 1300 + children
    } else if (statu === "single" && income > 10000){
        checkAmount = 1200 + children
    }  else if (statu === "married" && income < 75000){
        checkAmount = 2700 + children
    } else if (statu === "married" && income > 75000){
        checkAmount = 2700 + children
    } else if (satau === "married" && income > 20000){
        checkAmount = 0 + children
    } else if (statu === "hoh" && income < 75000){
        checkAmount = 1400  + children
    }  else if (statu === "hoh" && income > 112000){
        checkAmount = 0 + children
    } else {
       // checkAmount += children 
    }
    return `From The Information You Updated This Is What Your Amount Stimulus Check ${checkAmount}`
}
//  Adding the 
const statu = document.querySelector('#status')
const dependents = document.querySelector('#dependents')
const income = document.querySelector('#income')
statu.value = check.status
dependents.value = check.dependents
income.value = check.income
const upButton = document.querySelector("button");

  
upButton.addEventListener('click', (e)=>{
e.preventDefault()
check.status = statu.value;
check.dependents = dependents.value;
check.income = income.value;
let form= editCheckCalculator(statu.value, dependents.value, income.value)
check.form = form
checksData(checks)
location.assign('index.html')
    
})
