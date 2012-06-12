var port = chrome.extension.connect({ event: "initialize" });
var recording = false;

port.onMessage.addListener(function(msg){
    if (msg.eventName === 'getURL') {
        port.postMessage({ eventName:'setURL', url:document.URL });
    }
});

$(document).click(function(e){
    if (recording) {
        console.log(e);
        console.log("You clicked on a " + e.target.tagName + " named " + e.target.id);
        port.postMessage({ eventName:'clicked', targetType:e.target.tagName, targetID:e.target.id });
    }
});

$(document).keypress(function(e){
    if (recording) {
        console.log(e);
        port.postMessage({
            eventName:'keypress',
            charCode:e.keyCode,
            altKey:e.altKey,
            ctrlKey:e.ctrlKey,
            shiftKey:e.shiftKey,
            metaKey:e.metaKey
        });
    }
});

function record() {
    recording = true;
    console.log('beginning recording!');
    port.postMessage({ eventName:'recording' });
}