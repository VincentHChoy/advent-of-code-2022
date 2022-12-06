const { readFileSync, promises: fsPromises } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  return contents;
}

const data = syncReadFile("./data.txt");

const findDupliates = (code) => {
  let startingPacket = "";

  for (let i = 0; i < 4; i++) {
    startingPacket += code[i];
  }

  for (let i = 4; i < code.length; i++) {
    startingPacket += code[i];
    
    let toArr = startingPacket.split("");

    toArr.shift();

    if (toArr.length === new Set(toArr).size) return i + 1;
    startingPacket = toArr.join("");
  }

  return -1;
};

console.log(findDupliates("bvwbjplbgvbhsrlpgdmjqwftvncz"));
console.log(findDupliates("nppdvjthqldpwncqszvftbrmjlhg"));
console.log(findDupliates("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"));
console.log(findDupliates("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"));
console.log(findDupliates(data));

const findDupliates2 = (code) => {
  let startingPacket = "";

  for (let i = 0; i < 14; i++) {
    startingPacket += code[i];
  }

  for (let i = 14; i < code.length; i++) {
    startingPacket += code[i];

    let toArr = startingPacket.split("");

    toArr.shift();

    if (toArr.length === new Set(toArr).size) return i + 1;
    startingPacket = toArr.join("");
  }

  return -1;
};

console.log(findDupliates2("mjqjpqmgbljsphdztnvjfqwrcgsmlb"));
console.log(findDupliates2("bvwbjplbgvbhsrlpgdmjqwftvncz"));
console.log(findDupliates2("nppdvjthqldpwncqszvftbrmjlhg"));
console.log(findDupliates2("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"));
console.log(findDupliates2("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"));

console.log(findDupliates2(data));
