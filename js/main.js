
function loadTitels() {
    document.getElementById('title_head').innerHTML ="Meine Bewerbung für die Universität Karlstad";

    document.getElementById('title_It').innerHTML ="Informatik";

    document.getElementById('title_Wi').innerHTML ="Wirtschaft";

    document.getElementById('title_Int').innerHTML="Warum möchte ich an der Universität Karlstad studieren?";

    document.getElementById('map_title').innerHTML="Karlstad auf einer Karte mit der Leaflet Api";
}

function loadLeads() {
    document.getElementById('lead_It').innerHTML ="Informatik beeinflusst mein Denken. Ich sehe nicht mehr ein Spiel als nur ein Spiel, vielmehr überlege ich mir, wie es programmiert wurde und was man daran verbessern könnte. Ich versuche nicht technische Probleme einfach hinzunehmen, sondern bemühe mich das Problem zu lösen und es vorzubeugen.\n" +
        "\n" +
        "            Mein allgemeines Interesse an Computern wurde schon in jungen Jahren geweckt als mein Vater mir und meinen Bruder jeweils einen Computer zusammenbaute mit Windows 98 und 2000, unseren Geburtsjahren.\n" +
        "\n" +
        "            Über die Jahre hinweg hat er mir viel über Computer beigebracht und wir haben schon viele Tage und Nächte mit dem Lösen von technischen Problemen verbracht. ";

    document.getElementById('lead_Wi').innerHTML ="Früher arbeitete ich in der Kanzlei meiner Mutter, welche Steuerberaterin und Dozentin für Steuerrecht ist, und ich half als Aushilfe bei der Buchhaltung sowie der Bearbeitung von Skripten und Präsentationen. Diese 2-Jährigen Erfahrungen und die Vorlesungen bei der DHBW haben bei mir auch ein Interesse an wirtschaftlichen Themen geweckt.";


    document.getElementById('lead_Int').innerHTML="        Als ich hörte das die DHBW eine Partner Uni in Karlstad hat erinnerte ich mich gerne zurück, dass ich mit der Familie in Mariebergsskogen gespielt habe und wir Mårbacka besuchten.\n" +
        "        Da ich zur Hälfte Schwede bin und täglich mit meiner Mutter schwedisch sprechen, wusste ich, dass ich mir die Chance nicht entgehen lassen sollte mich für den Auslandsaufenthalt zu\n" +
        "        bewerben.\n" +
        "        Ich denke das Schweden (Värmland) die ideale Möglichkeit ist, um meine Ziel zu erreichen. Warum? Weil es zweifellos ein globaler Hotspot für Technologie ist und ich bei dem Weltmarktführer Wolters kluwer Software für Steuerberater programmiere. Zusätzlich darf ich meine Schwedischkenntnisse verbessern und kann damit im Konzern wolters kluwer die deutsch- schwedisch Kooperation unterstützen.\n";

}

loadTitels();
loadLeads();

const urlImg_1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/MariebergsSkogen50.JPG/1920px-MariebergsSkogen50.JPG';
const urlImg_2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Selma_Lagerlofs_Marbacka_at_Sunne.jpg/1920px-Selma_Lagerlofs_Marbacka_at_Sunne.jpg';
const mymap = L.map('mapid').setView([59.3793, 13.50357],13);

const att = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, {att});

tiles.addTo(mymap);

L.marker([59.3793,13.50357]).addTo(mymap);

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



