
let str = '';

function Check(str){
    let wordsCounter = 0;
    let vowlsCounter = 0;
    let vowls = ['a' , 'i' , 'o' , 'u' , 'e'];
    for(let i = 0 ; i < str.length; i++){
        for(let j = 0; j <vowls.length; j++){
            if (str[i] === vowls[j]){
                vowlsCounter++;
            }
        }
        if (str[i] === ' '){
            wordsCounter++;
            
        }
        

    }
    console.log(wordsCounter + 1);
    console.log(vowlsCounter);
    return str;
    

}

console.log(Check('what is going on with the world'));


// -------------------------------------------------------------------
let ele = [];
let similar = [];
function add(set1 , set2){
    let sum = 0;
    for(let i = 0; i < set1.length; i++){
        for(let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]){
                similar.push(set1[i])
            }else{
                ele.push(set1[i])
            }
        }
    }
}

add(['1','2','3'] , ['2','1','4']);

console.log(ele);
console.log(similar);

// -----------------------------------------------------------