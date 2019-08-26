let step = 0;

window.onload = function() 
{
    displayfunction();
};

function incstep(id)
{
    step++;
    document.getElementById(id).setAttribute('disabled', 'disabled');;
}

var markedX = [];
var markedO = [];
var mp = 
{   
    "btn1": 1,
    "btn2": 2,
    "btn3": 3,
    "btn4": 4,
    "btn5": 5,
    "btn6": 6,
    "btn7": 7,
    "btn8": 8,
    "btn9": 9
}
var revmp =
{
    1: "btn1",
    2: "btn2",
    3: "btn3",
    4: "btn4",
    5: "btn5",
    6: "btn6",
    7: "btn7",
    8: "btn8",
    9: "btn9",
}

let victory;

function marktile(val)
{
    if(!(markedX.includes(val) || markedO.includes(val)))
    {
        if(step&1)
        {
            document.getElementById(val).innerHTML = 'O';
            let btnno = mp[val];
            markedO.push(val);
            if(btnno === 1)
            {
                if((markedO.includes(revmp[2]) && markedO.includes(revmp[3])) || (markedO.includes(revmp[4]) && markedO.includes(revmp[7])) || (markedO.includes(revmp[5]) && markedO.includes(revmp[9]))) victory = 'O';
            }
            else if(btnno === 2)
            {
                if((markedO.includes(revmp[1]) && markedO.includes(revmp[3])) || (markedO.includes(revmp[5]) && markedO.includes(revmp[8]))) victory = 'O';            
            }
            else if(btnno === 3)
            {
                if((markedO.includes(revmp[1]) && markedO.includes(revmp[2])) || (markedO.includes(revmp[6]) && markedO.includes(revmp[9])) || (markedO.includes(revmp[5]) && markedO.includes(revmp[7]))) victory = 'O';           
            }
            else if(btnno === 4)
            {
                if((markedO.includes(revmp[1]) && markedO.includes(revmp[7])) || (markedO.includes(revmp[5]) && markedO.includes(revmp[6]))) victory = 'O';
            }
            else if(btnno === 5)
            {
                if((markedO.includes(revmp[2]) && markedO.includes(revmp[8])) || (markedO.includes(revmp[4]) && markedO.includes(revmp[6])) || (markedO.includes(revmp[1]) && markedO.includes(revmp[9])) || (markedO.includes(revmp[3]) && markedO.includes(revmp[7]))) victory = 'O';
            }
            else if(btnno === 6)
            {
                if((markedO.includes(revmp[3]) && markedO.includes(revmp[9])) || (markedO.includes(revmp[4]) && markedO.includes(revmp[5]))) victory = 'O';            
            }
            else if(btnno === 7)
            {
                if((markedO.includes(revmp[1]) && markedO.includes(revmp[4])) || (markedO.includes(revmp[8]) && markedO.includes(revmp[9])) || (markedO.includes(revmp[3]) && markedO.includes(revmp[5]))) victory = 'O';           
            }
            else if(btnno === 8)
            {
                if((markedO.includes(revmp[2]) && markedO.includes(revmp[5])) || (markedO.includes(revmp[7]) && markedO.includes(revmp[9]))) victory = 'O';            
            }
            else if(btnno === 9)
            {
                if((markedO.includes(revmp[3]) && markedO.includes(revmp[6])) || (markedO.includes(revmp[7]) && markedO.includes(revmp[8])) || (markedO.includes(revmp[1]) && markedO.includes(revmp[5]))) victory = 'O';            
            }
            if(victory === 'O') endgame(victory);
            else if(step === 9) endgame(victory);
            else displayfunction();
        }
        else
        {
            document.getElementById(val).innerHTML= 'X';
            let btnno = mp[val];
            markedX.push(val);
            if(btnno === 1)
            {
                if((markedX.includes(revmp[2]) && markedX.includes(revmp[3])) || (markedX.includes(revmp[4]) && markedX.includes(revmp[7])) || (markedX.includes(revmp[5]) && markedX.includes(revmp[9]))) victory = 'X';
            }
            else if(btnno === 2)
            {
                if((markedX.includes(revmp[1]) && markedX.includes(revmp[3])) || (markedX.includes(revmp[5]) && markedX.includes(revmp[8]))) victory = 'X';            
            }
            else if(btnno === 3)
            {
                if((markedX.includes(revmp[1]) && markedX.includes(revmp[2])) || (markedX.includes(revmp[6]) && markedX.includes(revmp[9])) || (markedX.includes(revmp[5]) && markedX.includes(revmp[7]))) victory = 'X';           
            }
            else if(btnno === 4)
            {
                if((markedX.includes(revmp[1]) && markedX.includes(revmp[7])) || (markedX.includes(revmp[5]) && markedX.includes(revmp[6]))) victory = 'X';
            }
            else if(btnno === 5)
            {
                if((markedX.includes(revmp[2]) && markedX.includes(revmp[8])) || (markedX.includes(revmp[4]) && markedX.includes(revmp[6])) || (markedX.includes(revmp[1]) && markedX.includes(revmp[9])) || (markedX.includes(revmp[3]) && markedX.includes(revmp[7]))) victory = 'X';
            }
            else if(btnno === 6)
            {
                if((markedX.includes(revmp[3]) && markedX.includes(revmp[9])) || (markedX.includes(revmp[4]) && markedX.includes(revmp[5]))) victory = 'X';            
            }
            else if(btnno === 7)
            {
                if((markedX.includes(revmp[1]) && markedX.includes(revmp[4])) || (markedX.includes(revmp[8]) && markedX.includes(revmp[9])) || (markedX.includes(revmp[3]) && markedX.includes(revmp[5]))) victory = 'X';           
            }
            else if(btnno === 8)
            {
                if((markedX.includes(revmp[2]) && markedX.includes(revmp[5])) || (markedX.includes(revmp[7]) && markedX.includes(revmp[9]))) victory = 'X';            
            }
            else if(btnno === 9)
            {
                if((markedX.includes(revmp[3]) && markedX.includes(revmp[6])) || (markedX.includes(revmp[7]) && markedX.includes(revmp[8])) || (markedX.includes(revmp[1]) && markedX.includes(revmp[5]))) victory = 'X';            
            }
            if(victory === 'X') endgame(victory);
            else if(step === 9) endgame(victory);
            else displayfunction();
        }
    }
}

function endgame(a)
{
    if(victory === 'O') document.getElementById("display").innerHTML= "PLAYER 1 WINS !!!";
    else if(victory === 'X') document.getElementById("display").innerHTML= "PLAYER 2 WINS !!!";
    else document.getElementById("display").innerHTML= "DRAW MATCH !!!";
    for (var key in mp) 
    {
        if (mp.hasOwnProperty(key)) 
        {
            document.getElementById(key).setAttribute('disabled', 'disabled');
        }
    }

}

function displayfunction()
{
    if(step&1)
    {
        document.getElementById("display").innerHTML= "PLAYER 2's CHANCE";
    }
    else
    {
        document.getElementById("display").innerHTML= "PLAYER 1's CHANCE";
    }
}

function reset()
{
    step = 0;
    markedO = [];
    markedX = [];
    displayfunction();
    for (var key in mp) 
    {
        if (mp.hasOwnProperty(key)) 
        {
            document.getElementById(key).removeAttribute('disabled');
            document.getElementById(key).innerHTML= '';
        }
    }
    victory = undefined;
}