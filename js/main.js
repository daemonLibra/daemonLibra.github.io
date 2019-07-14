const urlImg_1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/MariebergsSkogen50.JPG/1920px-MariebergsSkogen50.JPG';
const urlImg_2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Selma_Lagerlofs_Marbacka_at_Sunne.jpg/1920px-Selma_Lagerlofs_Marbacka_at_Sunne.jpg';
const mymap = L.map('mapid').setView([59.3793, 13.50357],13);

const att = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, {att});

tiles.addTo(mymap);

async function GetImgKarlstad()
{
    const response1 = await fetch(urlImg_1);
    const response2 = await fetch(urlImg_2);
    const blob1 = await response1.blob();
    const blob2 = await response2.blob();
    document.getElementById('karlstad_Mariebergsskogen').src = URL.createObjectURL(blob1);
    document.getElementById('karlstad_Marbacka').src = URL.createObjectURL(blob2);
}

GetImgKarlstad();

L.marker([59.3793,13.50357]).addTo(mymap);

