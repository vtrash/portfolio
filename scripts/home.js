setInterval(() => {
    document.getElementById('toggler').checked = true
}, 500)

function slide(section) {
    document.getElementById(section).checked = true
}

function changeText() {
    document.getElementById('interactive').style.display = 'none'

    // unreadable
    // setInterval(() => {
    //     document.getElementById('p').style.display = 'none'
    //     setInterval(() => {
    //         document.getElementById('answer').style.display = 'block'
    //         setInterval(() => {
    //             document.getElementById('memories-text').style.display = 'none'
    //             setInterval(() => {
    //                 document.getElementById('after').style.display = 'block'
    //             }, 1500)
    //         }, 1500)
    //     }, 1500)
    // }, 1500)

    setInterval(() => {
        document.getElementById('p').style.display = 'none'
    }, 1500)

    setInterval(() => {
        document.getElementById('answer').style.display = 'block'
    }, 3000)

    setInterval(() => {
        document.getElementById('memories-text').style.display = 'none'
    }, 4500)

    setInterval(() => {
        document.getElementById('after').style.display = 'block'
    }, 6000)
}