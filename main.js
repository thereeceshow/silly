// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const customWeight = document.getElementById('customweight');
const customTemp = document.getElementById('customtemp');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let weight = 300
let temp = 94

// I had to move these variables out of the functions there were created in
// This is due to Scope.  I believe they are now in the Global Scope.
// Basically if I define a var inside a function, outside of it, its unknown.
// This also means two diff functions could have a var with the same name and dif values.

// 2. RAW TEXT STRINGS

// These create the elements of our story.  The first string is always used.
// The next arrays hold the values that will later be randomly selected.

let storyText = 'It was ' + temp + 'º fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs ' + weight + ' pounds, and it was a hot day.';

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

// command + / makes it easy to comment out a line

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

//   Another good shortcut is option + shift + down to copy a line and code to the line below

// this will change the placeholders in the story string to the corresponding variables
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem); // run this twice because :inseretx: is in the string twice.
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  // the following replace method will change the name of Bob to the user input, if the user input is not empty.
  
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob',name);

  }


  if(customWeight.value !== '') {
    weight = customWeight.value;
    newStory = newStory.replace('300',weight);

  }

  if(customTemp.value !== '') {
    temp = customTemp.value;
    newStory = newStory.replace('94',temp);

  }


  if(document.getElementById("uk").checked) {
    // let weight = Math.round(300); COMMENTED THIS ONE OUT TO TRY TO STRETCH

    // 1 lbs = .0714286 Stone
    // Or divide pound by 14 -- LBS/14 = Stone
    let stone = Math.round(weight/14);
    // let temperature =  Math.round(94); STREEEEEEETCH GOOOOOOAAAAAALLLLLLLSSS
    // (xºF - 32)*(5/9) = yºC
    let cent = Math.round((temp - 32) * (5/9));
    // replace these values in the Story
    newStory = newStory.replace(weight,stone);
    newStory = newStory.replace('pounds','stone'); // I had to make two lines when I changed string to var
    newStory = newStory.replace(temp,cent);
    newStory = newStory.replace('fahrenheit','centigrade'); // I could get the centigrade to cat on the prev function, but I couldn't remove fahrenheit
    


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}