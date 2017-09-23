const fs = require('fs');
const babel = require('babel-core');

let content = 'const gql = require("graphql-tag");\nconst start = new Date().getTime();\n';

for (let i = 0; i < 200; i++) {
  content += `const frag${i} = gql\`fragment Frag${i} on Three { five six }\`;\n`
  content += `const query${i} = gql\`query Query${i} { hello { one two three { four five ...Frag${i} } } } \${frag${i}}\`;\n`
}

content += 'console.log("Total time: ", new Date().getTime() - start, "ms");\n';

fs.writeFileSync('without-babel.js', content + 'console.log("(without babel)")', { encoding: 'utf8' });
fs.writeFileSync('with-babel.js', babel.transform(content, {
  plugins: ['graphql-tag']
}).code + 'console.log("(with babel)")', { encoding: 'utf8' });
