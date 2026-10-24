//New game

confnGame.addEventListener('click', () => {
    if (nGameName.value.trim() === '') {
        warn('Necessário preencher nome!')
        return
    }

    createGame()
    closeMod(nGameMod)
})

nGameMod.addEventListener('click', (event) => {
    if (event.target === nGameMod) {
        closeMod(nGameMod)
    }
})

//Edit game

confeGame.addEventListener('click', () => {
    if (eGameName.value.trim() === '') {
        warn('Necessário preencher nome!')
        return
    }

    games[gameIndex].gameName = eGameName.value

    buildGameLine(games)
    closeMod(eGameMod)
    saveData()
})

eGameMod.addEventListener('click', (event) => {
    if (event.target === eGameMod) {
        closeMod(eGameMod)
    }
})

//Update Global deathcounters

function updateTotalCounter () {
    for (let i = 0; i < games.length; i++) {
        games[i].totalDeathCounter = 0

        for (let s = 0; s < games[i].saves.length; s++) {
            games[i].totalDeathCounter += games[i].saves[s].deathCounter
        }
    }
    buildGameLine(games)
}
