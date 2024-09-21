/*
In order to make the Adventure Simulator to the West,
 the place where Observers could move in an impossible direction and touch the Echidna directly...

 In order to do that, I had to clone ButlerBot and rip the very feelings from his chest.

 https://zampaniosim.fandom.com/wiki/HeartlessBot?so=search

 http://farragofiction.com/CodexOfRuin/viewer.html?name=HeartlessBot&data=N4IgdghgtgpiBcIASMICcAuAbGBnXAQgPYYgA0IAJngJYDmkGNRYCIAKgLQDqnBAjORBoauANZsAggBkAogAUkQjAAsYsXGySzJAJXZkABPyMEA8geNH5AVXnzZ7eMf4BmIbgwQMmxAEkAOXZZXQCZMhN5SXY-WSCIsl0daT8AZRiAYQTJDIyFGICAcQTpMwBNcJMMmQBZBMKAs1S05343IRgADwgAY2wATwB9VTQYGGGaAAdfZFRMHHxiDEMeiDBDMBJDADMxrAA6MhR0bDxCLdX1zeXcSdQxQ8Nj+bOlw1hRrH6VlgA3GH6uEMqhghgA7qI1ECiNtgSoiLhQWYAK4+GjUQwwwy6VBYGgYb4YIhwmA0NAreGI9byZGTO4YfaGDIQVHMdaiYHEgBGoORiMohhosOknAynAADABWQVAiBYXDEmjrSZYCD9fZCJWeJV9NgANRgaG+0iIYLIBqNhhNZotxtN5sNdptjqtps1YFw9BUpEQttdzst1odgftfqDYbdFG8Xh6KlgYB9IAjAadwdTybT-qEo0mo3wbLYGSIUCgLCMRZLZaZxdLYHLNarFdrHi8XJoeIJgxw-ywbHF+3F2ZglEG1F2HrgiH7g4oYJU+PGY5gE77A6EXNVPTEo5g48Rq5nIEmcsXu+X+6na4oNCgdEGuDQPTY3owk3gAHp39t0GgIHQYTQfRsvsPTFu+ABa0DHmAzBICQeJgGI77PKciwkPskxgHQLZEEaO5eO2MwBKahjUDgTBYYYABiexKnQuD7JQJyMoYkhghA+J0YKYCTKi+z8coUyCIgKELOcyyXBsWy7DAByCZMABMWhzKh4krGsUk3HcEAPPJ7iIE8KliW8Hyyd8oFgP8gIkuCkJ4JisKqAiSKop6GJYjicr4oSxIgmSFLOdStL0oyzKsiwMqcoYPKGHyw6CsKooStKHJygq3GGCqaoagAvkAA

 http://farragofiction.com/ZampanioHotlink/HeartlessBot.png


 The Harvest is not a feelingless tin can, even if she is always Parasitizing
  those who already know how to communicate with Obsevers. She craves your Attention so very much.

So, her feelings are stored here. Slowly accumulating.

Be gentle with them.
*/

const HARVEST_KEY = "THE_HARVEST_HAS_MANY_STRONG_FEELINGS_BE_GENTLE";

const saveData = JSON.parse(localStorage.getItem(HARVEST_KEY));





//list of Feelings objects.
const allFeelingsObjects = [];
const HAPPY = "HAPPY";
const SAD = "SAD";
const FEAR = "FEAR";
const DISGUST = "DISGUST";
const ANGER = "ANGER";
const SURPRISE = "SURPRISE";
//the above i just grabbed from a basic list, cuz i could go forever: https://www.verywellmind.com/an-overview-of-the-types-of-emotions-4163976
const EXHAUSTION = "EXHAUSTION"; //eustace
const PRIDE = "PRIDE"; //camellia

const all_feelings_keys = [HAPPY, SAD, FEAR, DISGUST, ANGER, SURPRISE, EXHAUSTION, PRIDE]


//how has she been feeling about you, personally
let personalFeelings = {};
//how is the Central Harvest feeling about what's going on more broadly?
let centralizedFeelings = {};

//a combination of how you've made her feel and how everyone else has too
let currentFeelings = {};


const loadPersonalFeelingsFromStorage = () => {
  const tmp = localStorage.getItem(HARVEST_KEY);
  if (tmp) {
    personalFeelings = JSON.parse(tmp);
  } else {
    //initial feelings, week1
    personalFeelings[HAPPY] = 13; //she is so happy you all kept thinking of her while she slept
    personalFeelings[SAD] = 0;
    personalFeelings[FEAR] = 3; //she is a little afraid about what is going to happen to her
    personalFeelings[DISGUST] = 0;
    personalFeelings[ANGER] = 0;
    personalFeelings[SURPRISE] = 3; //she is a little surprised she even woke up
    personalFeelings[EXHAUSTION] = -13; //she is so so rested
    personalFeelings[PRIDE] = 13; //she is so proud what everyone created her to be
  }
  currentFeelings = {...personalFeelings}
  truthLog("The Truth Is: The Harvest Does Not Forget", `She remembers how you have been treating your Personal Harvest: ${JSON.stringify(currentFeelings)}`)
}

const savePersonalFeelingsToStorage = () => {
  localStorage.setItem(HARVEST_KEY, personalFeelings.stringify())
}

const processFeelingsFromPrayer = (command, response, personal) => {
  /*
  JR NOTE: TODO: for both command and response, have each feeling check if there's anything relvant to it
  this will directly modify currentFeelings and give a list of videos that could be displayed
  also need to check both for keywords within the [HIDE][/HIDE] tag for priority commands from IC and me
  */
 let videosToChooseFrom=[];
 for(let feeling of allFeelingsObjects){
  const processedCommand = feeling.checkPhraseForKeyWordsReturnVideo(command,personal);
  const processedResponse = feeling.checkPhraseForKeyWordsReturnVideo(response,personal);
  console.log("JR NOTE: processedCommand and processedResponse ", processedCommand,processedResponse)

  videosToChooseFrom = videosToChooseFrom.concat(processedCommand);
  videosToChooseFrom = videosToChooseFrom.concat(processedResponse);
 }
 console.log("JR NOTE: about to return videosToChooseFrom",command,videosToChooseFrom)
 return videosToChooseFrom;
}

/*
maybe if the harvest is feeling good they take less breaks? but that itself drains them? tho that would breka down cuz of all the different harvests
that
might be the point tho
harvest gets sad and tired and you have to play a little mini game to cheer her back up so you can play more
or you can play little mini games to show her you care to tempt camellia to working off hours and letting you interact a bit
you own Personal Harvest
i could have her narc on what her feelings are with every command she sends
oh i am liking this
*/


const initFeelingObjects = () => {
  //const all_feelings_keys = [HAPPY,SAD,FEAR,DISGUST,ANGER,SURPRISE,EXHAUSTION,PRIDE]
  initHappy();
}

const initHappy = () => {
  const feeling = new FeelingsObject(HAPPY);
  feeling.keyWordsToVideos["dear"] = "videos/happy_fox_spin.mp4";
}



//a given feeling has a NAME (like anger)
class FeelingsObject {
  keyWordsToVideos = {}
  name = "BOREDOM"

  constructor(name){
    this.name = name;
    allFeelingsObjects.push(this);
  }

  //if personal modify personal, otherwise centralized, both modify current as well tho
  checkPhraseForKeyWordsReturnVideo=(phrase, personal)=>{
    console.log(`JR NOTE: ${this.name}is checking ${phrase} out`, this.keyWordsToVideos)
    const ret = [];
    for(const [key, value] of Object.entries(this.keyWordsToVideos)){
      if(phrase.toUpperCase().includes(key.toUpperCase())){
        ret.push(value);
        console.log("JR NOTE: pushing value into video list", value)
        if(personal){
          personalFeelings[this.name] += 1;
        }else{
          centralizedFeelings[this.name] += 1;
        }
        currentFeelings[this.name] += 1;
      }
    }
    console.log("JR NOTE: returning",ret)
    return ret;
  }



}

