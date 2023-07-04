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

// Rest of the JavaScript code remains the same

function toggleTheme() {
  var body = document.body;
  var toggleButton = document.querySelector('.toggle-button');
  body.classList.toggle("dark-theme");
  toggleButton.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", function() {
  var prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var toggleButton = document.querySelector('.toggle-button');
  toggleButton.classList.toggle("dark", prefersDarkTheme);
});

