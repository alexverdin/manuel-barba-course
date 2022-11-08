function countPositivesSumNegatives(input) {

  let contPos = 0;
  let contNeg = 0;

  if(input === undefined || input === null){
    return [];
  }else if(input.length === 0){
    return [];
  }

  for(let i=0; i<input.length; i++){
    if(input[i] > 0){
      contPos++;
    }
    if(input[i] < 0){
      contNeg+=input[i];
    }
  }
  return [contPos, contNeg];
}
