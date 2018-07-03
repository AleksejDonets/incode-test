function searchInObject(obj, searchValue){
  const keys =  Object.values(obj);
  for(let i = 0; i<keys.length; i++){
    for(let key in keys[i]){
      const keyValues = keys[i][key];
      if(keyValues.includes(searchValue)){
        return true;
      }
    }
     
  }
};

export function searchFilter(array,  searchValue){
  return array.filter(item => searchInObject(item,  searchValue));
};
