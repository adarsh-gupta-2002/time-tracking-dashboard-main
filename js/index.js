// import data from '../data.json';
// import data from '../data.json' assert { type: 'JSON' };
// console.log(data);

const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')

const btns = document.querySelectorAll('.btn')

const currentHours = document.querySelectorAll('.current-hours')

const previousHours = document.querySelectorAll('.previous-hours')

const title = document.querySelectorAll('.title')

console.log(title[0].textContent)

function handleClick(button , text){
    btns.forEach((btn) =>{
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
        }
    })

    

    button.classList.add('active')
 
    setReport(text)
}

daily.addEventListener('click' , () =>{
    
    handleClick(daily,'daily')
})
weekly.addEventListener('click' , () =>{
    
    handleClick(weekly,'weekly')
})
monthly.addEventListener('click' , () =>{
    
    handleClick(monthly,'monthly')
})


const res = await   fetch('../data.json')

var data =  await res.json()

console.log(data[0].timeframes.daily.current)
function setReport(reportType){
    
    
    var current = []
    var previous = []
    
    for(let i = 0; i < data.length ; i++){
        if(reportType === 'daily'){
            console.log('enter')

            current.push(data[i].timeframes.daily.current)
            previous.push(data[i].timeframes.daily.previous)
            title[i].textContent = 'day'
        }
        else if(reportType === 'weekly'){
            current.push(data[i].timeframes.weekly.current)
            previous.push(data[i].timeframes.weekly.previous)
            title[i].textContent = 'week'
        }
        else if(reportType === 'monthly'){
            current.push(data[i].timeframes.monthly.current)
            previous.push(data[i].timeframes.monthly.previous)
            title[i].textContent = 'month'
        }


    }


    currentHours.forEach((item , index) =>{
        item.textContent = current[index]
    }) 
    previousHours.forEach((item , index) =>{
        item.textContent = previous[index]
    }) 

    
     
}

