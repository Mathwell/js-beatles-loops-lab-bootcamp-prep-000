function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var array=[]
  for(var i=0; i<arrayMusicians.length; i++){
    var string = arrayMusicians[i]+" plays "+arrayInstruments[i]+"."
    array.push(string)
  }
  return(array)
}
