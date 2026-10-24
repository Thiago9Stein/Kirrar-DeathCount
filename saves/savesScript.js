/*New save*/

newSave.addEventListener('click', () => {
    openMod(nSaveMod)
})

function closeNSaveMod () {
    nSaveName.value = ''
    nSaveDif.value = ''
    closeMod(nSaveMod)
}

confnSave.addEventListener('click', () => {
    if (nSaveName.value.trim() === '') {
        warn('Necessário preencher nome!')
        return
    } else if (nSaveDif.value.trim() === '') {
        warn('Necessário preencher dificuldade!')
        return
    } 

    createSave()
    buildSaveLine(games[gameIndex].saves)
    closeNSaveMod()
})

nSaveMod.addEventListener('click', (event) => {
    if (event.target === nSaveMod) {
        closeNSaveMod()
    }
})

/*Edit Save*/

confeSave.addEventListener('click', () => {
    if (!Number.isInteger(Number(eSaveDc.value)) || eSaveDc.value < 0) {
        warn('Insira um número válido!')
        return
    }

    if (eSaveName.value.trim() === '') {
        warn('Necessário preencher nome!')
        return
    } else if (eSaveDif.value.trim() === ''){
        warn('Necessário preencher dificuldade!')
        return
    }

    games[gameIndex].saves[saveIndex].saveName = eSaveName.value
    games[gameIndex].saves[saveIndex].saveDif = eSaveDif.value
    games[gameIndex].saves[saveIndex].deathCounter = Number(eSaveDc.value)

    updateTotalCounter()
    buildSaveLine(games[gameIndex].saves)
    closeMod(eSaveMod)

    saveData()
})

delSave.addEventListener('click', () => {
    delOption = 'save'
    openMod(confDelMod)
})

eSaveMod.addEventListener('click', (event) => {
    if (event.target === eSaveMod) {
        updateTotalCounter()
        closeMod(eSaveMod)
    }
})
