
const {readFileSync, promises: fsPromises} = require('fs');



function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.split(/\r?\n/);
  
  
    return arr;
}

const data = syncReadFile('./data.txt');


const findPriority = (data) =>{
    let solution = 0
    const allData = data.map((container)=>{
        let containerContentsOne = {}
        let containerContentsTwo = {}
        for (let i = 0; i < container.length/2; i++) {
            if(containerContentsOne.hasOwnProperty(container[i])) containerContentsOne[container[i]] += 1
            else {containerContentsOne[container[i]] = 1}
        }
        for (let i = container.length/2; i < container.length; i++) {
            if(containerContentsTwo.hasOwnProperty(container[i])) containerContentsTwo[container[i]] += 1
            else {containerContentsTwo[container[i]] = 1}
        }

        for (const letter in containerContentsOne) {
            if (containerContentsTwo.hasOwnProperty(letter)) {
                // console.log(letter)
                // return letter
                solution += convertASCII(letter.charCodeAt())
                return convertASCII(letter.charCodeAt())
            }
        }
    })
    return solution
}

const findBadges = (data) =>{
    let groupsOfThree = []
    let sackGroup = []
    let solution = 0;
    let counter = 1;
    for (let i = 0; i < data.length; i++) {
        sackGroup.push(data[i])
        if(counter % 3 === 0){
            groupsOfThree.push(sackGroup)
            sackGroup = []
        }
        counter++
    }
    const allData = groupsOfThree.map((strings)=>{
        let containerContents1 = {}
        let containerContents2 = {}
        let containerContents3 = {}

        for (const letter of strings[0]) {
            if(containerContents1.hasOwnProperty(letter)) containerContents1[letter] += 1
            else {containerContents1[letter] = 1}
            
        }

        for (const letter of strings[1]) {
            if(containerContents2.hasOwnProperty(letter)) containerContents2[letter] += 1
            else {containerContents2[letter] = 1}
            
        }

        for (const letter of strings[2]) {
            if(containerContents3.hasOwnProperty(letter)) containerContents3[letter] += 1
            else {containerContents3[letter] = 1}
            
        }

        for (const letter in containerContents1) {
            if (containerContents2.hasOwnProperty(letter) && containerContents3.hasOwnProperty(letter)) {
                console.log(letter)
                // return letter
                solution += convertASCII(letter.charCodeAt())
                return convertASCII(letter.charCodeAt())
            }
        }

    })
    return solution
}

const convertASCII = (char) =>{
    if(char >= 65 && char <= 90){ return char - 64 + 26}
    else{
        return char - 96
    }
}
