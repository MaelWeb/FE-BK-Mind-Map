window.onload = function () {
  // var imgDom = document.querySelector(".pdf")
  //   var imgDomWidth = 100
  
  //   document.addEventListener(
  //       "keydown",
  //       function (event) {
  //           if (
  //               (event.ctrlKey === true || event.metaKey === true) &&
  //               (event.which === 61 ||
  //                   event.which === 107 ||
  //                   event.which === 173 ||
  //                   event.which === 109 ||
  //                   event.which === 187 ||
  //                   event.which === 189)
  //           ) {
  //               event.preventDefault()

  //               if (event.which === 61 || event.which === 107 || event.which === 187) {
  //                   imgDomWidth = imgDomWidth + 10
  //                   imgDom.style.width = imgDomWidth + "%"
  //               } else {
  //                   imgDomWidth = imgDomWidth - 10
  //                   imgDom.style.width = imgDomWidth + "%"
  //               }
  //           }
  //       },
  //       false
  //   )
    var hasClickTip = window.localStorage.getItem('clickLog')

    if (!hasClickTip) {
        var tipsDom = document.querySelector('.J-tips')
        tipsDom.style.display = 'block'

        tipsDom.addEventListener('click', function() {
            window.localStorage.setItem('clickLog', true)
            tipsDom.style.display = 'none'
        })
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
}