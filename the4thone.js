function greenCount(word) {
    var count = word.length;
    return count;
}
var bestCount = greenCount("test 2");
console.log(bestCount);
function greenCountBlanksBeGone(word) {
    var count = word.replace(/\s/g, "").length;
    return count;
}
var bestCount2 = greenCountBlanksBeGone("test 3");
console.log(bestCount2);
function trueCount(word, blu) {
    if (blu == true) {
        var count = word.replace(/\s/g, "").length;
        return count;
    }
    else if (blu == false) {
        var count = word.length;
        return count;
    }
}
var trueCountTest = trueCount("How about that?", true);
var trueCountTest2 = trueCount("How about that?", false);
console.log(trueCountTest);
console.log(trueCountTest2);
