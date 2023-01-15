addEventListener("keydown", function(event){
    if(event.key === "Enter") {
        function getVal() {
            const input = document.getElementById('text').value
            const checkbox = document.getElementById('toggler')
            if(input === "continue"){
                checkbox.checked = true
                setInterval(() => {
                    window.location.href = 'contents/home.html'
                }, 2000)
            }
        }
        getVal()
    }
})