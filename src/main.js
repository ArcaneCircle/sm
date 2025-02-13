const textarea = document.getElementById("textarea");
const test = document.getElementById("test");

function adjust() {
  test.innerHTML = textarea.value;
  // Otherwise, the newline would not be counted.
  if (textarea.value[textarea.value.length - 1] == "\n") {
    test.innerHTML += ".";
  }

  const ratioX = window.innerWidth / test.offsetWidth;
  const ratioY = window.innerHeight / test.offsetHeight;
  const ratio = Math.min(ratioX, ratioY);
  const fontSize = Math.floor(26 * ratio) + "px";
  textarea.style.fontSize = fontSize;
  const newHeight = Math.ceil(test.offsetHeight * ratio);
  //textarea.style.height = newHeight + "px";
  //textarea.style.top = Math.floor((window.innerHeight - newHeight)/2) + "px";
  textarea.style.paddingTop =
    Math.floor((window.innerHeight - newHeight) / 2) + "px";
  textarea.style.paddingBottom =
    Math.floor((window.innerHeight - newHeight) / 2) + "px";
  const newWidth = Math.ceil(test.offsetWidth * ratio);
  //textarea.style.width = newWidth + "px";
  textarea.style.paddingLeft =
    Math.max(0, Math.floor((window.innerWidth - newWidth) / 2)) + "px";
  textarea.style.paddingRight =
    Math.max(0, Math.floor((window.innerWidth - newWidth) / 2)) + "px";

  //test.innerHTML = newHeight + " " + window.innerHeight + " " + fontSize;
}

function init() {
  if (window.navigator.mozApps) {
    document.getElementById("firefox").style.display = "block";
  }
  textarea.focus();
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  adjust();
}

window.onresize = adjust;
textarea.onkeyup = adjust;
textarea.onpaste = adjust;
textarea.oninput = adjust;
init();
