document.querySelector(".guess").addEventListener("click", ()=> {
    document.querySelector(".mainBoard").style.display = 'none';
    document.querySelector(".guess-word").style.display = 'flex'; 
});

document.querySelector(".decline").addEventListener("click", () => {
    document.querySelector(".guess-word").style.display = 'none'; 
    document.querySelector(".mainBoard").style.display = 'block';
});

document.querySelector(".text-send").addEventListener("click", () => {
    document.querySelector(".inp_text").value = "";
    document.querySelector(".inp_text").disabled = true;
});

document.querySelector(".reload").addEventListener("click", () => {
    location.reload();
});