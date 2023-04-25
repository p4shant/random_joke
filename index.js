
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";


async function fun(){
    console.log("hi");
    fetch(url)
    .then(data=>data.json()
    )
    .then(data=>{
        console.log(data.joke)
        document.getElementById("joke").textContent=data.joke;
    });
}