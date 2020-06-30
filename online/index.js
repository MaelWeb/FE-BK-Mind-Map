window.onload = function () {
    var imgDom = document.getElementById("svg")
    var imgDomWidth = 200
    window.scroll({
        top: imgDom.clientHeight / 2 - window.screen.availHeight / 2,
        let: imgDom.clientWidth / 2 - window.screen.availWidth / 2,
        behavior: "smooth",
    })
    // document.body.scroll(imgDom.clientWidth / 2 - window.screen.availWidth / 2, imgDom.clientHeight / 2 - window.screen.availHeight / 2)
    document.body.style.zoom = "reset"
    document.addEventListener(
        "keydown",
        function (event) {
            if (
                (event.ctrlKey === true || event.metaKey === true) &&
                (event.which === 61 ||
                    event.which === 107 ||
                    event.which === 173 ||
                    event.which === 109 ||
                    event.which === 187 ||
                    event.which === 189)
            ) {
                event.preventDefault()
                console.log(event.which)

                if (event.which === 61 || event.which === 107 || event.which === 187) {
                    imgDomWidth = imgDomWidth + 10
                    imgDom.style.width = imgDomWidth + "%"
                } else {
                    imgDomWidth = imgDomWidth - 10
                    imgDom.style.width = imgDomWidth + "%"
                }
            }
        },
        false
    )
    var hasClickTip = window.localStorage.getItem('clickLog')

    if (!hasClickTip) {
        var tipsDom = document.querySelector('.J-tips')
        tipsDom.style.display = 'block'

        tipsDom.addEventListener('click', function() {
            window.localStorage.setItem('clickLog', true)
            tipsDom.style.display = 'none'
        })
    }
    // document.addEventListener(
    //     "mousewheel DOMMouseScroll",
    //     function (event) {
    //         if (event.ctrlKey === true || event.metaKey) {
    //             event.preventDefault()
    //         }
    //     },
    //     false
    // )
}