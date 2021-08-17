const data = require('./help')


const caseHistory = data.unifiedHistory.filter(x => x.node.__typename === 'CaseHistoryEntry')
console.log(caseHistory.length, JSON.stringify(caseHistory[0], null, 2))
const missing = data.unifiedHistory.filter(x => x.node.changes === null || x.node.changes === undefined)
const missingType = data.unifiedHistory.filter(x => (x.node.changes === null || x.node.changes === undefined) 
  && x.node.__typename === undefined)
console.log(missingType)
// console.log(missing.length, JSON.stringify(missing[0], null, 2))
const typenames = []
for (let i = 0; i < missing.length; i++) {
  const __typename = missing[i].node.__typename || missing[i].node.recordedAt
  typenames.push(__typename)
}

console.log(typenames)