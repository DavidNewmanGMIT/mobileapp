function greenCount(word:string):number{
    let count : number = word.length;
    return count;
}

let bestCount:number = greenCount("test 2");
console.log(bestCount);

function greenCountBlanksBeGone (word:string):number{
    let count : number = word.replace(/\s/g, "").length;
    return count;
}

let bestCount2:number = greenCountBlanksBeGone("test 3");
console.log(bestCount2);


function trueCount(word:string, blu?:boolean):number{
if(blu == true)
{
    let count : number = word.replace(/\s/g, "").length;
    return count;
}
else if(blu == false)
{
    let count : number = word.length;
    return count;
}

}

let trueCountTest:number = trueCount("How about that?", true);
let trueCountTest2:number = trueCount("How about that?", false);
console.log(trueCountTest);
console.log(trueCountTest2);

