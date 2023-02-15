const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('img')


function isLampBroken(){
    return  lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src="./img/ligada.jpg"
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src="./img/desligada.jpg"
    }
}

function lampBroken(){
    if(!isLampBroken()){
        lamp.src="./img/quebrada.jpg"
    }
}

function lampOnOff(){
    if(!isLampBroken()){
        if(turnOnOff.textContent == 'ligar'){
            lampOn();
            return turnOnOff.textContent ='Desligar'
        }
        if(turnOnOff.textContent == 'Desligar'){
            lampOff();
            return turnOnOff.textContent = 'ligar'
        }
    }
}

turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)