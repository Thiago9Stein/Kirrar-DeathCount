const games = []
let gameNextId = 1
let gameIndex

function createGame() {
    const game = {}
    const saves = []

    game.gameId = gameNextId
    game.gameName = nGameName.value
    game.totalDeathCounter = 0
    game.saves = saves
    game.nextSaveId = 1

    games.push(game)

    gameNextId++

    buildGameLine(games)
}

function createSave () {
    const save = {}

    save.saveId = games[gameIndex].nextSaveId
    save.saveName = nSaveName.value
    save.saveDif = nSaveDif.value
    save.deathCounter = 0

    games[gameIndex].nextSaveId++

    games[gameIndex].saves.push(save)
}

function buildGameLine (games) {
    gameList.replaceChildren()

    for (let i = 0; i < games.length; i++) {
        const gameLine = createGameLine(games[i])
        const gDeathsLine = createGameDeathsLine(games[i])

        const buttons = createGameLineButtons()

        for (let b = 0; b < buttons.length; b++) {
            gDeathsLine.appendChild(buttons[b])
        }

        gameLine.appendChild(gDeathsLine)
        gameList.appendChild(gameLine)

        gameLineButtonsFunction(gameLine, buttons)
    }
}

function createGameLine (game) {
    const gameLine = document.createElement('div')
    gameLine.classList.add('game_line')
    gameLine.id = game.gameId

    const lNameGame = document.createElement('span')
    lNameGame.textContent = game.gameName

    gameLine.appendChild(lNameGame)

    return gameLine
}

function createGameDeathsLine (game) {
    const gDeathsLine = document.createElement('div')
    gDeathsLine.classList.add('tdeaths_line')

    const tDeaths = document.createElement('span')
    tDeaths.textContent = `Mortes: ${game.totalDeathCounter}`

    gDeathsLine.appendChild(tDeaths)

    return gDeathsLine
}

function createGameLineButtons () {
    const deleteGame = document.createElement('button')
    deleteGame.classList.add('delete_game', 'button_two')
    deleteGame.textContent = '✕'

    const editGame = document.createElement('button')
    editGame.classList.add('button_three', 'edit_game')
    editGame.textContent = '✎'
    
    const showSaves = document.createElement('button')
    showSaves.classList.add('show_saves', 'button_one')
    showSaves.textContent = '➤'

    return [deleteGame, editGame, showSaves]
}

function gameLineButtonsFunction (gameLine, buttons) {

    for (let f = 0; f < buttons.length; f++) {
        buttons[f].addEventListener('click', () => {
            gameIndex = games.findIndex(game => game.gameId === Number(gameLine.id))
        })
    }

    buttons[0].addEventListener('click', () => {
        if (gameIndex !== -1) {
            games.splice(gameIndex, 1)
        }

        buildGameLine(games)

        saveList.replaceChildren()
        saveList.style.display = 'none'
    })

    buttons[1].addEventListener('click', () => {
        eGameMod.style.display = 'flex'
    })

    buttons[2].addEventListener('click', () => {
        buildSaveLine(games[gameIndex].saves)
        saveList.style.display = 'flex'
    })

}

function buildSaveLine (saves) {
    saveList.replaceChildren()

    for (let i = 0; i < saves.length; i++) {
        const saveLine = document.createElement('div')
        saveLine.classList.add('save_line')

        const sName = document.createElement('span')
        sName.textContent = saves[i].saveName

        const sDeathsLine = document.createElement('div')
        sDeathsLine.classList.add('sdeaths_line')

        const sDifficulty = document.createElement('span')
        sDifficulty.textContent = `Dificuldade: ${saves[i].saveDif}`

        const sDeaths = document.createElement('span')
        sDeaths.textContent = `Mortes: ${saves[i].deathCounter}`

        const minus = document.createElement('button')
        minus.classList.add('minus','button_two')
        minus.textContent = '-'

        const edit = document.createElement('button')
        edit.classList.add('edit', 'button_three')
        edit.textContent = '✎'

        const plus = document.createElement('button')
        plus.classList.add('plus', 'button_one')
        plus.textContent = '+'

        sDeathsLine.append(sDifficulty, sDeaths, minus, edit, plus)

        saveLine.append(sName, sDeathsLine)

        saveList.appendChild(saveLine)

        minus.addEventListener('click', () => {
            if (saves[i].deathCounter <= 0) {
                alert('Não se atreva, comédia!')
                return
            }

            saves[i].deathCounter--
            buildSaveLine(saves)
        })



        plus.addEventListener('click', () => {
            saves[i].deathCounter++
            buildSaveLine(saves)
        })

    }

    saveList.appendChild(newSave)
    newSave.style.display = 'block'
}
