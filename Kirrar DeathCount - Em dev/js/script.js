/*Menu*/

newGame.addEventListener('click', () => {
    nGameMod.style.display = 'flex'
})

/*New Game*/

function closeNGameMod () {
    nGameMod.style.display = 'none'
    nGameName.value = ''
    eGameMod.style.display = 'none'
    eGameName.value = ''
}

confnGame.addEventListener('click', () => {
    createGame()
    closeNGameMod()
})

nGameMod.addEventListener('click', (event) => {
    if (event.target === nGameMod) {
        closeNGameMod()
    }
})

/*Edit game*/

confeGame.addEventListener('click', () => {
    games[gameIndex].gameName = eGameName.value

    buildGameLine(games)
    closeNGameMod()
})

eGameMod.addEventListener('click', (event) => {
    if (event.target === eGameMod) {
        closeNGameMod()
    }
})

/*New save*/

newSave.addEventListener('click', () => {
    nSaveMod.style.display = 'flex'
})

function closeNSaveMod () {
    nSaveMod.style.display = 'none'
}

confnSave.addEventListener('click', () => {
    createSave()
    buildSaveLine(games[gameIndex].saves)
    closeNSaveMod()
})

nSaveMod.addEventListener('click', (event) => {
    if (event.target === nSaveMod) {
        closeNSaveMod()
    }
})

/*Save List*/


