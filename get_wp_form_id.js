function(){
 var input = {{INSERT YOUR attributes.response.data.confirmation VARIABLE HERE}} //update this
 var regex = /id="wpforms-confirmation-(\d+)"/;
 var match = regex.exec(input);
  if (match && match[1]) {
    return match[1]
  }
}
