document.body.classList.add('loaded')

function initBoxesState() {
    let cssBox = document.querySelector('#box-css');
    if(localStorage.getItem('cssVisible') === 'false') {
        cssBox.classList.add('hidden');
    }

    if(localStorage.getItem('cssVisible') === 'true') {
        cssBox.classList.remove('hidden');
    }

    let htmlBox = document.querySelector('#box-html');
    if(localStorage.getItem('htmlVisible') === 'false') {
        htmlBox.classList.add('hidden');
    }

    if(localStorage.getItem('htmlVisible') === 'true') {
        htmlBox.classList.remove('hidden');
    }

    let jsBox = document.querySelector('#box-js');
    if(localStorage.getItem('jsVisible') === 'false') {
        jsBox.classList.add('hidden');
    }

    if(localStorage.getItem('jsVisible') === 'true') {
        jsBox.classList.remove('hidden');
    }

}

initBoxesState()
