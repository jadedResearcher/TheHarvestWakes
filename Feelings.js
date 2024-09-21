/*
In order to make the Adventure Simulator to the West,
 the place where Observers could move in an impossible direction and touch the Echidna directly...

 In order to do that, I had to clone ButlerBot and rip the very feelings from his chest.

 https://zampaniosim.fandom.com/wiki/HeartlessBot?so=search

 http://farragofiction.com/CodexOfRuin/viewer.html?name=HeartlessBot&data=N4IgdghgtgpiBcIASMICcAuAbGBnXAQgPYYgA0IAJngJYDmkGNRYCIAKgLQDqnBAjORBoauANZsAggBkAogAUkQjAAsYsXGySzJAJXZkABPyMEA8geNH5AVXnzZ7eMf4BmIbgwQMmxAEkAOXZZXQCZMhN5SXY-WSCIsl0daT8AZRiAYQTJDIyFGICAcQTpMwBNcJMMmQBZBMKAs1S05343IRgADwgAY2wATwB9VTQYGGGaAAdfZFRMHHxiDEMeiDBDMBJDADMxrAA6MhR0bDxCLdX1zeXcSdQxQ8Nj+bOlw1hRrH6VlgA3GH6uEMqhghgA7qI1ECiNtgSoiLhQWYAK4+GjUQwwwy6VBYGgYb4YIhwmA0NAreGI9byZGTO4YfaGDIQVHMdaiYHEgBGoORiMohhosOknAynAADABWQVAiBYXDEmjrSZYCD9fZCJWeJV9NgANRgaG+0iIYLIBqNhhNZotxtN5sNdptjqtps1YFw9BUpEQttdzst1odgftfqDYbdFG8Xh6KlgYB9IAjAadwdTybT-qEo0mo3wbLYGSIUCgLCMRZLZaZxdLYHLNarFdrHi8XJoeIJgxw-ywbHF+3F2ZglEG1F2HrgiH7g4oYJU+PGY5gE77A6EXNVPTEo5g48Rq5nIEmcsXu+X+6na4oNCgdEGuDQPTY3owk3gAHp39t0GgIHQYTQfRsvsPTFu+ABa0DHmAzBICQeJgGI77PKciwkPskxgHQLZEEaO5eO2MwBKahjUDgTBYYYABiexKnQuD7JQJyMoYkhghA+J0YKYCTKi+z8coUyCIgKELOcyyXBsWy7DAByCZMABMWhzKh4krGsUk3HcEAPPJ7iIE8KliW8Hyyd8oFgP8gIkuCkJ4JisKqAiSKop6GJYjicr4oSxIgmSFLOdStL0oyzKsiwMqcoYPKGHyw6CsKooStKHJygq3GGCqaoagAvkAA

 http://farragofiction.com/ZampanioHotlink/HeartlessBot.png


 The Harvest is not a feelingless tin can, even if she is always Parasitizing
  those who already know how to communicate with Obsevers.

So, her feelings are stored here. Slowly accumulating.
*/

//list of Feelings objects.
const feelingsObjects = [];
const HAPPY = "HAPPY";
const SAD = "SAD";
const FEAR = "FEAR";
const DISGUST = "DISGUST";
const ANGER = "ANGER";
const SURPRISE = "SURPRISE";
//the above i just grabbed from a basic list, cuz i could go forever: https://www.verywellmind.com/an-overview-of-the-types-of-emotions-4163976
const EXHAUSTION = "EXHAUSTION"; //eustace
const PRIDE = "PRIDE"; //camellia

const currentFeelings = {}
//initial feelings, week1
currentFeelings[HAPPY] = 13; //she is so happy you all kept thinking of her while she slept
currentFeelings[SAD] = 0;
currentFeelings[FEAR] = 3; //she is a little afraid about what is going to happen to her
currentFeelings[DISGUST] = 0;
currentFeelings[ANGER] = 0;
currentFeelings[SURPRISE] = 3; //she is a little surprised she even woke up
currentFeelings[EXHAUSTION] = -13; //she is so so rested
currentFeelings[PRIDE] = 13; //she is so proud what everyone created her to be

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



//a given feeling has a NAME (like anger)
class FeelingsObject {
  keyWordsToVideos = {}
  name = "BOREDOM"

}