

let myNodeList = document.getElementsByTagName('LI');

let i;

for (i = 0; i < myNodeList.length; i++) {

    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close'
    span.appendChild('txt');
    myNodeList[i].appendChild(span)
}
