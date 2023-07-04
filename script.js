document.getElementById("inputText").addEventListener("input", updateOutput);

function updateOutput() {
  var inputText = document.getElementById("inputText").value;
  var outputText = inputText.replace(/ /g, " 🤸");

  document.getElementById("output").innerText = outputText;
  if (outputText !== "") {
    document.getElementById("copyButton").style.display = "block";
  } else {
    document.getElementById("copyButton").style.display = "none";
  }
}

document.getElementById("copyButton").addEventListener("click", copyOutput);

function copyOutput() {
  var outputText = document.getElementById("output").innerText;
  var copyButton = document.getElementById("copyButton");

  navigator.clipboard.writeText(outputText).then(function() {
    copyButton.textContent = "Copied!";
    copyButton.classList.add("copied");
    setTimeout(function() {
      copyButton.textContent = "Copy";
      copyButton.classList.remove("copied");
    }, 2000);
  }, function() {
    alert("Failed to copy output text.");
  });
}
