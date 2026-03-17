function groupAnagrams(strs: string[]): string[][] {
    //create a map
    //split ans sorta and join 
    //make a key witha t
    //push to that key 
    //reutn taht
    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join("");
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};