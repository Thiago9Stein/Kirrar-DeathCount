// Elements

// Alert

const alertMod = document.getElementById('alertmod')
const alertMsg = document.getElementById('alertmsg')
const closeAlert = document.getElementById('closealert')

// Confirm delete

const confDelMod = document.getElementById('confdelete_mod')
const cancDel = document.getElementById('canc_delete')
const confDel = document.getElementById('conf_delete')

// Functions

// Alert

function warn (message) {
    alertMsg.textContent = message
    openMod(alertMod)
}

closeAlert.addEventListener('click', () => {
    closeMod(alertMod)
})

// Confirm delete

cancDel.addEventListener('click', () => {
    closeMod(confDelMod)
})

confDelMod.addEventListener('click', (event) => {
    if (event.target === confDelMod) {
        closeMod(confDelMod)
    }
})

let delOption

confDel.addEventListener('click', () => {

    switch (delOption) {
        case 'game':
            games.splice(gameIndex, 1)
            saveList.replaceChildren()
            closeMod(saveList)

            closeMod(confDelMod)

            buildGameLine(games)

            saveData()
        break;

        case 'save':
            games[gameIndex].saves.splice(saveIndex, 1)

            updateTotalCounter()
            buildSaveLine(games[gameIndex].saves)

            closeMod(confDelMod)
            closeMod(eSaveMod)

            saveData()
            break;

        case 'data':
            localStorage.removeItem('games')
            localStorage.removeItem('gameNextId')

            games.length = 0
            gameNextId = 1

            buildGameLine(games)

            closeMod(confDelMod)

            closeMod(dataMod)
            closeMod(saveList)
        break;

        default:
            warn('Se pode ver essa mensagem,\nAlgo deu errado')
        break;
        
    }
})

// Mod control

function openMod (mod) {
    mod.classList.add('fade_in')
    mod.style.display = 'flex'

    mod.addEventListener('animationend', (event) => {
        if(event.animationName !== 'fadeIn') return

        mod.classList.remove('fade_in')
    }, {once: true})
}

function closeMod (mod) {
    mod.classList.add('fade_out')

    mod.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return

        mod.classList.remove('fade_out')
        mod.style.display = 'none'
    }, {once: true})
}

// Animations

function shake (item) {
    item.classList.add('shake')

    item.addEventListener('animationend', (event) => {
        if (event.animationName !== 'shaking') return

        item.classList.remove('shake')
    },{once: true})
}
