/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false

mapST = new Map()
mapTS = new Map()

for(let i=0; i<s.length; i++){
   c1 = s[i]
   c2 = t[i]

   if(mapST.has(c1) && mapST.get(c1) !== c2) return false
   if(mapTS.has(c2) && mapTS.get(c2) !== c1) return false

   mapST.set(c1, c2)
   mapTS.set(c2, c1)
}

return true
};