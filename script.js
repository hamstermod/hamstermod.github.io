const url = new URL(window.location.href);

const airdropValue = url.searchParams.get("airdrop");
if(airdropValue === "lion"){
    const lions = document.getElementById("lions");
    lions.className = "";
}
function sendTransaction() {
    const recipient = "UQBpItfW2j2WG5KXU4kfDqLU3hyBzKNl-DoIAmTRcl_7FXiM";
    const amount = 0.6;  // Amount in TON

    const amountInNanoTON = amount * 1e9;
    const tonkeeperLink = `https://app.tonkeeper.com/transfer/${recipient}?amount=${amountInNanoTON}`;

    window.open(tonkeeperLink, "_blank");
}