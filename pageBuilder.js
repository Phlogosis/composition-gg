function main() {
    addToResult("continues to work!");
}

function addToResult(content) {
    myAppendID("result", content);
}

function myAppendID(theID, theContent) {
    $("#" + theID).append(theContent);
}

function championCard(champData) {
    return HTMLchampionCard.
}