var overlay = null,
    frame = null;

window.__TECH_IS_LAVA_LOADED = true


// Event send by the extension popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type == "popup") {
        //console.log(request);
        showPopup();
    } else if (request.type === 'close_popup') {
        hidePopup();
    }
    return true;
});

function showPopup() {
    if (document.querySelector(".py-popup-overlay")) {
        hidePopup();
        return false;
    }

    overlay = document.createElement('div');
    frame = document.createElement('object');

    overlay.className = "py-popup-overlay";
    frame.className = "py-popup-container";
    frame.setAttribute("scrolling", "no");
    frame.setAttribute("frameborder", "0");

    // file need to be added in manifest web_accessible_resources
    frame.data = chrome.runtime.getURL("popup.html");
    overlay.appendChild(frame);
    document.body.appendChild(overlay);

    // adding custom script
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('access-codepen-window.js');
    (document.head||document.documentElement).appendChild(s);
    s.onload = function() {
        s.remove();
    };


    overlay.addEventListener("click", hidePopup);
}

function hidePopup() {
    // Remove EventListener
    overlay.removeEventListener("click", hidePopup);

    // Remove the elements:
    document.querySelector(".py-popup-overlay").remove();

    // Clean up references:
    overlay = null;
    frame = null;
}


showPopup()


// Clear css box value CP.editors.css._setShowSourceEditorValue('')
// Clear html box value CP.editors.html._setShowSourceEditorValue('')
