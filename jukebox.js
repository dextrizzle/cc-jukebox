const parseNote = function(string) {

    let array = string.split("*");
    let newobject = {};
    let sharp;

    let pitch = array[0].slice(0, 1).toUpperCase();
    if(array[0].length > 1){
      sharp = array[0].slice(1, 2);
      newobject['pitch'] = `${pitch}${sharp}`;
    }
    else
      newobject['pitch'] = `${pitch}`;

    if(array[1]==undefined)
      newobject['beats'] = '1';
    else
      newobject["beats"] = array[1];

    return newobject;
}

const parseSong = function(string) {
    let array = string.split(" ");
    let newarray = [];
    let value;

    for (i = 0; i < array.length; i++) {
        value = parseNote(array[i]);
        newarray.push(value);
    }
    return newarray;
}



const onComplete = function(){
  let input = window.prompt("please enter your song");
  let notes = parseSong(input);
  playSong(notes, 400, onComplete);
}

onComplete();
