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
    saveData()
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
    lNameGame.classList.add('lname_game')
    lNameGame.textContent = ` ${game.gameName}`

    gameLine.appendChild(lNameGame)

    return gameLine
}

function createGameDeathsLine (game) {
    const gDeathsLine = document.createElement('div')
    gDeathsLine.classList.add('tdeaths_line')

    const tDeaths = document.createElement('span')
    tDeaths.textContent = ` Mortes: ${game.totalDeathCounter}`
    shake(tDeaths)

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
        if (gameIndex === -1) {
            warn('Jogo não encontrado!')
            return
        }

        delOption = 'game'

        openMod(confDelMod)
    })

    buttons[1].addEventListener('click', () => {
        eGameName.value = games[gameIndex].gameName
        openMod(eGameMod)
    })

    buttons[2].addEventListener('click', () => {
        buildSaveLine(games[gameIndex].saves)
        openMod(gameList)
        openMod(saveList)
    })

}
