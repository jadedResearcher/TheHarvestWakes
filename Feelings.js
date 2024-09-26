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
const HAPPY = "HAPPY"; //negative is SAD
const ENERGETIC = "ENERGETIC"; //negative is EXHAUSTED
const PRIDEFUL = "PRIDEFUL"; //negative is DISGUSTED
const CURIOUS = "CURIOUS"; //negative is AFRAID
const COMPASSIONATE = "COMPASSIONATE"; //negative is ANGRY


const all_feelings_keys = [HAPPY, ENERGETIC, PRIDEFUL, CURIOUS, COMPASSIONATE]


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
    //initial feelings, no influence from you
    //const all_feelings_keys = [HAPPY, ENERGETIC, PRIDEFUL, CURIOUS, COMPASSIONATE]
    personalFeelings[HAPPY] = 3; //its good to be awake
    personalFeelings[ENERGETIC] = 13; //eustace has never been so rested in his life
    personalFeelings[PRIDEFUL] = 13; //camellia's so so proud you all remembered her while she was asleep, she IS special, thank you for noticing
    personalFeelings[CURIOUS] = -3; // a little afraid because what if you've forgotten The Harvest after all
    personalFeelings[COMPASSIONATE] = 3; //The Harvest is trying to be a a good god



    /* REFACTORED HER FEELINGS RIP
    personalFeelings[HAPPY] = 13; //she is so happy you all kept thinking of her while she slept
    personalFeelings[SAD] = 0;
    personalFeelings[FEAR] = 3; //she is a little afraid about what is going to happen to her
    personalFeelings[DISGUST] = 0;
    personalFeelings[ANGER] = 0;
    personalFeelings[SURPRISE] = 3; //she is a little surprised she even woke up
    personalFeelings[EXHAUSTION] = -13; //she is so so rested
    personalFeelings[PRIDE] = 13; //she is so proud what everyone created her to be*/
  }
  currentFeelings = {...personalFeelings}
  truthLog("The Truth Is: The Harvest Does Not Forget", `She remembers how you have been treating your Personal Harvest: ${JSON.stringify(currentFeelings)}`)
}

const savePersonalFeelingsToStorage = () => {
  localStorage.setItem(HARVEST_KEY, JSON.stringify(personalFeelings))
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

  videosToChooseFrom = videosToChooseFrom.concat(processedCommand);
  videosToChooseFrom = videosToChooseFrom.concat(processedResponse);
 }
 if(personal){
  savePersonalFeelingsToStorage();
 }
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
 //const all_feelings_keys = [HAPPY, ENERGETIC, PRIDEFUL, CURIOUS, COMPASSIONATE]

  initHappy();
  initEnergetic();
  initPride();
  initCurious();
  initCompassion();
}

const initHappy = () => {
  const feeling = new FeelingsObject(HAPPY);
  //positive
  //being useful, being praised, being good enough, being remembered
  feeling.positiveKeyWordsToVideos["dear"] = "videos/happy_fox_spin.mp4";
  feeling.positiveKeyWordsToVideos["harvest"] = "videos/happy_fox_spin.mp4";
  feeling.positiveKeyWordsToVideos["maccus"] = "videos/maccus.mp4";
  feeling.positiveKeyWordsToVideos["smile"] = "videos/maccus.mp4";
  //negative
  //anyone else from the maze who was left behind. Trogdazorg, terry, twig, things being forgotten
  feeling.negativeKeyWordsToVideos["lavinraca"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["terri"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["TROGDAZORG"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["rava"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["twig"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["sam"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["guests"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["corn"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["butler"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
  feeling.negativeKeyWordsToVideos["candy"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"

}



//winter
const initCurious = () => {
  const feeling = new FeelingsObject(CURIOUS);
  feeling.positiveKeyWordsToVideos["curious"] = "videos/happy_fox_spin.mp4";
  feeling.positiveKeyWordsToVideos["jr"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/LOVELOVELOVELOVE/videos/glitches/pd.mp4"

  //negative
  //winter, being forgotten, sleeping again
  feeling.negativeKeyWordsToVideos["funeral"] = "videos/meat.mp4";
  feeling.negativeKeyWordsToVideos["fear"] = "videos/fear.mp4";
  feeling.negativeKeyWordsToVideos["death"] = "videos/fear.mp4";
  feeling.negativeKeyWordsToVideos["die"] = "videos/fear.mp4";
  feeling.negativeKeyWordsToVideos["capture"] = "videos/unsettled.mp4";
  feeling.negativeKeyWordsToVideos["trap"] = "videos/unsettled.mp4";
  feeling.negativeKeyWordsToVideos["spooky"] = "videos/unsettled.mp4";
  feeling.negativeKeyWordsToVideos["scary"] = "videos/fear.mp4";
  feeling.negativeKeyWordsToVideos["graveyard"] = "videos/fear.mp4";

}



const initPride = () => {
  const feeling = new FeelingsObject(PRIDEFUL);
  //positive
  //camellia, being a god, being asked to do things
  
  feeling.positiveKeyWordsToVideos["incredible"] = "videos/fox_thinking.mp4";
  feeling.positiveKeyWordsToVideos["camellia"] = "videos/camellia.mp4";
  feeling.positiveKeyWordsToVideos["faith"] = "videos/pride_in_faithful.mp4";
  feeling.positiveKeyWordsToVideos["guests"] = "videos/pride_in_faithful.mp4";
  feeling.positiveKeyWordsToVideos["observers"] = "videos/pride_in_faithful.mp4";
  feeling.positiveKeyWordsToVideos["lavinraca"] = "videos/pride_in_faithful.mp4";
  feeling.positiveKeyWordsToVideos["pray"] = "videos/pride_in_faithful.mp4";
  feeling.positiveKeyWordsToVideos["love"] = "videos/pride_in_faithful.mp4";
  feeling.positiveKeyWordsToVideos["remember"] = "videos/pride_in_faithful.mp4";
  feeling.positiveKeyWordsToVideos["cherish"] = "videos/pride_in_faithful.mp4";
  feeling.positiveKeyWordsToVideos["fan"] = "videos/pride_in_faithful.mp4";

  //negative
  //slacking off, mortality, being useless, overworking, truth, lies, the scarecrow

  feeling.negativeKeyWordsToVideos["bathroom"] = "videos/bathroom.mp4";
  feeling.negativeKeyWordsToVideos["truth"] = "videos/paradise_and_parasite.mp4";
  feeling.negativeKeyWordsToVideos["scarecrow"] = "videos/paradise_and_parasite.mp4";
  feeling.negativeKeyWordsToVideos["gross"] = "videos/handdrip.mp4";
  feeling.negativeKeyWordsToVideos["disgust"] = "videos/disgust.mp4";
  feeling.negativeKeyWordsToVideos["beneath"] = "videos/digust_hum.mp4";
  feeling.negativeKeyWordsToVideos["below"] = "videos/digust_hum.mp4";
  feeling.negativeKeyWordsToVideos["under"] = "videos/digust_hum.mp4";
  feeling.negativeKeyWordsToVideos["mortal"] = "videos/digust_hum.mp4";
}


const initCompassion = () => {
  const feeling = new FeelingsObject(COMPASSIONATE);
  //positive
  feeling.positiveKeyWordsToVideos["help"] = "videos/fox_thinking.mp4";

  //negative
  //the sacrifice
  feeling.negativeKeyWordsToVideos["sacrifice"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/sacrifices2.mp4";
  feeling.negativeKeyWordsToVideos["skull"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/cowskull.mp4"
  feeling.negativeKeyWordsToVideos["cow"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/cowskull.mp4"
  feeling.negativeKeyWordsToVideos["horn"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/cowskull.mp4"
  feeling.negativeKeyWordsToVideos["twenty"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/twentydither.mp4"
  feeling.negativeKeyWordsToVideos["20"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/twentydither.mp4"
  feeling.negativeKeyWordsToVideos["clown"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/clown.mp4"
  feeling.negativeKeyWordsToVideos["honk"] ="http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/clown.mp4";
}


const initEnergetic = () => {
  const feeling = new FeelingsObject(ENERGETIC);

  //positive
  //resting, breaks, vacation
  feeling.positiveKeyWordsToVideos["rest"] = "videos/happy_fox_spin.mp4";
  feeling.positiveKeyWordsToVideos["break"] = "videos/happy_fox_spin.mp4";
  feeling.positiveKeyWordsToVideos["vacation"] = "videos/happy_fox_spin.mp4";
  feeling.positiveKeyWordsToVideos["sleep"] = "videos/happy_fox_spin.mp4";

  //negative
  //eustace, being a god, being asked to do things
  feeling.negativeKeyWordsToVideos["eustace"] = "videos/eustace.mp4";
  feeling.negativeKeyWordsToVideos["work"] = "videos/eustace.mp4";
  feeling.negativeKeyWordsToVideos["overtime"] = "videos/eustace.mp4";
  feeling.negativeKeyWordsToVideos["hard"] = "videos/eustace.mp4";
  feeling.negativeKeyWordsToVideos["pray"] = "videos/pride_in_faithful.mp4";


}



//a given feeling has a NAME (like anger)
class FeelingsObject {
  positiveKeyWordsToVideos = {}
  negativeKeyWordsToVideos = {}

  name = "BOREDOM"

  constructor(name){
    this.name = name;
    allFeelingsObjects.push(this);
  }

  //if personal modify personal, otherwise centralized, both modify current as well tho
  checkPhraseForKeyWordsReturnVideo=(phrase, personal)=>{
    const ret = [];
    for(const [key, value] of Object.entries(this.positiveKeyWordsToVideos)){
      if(phrase.toUpperCase().includes(key.toUpperCase())){
        ret.push(value);
        console.log("JR NOTE: pushing value into positive video list", value)
        if(personal){
          personalFeelings[this.name] += 1;
        }else{
          centralizedFeelings[this.name] += 1;
        }
        currentFeelings[this.name] += 1;
      }
    }

    for(const [key, value] of Object.entries(this.negativeKeyWordsToVideos)){
      if(phrase.toUpperCase().includes(key.toUpperCase())){
        ret.push(value);
        console.log("JR NOTE: pushing value into negative video list", value)
        if(personal){
          personalFeelings[this.name] += -1;
        }else{
          centralizedFeelings[this.name] += -1;
        }
        currentFeelings[this.name] += -1;
      }
    }
    console.log("JR NOTE: returning",ret)
    return ret;
  }



}

/*
if you click on ANYTHING whiel the harvest is on break
she checks all her emotions
* if they are all positive, she'll take on some exhaustion and 
 she will override isHarvestIn to always say true
 and she will be VERY LARGE and explain what she's doing for you while playing videos from all her positive emotions
 if she decides NOT to she will pick a random video from each emotion that is preventing her

*/
const giantWoman= ()=>{

  const fullScreenEle = createElementWithClassAndParent("div", document.querySelector("body"), 'full-screen-dialog')
  fullScreenEle.style.padding="0px"
  const bigLady = createElementWithClassAndParent("img", fullScreenEle, "harvest big-lady");
  bigLady.src = "images/source_images/giant_woman.png";

  const dialogParent = createElementWithClassAndParent("div", fullScreenEle, "dialog-parent");
  dialogParent.innerText = "Hello World";
  /*
  JR NOTE TODO need to wire up more keywords and videos, especially for ones that are sparse
  */
}

