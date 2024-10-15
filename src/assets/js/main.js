import '../css/style.css'

const likedHtml = document.querySelector('[data-role=liked]');
const currentJokeHtml = document.querySelector('[data-role=joke-content]');
const btnRefresh = document.querySelector('[data-role=refresh-joke]');
const btnLike = document.querySelector('[data-role=like-joke]');
const inputLanguage = document.querySelector('[data-role=language-selector]');
let liked = JSON.parse(localStorage.getItem('likeJokes') ?? '[]');
let currentJoke = {};
const url = 'https://v2.jokeapi.dev/joke/Any';
let transformedUrl = url;

function updateJoke() {
    fetch(transformedUrl)
    .then(response => response.json())
    .then(data => {
        currentJoke = data;

        if(data.joke) {
            currentJokeHtml.innerHTML = data.joke;
        }else if(data.setup && data.delivery){
            currentJokeHtml.innerHTML = data.setup + ' ' + data.delivery;
        }
    });
};

function updateLikedJokes() {
    likedHtml.innerHTML = '';
    let jokeContent = '';

        liked.forEach(joke => {
            if(joke.joke){
                jokeContent = joke.joke;
            }else if(joke.setup && joke.delivery) {
                jokeContent = joke.setup + ' ' + joke.delivery;
            }

            const div = document.createElement('div');
            div.className = 'grid gap-3 bg-blue rounded-lg p-3 w-full text-white';
            div.innerHTML = jokeContent;


            const button = document.createElement('button');
            button.textContent = 'Unlike';
            button.className = 'bg-dark-blue px-3 py-1 rounded-lg text-white hover:underline justify-self-end';

            button.onclick = () => {
                liked = liked.filter((likedJoke) => likedJoke.id !== joke.id);
                localStorage.setItem('likedJokes', JSON.stringify(liked));
                updateLikedJokes();
            }
    

            div.appendChild(button);

            likedHtml.appendChild(div);
        });



    }

updateJoke();
updateLikedJokes();

btnRefresh.onclick = () => {
    updateJoke();
}

btnLike.onclick = () => {
    liked.push(currentJoke);
    localStorage.setItem('likeJokes', JSON.stringify(liked));
    
    updateLikedJokes();
    updateJoke();
}

inputLanguage.onchange = () => {
    const value = inputLanguage.selectedOptions[0].value;
    transformedUrl = url + '?lang=' + value;
}