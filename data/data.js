// Data saving

function saveData () {
    localStorage.setItem('games', JSON.stringify(games))
    localStorage.setItem('gameNextId', gameNextId)
}

const savedGamesData = localStorage.getItem('games')

if (savedGamesData) {
    const loadedData = JSON.parse(savedGamesData)
    const loadedId = localStorage.getItem('gameNextId')
    gameNextId = Number(loadedId)
    games.push(...loadedData)
}

buildGameLine(games)

// Data management

expData.addEventListener('click', () => {
    const dataExport = {games}

    const file = new Blob([JSON.stringify(dataExport)], {
        type: 'application/json'
    })

    const urlDownload = URL.createObjectURL(file)

    const a = document.createElement('a')
    a.href = urlDownload
    a.download = 'games.json'

    document.body.appendChild(a)

    a.click()
    a.remove()

    URL.revokeObjectURL(urlDownload)
})

impData.addEventListener('click', () => {
    const i = document.createElement('input')
    i.type = 'file'
    i.accept = '.json'

    i.addEventListener('change', async (event) => {
        if (!i.files[0]) return

        const file = i.files[0]
        let text
        let importedData

        try {
            text = await file.text()
            importedData = JSON.parse(text)

            if (!Array.isArray(importedData.games)) {
                warn('Arquivo inválido!')()
                return 
            }

            for (let i = 0; i < importedData.games.length; i++) {
                const game = importedData.games[i]

                if (game === null || typeof game !== 'object') {
                    warn('Arquivo inválido!')
                    return 
                }
                
                if (!Number.isFinite(game.gameId) ||
                typeof game.gameName !== 'string' ||
                !Number.isFinite(game.totalDeathCounter) ||
                !Array.isArray(game.saves)) {
                    warn('Arquivo inválido!')
                    return
                }

                for (let s = 0; s < game.saves.length; s++) {
                    const save = game.saves[s]

                    if (save === null || typeof save !== 'object') {
                        warn('Arquivo inválido!')()
                        return 
                    }

                    if (!Number.isFinite(save.saveId) ||
                    typeof save.saveName !== 'string' ||
                    typeof save.saveDif !== 'string' ||
                    !Number.isFinite(save.deathCounter)) {
                        warn('Arquivo inválido!')()
                        return
                    }
                }
            }

        } catch(error) {
            warn('Arquivo inválido!')()
        }

        for (let g = 0; g < importedData.games.length; g++) {
            const game = importedData.games[g]

            game.gameId = gameNextId
            gameNextId++

            games.push(game)
        }
        saveData()
        buildGameLine(games)
    })

    i.click()
})

delData.addEventListener('click', () => {
    delOption = 'data'

    openMod(confDelMod)
})

dataMod.addEventListener('click', (event) => {
    if (event.target === dataMod) {
        closeMod(dataMod)
    }
})
