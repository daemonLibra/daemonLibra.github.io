const championData_TFT = "https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json";
const classes_TFT = "https://solomid-resources.s3.amazonaws.com/blitz/tft/data/classes.json";
const origins_TFT = "https://solomid-resources.s3.amazonaws.com/blitz/tft/data/origins.json";
const items_TFT = "https://solomid-resources.s3.amazonaws.com/blitz/tft/data/items.json";
const tierlist_TFT = "https://solomid-resources.s3.amazonaws.com/blitz/tft/data/tierlist.json";

const api_key = "RGAPI-7353d38f-82d2-43ff-a9b7-d94b7ffc9946";
const encryptedSummonerId = "";

const queue = "RANKED_TFT";
const test = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${api_key}`;
const pepeD =`https://euw1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/${queue}?api_key=${api_key}`;


const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

let summoners;
// Get states
const getStates = async () =>
{
    const res = await fetch(pepeD);
    summoners = await res.json();
};

// FIlter states

const searchStates = searchText =>
{
    // Get matches to current text input
    let matches = summoners.entries.filter(summoner =>
    {
        const regex = new RegExp(`^${searchText}`);
        return summoner.summonerName.match(regex);
    });

    // Clear when input or matches are empty

    if (searchText.length === 0)
    {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches =>
{
    if (matches.length > 0)
    {
        const html = matches .map(
            match => `<div class="card card-body mb-1"> 
                <h4>${match.summonerName} (${match.leaguePoints}) <span class="text-primary">${match.rank}</span></h4> 
                <small>Wins: ${match.wins} / Losses: ${match.losses}</small> 
                </div>` ) .join('');
        matchList.innerHTML = html;
    }
};

window.addEventListener('DOMContentLoaded', getStates);
search.addEventListener('input', () => searchStates(search.value));