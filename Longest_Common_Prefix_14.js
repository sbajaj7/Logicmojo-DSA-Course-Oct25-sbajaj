//nLogn solution
var longestCommonPrefix = function(strs) {
    strs = strs.sort();
    //Sorting sorts it this way --> ["a","abc","abce","z","za"]
    //So we can just check the prefix on the first and the last element
    
    let prefix = ''
    for(let i = 0; i<strs[0].length;i++) {
        if(strs[0][i] != strs[strs.length-1][i])
            break
        prefix += strs[0][i]
    }
    return prefix
};
