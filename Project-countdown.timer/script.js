
function countdown() {
    //1 - define final date
    let date = new Date('2021-08-12')

    // //2 - get current date
    const currentDate = new Date()

    //3 - calculate remaining time
    const result = date-currentDate
    

    //4- transform milisconds into days, hours, minutes and seconds
    const totalseconds = parseInt(result/1000)
    const seconds = parseInt(totalseconds) % 60
    const minutes = parseInt(totalseconds/60) % 60
    const hours = parseInt(totalseconds/3600) % 24
    const days = parseInt(totalseconds/3600/24)

    //5- link js with html
    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

}

countdown()


setInterval(countdown, 1000); //Isso aqui vai repetir uma função em determinado intervalo de tempo, entre parenteses, primieiro vai e o nome da função e depois o intervalo de tempo em milissegundos.(1000-milissegundos = 1seg)
