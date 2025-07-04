const btns = document.querySelectorAll(".box")
const wonPopUp = document.querySelector(".won")

// addes eventlistener to every cell .Deletes eventlistener when cell is clicked
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{

        btn.innerHTML = `<svg width="100" height="100" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="black"/>
                            </svg>`

        btn.classList.add("cross")
        checkForWin("cross")
        computerMove()
        checkForWin("circle")
        
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    })
})

// if either side fills this positions game ends 
const winningPositions = {
     hor1: document.querySelectorAll(".box:nth-child(-n+3)"),
     hor2: document.querySelectorAll(".box:nth-child(n+4):nth-child(-n+6)"),
     hor3: document.querySelectorAll(".box:nth-child(n+7)"),

     ver1: document.querySelectorAll(".box:nth-child(3n-2)"),
     ver2: document.querySelectorAll(".box:nth-child(3n-1)"),
     ver3: document.querySelectorAll(".box:nth-child(3n)"),

     diag1: document.querySelectorAll(".box:nth-child(1), .box:nth-child(5), .box:nth-child(9)"),
     diag2: document.querySelectorAll(".box:nth-child(3), .box:nth-child(5), .box:nth-child(7)"),
}

//makes computer Move(randomly chooses from cells that hasnt been already taken)
function computerMove(){
    const availabeSpots = []
    btns.forEach(btn=>{
        if(!btn.classList.contains("cross")&&!btn.classList.contains("circle")){
            availabeSpots.push(btn)
        }
    })
    let randomSpot = Math.floor(Math.random()*availabeSpots.length)
    let availabeSpot = availabeSpots[randomSpot]
    availabeSpot.classList.add("circle")
    availabeSpot.innerHTML = `<svg width="100" height="100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667932 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="black"/>
                                </svg>
                            `
    const newBtn = availabeSpot.cloneNode(true);

        availabeSpot.parentNode.replaceChild(newBtn, availabeSpot);
}

//checks is either side filled one of winning positions
function checkForWin(side){
    console.log("invoked");
    const positions = Object.values(winningPositions);
    
    positions.forEach(position => {
        console.log(position);
        const positionArray = Array.from(position);
        if (positionArray.every(cell => cell.classList.contains(side))) {
            wonPopUp.textContent = side=="cross"?"you won":"ai won"
            wonPopUp.style.display = "flex"
            
        }
        
        console.log("position ended");
    });
}