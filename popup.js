
//

const clearBtnCSS = document.querySelector('.js-clear-css')
const clearBtnHTML = document.querySelector('.js-clear-html')
const clearBtnJS = document.querySelector('.js-clear-js')
const checkboxCSS = document.querySelector('.js-checkbox-css')
const checkboxHTML = document.querySelector('.js-checkbox-html')
const checkboxJS = document.querySelector('.js-checkbox-js')

function initCheckboxes() {
    checkboxCSS.checked = localStorage.getItem('cssVisible') === 'false'
    checkboxHTML.checked = localStorage.getItem('htmlVisible') === 'false'
    checkboxJS.checked = localStorage.getItem('jsVisible') === 'false'
}

initCheckboxes()

clearBtnCSS.addEventListener("click", () => {
    window.parent.postMessage({ type: 'clear_css' }, '*')
})

checkboxCSS.addEventListener("change", (e) => {
    if(e.target.checked) {
        localStorage.setItem('cssVisible', false)
        chrome.storage.local.set({cssVisible: false})
        window.parent.postMessage({ type: 'hide_css' }, '*')
    } else {
        localStorage.setItem('cssVisible', true)
        chrome.storage.local.set({cssVisible: true})
        window.parent.postMessage({ type: 'show_css' }, '*')
    }
})

clearBtnHTML.addEventListener("click", () => {
    window.parent.postMessage({ type: 'clear_html' }, '*')
})

checkboxHTML.addEventListener("change", (e) => {
    if(e.target.checked) {
        localStorage.setItem('htmlVisible', false)
        window.parent.postMessage({ type: 'hide_html' }, '*')
    } else {
        localStorage.setItem('htmlVisible', true)
        window.parent.postMessage({ type: 'show_html' }, '*')
    }
})


clearBtnJS.addEventListener("click", () => {
    window.parent.postMessage({ type: 'clear_js' }, '*')
})

checkboxJS.addEventListener("change", (e) => {
    if(e.target.checked) {
        localStorage.setItem('jsVisible', false)
        window.parent.postMessage({ type: 'hide_js' }, '*')
    } else {
        localStorage.setItem('jsVisible', true)
        window.parent.postMessage({ type: 'show_js' }, '*')
    }
})
