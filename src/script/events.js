document.getElementById("btn_comecar").addEventListener("click", ()=> {
    console.log("entrei container-game");
    document.querySelector(".cover-gamer").style.display = 'none';
    document.querySelector(".container-game").style.display = 'flex'; 
});

document.querySelector(".guess").addEventListener("click", ()=> {
    console.log("entrei guess");
    document.querySelector(".mainBoard").style.display = 'none';
    document.querySelector(".guess-word").style.display = 'flex'; 
});

document.querySelector(".decline").addEventListener("click", () => {
    console.log("entrei decline");
    document.querySelector(".guess-word").style.display = 'none'; 
    document.querySelector(".mainBoard").style.display = 'block';
});

document.querySelector(".text-send").addEventListener("click", () => {
    console.log("entrei text");
    document.querySelector(".inp_text").value = "";
    document.querySelector(".inp_text").disabled = true;
});