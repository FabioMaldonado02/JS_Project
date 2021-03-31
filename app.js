const form = document.querySelector("form")
const check = getChecksData()
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let status = e.target.elements.status.value;
    let income = e.target.elements.income.value;
    let dependents = e.target.elements.dependents.value;
    let com =  stimulusCheckCalculator(status, income, dependents);
    //let id = uuidv4();

   let message = {
       id : uuidv4(),
       form: com,
        status : status,
        income : income,
       dependents : dependents

   }
   check.push(message)
   renderstimulusCheckDOM(message)
   checksData(check)
   
})
getDataDOM(check)
