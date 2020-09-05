const imperial = document.querySelector('#imperial');
const metric = document.querySelector('#metric');
const nr = document.querySelectorAll('.dim');
let conversie = 0;
imperial.onclick = function(){
    let putere = document.getElementById('putere').innerHTML;
    let cuplu = document.getElementById('cuplu').innerHTML;
    if (conversie === 0){
        conversie = 1;
        document.getElementById('putere').innerHTML = putere.replace('510 CP', '380 kW');
        document.getElementById('cuplu').innerHTML = cuplu.replace('600 Nm', '442.5 lbf*ft');
        console.log('schimbat imperial');
        nr.forEach(function(string){
            let deSchimbat = string.textContent.match(/[\d\.]+/);
            let numar = parseFloat(deSchimbat);
            //console.log(numar);
            numar = Math.round(numar * 0.0393700787 * 100) / 100; // milimetru -> inch
            //console.log(numar);
            let convString = numar.toString();
            //console.log(convString);
            string.innerHTML = string.textContent.replace(deSchimbat, convString);
            string.innerHTML = string.textContent.replace('mm', 'in');
        })
        let greutate = document.getElementById('greutate');
        //console.log(greutate);
        let numar = greutate.textContent.match(/\d+/);
        //console.log(numar);
        let greutateConv = Math.floor(numar * 2.20462262).toString(); // kg -> lbs
        //console.log(greutateConv);
        document.getElementById('greutate').innerHTML = greutate.textContent.replace(numar, greutateConv);
        document.getElementById('greutate').innerHTML = greutate.textContent.replace('kg', 'lbs');
    }
}

metric.onclick = function(){
    let putere = document.getElementById('putere').innerHTML;
    let cuplu = document.getElementById('cuplu').innerHTML;
    if (conversie === 1){
        conversie = 0;
        document.getElementById('putere').innerHTML = putere.replace('380 kW', '510 CP');
        document.getElementById('cuplu').innerHTML = cuplu.replace('442.5 lbf*ft', '600 Nm');
        console.log('schimbat metric');
        nr.forEach(function(string){
            let deSchimbat = string.textContent.match(/[\d\.]+/);
            let numar = parseFloat(deSchimbat);
            //console.log(numar);
            numar = Math.round(numar * 25.4 * 10) / 10; // inch -> milimetru
            //console.log(numar);
            let convString = numar.toString();
            //console.log(convString);
            string.innerHTML = string.textContent.replace(deSchimbat, convString);
            string.innerHTML = string.textContent.replace('in', 'mm');
        })
    }
    let greutate = document.getElementById('greutate');
    //console.log(greutate);
    let numar = greutate.textContent.match(/\d+/);
    //console.log(numar);
    let greutateConv = Math.floor(numar * 0.45359237).toString(); // lbs -> kg
    //console.log(greutateConv);
    document.getElementById('greutate').innerHTML = greutate.textContent.replace(numar, greutateConv);
    document.getElementById('greutate').innerHTML = greutate.textContent.replace('lbs', 'kg');
}


