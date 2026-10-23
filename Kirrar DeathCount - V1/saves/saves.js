let saveIndex

function createSave () {
    const save = {}

    save.saveId = games[gameIndex].nextSaveId
    save.saveName = nSaveName.value
    save.saveDif = nSaveDif.value
    save.deathCounter = 0

    games[gameIndex].nextSaveId++

    games[gameIndex].saves.push(save)

    saveData()
}

function buildSaveLine (saves) {
    saveList.replaceChildren()

    for (let i = 0; i < saves.length; i++) {
        const saveLine = createSaveLine(saves[i])
        const sDeathsLine = createSDeathsLine(saves, saves[i])

        saveLine.append(sDeathsLine)
        saveList.appendChild(saveLine)
    }

    saveList.appendChild(newSave)
    newSave.style.display = 'block'
}

function createSaveLine (save) {
    const saveLine = document.createElement('div')
    saveLine.classList.add('save_line')

    const sName = document.createElement('span')
    sName.classList.add('sname_style')
    sName.textContent = save.saveName
    saveLine.append(sName)

    return saveLine
}

function createSDeathsLine (saves, save) {
    const sDeathsLine = document.createElement('div')
    sDeathsLine.classList.add('sdeaths_line')

    const sDifficulty = document.createElement('span')
    sDifficulty.classList.add('dif_style')
    sDifficulty.textContent = ` Dificuldade: ${save.saveDif}`

    const sDeaths = document.createElement('span')
    sDeaths.classList.add('death_style')
    sDeaths.textContent = ` Mortes: ${save.deathCounter}`
    shake(sDeaths)

    sDeathsLine.append(sDifficulty, sDeaths)

    const buttons = createSDeathsLineButtons()
    for (let b = 0; b < buttons.length; b++) {
        sDeathsLine.appendChild(buttons[b])
    }

    sDeathsLineButtonsFunction(saves, save, buttons)
    
    return sDeathsLine
}

function createSDeathsLineButtons () {
    const minus = document.createElement('button')
    minus.classList.add('minus','button_two')
    minus.textContent = '-'

    const edit = document.createElement('button')
    edit.classList.add('edit', 'button_three')
    edit.textContent = '✎'

    const plus = document.createElement('button')
    plus.classList.add('plus', 'button_one')
    plus.textContent = '+'
    
    return [minus, edit, plus]
}

function sDeathsLineButtonsFunction (saves, save, buttons) {

    buttons[0].addEventListener('click', () => {
        if (save.deathCounter <= 0) return

        save.deathCounter--

        updateTotalCounter()
        buildSaveLine(saves)
        saveData()
    })

    buttons[1].addEventListener('click', () => {
        saveIndex = saves.findIndex(s => s === save)

        eSaveName.value = save.saveName
        eSaveDif.value = save.saveDif
        eSaveDc.value = save.deathCounter

        openMod(eSaveMod)
    })

    buttons[2].addEventListener('click', () => {
        save.deathCounter++

        updateTotalCounter()
        buildSaveLine(saves)
        saveData()
    })

}
