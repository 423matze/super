const NAV__SELECTOR = document.getElementsByClassName(
  'notion-callout bg-brown-light border'
)

makeNav = function () {
  if (NAV__SELECTOR.length != 0) {
    const nav = document.getElementsByClassName('super-navbar__item-list')

    console.log(nav[0])
    const mylinks = document.querySelectorAll(
      '.highlighted-background.bg-brown'
    )

    console.log('mylinks', mylinks)

    mylinks.forEach(link => {
      let firstChild = link.firstElementChild
      firstChild.classList.remove('link')
      firstChild.classList.add('super-navbar__item')

      let newLi = document.createElement('li')
      newLi.append(firstChild)

      console.log('neuer link', newLi)

      nav[0].append(newLi)
    })
    NAV__SELECTOR[0].remove()
  }
}

var observer = new MutationObserver(function (mutations) {
  if (document.querySelector(NAV__SELECTOR)) {
    makeNav()
  }
})

observer.observe(document, {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: true
})

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', afterDOMLoaded)
} else {
  makeNav()
}
