let cookies = document.cookie;
let notes = document.querySelector('.output-text');
function translation() {
    for (let i = 0; i < cookies.length; i++) {
        let key = getCookie(cookies);
        if (i === 0) {
            notes.innerHTML = `--> ${key}`
        } else {
            notes.innerHTML += `<div>--> ${key}</div>`
        }
    }
}
function ClearCookies() {
  let question = confirm('Delete cookies?')
  if (question === true) {
    deleteAllCookies();
    notes.innerHTML = '[Empty]';
  }
}

function addToCookies() {
  let textAreaValue = document.querySelector('.text-color').value;
  if (textAreaValue === "") {
    alert("Input your note in Text Input!")
  }
  else {
    setCookie(cookies,textAreaValue,30);
    if (notes.innerHTML === '[Empty]') {
      notes.innerHTML = '';
      notes.insertAdjacentHTML('beforeend', `<div>-->` + textAreaValue + `</div>`);
      let textarea = document.querySelector('#inputText');
    textarea.value = '';
    }
    else {
      notes.insertAdjacentHTML('beforeend', `<div>--> `+ textAreaValue + `</div>`);
      let textarea = document.querySelector('#inputText');
    textarea.value = '';
    }
    j++;

    let textarea = document.querySelector('#inputText');
    textarea.value = '';
  }

}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

if (cookies.length === 0) {
  notes.innerHTML = '[Empty]';
} else {
    notes.innerHTML = '[Not empty]';
}