
const {readFileSync, promises: fsPromises} = require('fs');



function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.split(/\r?\n/)
    
   return arr.map((string)=> {
        let newString = string.replace(',','-').split('-')
        return newString.map((string)=> parseInt(string))
    })
}

const data = syncReadFile('./data.txt');

console.log(data)

const findOverlap = (data) =>{
    let numberOfOverlaps = 0
    data.map((section)=>{
        let sectionOne = section[1] - section[0]
        let sectionTwo = section[3] - section[2]
        console.log
        if(sectionOne > sectionTwo){
            if(section[3] <= section[1] && section[0] <= section[2]){
                numberOfOverlaps++
            }

        }
        if (sectionOne < sectionTwo){
            if(section[1] <= section[3] && section[2] <= section[0]){
                numberOfOverlaps++
            }
        }
        if(sectionOne === sectionTwo){
            if(section[1] === section[3] && section[0] === section[2]){
                numberOfOverlaps++
            }
        }

    })

    return numberOfOverlaps
}


const findOverlap2 = (data) =>{
    let numberOfOverlaps = 0
    let i = 0;
    data.map((section)=>{
        console.log('ITERATION:',i)
        let sectionOne = Array.from(new Array(1 + section[1]-section[0]), (x,i) => i + section[0])
        let sectionTwo = Array.from(new Array(1 + section[3]-section[2]), (x,i) => i + section[2])
        const filterArray = sectionOne.filter(value => sectionTwo.indexOf(value) > -1)
        if(filterArray.length > 0) numberOfOverlaps++
        i++
    })

    return numberOfOverlaps
}

console.log(findOverlap2(data))