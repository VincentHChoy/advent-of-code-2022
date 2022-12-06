
const {readFileSync, promises: fsPromises} = require('fs');



function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.split(/\r?\n/);
  
    // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
  
    return arr;
}

const data = syncReadFile('./data1.txt');


const findScore = (data) =>{
    const yourShapesScores = {X:1,Y:2,Z:3}
    const enemyShapesScores = {A:1,B:2,C:3}

    const outcomeScores = {win:6,draw:3,lose:0}
    let yourScore = 0;

    const findScore = data.map((match)=>{
       let matchArr = match.split(' ')
       console.log(matchArr[0])
    //    console.log(enemyShapesScores[matchArr[1]])
       let outcome = yourShapesScores[matchArr[1]] - enemyShapesScores[matchArr[0]]
       yourScore += yourShapesScores[matchArr[1]]

       if(outcome === -2 || outcome === 1){
        yourScore += outcomeScores.win
       }
       if(outcome === 0) yourScore += outcomeScores.draw

    })
    return yourScore
}

const findScoreP2 = (data) =>{
    const pointsWon = { //X: lose, Y: Draw Z: Win
        A:  //E:rock
        {
         Z: 8, // y:paper 2 + 6
         X: 3, // y:scissors 3 + 0
         Y: 4 // y:rock 3 + 1
        }, 
        B: // paper
        {
          Z:9, // y: scissors 3 + 6
          X:1, // y: rock 1 + 0
          Y:5 // y: paper 2 + 3
        },

        C: // scissors
        {
          Z:7, // rock 1 + 6
          X: 2, // paper 2 + 0
          Y:6 // scissors 3 + 3
        }}
    let yourScore = 0;

    const findScoreP2 = data.map((match)=>{
       let matchArr = match.split(' ')
       yourScore += (pointsWon[matchArr[0]][matchArr[1]]
        )
    })

    return yourScore
}

// console.log(findScore(data))
console.log(findScoreP2(data))
