let stackOne = ['V', 'C', 'D', 'R', 'Z', 'G', 'B', 'W']
let stackTwo = ['G', 'W', 'F', 'C', 'B', 'S', 'T', 'V']
let stackThree = ['C', 'B', 'S', 'N', 'W']
let stackFour = ['Q', 'G', 'M', 'N', 'J', 'V', 'C', 'P']
let stackFive = ['T', 'S', 'L', 'F', 'D', 'H', 'B']
let stackSix = ['J', 'V', 'T', 'W', 'M', 'N']
let stackSeven = ['P', 'F', 'L', 'C', 'S', 'T', 'G']
let stackEight = ['B', 'D', 'Z']
let stackNine = ['M', 'N', 'Z', 'W']
let totalStack = ['xd', stackOne, stackTwo, stackThree, stackFour, stackFive, stackSix, stackSeven, stackEight, stackNine]

const { readFileSync, promises: fsPromises } = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);
  let arrInstruction = []

  for (const line of arr) {
    let formattedLine = line.replaceAll(/ /g, '').replace('move', '').replace('from', ',').replace('to', ',').split(',')
    arrInstruction.push(formattedLine.map((num) => +num))
  }

  return arrInstruction
}

const data = syncReadFile('./data.txt');

const moveBox = (number, from, to) => {
  for (let i = 0; i < number; i++) {
    to.push(from.pop())
  }
}

const readInstructions = (data) => {
  for (const line of data) {
    moveBox(line[0], totalStack[line[1]], totalStack[line[2]])
  }
  return stackOne.pop() + stackTwo.pop() + stackThree.pop() + stackFour.pop() + stackFive.pop() + stackSix.pop() + stackSeven.pop() + stackEight.pop() + stackNine.pop()
}



const moveBox2 = (number, from, to) => {
  let tmp = []

  for (let i = 0; i < number; i++) {
    tmp.push(from.pop())
  }

  tmp = tmp.reverse()

  for (let i = 0; i < tmp.length; i++) {
    to.push(tmp[i])
  }
}

const readInstructions2 = (data) => {
  for (const line of data) {
    moveBox2(line[0], totalStack[line[1]], totalStack[line[2]])
  }
  return stackOne.pop() + stackTwo.pop() + stackThree.pop() + stackFour.pop() + stackFive.pop() + stackSix.pop() + stackSeven.pop() + stackEight.pop() + stackNine.pop()
}

