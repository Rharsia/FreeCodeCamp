function chunkArrayInGroups(arr, size) {

    let chunks = [];
  
    for (let i = 0; i < arr.length; i += size) {
      
      let chunk = arr.slice(i, i + size);
      // console.log(chunk);
      chunks.push(chunk);
      }
      
    return chunks;
  }
  
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);