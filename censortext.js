var censoredWords=["sad","bad","mad"];
var customerCensoredWords=[];
function censor(inStr){
    for(idx in censoredWords){
        inStr=inStr.replace(censoredWords[idx],"****");
    }
    for(idx in customerCensoredWords){
            inStr=inStr.replace(customerCensoredWords[idx],"****");
    }
    return inStr;
}

function addCensoredWord(word){
    customerCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customerCensoredWords);
}

exprots.censor=censor;
exports.addCensoredWord=addCensoredWord;
exports.getCensoredWords=getCensoredWords;


