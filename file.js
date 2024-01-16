
var b=0
let player1
let player2
let Player

function call0()
{
    if((document.getElementById("0").innerHTML)=="")
    {
        if(b%2==0)
        {
            document.getElementById("0").innerHTML="X"
            Player="player2"
        }
         else{
            document.getElementById("0").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function call1()
{
    if((document.getElementById("1").innerHTML)=="")
    {
        if(b%2==0)
        {
            document.getElementById("1").innerHTML="X"
            Player="player2"
        }
         else{
            document.getElementById("1").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function call2()
{
    if((document.getElementById("2").innerHTML)=="")
    {
        if(b%2==0)
        {
            document.getElementById("2").innerHTML="X"
            Player="player2"
        }
         else{
            document.getElementById("2").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function call3()
{
    if((document.getElementById("3").innerHTML)=="")
    {
        if(b%2==0)
        {
            document.getElementById("3").innerHTML="X"
            Player="player2"
        }
         else{
            document.getElementById("3").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function call4()
{
    if((document.getElementById("4").innerHTML)=="")
    {
        if(b%2==0)
        {
             document.getElementById("4").innerHTML="X"
             Player="player2"
        }
         else{
            document.getElementById("4").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function call5()
{
    if((document.getElementById("5").innerHTML)=="")
    {
        if(b%2==0)
        {
             document.getElementById("5").innerHTML="X"
             Player="player2"
        }
         else{
            document.getElementById("5").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function call6()
{
    if((document.getElementById('6').innerHTML)=="")
    {
        if(b%2==0)
        {
             document.getElementById("6").innerHTML="X"
             Player="player2"
        }
         else{
            document.getElementById("6").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function call7()
{
    if((document.getElementById('7').innerHTML)=="")
    {
        if(b%2==0)
        {
             document.getElementById("7").innerHTML="X"
             Player="player2"
        }
         else{
            document.getElementById("7").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function call8()
{
    if((document.getElementById('8').innerHTML)=="")
    {
        if(b%2==0)
        {
             document.getElementById("8").innerHTML="X"
             Player="player2"
        }
         else{
            document.getElementById("8").innerHTML="O"
            Player="player1"
        }
        b++
        winning()
    }
    else
    {
        alert('space already filled')
    }
}

function winning()
{
    let c=document.getElementsByTagName('p')
    
        if (((c[0].innerHTML==c[1].innerHTML) && (c[0].innerHTML==c[2].innerHTML) && (c[0].innerHTML!="")) || ((c[3].innerHTML==c[4].innerHTML) && (c[3].innerHTML==c[5].innerHTML) && (c[3].innerHTML!="")) || ((c[6].innerHTML==c[8].innerHTML) && (c[6].innerHTML==c[7].innerHTML) && (c[6].innerHTML!="")) || ((c[0].innerHTML==c[3].innerHTML) && (c[0].innerHTML==c[6].innerHTML) && (c[3].innerHTML!="")) || ((c[1].innerHTML==c[4].innerHTML) && (c[1].innerHTML==c[7].innerHTML) && (c[1].innerHTML!="")) || ((c[2].innerHTML==c[5].innerHTML) && (c[2].innerHTML==c[8].innerHTML) && (c[8].innerHTML!="")) || ((c[0].innerHTML==c[4].innerHTML) && (c[0].innerHTML==c[8].innerHTML) && (c[8].innerHTML!="")) || ((c[2].innerHTML==c[4].innerHTML) && (c[2].innerHTML==c[6].innerHTML) && (c[6].innerHTML!="")))
          {
              document.getElementById('win').innerHTML="winner is" +" " + Player
            //   for(let i=0;i<9;i++)
            //    {
            //       c[i].innerHTML=''
            //    }
       
          }
    
}

function reset()
{
    let c=document.getElementsByTagName('p')
    for(let i=0;i<10;i++)
        {
            c[i].innerHTML=''
        }
    document.getElementById("win").innerHTML=""
}