// Створити сторінку, що показує нумерований список пісень:

let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN",
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY",
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD",
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER",
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER",
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK",
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU",
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN",
    },
];

const createList = document.getElementById('listOfSongs');

let ol = document.createElement('ol');
createList.append(ol);

for (let i = 0; i < playList.length; i++) {
    let li = document.createElement('li');
    li.innerText = `${playList[i].author}; ${playList[i].song}`;
    ol.append(li);
}
