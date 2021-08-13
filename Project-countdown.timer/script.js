let formDate

function countdown() {
    //1 - define a final date
    let date = new Date(formDate)

    //2 - get current date
    const currentDate = new Date()

    //3 - calculate remaining time
    const result = date-currentDate
    
    //4- transform millisconds into days, hours, minutes and seconds
    const totalseconds = parseInt(result/1000)
    const seconds = parseInt(totalseconds) % 60
    const minutes = parseInt(totalseconds/60) % 60
    const hours = (parseInt(totalseconds/3600) % 24) + 3 //timezone compensation
    const days = parseInt(totalseconds/3600/24)

    //5- link js with html
    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
}

function save(event){

    event.preventDefault()

     //1 - get the event and date from the inputs
    let formEvent = document.getElementById('event').value
    formDate = document.getElementById('date').value

    //2 - check if all the inputs were filled

    try {
        if(formEvent === "" && formDate === "") throw "an Event and a Date";
        if(formEvent === "") throw "an Event";
        if(formDate === "") throw "a Date";
    }

    catch (err) {
        window.alert(`Please choose ${err}`)
        return
    }

    //3 - tranfer the data for the html and js and start the counter
    document.getElementById('event-title').innerHTML=`${formEvent.toUpperCase()}`
    countdown()

 
    //4 - close the form and reveal the counter
    document.querySelector('.cloud').classList.add('hidden')
    document.querySelector('.counter').classList.remove('hidden')

}

setInterval(countdown, 1000); //This line of code will repete certain function in a determined time interval. Inside the parentheses, first goes the function name and then goes the time frame in miliseconds (1000milliseconds = 1sec).




    


