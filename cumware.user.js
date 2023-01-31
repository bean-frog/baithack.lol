function lag(n) {
    var now = new Date().getTime();
    while( (new Date().getTime()) - now < n*1000 ) {}
}
function run() {
    lag(Math.floor(Math.random()*10)+1);
    setTimeout(run, Math.random()*10);
  console.alert("GET FUCKED LMFAOOOOOO")
}
function finalAlert() {
  alert("LMAO BITCH YOU THOUGHT\n try playing legit next time? \n https://https://github.com/bean-frog/baithack.lol/README.md")
}
setTimeout(finalAlert, 20000);
run();
