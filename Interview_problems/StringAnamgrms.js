function findPerms(str) {
    if (str.length === 1) return [str]
    
    let all = []
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i]
      const remainingLetters = str.slice(0,i) + str.slice(i+1)
      const permsOfRemainingLetters = findPerms(remainingLetters)
      
      permsOfRemainingLetters.forEach(subPerm => {
        all.push(currentLetter + subPerm)    
      })  
    }
    return all
  }