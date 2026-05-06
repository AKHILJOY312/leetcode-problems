var countSegments = function(s) {
    let temp = s.trim();
    if (temp.length < 1) return 0;
    return temp.split(/\s+/).length;
};