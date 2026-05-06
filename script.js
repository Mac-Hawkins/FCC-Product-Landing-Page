/* This is some JavaScript code to prevent the form from trying to send 
to the static URL (provided by FCC) when the Submit button is pressed 
(which was resulting in a crash, but can work now) and instead generate a message when clicked on. 
I don't actually send this data anywhere, and since this exercise is just a 
proof of concept, I decided to just do this instead. This also disables the 
Submit button*/
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("submit").disabled = true;
  document.getElementById("submit-message").style.visibility = "visible";
});
