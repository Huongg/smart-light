let currentActive = []
let currentColour = []

const handleClick = (activeElement) => {
    activeElement.classList.add('isActive')

    const activeId = activeElement.id

    currentActive.push(activeElement)

    updateSignalColour(activeId)

    // if there are more than 1 active elemenet
    // ensure the first one is removed from active state
    if (currentActive.length > 1) {
        currentActive[0].classList.remove('isActive')
        return currentActive.shift()
    } 
}


const updateSignalColour = (activeColour) => {

    const signalIcon = document.getElementById('signal-icon')
    signalIcon.classList.add(activeColour)

    currentColour.push(activeColour)

    // if there are more than 1 active colour being added to signal-icon
    // ensure the first one is removed from active colour state
    if (currentColour.length > 1) {
        signalIcon.classList.remove(currentColour[0])
        return currentColour.shift()
    }
}
