import { randomAnimalName } from './consumeAPI.js';

let animal;

const displayRandomAnimal = async () => {
    animal = await randomAnimalName(); // Sorteia o animal
    if (animal) {
        document.querySelector('.theme-tip').textContent = animal.dica;
        const underscoredWord = animal.palavra.split('').map(char => char === '-' ? '- ' : '_ ').join('');
        document.querySelector('.word-field').textContent = underscoredWord;

        // Adiciona o evento de clique para o teclado virtual após o sorteio do animal
        document.querySelectorAll('.key').forEach(key => {
            key.addEventListener('click', (event) => {
                const letter = event.currentTarget.textContent; // Captura a letra clicada
                checkLetters(letter, animal.palavra); // Passa a palavra sorteada do animal
                event.currentTarget.classList.add('clicked'); // Desabilita a tecla clicada
            });
        });
    }
};

const checkLetters = (letter, palavra) => {
    let wordArray = document.querySelector('.word-field').textContent.split(' '); // Palavras sublinhadas no campo
    let found = false;

    // Verifica se a letra clicada está presente no nome do animal
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toUpperCase() === letter.toUpperCase()) {
            wordArray[i] = letter;  // Atualiza a palavra com a letra correta
            found = true;
        }
    }

    // Atualiza o campo da palavra com as letras reveladas
    document.querySelector('.word-field').textContent = wordArray.join(' ');

    if (!found) {
        const lifeIcons = document.querySelectorAll(".iconLife"); // Seleciona todos os elementos com a classe 'iconLife'
    if (lifeIcons.length > 0) {
        const lastLife = lifeIcons[lifeIcons.length - 1]; // Obtém o último item da lista
        lastLife.remove(); // Remove o último elemento de vida
    }else {
        
    }
    }
};

document.getElementById("btn_comecar").addEventListener("click", async () => {
    await displayRandomAnimal(); // Sorteia o animal e prepara o campo da palavra
    document.querySelector(".cover-gamer").style.display = 'none';
    document.querySelector(".container-game").style.display = 'flex'; 
});