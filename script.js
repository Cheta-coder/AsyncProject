let display = document.getElementById('display')
let count = 0;

console.log(count)
let myAsync = async() =>{
    try{
        let req = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')

        let res = await req.json()
        console.log(res.data)
        display.innerHTML = JSON.stringify(res.data)
        let table = document.createElement('table')
        let trhead = document.createElement('tr')
        let th1 = document.createElement('th')
        let th2 = document.createElement('th')
        let th3 = document.createElement('th')
        let th4 = document.createElement('th')
        let th5 = document.createElement('th')
        let th6 = document.createElement('th')

        th1.innerText = 'Nation ID'
        th2.innerText = 'Nation'
        th3.innerText = 'Year ID'
        th4.innerText = 'Year'
        th5.innerText = 'Population'
        th6.innerText = 'Slug Nation'

        trhead.append(th1, th2, th3, th4, th5, th6)
        table.append(trhead)

        for(i=0; i < res.data.length; i++){
            let trow = document.createElement('tr')
            // console.log('present')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            let td4 = document.createElement('td')
            let td5 = document.createElement('td')
            let td6 = document.createElement('td')
            
            td1.innerHTML = res.data[i][ 'ID Nation' ];
            console.log(res.data[i][ 'ID Nation' ]);
            // console.log(trow)
            td2.innerHTML = res.data[i].Nation;
            console.log(res.data[i].Nation);
            td3.innerHTML = res.data[i][ 'ID Year' ];
            td4.innerHTML = res.data[i].Year;
            td5.innerHTML = res.data[i].Population;
            td6.innerHTML = res.data[i][ 'Slug Nation' ];
            console.log(res.data[i][ 'Slug Nation' ]);

            trow.append(td1, td2, td3, td4, td5, td6)
            table.append(trow)
            display.innerHTML = ""
            display.appendChild(table)
        }
    }
    catch(err){
        console.log(err)
    }
}
myAsync()