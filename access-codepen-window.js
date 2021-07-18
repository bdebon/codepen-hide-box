// Event send by the inner `<object>` script
console.log('access-codepen-window localStorage', localStorage)

window.addEventListener('message', e => {
    if (e.data) {
        const cssBox = document.querySelector('#box-css');
        const htmlBox = document.querySelector('#box-html');
        const jsBox = document.querySelector('#box-js');

        switch(e.data.type) {
            case 'clear_css':
                window.CP.editors.css._setShowSourceEditorValue('')
                break;
            case 'show_css':
                cssBox.classList.remove('hidden')
                localStorage.setItem('cssVisible', true)
                break;
            case 'hide_css':
                cssBox.classList.add('hidden')
                localStorage.setItem('cssVisible', false)
                break;
            case 'clear_html':
                window.CP.editors.html._setShowSourceEditorValue('')
                break;
            case 'show_html':
                htmlBox.classList.remove('hidden')
                localStorage.setItem('htmlVisible', true)
                break;
            case 'hide_html':
                htmlBox.classList.add('hidden')
                localStorage.setItem('htmlVisible', false)
                break;
            case 'clear_js':
                window.CP.editors.js._setShowSourceEditorValue('')
                break;
            case 'show_js':
                jsBox.classList.remove('hidden')
                localStorage.setItem('jsVisible', true)
                break;
            case 'hide_js':
                jsBox.classList.add('hidden')
                localStorage.setItem('jsVisible', false)
                break;
        }
    }
})
