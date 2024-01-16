let fs = require("fs"); 

// pyramid key
let key ="  113  \n 2 275 \n4 5 261";

let decodeArr = {};
let selectedKeys = [];

// extracting key from pyramid
key.split('\n').map(k => {
    let l = k.trim(/ /).split(' ');
    selectedKeys.push(l[l.length - 1])
})

// reading file and extracting output
fs.readFile('coding_qual_input.txt', (err, data) => {
  if (err) throw err;
    data.toString().split('\n').map(d => {
        let [id, word] = d.split(' ');
        decodeArr[id] = word.trim('\r')
    })
    
    let output = '';
    selectedKeys.map(key => {
        output += decodeArr[key] + ' '
    })
    console.log(output)
});