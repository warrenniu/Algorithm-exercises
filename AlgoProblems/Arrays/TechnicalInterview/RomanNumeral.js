function roman(str) {
    let romanHash = {
      'X': 10,
      'I': 1,
      'V': 5,
      'M': 1000,
      'C': 100,
      'L': 50,
      
    };
    let counter = 0;
    
    for (let i = 0; i < str.length; i++) {
      let currentValue = romanHash[str[i]]
      let nextValue = romanHash[str[i+1]]
      if (currentValue < nextValue) {
        counter -= romanHash[str[i]]
      } else {
        counter += romanHash[str[i]]
      }
      console.log(counter)
    }
      
    return counter
  }