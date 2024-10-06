/*

https://www.tumblr.com/jadedresearcher/763374544862019584?source=share


Current Game Ideas:

god of being served = praise game  (do this first, v simple just press button to praise her, or offer her carrots)
god of Travelers = worlds shitties map of corn maze from json (it MIGHT not work in minecraft but it will in the corn maze she was born in)
god of change= text adventure corn maze json 

god of curiosity/stories/memories= info dump on whats going on with twig/rava/terry/trogdazorg/etc while commenting on the stories



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

//yes its all a big dumb function, deal with it
GodOfBeingServed = () => {
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
  bgMusic.volume=0.31;//halloween number
  //you can feed the harvest fish, carrots and ram (its the scarecrow in her, so hungry) (feed her all your firefox ram)
  //oh god she's stealing the firefox ram for minecraft
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

  setInterval(()=>{
    frame1()
  },500)

  setInterval(()=>{
    frame2()
  },1000)

  setInterval(()=>{
    frame3()
  },1500)



  const wireHover = (button) => {
    button.onmouseenter = () => {
      frame2();
    }

    button.onmouseleave = () => {
      frame3();
    }
  }

  const restoreDefaultVideo = ()=>{
    tv.loop=true;
    tv.src = "videos/happy_fox_spin.mp4";
    tv.removeEventListener("ended", restoreDefaultVideo);
  }


  const temporaryNewVideo = (src)=>{
    tv.loop = false;
    tv.src = src;
    tv.addEventListener("ended", restoreDefaultVideo);

  }

  const handleStatChange = (x,y,key,amount)=>{
    const statElement = createElementWithClassAndParent("div", shop, "transition");
    statElement.innerText = `${amount>0?"+":""}${amount} ${key}`;
    statElement.style.cssText = `
    position: absolute;
    left: ${x}px;
    top: ${y}px;
    z-index: 113;
    color: ${amount>0?"green":"red"}`;
    setTimeout(()=>statElement.remove(), 3000)
    personalFeelings[key] += amount;
  }

  const wiggle = ()=> getRandomNumberBetween(-100,275);

  //lowers compassion, lowers curious, raises energy, raises happy (reminds her of the Sacrifice that created her but also nourishes the scarecrow within (upsetting))
  const meatButton = createElementWithClassAndParent("button", buttonHolder);
  meatButton.innerText = "Feed Her Meat";
  wireHover(meatButton)
  meatButton.onclick = () => {
    temporaryNewVideo("videos/meat.mp4")
    tv.loop = false;
    handleStatChange(100+wiggle(),40,COMPASSIONATE,-13);
    handleStatChange(115+wiggle(),60,CURIOUS,-13);
    handleStatChange(130+wiggle(),80,ENERGETIC,13);
    handleStatChange(145+wiggle(),100,HAPPY,13);
    savePersonalFeelingsToStorage();
  }

  //raises energy, lowers curious (what ARE fish, what is the ocean??? all she knows is corn) 
  const fishButton = createElementWithClassAndParent("button", buttonHolder);
  fishButton.innerText = "Feed Her Fish";
  wireHover(fishButton)
  fishButton.onclick = () => {
    temporaryNewVideo("videos/fish.mp4");
  }


  //raises compassion, lowers pride (she tried out veganism but did not like it (disguting), still, this lets her understand others better)
  const carrotButton = createElementWithClassAndParent("button", buttonHolder);
  carrotButton.innerText = "Feed Her Carrots";
  wireHover(carrotButton)
  carrotButton.onclick = () => {
    temporaryNewVideo("videos/carrot.mp4");
  }

  //GREATLY raises energy and happiness, lowers pride (she shouldn't need this but she craves it so much. )
  const ramButton = createElementWithClassAndParent("button", buttonHolder);
  ramButton.innerText = "Feed Her Ram"; //i am really glad i went with 'feed her x' and not 'x her' or 'x'
  wireHover(ramButton)
  ramButton.onclick = () => {
    temporaryNewVideo("videos/ram.mp4");
  }





  //GREATLY raises pride,slightly raises happiness,  at the expense of everything else
  const happyButton = createElementWithClassAndParent("button", buttonHolder);
  happyButton.innerText = "Praise Her";
  wireHover(happyButton)
  happyButton.onclick = () => {
    temporaryNewVideo("videos/heart.mp4");
  }

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