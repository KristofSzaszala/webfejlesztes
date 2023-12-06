let botPontja=0
let sajatPontom=0


function jatekosValasztas(valasztas){
    let gepValasztasa=gepValasztas()
    console.log(valasztas,gepValasztasa)

    let sajatPontomSpan=document.getElementById('sajat-pontom')
    let botPontjaSpan=document.getElementById('bot-pontja')
    
    if(valasztas == 'rock' && gepValasztasa =='scissors'){
        sajatPontom++
    }else if(valasztas == 'scissors' && gepValasztasa =='paper'){
        sajatPontom++
    }else if(valasztas == 'paper' && gepValasztasa =='rock'){
        sajatPontom++
    }else if (valasztas == gepValasztasa){
        //dontetlen
    }else{
        botPontja++
    }

    sajatPontomSpan.innerHTML=sajatPontom
    botPontjaSpan.innerHTML=botPontja

    if(sajatPontom === 5){
        alert("Nyert egy pizzát az alábbi kódon." +
                "A kódja: "+ Math.floor(Math.random()*10000) +
                " (A kódot az üzletünkben tudja beváltani)")
        botPontja = 0;
        sajatPontom = 0;
    }else if(botPontja === 5){
        alert("Sajnos nem nyerte meg az ingyen pizzát")
        botPontja = 0;
        sajatPontom = 0;
    }

}

function gepValasztas(){
    let botKep=document.getElementById('bot-kep')
    let randomSzam= Math.floor(Math.random() * 3) + 1
    let gepValasztas=""
    if(randomSzam==1){
        gepValasztas="rock"
        botKep.src='assets/img/nyeremenyjatek/rock_purple.png'
    }
    else if(randomSzam==2){
        gepValasztas="paper"
        botKep.src='assets/img/nyeremenyjatek/paper_purple.png'
    }
    else{
        gepValasztas="scissors"
        botKep.src='assets/img/nyeremenyjatek/scissors_purple.png'
    }

    return gepValasztas
}