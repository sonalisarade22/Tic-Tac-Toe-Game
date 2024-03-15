let boxes=document.querySelectorAll(".one");
let resetbtn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#newButton");
let msgcontainer=document.querySelector(".msg");
let ms=document.querySelector("#ms");

let turnO=true;

const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetgame=()=>
{
    turnO=true;
    EnableBoxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((one)=>
{
    one.addEventListener("click",()=>
    {
        console.log("box click");
        if(turnO)
        {
            one.innerText="0";
            turnO=false;

        }
        else{
            one.innerText="X";
            turnO=true;
        }
        one.disabled=true;
        checkwinner();
    });
});

const disabledBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const EnableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>
{
    ms.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}

const checkwinner=()=>
{
    for(pattern of winpattern)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val!= "" && pos3Val)
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                showwinner(pos1Val);
            }
        }
    }

    
};

newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



