const zvoneni = document.querySelector (".clock");
const alarm = document.querySelector (".alarm");
const start = document.querySelector (".start");

const budik = () => {
    alarm.classList.add("alarm--ring");
    zvoneni.play();
    console.log("Zvoni")
}

setTimeout (budik, 5000);

const zastaveni = () => {
    clearTimeout (budik);
    alarm.classList.remove("alarm--ring");
    zvoneni.pause();
    zvoneni.currentTime = 0;
    console.log ("Vypnuto");
}

const vstupUzivatel = () => {
    let cas = Number(prompt ("Zadejte v milisekundách, za jak dlouho se spustí budík"));
    setTimeout (budik, cas);
}