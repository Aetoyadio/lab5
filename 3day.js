//лупс

//
function reverseString(s) {
    try {
      var reverseString = s.split("").reverse().join("");
      console.log(reverseString); 
  }
  catch (err) {
      console.log(err.message); 
      console.log(s);
  }
}


//
function isPositive(a) {
    try {
        if (a < 0)
        {
            throw "Negative Error";

        } else if (a == 0) {
            throw "Zero Error";
        } else {
            return "YES"; 
        }

    }
    catch (err) {
        return err;
    }
}