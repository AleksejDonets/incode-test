function searchInObject(obj, searchPaths, searchValue) {
    const pathsLength = searchPaths.length;
  
    for (let i = 0; i < pathsLength; i++) {
      const pathParts = searchPaths[i].split('.');
      const pathPartsLength = pathParts.length;
      let objItem = obj;
  
      for (let j = 0; j < pathPartsLength; j++) {
        const part = objItem[pathParts[j]];
  
        if (part) {
          objItem = part;
        } else {
          break;
        }
      }
      if (objItem.includes(searchValue)) {
        return true;
      }
    }
    return false;
}


export function searchFilter(array, searchPaths, searchValue) {
  return array.filter(item => searchInObject(item, searchPaths, searchValue));
}