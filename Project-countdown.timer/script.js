let formDate

function save(event){

    event.preventDefault()

     //1 - get the event and date from the inputs
    let formEvent = document.getElementById('event').value
    formDate = document.getElementById('date').value

    //2 - check if all the inputs were filled
    if(formEvent === "" || formDate === "") {
        alert("Por favor preencha todos os campos")
        return /*ARRUMAR*/
    }

    //3 - tranfer the data for the html and js
    document.getElementById('event-title').innerHTML=`${formEvent}`

 
    //4 - close the form and reveal the counter
    document.querySelector('.cloud').classList.add('hidden')
    document.querySelector('.counter').classList.remove('hidden')

}

function countdown() {
    //1 - define final date
    let date = new Date(formDate)

    // //2 - get current date
    const currentDate = new Date()

    //3 - calculate remaining time
    const result = date-currentDate
    

    //4- transform milisconds into days, hours, minutes and seconds
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

countdown()

setInterval(countdown, 1000); //Isso aqui vai repetir uma função em determinado intervalo de tempo, entre parenteses, primeiro vai o nome da função e depois o intervalo de tempo em milissegundos.(1000milissegundos = 1seg)





    


