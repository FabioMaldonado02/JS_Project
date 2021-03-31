const getChecksData = function () {
    const dataJSON = localStorage.getItem('output')
    if (dataJSON !== null) {
        return JSON.parse(dataJSON)
    } else {
        return []
    }
}

 
const checksData = function (data) {
    localStorage.setItem('output', JSON.stringify(data))
}

const stimulusCheckCalculator = (status, income, dependents) => {
    let checkAmount = 0;
    let children = dependents * 300;

    if (status === "single" && income < 75000){
        checkAmount = 1400 + children
    } else if (status === "single" && income > 76000){
        checkAmount = 1300 + children
    } else if (status === "single" && income > 10000){
        checkAmount = 0 
    } else if (status === "married" && income < 75000){
        checkAmount = 2700 + children
    } else if (status === "married" && income > 75000){
        checkAmount = 2700 + children
    } else if (status === "married" && income > 175000){
        checkAmount = 0
    }  else if (status === "hoh" && income < 75000){
        checkAmount = 1400  + children
    } else if (status === "hoh" && income > 75000){
        checkAmount = 0 + children
    } else {
        //checkAmount += children 
    }
    return `From The Information You Submited This Is What Your Stimulus Check ${checkAmount}`
}

// Remove Button
const removeCheck = function (id){
    const checkIndex = check.findIndex(function (checks){
        return  checks.id === id
    })

    if (checkIndex > -1){
        check.splice(checkIndex, 1)
    }
}

const renderstimulusCheckDOM = (message) =>{
    const output = document.querySelector('#output');
    const textEl = document.createElement("p")
    const elementDiv = document.createElement("a");
    const xButton = document.createElement("button");
     
    // Button where you can delete your check result
    xButton.textContent = "X";
    output.appendChild(xButton)
    xButton.addEventListener("click", ()=>{
        removeCheck(message.id)
        checksData(check)
        getDataDOM(check)
        location.reload();

        })
    // Message div
    elementDiv.textContent = message.form;
    elementDiv.setAttribute('href', `edit.html#${message.id}`)

    output.appendChild(elementDiv)
    output.appendChild(textEl)

}

const getDataDOM = (inPut) =>{
    inPut.forEach( x =>{
        renderstimulusCheckDOM(x)
    })
}