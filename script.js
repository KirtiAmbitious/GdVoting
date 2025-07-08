document.getElementById("c1").style.visibility = 'hidden';
document.getElementById("c2").style.visibility = 'hidden';
document.getElementById("c3").style.visibility = 'hidden';
document.getElementById("c4").style.visibility = 'hidden';
document.getElementById("k1").style.visibility = 'hidden';
document.getElementById("k2").style.visibility = 'hidden';
document.getElementById("k3").style.visibility = 'hidden';
document.getElementById("k4").style.visibility = 'hidden';
document.getElementById("b1").addEventListener('click', vote);
document.getElementById('b2').addEventListener('click', vote);
document.getElementById('b3').addEventListener('click', vote); document.getElementById('b4').addEventListener('click', vote);
document.getElementById("g1").addEventListener('click', votee);
document.getElementById('g2').addEventListener('click', votee);
document.getElementById('g3').addEventListener('click', votee); document.getElementById('g4').addEventListener('click', votee);
document.getElementById('show').addEventListener('click',Show);
v=0;
c1=0;c2=0;c3=0;c4=0;
g1=0;g2=0;g3=0;g4=0;
 
function vote(event1) 
{  const clickedId = event1.target.id;
 document.getElementById("b1").disabled = true;
 document.getElementById("b2").disabled = true;
 document.getElementById("b3").disabled = true;
 document.getElementById("b4").disabled = true;
    if (clickedId === "b1")
    { c1+= 1;
     } 
    else if(clickedId === "b2") 
    {  c2 += 1;
    }      
    else if (clickedId === "b3") 
    {c3 += 1;
    }
    else if (clickedId === "b4") 
    {c4 += 1;
        }
document.getElementById("c1").textContent ="CONTESTENT 1 = "+ c1;
document.getElementById("c2").textContent ="CONTESTENT 2 = "+ c2;
document.getElementById("c3").textContent ="CONTESTENT 3 = "+ c3;
document.getElementById("c4").textContent ="CONTESTENT 4 = "+ c4;

} //END OF VOTE FUNCTION

//VOTEE FOR GIRLS VOTING
 function votee(event2) 
{ v += 1; 
 alert("You voted successfully!");
 const clicked = event2.target.id;
 document.getElementById("g1").disabled = true;
 document.getElementById("g2").disabled = true;
 document.getElementById("g3").disabled = true;
 document.getElementById("g4").disabled = true;
    if (clicked === "g1")
     g1 += 1; 
    else if(clicked === "g2") 
     g2 += 1;      
    else if (clicked === "g3") 
     g3 += 1;
    else if (clicked === "g4") 
     g4 += 1;        
 //Showing voted  
document.getElementById("voteCount").textContent =v;
document.getElementById("k1").textContent ="CONTESTENT 1 = "+ g1;
document.getElementById("k2").textContent ="CONTESTENT 2 = "+ g2;
document.getElementById("k3").textContent ="CONTESTENT 3 = "+ g3;
document.getElementById("k4").textContent ="CONTESTENT 4 = "+ g4;
  setTimeout(function() {
    alert("Next Voter can vote now"); 
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("g1").disabled = false;
    document.getElementById("g2").disabled = false;
    document.getElementById("g3").disabled = false;
    document.getElementById("g4").disabled = false;
},5000);
}

 //Delay for next entry
function Show(event)
{
document.getElementById("c1").style.visibility = 'visible';
document.getElementById("c2").style.visibility = 'visible';
document.getElementById("c3").style.visibility = 'visible';
document.getElementById("c4").style.visibility = 'visible';
document.getElementById("k1").style.visibility = 'visible';
document.getElementById("k2").style.visibility = 'visible';
document.getElementById("k3").style.visibility = 'visible';
document.getElementById("k4").style.visibility = 'visible';
}