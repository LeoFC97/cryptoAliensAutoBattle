require('dotenv').config();
const { startBattle } = require('./zodiacs-api');
const arrayOfMonsters = require('./monsters');


(async () => {
    try {
        var listOfRaceResults = [{}];
        console.log(arrayOfMonsters.length)
        for (let i = 0; i < arrayOfMonsters.length; i++) {
            console.log(`characterId dentro do primeiro for: ${arrayOfMonsters[i].id}`)
            console.log(`batalhas quee serão realizadas: ${arrayOfMonsters[i].batalhas}`);
            for(j=0;j<arrayOfMonsters[i].batalhas;j++){
                console.log(`batalha atual: ${j+1}`);
                const battleWasStarted = await startBattle(arrayOfMonsters[i].id);
                console.log(`battleWasStarted: ${battleWasStarted}`);
                if(battleWasStarted){
                    console.log('batalha comecou, esperando entre 5 e 10 segundos')
                    await sleep(getRandomInt(5,10)*1000);
                }
                await sleep(getRandomInt(1,2)*4000);
            }
        };
    } catch (err) { 
        console.log(err);
    }
})()

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
