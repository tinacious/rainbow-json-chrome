export function copyTextToClipboard(text: string, callback: Function) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, callback);
    return;
  }
  navigator.clipboard.writeText(text).then(function () {
    callback(true)
  }, function (err) {
    console.error('async: failed to copy', err);
    callback(false)
  });
}

function fallbackCopyTextToClipboard(text: string, callback: Function) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    callback(true)
  } catch (err) {
    console.error('fallback: failed to copy', err);
    callback(false)
  }

  document.body.removeChild(textArea);
}
