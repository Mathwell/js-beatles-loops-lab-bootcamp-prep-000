function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var array=[]
  for(var i=0; i<arrayMusicians.length; i++){
    array.push('${arrayMusicians[i]} plays ${arrayInstruments[i]}.')
  }
  return(array)
}
