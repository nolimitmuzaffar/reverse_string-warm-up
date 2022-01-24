let reverse_string = "" //create empty string

function reverse_words(str) {
    reverse_string = str.split(" ").map(word => word.split("").reverse().join(""));
    //first we splitting str into an array of words and using map function
  //to make sure we don't lose all those separated words 

    return reverse_string.join(" "); //change the array back to string and return it
  }
  
