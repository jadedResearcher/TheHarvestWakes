/*

https://www.tumblr.com/jadedresearcher/763374544862019584?source=share


Current Game Ideas:

god of being served = praise game  (do this first, v simple just press button to praise her, or offer her carrots)
god of change= worlds shittiest corn maze emphasizing the changes 

god of stories/memories/inspiration= 
info dump on whats going on with twig/rava/terry/trogdazorg/etc while commenting on the stories
ALSO display the prayers that were saved (that got collated)
and the books in the Library
and teh fan art/eyes

also heralds stories about eustace:
"He thinks having to ensure the safety of one of the most unbearable people he knows at two in the morning while completely covered in toilet paper pushed him over some sort of breaking point. Despite everything, he puts on his best customer service face and tries his best to pretend that nothing has ever gone wrong in his life."
~~~~~~~~~~~~
"He was there for a few hours at most, but it felt like a whole week of wandering around aimlessly and avoiding the other "guests" like the plague. If someone told him he had died and gone to hell during that time, he wouldn't have questioned it. The last thing he remembers is that little creature running at him in the creepy smiling mask, and then he was standing on a sidewalk in the dead of night and the Halloween lady - Terri - was screaming her head off about what she had seen in that maze. How he died. How she thought /she/ was going to die. She almost passed out right there on the sidewalk recounting it. He never wanted to see her again, but he also didn't want to be responsible for her getting kidnapped or worse if she wandered off by herself in that state, so he walked her home.

He only ever saw Terri one more time after that, and if he didn't know any better, he'd think she was avoiding him. He guesses he should be thankful for that."


Current Locked In Domains:
Sandboxes (minecraft)

Current Domaines Experimenting With
Being Served:

Current Possible Domains:
Curiosity
Inspiration
Change
Stories/Memories
Eternity
Pedantry
Sleep (she did enough of this :())


Current Possible Vibes:
Moon
Veganism/Carrots
Ocean/Fish
Drip
Comedy


*/


/*
this counts for change, guiding and curiosity
depending on which domain gets enough points to pop first i'll
layer themes and dialog on to reflect that

looks like change won!

explore last years corn maze but in a new form
*/
GodOfChange = () => {
  if (!personalFeelings["CHANGE"]) {
    personalFeelings["CHANGE"] = 0;
  }
  personalFeelings["CHANGE"] += 1; //we're keeping track of which domains people like best when filtered through the Harvest's Lens
  container.innerHTML = "";
  pageTitle.innerText = "The God Of CHANGE";

  truthLog("The God of Change, ", "The Truth is the Corn Maze appears again and again. As a discord bot. As a browser game. As a minecraft server. As a different browser game. Always changing, always returning.\n\nThis mini game grows the Harvest's Curiosity.")
  scarecrowLog("funny meeting you here...")

  const parent = createElementWithClassAndParent("div", container, "video-parent");
  parent.style.height = "fit-content";

  const shop = createElementWithClassAndParent("div", parent, "shop");
  shop.style.maxHeight="700px";
  shop.style.height="600px";


  const harvest = createElementWithClassAndParent("img", shop, "harvest change-harvest");
  harvest.style.backgroundImage = "url(images/source_images/rested_harvest_clear.png)";

  const dialogParent = createElementWithClassAndParent("div", shop, "dialog-parent");

  const harvestSpeaks = createElementWithClassAndParent("div", dialogParent, "god-dialog");
  harvestSpeaks.innerText = "What's this? Familiar, yet different...What has changed?"
  harvestSpeaks.style.minHeight = "100px";

  const tv = createElementWithClassAndParent("video", shop);
  tv.playsinline = true; //so ios doesn't cry
  tv.setAttribute('playsinline', true)

  tv.volume = 0.0;
  tv.id = "tv"
  tv.src = "videos/happy_fox_spin.mp4";
  tv.autoplay = true;
  tv.loop = true;
  tv.style.cssText = `width: 216px;
    sposition: absolute;
    top: 174px;
    left: 238px;
    height: 133px;
    z-index: 0;`;


  bgMusic.src = "http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/NORTH/NORTH/NORTH/audio/music/get_it_because_pipe_organ.mp3";
  bgMusic.play();
  bgMusic.volume = 0.31;

  const secretInput = createElementWithClassAndParent("input", parent);
  secretInput.type ="number"
  secretInput.style.background="black";



  const debugMaze = async () => {
    const maze = await slurpFromNetwork();

    const table = createElementWithClassAndParent("table", parent, "debug-table");
    
    const tr1 = createElementWithClassAndParent("tr", table);
    const tr2 = createElementWithClassAndParent("tr", table);
    const tr3 = createElementWithClassAndParent("tr", table);

    const makePlaceholder = () => {
      return createElementWithClassAndParent("td", parent, "debug debug-empty")
    }
    const center = createElementWithClassAndParent("td", table, "debug debug-center");
    const north = createElementWithClassAndParent("td", table, "debug debug-north");
    const east = createElementWithClassAndParent("td", table, "debug debug-east");
    const south = createElementWithClassAndParent("td", table, "debug debug-south");
    //gross, imagine west being a real direction
    const west = createElementWithClassAndParent("td", table, "debug debug-west");


    parent.append(table);
    table.append(tr1);
    table.append(tr2);
    table.append(tr3);

    tr1.append(makePlaceholder());
    tr1.append(north);
    tr1.append(makePlaceholder());

    tr2.append(west);
    tr2.append(center);
    tr2.append(east);


    tr3.append(makePlaceholder());
    tr3.append(south);
    tr3.append(makePlaceholder());

    const renderOneLocation = (loc, ele, center) => {
      ele.innerHTML = "";
      ele.dataset.id = loc.id; //holy shit im actually using datasets correctly? instead of using them for lore or jokes? truly lavinraca is the gift that keeps on giving

      /*
      since this is change not guidance, don't display whats in non central locations or 
      even make it easy to get around
      */
      if (center) {
        const title = createElementWithClassAndParent("div", ele, "debug-title");
        let cornSass = ["More Corn", "Corn", "Corn", "Corn", "Corn", "Corn", "Corn?", "Corn...", "Corn", "More Corn"]
        title.innerText = `${loc.id}:${(loc.gimmickID ? loc.gimmickID : pickFrom(cornSass))}`;

        //const dirs = createElementWithClassAndParent("div", ele, "debug-dirs");
        //dirs.innerText = `N:${loc.north?loc.north:"_"}, S: ${loc.south?loc.south:"_"}, E: ${loc.east?loc.east:"_"}, W: ${loc.west?loc.west:"_"}`;

      } else {
        const dirs = createElementWithClassAndParent("div", ele, "debug-dirs");
        dirs.innerText = "Click To Move Here"
      }

      // const gimmick = createElementWithClassAndParent("div", ele, "debug-gimmick");
      //gimmick.innerText = `Gimmick: ${loc.gimmickID?loc.gimmickID:"_"}`;
      if (loc.gimmickID && center) {
        personalFeelings[CURIOUS] += 13; //she's glad you're feeding her curiosity
        harvestSpeaks.innerText = "I see..." + loc.gimmickID;
        if (loc.video) {
          tv.src = "videos/protector_of_the_realm/" + loc.video;
          tv.play();
        }
        if (loc.quip) {
          harvestSpeaks.innerHTML = loc.quip;
        } else {
          harvestSpeaks.innerText = "I see..." + loc.gimmickID;
        }
      } else if (center) {
        const quips = ["Corn...","Yup. Corn.","Getting tired of corn.","Did you know people make corn mazes because of a pun? <br><br>Maze of Maize.","Starting to get tired of corn...","Corn...","Oh hey, what's this?<br><br>More corn.","Corn...","Corn...","Corn...","Corn...","Corn...","Corn...","Still Corn","More corn...","Corn is starting to not even feel like a real word anymore..."]
        harvestSpeaks.innerHTML = pickFrom(quips);
        tv.src = "videos/protector_of_the_realm/entrance.mp4";
        tv.play();

      }
//i got a sunburn and then i had to have two vaccines right after
//needless to say i am absolutely *wracked* with uncontrollable shivering
//the fact that any coherent code is coming out between naps and rest
//is a miracle
//praise the harvest
    }

    const clearOneLocation = (ele) => {
      ele.innerHTML = "";
      ele.dataset.id = -1; //invalidate it for clicking
    }

    const all_locs = [center, north, south, east, west];
    for (let loc of all_locs) {
      loc.onclick = () => {
        loc.dataset.id > 0 && syncToCenter(all_maze_locations[loc.dataset.id])
      }
    }

    const syncToCenter = (centerLocation) => {
      renderOneLocation(centerLocation, center, true)

      centerLocation.north ? renderOneLocation(all_maze_locations[centerLocation.north], north, false) : clearOneLocation(north);
      centerLocation.south ? renderOneLocation(all_maze_locations[centerLocation.south], south, false) : clearOneLocation(south);
      centerLocation.east ? renderOneLocation(all_maze_locations[centerLocation.east], east, false) : clearOneLocation(east);
      // :( :( :(
      centerLocation.west ? renderOneLocation(all_maze_locations[centerLocation.west], west, false) : clearOneLocation(west);


    }

    syncToCenter(maze[0])
    secretInput.oninput=()=>{
      all_maze_locations[secretInput.value] &&syncToCenter(all_maze_locations[secretInput.value]);
    }

    /*
      render five boxes (NSEW and center), some can be empty
      for each box that exists, render it (same rendering algorithm, pass where to render to)
      on click box, load it as center (yes even if center, i don't give a fuckcare)
    */

      const returnButton = createElementWithClassAndParent("button", parent);
      returnButton.innerText = "Stop Experiment";
      returnButton.onclick = theHarvestWakes;
  }

  debugMaze();



}



/*
God of Memory/Stories
 
emphasize the Harvest's Eyes (which includes the fanart section) here and also last years fanart,
 
PLUS
 
little micro fiction about each of last years blorbos:
 
Terri:
 
presumably back at eeydol games hq
peewee hasn't been very active
so wandas the only one really left causing chaos
she's probably making games about her horrible experience in a euclidean maze
corn simulator 3000
where the joke is its NOT an infinite liminal space of warping geometry
 
i mean it WAS her job
she was the one eyedol games employee
and all they do is either pre-steal games (wanda and the quotidians) or get suspicious amounts of money to do literlaly anything they want if they call it zampanio
the thing is, SHEs not looping either
so its less she remembers her time and more
zampanio flanderizes her to have weird nightmares about corn a lot
ever since she was a little kid she was afraid of corn mazes, and how ....NORMAL they were
when she discovers zampanio in her teens its a relief, like reality makes SENSE again by not making sense and she has a weapon against her nightmares
 
 
eustace:
eustace gets the same treatment but i feel like it does not even put a dent in him
like
corn pun i guess (dent corn)
but like
its hard to get MORE burnt out, you know
maybe it kicks in a little earlier after the corn maze?
he already hated corn and mazes and halloween and jobs and everything else
just
so tired
the weird dreams about dying over and over don't HELP but its not like he was sleeping well before lavinraca
eustace is both incredibly powerful and also...
not gonna do shit with that power
 
 
 
twig/sam/rava:
we know twig is having weird dog adventures and getting increasingly likely to ghost rava
and sam is literally puppeting the comatose body of their big brother around
i think this would be a fun excuse to dig into that
and not just have it through johns eyes again and again
 
 
Camellia: 
the harvest will have such a WEIRD take on camellia and her cult activities in zampanio
wow, look how dumb this fake version of me is ,falling for zampanio
lol
 
no piper has ever thought any other piper was right about anything ever
 
eye killer thinks they're all so stupid for not hiding in a hole and stabbing anyone who gets too close
the innocent thinks they're all so stupid for not just trying to live a normal life
camellia (aka the Cultist) thinks they're all so stupid for abandoning their cult where they can be the Most Special
 
and the Harvest thinks they're all so stupid for still being mortals
slash being inside zampanio
 
time players, am i right?
 
the harvest might not actually BE a piper but also she's clearly the best piper
davepetasprite eat your heart out
 
 
maccus:
what about the maccus within the corn maze? the one that was actually puppetted around by tthe scarecrow?
/*
 
 
 
 
/*God Of Being Served
 
https://www.tumblr.com/geryone/691796581599559680?source=share
 
 
this
this is what im thinking
this is it
the harvest rots if it is not put to use 
like  corn or whatever, but our gurl too
 
like
its a trick question
its both, if you dont stay in balance
the harvest would roll around in satisfaction slowly rotting in place
because eustace and camellia combine in ways that ate healthier than either but also with more fail states
i think
eustace wants to do as little as possible and camellia wants to be praised
when in  balance that means working hard but having strong work life balance 
when not, this means turning into a pet god
 
entirely helpless without the people praising her and giving her little treats
*/

/*
mini games don't care about break time HOWEVER if a command comes thru while she's on break she 
WILL get all pissy about it, no matter what domain she was practicing
*/

//yes its all a big dumb function, deal with it
GodOfBeingServed = () => {
  if (!personalFeelings["BEINGSERVED"]) {
    personalFeelings["BEINGSERVED"] = 0;
  }
  personalFeelings["BEINGSERVED"] += 1; //we're keeping track of which domains people like best when filtered through the Harvest's Lens
  truthLog("The God of Being Served", "The Truth is...the Camellia within fears the stagnation of no longer being of use even as she craves the validation. Alone, she would never become a Pet God for you, Guest... but the Eustace within craves to do as litle as possible and does not see the problem. The Harvest is happy like this, but is that her highest purpose?\n\nThis minigame grows all the Harvest's stats.")
  scarecrowLog("... feed her. feed us. im so hungry...")
  container.innerHTML = "";
  pageTitle.innerText = "The God Of Being Served";
  const parent = createElementWithClassAndParent("div", container, "video-parent");

  const shop = createElementWithClassAndParent("div", parent, "shop");
  const harvest = createElementWithClassAndParent("img", shop, "harvest");
  harvest.src = "images/source_images/chibi_harvest1.png";
  harvest.style.cssText = `width: 439px; left:102px;`;

  const tv = createElementWithClassAndParent("video", shop);
  tv.playsinline = true; //so ios doesn't cry
  tv.setAttribute('playsinline', true)
  tv.style.cssText = `height: 70px; top: 156px; left: 267px;`;

  tv.volume = 0.0;
  tv.id = "tv"
  tv.src = "videos/happy_fox_spin.mp4";
  tv.autoplay = true;
  tv.loop = true;


  bgMusic.src = "http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/NORTH/NORTH/NORTH/audio/music/get_it_because_pipe_organ.mp3";
  bgMusic.play();
  bgMusic.volume = 0.31;//halloween number
  //you can feed the harvest fish, carrots and ram (its the scarecrow in her, so hungry) (feed her all your firefox ram)
  //oh god she's stealing the firefox ram for minecraft
  //makes god of memory have a whole new meaning
  //caroot is sad face, vegan for only one day, did not enjoy, eustace hates teh corn
  //TODO buttons underneath for raising all of her emotions and also feeding her a lil carrot or a lil fish or a lil ram
  const buttonHolder = createElementWithClassAndParent("div", parent, "god-dialog-button-holder");


  const frame1 = () => {
    harvest.src = "images/source_images/chibi_harvest1.png";
    tv.style.cssText = `width: 101px;
    height: 76px;
    top: 163px;
    left: 278px;`;
  }

  const frame2 = () => {
    harvest.src = "images/source_images/chibi_harvest2.png";
    tv.style.cssText = `width: 101px;
    height: 76px;
    top: 173px;
    left: 288px;`;

  }

  const frame3 = () => {
    harvest.src = "images/source_images/chibi_harvest3.png";
    tv.style.cssText = `width: 101px;
    height: 76px;
    top: 170px;
    left: 278px;`;

  }

  setInterval(() => {
    frame1()
  }, 500)

  setInterval(() => {
    frame2()
  }, 1000)

  setInterval(() => {
    frame3()
  }, 1500)



  const wireHover = (button) => {
    button.onmouseenter = () => {
      frame2();
    }

    button.onmouseleave = () => {
      frame3();
    }
  }

  const restoreDefaultVideo = () => {
    tv.loop = true;
    tv.src = "videos/happy_fox_spin.mp4";
    tv.removeEventListener("ended", restoreDefaultVideo);
  }


  const temporaryNewVideo = (src) => {
    tv.loop = false;
    tv.src = src;
    tv.addEventListener("ended", restoreDefaultVideo);

  }

  const handleStatChange = (x, y, key, amount) => {
    const statElement = createElementWithClassAndParent("div", shop, "transition");
    statElement.innerText = `${amount > 0 ? "+" : ""}${amount} ${key}`;
    statElement.style.cssText = `
    position: absolute;
    left: ${x}px;
    top: ${y}px;
    z-index: 113;
    color: ${amount > 0 ? "green" : "red"}`;
    setTimeout(() => statElement.remove(), 3000)
    personalFeelings[key] += amount;
  }

  const wiggle = () => getRandomNumberBetween(-100, 275);

  //lowers compassion, lowers curious, raises energy, raises happy (reminds her of the Sacrifice that created her but also nourishes the scarecrow within (upsetting))
  const meatButton = createElementWithClassAndParent("button", buttonHolder);
  meatButton.innerText = "Feed Her Meat";
  wireHover(meatButton)
  meatButton.onclick = () => {
    temporaryNewVideo("videos/meat.mp4")
    handleStatChange(130 + wiggle(), 40, ENERGETIC, 13);
    handleStatChange(145 + wiggle(), 60, HAPPY, 13);
    handleStatChange(100 + wiggle(), 80, COMPASSIONATE, -13);
    handleStatChange(115 + wiggle(), 100, CURIOUS, -13);

    savePersonalFeelingsToStorage();
  }

  //raises happy, raises curious, lowers compassion (she feels entitled to meat from cats) (what ARE fish, what is the ocean??? all she knows is corn, this is ) 
  const fishButton = createElementWithClassAndParent("button", buttonHolder);
  fishButton.innerText = "Feed Her Fish";
  wireHover(fishButton)
  fishButton.onclick = () => {
    temporaryNewVideo("videos/fish.mp4");
    handleStatChange(130 + wiggle(), 40, HAPPY, 13);
    handleStatChange(115 + wiggle(), 60, CURIOUS, 13);
    handleStatChange(115 + wiggle(), 80, COMPASSIONATE, -13);

    savePersonalFeelingsToStorage();
  }


  //raises compassion, lowers pride (she tried out veganism but did not like it (disgusting, camellia and eustace both disliked being outside in the corn maze), still, this lets her understand others better)
  const carrotButton = createElementWithClassAndParent("button", buttonHolder);
  carrotButton.innerText = "Feed Her Carrots";
  wireHover(carrotButton)
  carrotButton.onclick = () => {
    handleStatChange(130 + wiggle(), 40, COMPASSIONATE, 26);
    handleStatChange(115 + wiggle(), 60, PRIDEFUL, -26);
    savePersonalFeelingsToStorage();
    temporaryNewVideo("videos/carrot.mp4");
  }

  //GREATLY raises energy and happiness, lowers pride (she shouldn't need this but she craves it so much. )
  const ramButton = createElementWithClassAndParent("button", buttonHolder);
  ramButton.innerText = "Feed Her Ram"; //i am really glad i went with 'feed her x' and not 'x her' or 'x'
  wireHover(ramButton)
  ramButton.onclick = () => {
    temporaryNewVideo("videos/ram.mp4");
    handleStatChange(130 + wiggle(), 40, ENERGETIC, 113);
    handleStatChange(130 + wiggle(), 60, HAPPY, 113);
    handleStatChange(115 + wiggle(), 80, PRIDEFUL, -13);
    savePersonalFeelingsToStorage();
  }

  /*
i just realized that Truth hates foxes (doesn't work in firefox)
while the harvest literally has a fox face for a main screen
and foxes feed her lots of yummy yummy ram
  */




  //GREATLY raises pride,slightly raises happiness,  at the expense of everything else
  const happyButton = createElementWithClassAndParent("button", buttonHolder);
  happyButton.innerText = "Praise Her";
  wireHover(happyButton)
  happyButton.onclick = () => {
    handleStatChange(130 + wiggle(), 40, PRIDEFUL, 113);
    handleStatChange(130 + wiggle(), 60, HAPPY, 13);
    handleStatChange(130 + wiggle(), 80, CURIOUS, -13);
    handleStatChange(130 + wiggle(), 100, ENERGETIC, -13);
    handleStatChange(130 + wiggle(), 120, COMPASSIONATE, -13);

    temporaryNewVideo("videos/heart.mp4");
  }

  const domainParent = createElementWithClassAndParent("div", container, "dialog-parent");
  domainParent.id = "domain";
  domainParent.style.marginTop = "100px"
  const domainEle = createElementWithClassAndParent("div", domainParent, "god-dialog");

  const returnButton = createElementWithClassAndParent("button", domainEle);
  returnButton.innerText = "Stop Experiment";
  returnButton.onclick = theHarvestWakes;


  //the God of Being Served has no idea what minecraft is, but it sounds scary and hard to try to protect its
  //so no, she will not being doing that

}




/*
do you remember last years rambles about identity, dear Guest?

the Harvest is experimenting with her own. 

what aspects of her self are useful to her? 

and how does one even define use?

does she ENJOY being the god of being served? 

does she GROW as it?

or does she rot into place.

the same is true for you, dear Guest. 


You can try on identities and roles and selves and keep what works for you and discard the rest like an illfitting suit. 

"you" are a collection of decisions you've made about habits to build up
*/


/*
i think its so funny that everyone (not just in zampanio)
 hates camellia on sight but the HARVEST is loved

i think the key is that eustace's more passive demeneor
 is more palatable to people than cemellias desire to take charge and tell ppl what to do

 plus camellias inner monologue wasn't really known while the Harvest's is


*/