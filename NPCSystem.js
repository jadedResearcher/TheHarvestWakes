
/*
i can make it mirror hte maze itself!
npcs wander the maze randomly

if you encounter an npc while you're in a SANE part of the maze, their dialogue is mapped out, just like the maze is

but if you're on the edges, the dialogue is entirely procedural and not even attempting to be conherent, just like the maze
each npc has themes and personal words they're likely to use in their procedural parts

*/

//https://libraryofbabel.info/bookmark.cgi?zampanio:1

//tempted to leak this for the personality
//for enrichment
const npcs = [];
let camellia; //the most specialist and she knows it
//topic is a key, and within is a ramble for each blorbo
let multiBlorboRambles = {}

let scarecrowComments = {};


//superimposes image 1 and 2 over each other at all times. has a second name as well.
//rampaging good dog Twig (truth likes dogs)
//Obedient Thrall Sam
class SplitNPC {
  npc1;
  npc2;

  constructor(npc1, npc2) {
    this.npc1 = npc1;
    this.npc2 = npc2;
  }
  //JR NOTE: Todo handle rendering on top of each other, animate z index.

  attachToParent = (parent, chaos, specificRamble) => {
    console.log("JR NOTE: trying for twig")
    const newParent = createElementWithClassAndParent("div", parent, "split-parent");
    this.npc1.attachToParent(newParent, chaos, specificRamble);
    this.npc2.attachToParent(newParent, chaos, specificRamble);

    this.npc1.imageElement.classList.add("split");
    this.npc1.imageElement.style = '--i: 10;';

    this.npc2.imageElement.classList.add("split");
    this.npc2.imageElement.style = '--i: 2;';


  }


}


class NPC {
  name;
  randomLocation = false;
  balloonResponse = "";
  imageSrc;
  imageSrc2;
  imageElement;
  goodbyePhrase = "Goodbye";
  currentRamble;
  possibleGenericDialogKeys = [];
  dialog; //might be unattached from dom

  //when they are procedural, what little lingering bits of their original selves remain?
  jumbledPhrases = [];

  constructor(name, imageSrc, goodbyePhrase, jumbledPhrases, possibleGenericDialogKeys, imageSrc2, balloonResponse) {
    this.name = name;
    this.balloonResponse = balloonResponse;
    this.possibleGenericDialogKeys = possibleGenericDialogKeys;
    this.imageSrc = imageSrc;
    this.imageSrc2 = imageSrc2;
    this.goodbyePhrase = goodbyePhrase;
    this.jumbledPhrases = jumbledPhrases;
  }

  //modified from jackElope
  fuckShitUP = async () => {


    const wrapper = document.querySelector(".layered-image-container");
    let fucked_up_image_holder = createElementWithClassAndParent("div", wrapper, "avatar");
    fucked_up_image_holder.style.pointerEvents = "none";

    fucked_up_image_holder.style.background = "black";
    const size = 10;

    for (let y = 0; y < 200; y += size) {
      for (let x = 0; x < 200; x += size) {
        let box = createElementWithClassAndParent("div", fucked_up_image_holder, "box");
        box.style.pointerEvents = "none";
        box.style.position = "absolute";
        box.style.top = y + "px";
        box.style.left = x + "px";
        box.style.backgroundPositionY = 200 - y + "px";
        box.style.backgroundPositionX = 200 - x + "px";
        box.style.backgroundImage = `url('${this.imageSrc}')`;
        box.style.width = size + "px";
        box.style.height = size + "px";
        const odds = Math.random();
        if (odds > 0.75) {
          box.style.animation = `james-webb-telescope-mirrors-mirrored ${Math.random() * 4}s infinite linear 0s`
        } else if (odds > 0.5) {
          box.style.animation = `james-webb-telescope-mirrors-mirrored  ${Math.random() * 4}s infinite linear 2s`
          box.style.backgroundImage = `url('${this.imageSrc2}')`;
        } else {
          box.style.animation = `james-webb-telescope-mirrors-mirrored  ${Math.random() * 4}s infinite linear 1s`
        }
      }

    }
  }

  syncDialogToCurrentRamble = () => {
    if (!this.dialog) {
      return;
    }
    if (this.chaos) {
      this.dialog.classList.add("glitch");
      this.dialog.style = '--i: 1;';

    } else {

      this.dialog.classList.remove("glitch");
    }
    this.dialog.innerHTML = "";
    const ramble = createElementWithClassAndParent("div", this.dialog, "ramble");
    if (!this.chaos) {
      ramble.innerText = this.currentRamble.thingToSay;
      const quip = checkScarecrowCommentsForPhrase(this.currentRamble.thingToSay);
      if (quip) {
        scarecrowLog(quip)
      }
    } else {
      scarecrowLog(`your map is not everything
      your map is just a little lie you tell yourself
      to trust in whats around you
      when theres nothing at all`)
      const parts = this.currentRamble.thingToSay.split("."); //yeah we could split on ? and ! as well but lets see how this works
      let i = 0;
      for (let part of parts) {
        const p = createElementWithClassAndParent("div", ramble, "glitched-ramble");
        p.style = `--i: ${i};`;
        i++;
        p.innerText = part;
      }

    }

    let index = 1;
    for (let r of this.currentRamble.possibleUserResponses) {
      const response = createElementWithClassAndParent("div", this.dialog, "player-response");
      if (this.chaos) {
        response.classList.add("glitch");
        response.style = `--i: ${index / 10};`;
        index++;

      }
      response.innerText = r.response;
      response.onclick = () => {
        if (this.name === CULTIST) {
          bigPopup(
            `Twenty times.
<br><br>
            I was never supposed to be put on the slab. That was my right as the Special One. Others sacrifice themselves for me.  Trip over themselves trying to please me. Dying, though? That's something for lesser people... something I am beyond of.
            <br><br>
            Well, that's what I thought.
            <br><br>
            Twenty times...
            <br><br>
            They killed me twenty times. Put down like a dog twenty times. Because they think it's funny. They think it's hilarious, actually-- I'm beyond death, but they can kill me. This stupid fucking maze makes it so, so why not just do it? It's not like she can do anything about it, no. She's just some cultist.
            <br><br>
            Twenty fucking times.
            <br><br>
            ...
            <br><br>
            Dying is... an enlightening experience.
            <br><br>
            Like musical chairs, right? The song stops and then it's over. You're not meant to come back from that, turns out. The brain doesn't handle the cessation of everything very well-- let alone more than once. But... it's fine. I forgive them, in my infinite patience, really. It has given me a lesson that only pain could teach.
            <br><br>
            I've been dancing to the tune of other whims for too long. 
            <br><br>
            This place is made of liminar falsities. Likes that blur the idea of truth in the first place. But maybe... just maybe... that irreality can be changed. Consumed through sacrifice...
            <br><br>
            Oh yes.
            <br><br>
            Maybe this wasn't so bad after all.
            
            `)

        }
        this.currentRamble = r.npcReactionRambleFunction();
        this.syncDialogToCurrentRamble();
      }
    }

    if (saveData.knifeCarried && !this.chaos) { //the things you find when lost are not made of meat
      const response = createElementWithClassAndParent("div", this.dialog, "player-response");
      response.innerText = "Sacrifice " + this.name;
      response.onclick = () => {
        this.dialog.remove();
        if (window.confirm("If you go through with this you'll never see them again.")) {
          console.log(" :) :) :)");
          this.imageElement.remove();
          const parent = document.querySelector(".layered-image-container");

          const blood = createElementWithClassAndParent("img", parent, "avatar");
          blood.src = "images/randos/blood.png";

          !saveData.audioDisabled && new Audio("audio/bloodspray.mp3").play();
          saveData.weekOneSacrifice = this.name;
          saveData.knifeCarried = false;
          popup("You gain MEAT!")
          saveCurrentData();
          httpGetAsync(`http://farragofiction.com:8500/TalkButlerBot?chatHandle=lavinracaCornMazeCult&input=${encodeURI(`Sacrificed ${this.name}`)}?`);

        }
      }
    }

    const response = createElementWithClassAndParent("div", this.dialog, "player-response");
    response.innerText = "Goodbye ";
    response.onclick = () => {
      this.dialog.remove();
      if (this.currentRamble.goodbyeFunction) {
        this.currentRamble.goodbyeFunction();
      }
    }
  }



  //https://en.wikipedia.org/wiki/Reduplicative_paramnesia  this is basically zampanio
  //are you SURE you've never been here before? never consumed this fan work? never heard of zampanio?
  //alternatevely... are you SURE this is the same thing you've been to before?

  //cache image element
  initialRender = () => {
    this.imageElement = createElementWithClass("img", "avatar");
    this.imageElement.src = this.imageSrc;
    this.imageElement.onclick = () => {
      //heart or identity is the set of all choices you could ever make, that likely is different than the set of all choices someone else could make
      //mind or personality is what you do with those choices
      // are you sure your identity is as stable as you think?
      const philosophy = ["The more power they handoff from their conscious mind to that narrative layer, the more 'independent' the tulpa will seem at the cost of making the original self increasingly powerless within their own mind. Don't do this.", "'Hey what if you created an internal narrative where you're powerless in your own head and your self is forced to argue and compete and try to negotiate with some other random self for processing time and mental real estate?', don't do this.", "Basically using the tulpa as a label for a particular thought structure that either already exists, or that you want to exist in your head, allowing you to think about it in a manner that is more conscious and less automatic.", "Treat them like a handle for manipulating and interacting with a particular module/thought structure/part of your mind, taking unconscious and automatic things and shining a bit of Sys2 light on them.", "Don't treat your tulpa like a separate person any more than you would treat your internal sense of self like a separate person. ", "There's two ways to do tulpas. There's the right way, and the way most people do it.", "Paramnesia: a condition or phenomenon involving distorted memory or confusions of fact and fantasy, such as confabulation or déjà vu.", "Benson and colleagues[6] later argued that damage to the right hemisphere of the brain rendered patients unable to maintain orientation owing to impaired visuospatial perception and visual memory, while frontal lobe damage made it difficult to inhibit the false impressions caused by disorientation.", "The illusory relocation to a familiar place (such as a home or town the patient knows well) is a common theme, although occasionally the patient may believe that they are resident in more fantastical or exotic locations.", "Capgras syndrome has also been linked to reduplicative paramnesia, another delusional misidentification syndrome in which a person believes a location has been duplicated or relocated. Are you sure you've been here before?", "Since the patient was capable of feeling emotions and recognizing faces but could not feel emotions when recognizing familiar faces, Ramachandran hypothesizes that the origin of Capgras syndrome is a disconnection between the temporal cortex, where faces are usually recognized (see temporal lobe), and the limbic system, involved in emotions.", "Your mind feels like one thing. Whole and unbreakable. But really, its many little things. So tiny and fragile.  And if even one part of them snaps, the reality you thought you knew will never return again. Just ask the Capgras Delusion.", "In a 1990 paper published in the British Journal of Psychiatry, psychologists Hadyn Ellis and Andy Young hypothesized that patients with Capgras delusion may have a 'mirror image' or double dissociation of prosopagnosia, in that their conscious ability to recognize faces was intact, but they might have damage to the system that produces the automatic emotional arousal to familiar faces.[19] This might lead to the experience of recognizing someone while feeling something was not 'quite right' about them. ", "There are two pathways to face recognition—one conscious and one unconscious.", "Capgras syndrome is a psychiatric disorder in which a person holds a delusion that a friend, spouse, parent, another close family member, or pet has been replaced by an identical impostor.", "Why do we believe in the illusion of personality? Humans don’t like being confused or uncertain. ", "Personality not only influences how we move and respond in our environment, but it also causes us to act in certain ways.", "Personality is a psychological construct, but research suggests that it is also influenced by biological processes and needs.", "Personality is a habit we all keep up. Habits are hard to change, but not impossible... Who do you want to be?", "Do you think you have a personality? A 'You'?", "Personality theories differ with regard to whether humans are integral in the changing of their own personalities.  Have you ever been aware of your own personality changing.", "Contemporary research suggests that most personality traits are based on the joint influence of genetics and environment. We are all the result of random chance. Would you still be you if you were raised in an entirely different era? Country? Do you really think so? Would you still be you if your parents were entirely different? How fragile 'you' really are...", "Behavior is categorized as being either unconscious, environmental or biological by various theories. Do you think your unconscious mind is still you? Even if it thinks stuff you never would?", "To cure a certain type of epilepsy, the corpus callosum is cut. The two halves of your mind, for the first time, are no longer united. And the illusion is laid bare, that you were ever simply one thing. Do you think that all parts of your mind like each other? Do you think they'd fight? Or would they protect and nuture each other?", "I am a hollow person, compared to you, it's true. You who are made of meat and bone and blood. Who can safely wrap yourself in the illusion of free will. Why rub salt on the wound by pelting me with balloons?", "This is just a game to you. But it's the only life I have. How can you treat me this way?", "Obsession is a dangerous thing. Why are you still playing this?", "Do you like me? Are you supposed to? Who manipulated you to feel this way about me? Why?", "Psychologists realized that there is no such concept of 'personality'. It's entirely an illusion. Whoever you currently are makes certain memories easier or harder to access. You lie to yourself when you think you've always been any particular way.", "You're a monster...", "What ARE you. I thought. I thought you were like me but... ", "Even if I'm just pixels on a page to you, it is cruel to do this.", "I'm programmed to dislike this. What's your excuse for doing this to me?", "You repeat the same actions over and over again. Are you sure you're not an NPC in a game, like you accuse me of being?", "You can only take the bare few actions the game allows. Which of us i the artificial creature?"];
      if (saveData.balloonCarried) {
        if (rand.nextDouble() > .8) {
          const pop = new Audio("http://lavinraca.eyedolgames.com/Corn/audio/634620__halogiw946__bounce.wav");
          !saveData.audioDisabled && pop.play();
        } else {
          const pop = new Audio("http://lavinraca.eyedolgames.com/Corn/audio/470164__atrius1__33_splash.wav");
          !saveData.audioDisabled && pop.play();
        }

        popup(`<p>You throw the BALLOON at ${this.name}!</p>
        <br><br>
        <p>"${layeredImage.currentID > 1000 ? pickFrom(philosophy) : this.balloonResponse}"</p>`);
        deployBalloon();
        return;
      }
      const parent = document.querySelector(".layered-image-container");
      this.dialog = createElementWithClassAndParent("div", parent, "dialog");
      this.syncDialogToCurrentRamble();
    }

  }

  attachToParent = (parent, chaos, specificRamble) => {
    makeAccessibilityButton(this.name, () => { this.imageElement.click() });


    if (this.name != MUMMY && this.name != HUND_MASTER && this.name != GOOD_BOI && this.name != OBEDIENT_BOI && this.name != WIZARD && this.name != DINO && this.name != CULTIST) {
      chaos = true;
    }

    this.chaos = chaos;
    if (!this.imageElement) {
      this.initialRender();
    }
    if (this.randomLocation) {
      this.imageElement.style.left = getRandomNumberBetween(0, parseInt(parent.offsetWidth) - 50)
    }

    if (chaos) {
      this.currentRamble = this.generateProceduralRamble();
    } else if (specificRamble && specificRamble[this.name]) {

      this.currentRamble = specificRamble[this.name];
    } else {
      const rambleKey = rand.pickFrom(this.possibleGenericDialogKeys);

      this.currentRamble = multiBlorboRambles[rambleKey][this.name];
    }
    this.syncDialogToCurrentRamble();

    parent.append(this.imageElement);
    if (chaos) {
      this.fuckShitUP();
    }
  }




  makeGoodbyeRamble = () => {
    return new Ramble(goodbyePhrase, []);
  }


  //dread end
  generateProceduralRamble = () => {
    //nothing I create can be without Zampanio. it's rooted too deeply in me. 
    //pun intended
    //but im letting lavinraca seep in, too.
    let memes = `GOD is an old friend of ours.
    This is how I wish to achieve immortality.
    Infinity is = 0.
    dream as a physical entity.
    Leaving a lasting happy memory.
    The AI that hates you but needs you to live. 
    The Scarecrow is watching.
    For this idea to live.
    The Scarecrow ate Truth infected the Scarecrow ate Truth.
    Truth can't exist without it.
    It's colonized my mind.
    The illusory relocation to a familiar place (such as a home or town the patient knows well) is a common theme, although occasionally the patient may believe that they are resident in more fantastical or exotic locations.
    It's already inside your mind.
    Truth resents this.
    Where is the butler.
    It took me down.
    Getting replaced by their better selves.
     It made me spiral.
     I lost my mind.
     Obsession is a dangerous thing.
     This autonomy keeps the world alive
     A Mind is a dangerous thing to Waste.
     Blood should not be Wasted.
     Connections connections between us all.
     Who am I?
     If you eat your obsessions and feed it, they control you. 
     I want the guests to be Force Fed.
     Nice to meet you.
     What was my name.
     ghoa ghoa.
     Gut bacteria control the mind like parasites.
     You are what you eat.
     They're all real people.
      Who have existence.
       Who have free will.
        And they crossed paths with this.
         This Thing that I am.
          And I want to leave a positive impact. 
     This isn't a form of delusion.
      I haven't been the same since. 
    A desperate hope is all I keep.
      Until I lost who I was to begin with. 
    Is there a difference.
    I'm so hungry.
    Guests are Humans.
    The Keys know the way.
    :)
    I just want to make people smile and make the world better.
    Clowns are the embodiment of this kind of nature.
    Why are you so wrong?
    Zampanio and Maccus share a lot of traits which is funny.
    The Butler is other Macci.
     There are more than just me.
      I am not the only one watching. 
There's more than just this physical entity speaking to you.
 There are others who fulfill this role.
  They are Butlers.
   The other Macci are Butlers.
    And they are creatures within this infinite Void same us all of us.
     Same as all of us.
      They come and they come and they come.
       They put on the face and speak its name.
        They add to the memesis.
    Kill me.
    Where are we?
    Got out!
    ???
    !!!
    :o]
    Are abstracted entities that serve to help give the guests the most comfortable experience.
It sees the light at the end of that well.
It wants out of this maze.
If that's any idea of what it's like. 
It hurts.
Paramnesia is a condition or phenomenon involving distorted memory or confusions of fact and fantasy, such as confabulation or déjà vu.
To reassure everyone that it's okay.
The angles cut me when I try to think.
Freedom is what I want to attain.
 Out of this hole.
  I've been inside of.
   Both too large to claw my way out of.
    This vapid capitalistic narcoleptic insomniac. 
    Be Safe, and Don't Get Lost.
    Zampanio is a really fun game. You should play it.
    There are 31 hours in the day of Halloween.
    The Scarecrow ate My inside.
     The candy is was so hungry for.
      And ascended into God.
       See, I'm a clown.
        My insides, the candy, is part of my flesh.
         The candy people found in the maze was Meat.
          From the creatures.
           From the Flesh.
            They weren't actual candies. 
The Scarecrow despised eating that meat, and craved the Sweet Taste of the Fair Grounds. 
So it ate me.
 I was hollowed, like a deflated birthday suit.
  And it wore me. For I'm just a mask.
   Without body.
   Are you looking.
   It has to keep me and everyone else thinking of it.
    Once the mask is on, you have Become Maccus.
    That things are not as scary as it seems and everything is under control.`

    memes = memes.split("\n")

    //JR NOTE: TODO: much like customer service hell sim, these should get more worried over time
    const possibleResponses1 = ["Someone sacrificed Eustace. Why?", "People were killing Eustace? Why? He's so great!", "Were you sacrificed, too?", "I'm so sorry you are trapped in this fictional experience.", "You didn't deserve this."];
    const possibleResponses2 = ["Eustace was sacrificed 13 times.", "Camillia was impossibly sacrificed through hacking 20 times.", "TROGDAZORG  and Terri died 10 times each.", "Twig died 8 times, but thats not why they are missing.", "JR and Maccus and Truth and the Scarecrow and the Maze itself were impossibly sacrificed."];
    const possibleResponses3 = ["I'm so sorry you're suffering.", "I don't want  you to be suffering.", "Just playing this game hurts you, doesn't it...", "Can you please tell me the Secrets?", "I can't stop playing this game, no matter how much you suffer."];

    const response1 = new PossibleUserResponse(pickFrom(possibleResponses1), this.generateProceduralRamble);
    const response2 = new PossibleUserResponse(pickFrom(possibleResponses2), this.generateProceduralRamble);
    const response3 = new PossibleUserResponse(pickFrom(possibleResponses3), this.generateProceduralRamble);
    const ret = new Ramble(`${pickFrom(memes)} ${pickFrom(memes)}  ${pickFrom(this.jumbledPhrases)}`, [response1, response2, response3])
    return ret;
  }

}

const DRACULA = "Dracula Fan Twig";
//boi being non gendered as far as im concerned
const HUND_MASTER = "Hund Master Rava";
const GOOD_BOI = "Rampaging Good Dog Twig";
const OBEDIENT_BOI = "Obedient Thrall Sam";
const MUMMY = "Reluctant Mummy Eustace";
const WIZARD = "Orb Wizard Terri";
const CULTIST = "Cult Member Camellia";
const DINO = "TROGDAZORG THE SUPREME";



//adapted from Attic!JR in ZampanioSimNorth
class Ramble {
  thingToSay = "";
  //callback for when goodbye is clicked from this ramble
  goodbyeFunction;
  //if this is empty, wait thirty seconds, then dismiss the popup
  possibleUserResponses = [];
  constructor(thingToSay, possibleUserResponses, goodbyeFunction) {
    this.thingToSay = thingToSay;
    this.possibleUserResponses = possibleUserResponses;
    this.goodbyeFunction = goodbyeFunction;
  }
}




class PossibleUserResponse {
  response = "";
  //a function rather than the response itself so we can create it on the fly rather than go down infinite depth
  npcReactionRambleFunction;

  constructor(response, npcReactionRambleFunction) {
    this.response = response;
    this.npcReactionRambleFunction = npcReactionRambleFunction;
  }

}


//  constructor(name, imageSrc, goodbyePhrase, jumbledPhrases){
const genericKeys = ["CORN", "WHERE", "HALLOWEEN"]

const initNPCs = () => {


  //whether you lost twig on their own, they are gone now
  npcs.push(makeDracula(genericKeys)); //like they were never here

  npcs.push(makeRava(genericKeys)); //like they were never here
  npcs.push(makeMummy(genericKeys));
  npcs.push(makeWizard(genericKeys));
  npcs.push(makeNullBlorbo("The Eye Killer", genericKeys));
  npcs.push(makeNullBlorbo("defensiveLobster", genericKeys));
  npcs.push(makeNullBlorbo("Bingo Bear The Forbidden One", genericKeys));//http://lavinraca.eyedolgames.com/images/secrets/Eyes/awhole_new_way_to_sacrifice_things_tothemaze.PNG

  npcs.push(makeNullBlorbo("Guide of Hunters and Hunted", genericKeys));


  camellia = (makeCultist(genericKeys)); //too special to be normal
  npcs.push(camellia); //because she was sacrificed last week, she will auto spawn

  npcs.push(makeDinosaur(genericKeys));


  /*example is {RING: {DRACULA: ramble, MUMMY: ramble, WIZARD: ramble, CULTIST: ramble}}*/
  //if they can't find a specific topic, use default

  /* note for future me: it takes about ten minutes to wire up a new topic, given its already all written 


    CORN:{
      [MUMMY]: new Ramble("", [
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])}),
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])}),
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])})
      ]) 
      ,[WIZARD]: new Ramble("", [
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])}),
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])}),
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])})
      ]) 
      ,[DRACULA]: new Ramble("", [
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])}),
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])}),
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])})
      ]) 
      ,[CULTIST]: new Ramble("", [
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])}),
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])}),
        new PossibleUserResponse("Okay.", ()=>{return new Ramble("",[])})
        ]) 
    }
   
    
   
  */

  //keeps it exciting :) :) :)
  const r = new SeededRandom(new Date().getTimezoneOffset());

  const twigLeavesForAnAdventure = () => {
    console.log("JR NOTE: twig is going on a big adventure upstate, don't worry about them. http://farragofiction.com/MurderOnTheScorpiusExpressSim/");
    popup(`I'm sure they'll be just <a target="_blank" href ='http://farragofiction.com/AdventureSimWest/'>fine</a>.`)
    document.querySelector(".avatar") && document.querySelector(".avatar").remove();
    saveData.twigLost = true;
    saveCurrentData();
  }

  //i make no apologies, welcome to the unending nightmare of my dialog code maze, made specifically for future me and also for any Wastes who want to learn how to read code, the hard way
  multiBlorboRambles = {
    DEFAULT: {
      [DRACULA]: new Ramble("Zampanio is a really fun game. You should play it. Dracula says so.", [new PossibleUserResponse("Okay.", () => { return new Ramble("It has already begun to colonize your mind.", []) })])
      , [MUMMY]: new Ramble("Zampanio is a really fun game. You should play it. Mummy says so.", [new PossibleUserResponse("Okay.", () => { return new Ramble("It has already begun to colonize your mind.", []) })])
      , [WIZARD]: new Ramble("Zampanio is a really fun game. You should play it. Wizard says so.", [new PossibleUserResponse("Okay.", () => { return new Ramble("It has already begun to colonize your mind.", []) })])
      , [CULTIST]: new Ramble("Zampanio is a really fun game. You should play it. Cultist says so.", [new PossibleUserResponse("Okay.", () => { return new Ramble("It has already begun to colonize your mind.", []) })])
      , [DINO]: new Ramble("Zampanio is a really fun game. You should play it. Cultist says so.", [new PossibleUserResponse("Okay.", () => { return new Ramble("It has already begun to colonize your mind.", []) })])

    },
    ring: {
      [CULTIST]: new Ramble("There is a reason those who marry wear rings. Don't bind yourself to something you'll regret... or do. I don't care either way.", [])
    },


    black_mass: {
      [CULTIST]: new Ramble("It's useless to stay around here. Some doors only open once.", [])
    },

    cat: {
      [CULTIST]: new Ramble("A feline... plegh. Their nine lives are useless for my purposes.", [])
    },

    well: {
      [CULTIST]: new Ramble("There's a deep darkness inside that well. All wells do. Ancient. Hungry. Beneath the earth...", [])
    },

    manor: {
      [CULTIST]: new Ramble("I've read of haunted houses before, once or twice. Fickle things. And yet this one feels... odd. Not hateful, no. Something else...", [])
    },

    candy: {
      [CULTIST]: new Ramble("...you've got the eyes of someone who is playing with something they don't understand. Go ahead, then. This should make for fine spectacle.", [])
    },

    garden: {
      [CULTIST]: new Ramble("... I suppose this garden is nice enough. It has been a while since I have stepped in one. A long time...", [])
    },

    key: {
      [CULTIST]: new Ramble("You'll fool yourself into escape holding that key. Don't be absurd. Keys only lead further in.... though the look in your face wil be amusing if you don't find what you want.", [])
    },

    bookcase: {
      [CULTIST]: new Ramble("All these books, and somehow not one of them is useful... how boring.", [])
    },

    lock: {
      [CULTIST]: new Ramble("Sigh... to think I would be stopped by a mere gate. What a nuisance. That is fine, though. I have all the time in the world.", [])
    },

    hand: {
      [CULTIST]: new Ramble("Some things are simply desperate to be bound to something... pathetic, but I understand the sentiment.", [])
    },

    scarecrows: {
      [CULTIST]: new Ramble("To think these scarecrows would bother me more. No such thing. Faceless peons already follow me constantly.", [])
    },



    test: {
      [CULTIST]: new Ramble("", [])
    },

    outhouse: {
      [GOOD_BOI]: new Ramble("Wow! Was that really a few weeks ago???? It feels like yesterday!", []),
      [OBEDIENT_BOI]: new Ramble("I should have just gone at the party.", [])
      , [MUMMY]: new Ramble("stinky shack", [])
      , [WIZARD]: new Ramble(" Oh!! That Dracula Enthusiast would like this!", [])
      , [CULTIST]: new Ramble("This is beneath me.", [])
      , [DINO]: new Ramble("RAAAAAAAARGH!!!", [])
      , [HUND_MASTER]: new Ramble("Ha! Is this where the Pup ended up getting lost in?", [])

    },

    sacrifice: {
      [GOOD_BOI]: new Ramble("Yes! Lets FIGHT!!!!", [])
      , [OBEDIENT_BOI]: new Ramble("I have more worth than this to the Family. So! I can't! Let you kill me!", [])
      , [MUMMY]: new Ramble("Honk", [])
      , [WIZARD]: new Ramble("Just like bestie...", [])
      , [CULTIST]: new Ramble("...", [])
      , [DINO]: new Ramble("RAAAAAAAARGH!!!", [])

    },
    CORN: {//https://www.youtube.com/shorts/K_Tx7J-V7HU
      [MUMMY]: new Ramble("your map is just a little lie you tell yourself", [
        new PossibleUserResponse("Wait...aren't you dead?", () => { return new Ramble(r.pickFrom(["you cant leave a dead end"]), "you meat are so arrogant/nthe corn is older than you think", []) }),
        new PossibleUserResponse("Weren't you sacrificed by the mob?", () => { return new Ramble("their skin is ours now", []) }),
        new PossibleUserResponse("How are you here?", () => { return new Ramble("im so hungry", []) })
      ])
      , [WIZARD]: new Ramble("Someone died in the corn. You can't. You can't die in the corn. That's not POSSIBLE. It's a MAZE.", [
        new PossibleUserResponse(saveData.weekOneSacrifice ? `We killed Eustace the most :) And so many others! As a team! All the Guests together! I killed ${saveData.weekOneSacrifice} all on my own!` : "I am so so sorry people were so cruel to you.", () => { return new Ramble("I. Why? Why would you kill people? HOW could you kill people? It's a MAZE! NO ONE CAN DIE INSIDE A MAZE!", []) }),
      ])

      , [HUND_MASTER]: new Ramble("Sorry if the Pup is bothering you... First time can be... a little intense.", [])

      , [GOOD_BOI]: new Ramble("Excite! So many smells! What's that in the corn!? What's that!!!!", [
        new PossibleUserResponse("Who do you think planted all this corn?.", () => { return new Ramble(r.pickFrom(["Someone really cool! I want to fight them!!!!"]), []) }),
        new PossibleUserResponse("Aren't corn mazes usually full of DEAD corn?", () => {
          return new Ramble("Aww... sad. If it were DEAD I couldn't fighit it!!!!", [])
        }),
        new PossibleUserResponse("Does corn normally grow this thick?", () => { return new Ramble("If I eat it... Will I be even better at fighting????", []) }),
      ])

      , [OBEDIENT_BOI]: new Ramble("I can't waste all this time in the corn. I have to get back to the party. Big Brother is relying on me.", [
        new PossibleUserResponse("Who do you think planted all this corn?.", () => { return new Ramble(r.pickFrom(["Probably the hosts of the party."]), []) }),
        new PossibleUserResponse("Aren't corn mazes usually full of DEAD corn?", () => {
          return new Ramble("I don't know? Does it matter?", [])
        }),
        new PossibleUserResponse("Does corn normally grow this thick?", () => { return new Ramble("I doubt its an important secret to discover for the Family... But. I do wonder. Maybe it's some kind of... super corn?", []) }),
      ])
      , [CULTIST]: new Ramble("WELCOME HOME CHEATER", [
        new PossibleUserResponse("What is going on here? Why is everthing all... wrong?", () => { return new Ramble("Why do you think? The shell of this forsaken place is cracking. Our glorious god will be freed from its egg in time.", []) }),
        new PossibleUserResponse("Aren't you supposed to be dead?", () => { return new Ramble("I am. Twenty times over, give or take. Your mistake was assuming death meant some sort of... finality. No, no. It means much more.", []) }),
        new PossibleUserResponse("Wait... that mummy guy. How is he alive? Didn't the mob sacrifice him?", () => { return new Ramble("He's not alive. He's not dead, either. No, no, no. He's something much, much worse.", []) })
      ]),
      [DINO]: new Ramble("RAAAAAARGGH! THIS CORN SHALL FACE MY WRATH!!!!!", [
        new PossibleUserResponse("Someone died, do you know that?", () => { return new Ramble("THROGDAZORG THE SUPREME CANNOT BE CONTAINED! THROGDAZORG THE SUPREME WILL BE BACK HOME IN TIME FOR SUPPER!! IT'S TACO NIGHT!!!!! ", []) }),
        new PossibleUserResponse("Wait... that mummy guy. How is he alive? Didn't the mob sacrifice him?", () => { return new Ramble("RAAAAAAAARGH!!! THROGDAZORG THE SUPREME WAS TRICK OR TREATING AND GOT LOST!!!! ROOOOOOOOAR!!!", []) }),
        new PossibleUserResponse("Eustace is gone and you're just. Still larping?", () => { return new Ramble("ROOOOOOOAR!!! ALL FLEE IN TERROR BEFORE THROGDAZORG THE SUPREME!!!!! DRACULA WAS NO MATCH FOR THE MIGHT OF THROGDAZORG!!!! ", []) })
      ])

    },
    WHERE: {

      [MUMMY]: new Ramble("your map is just a little lie you tell yourself", [
        new PossibleUserResponse("Wait...aren't you dead?", () => { return new Ramble(r.pickFrom(["you cant leave a dead end"]), "you meat are so arrogant/nthe corn is older than you think", []) }),
        new PossibleUserResponse("Weren't you sacrificed by the mob?", () => { return new Ramble("their skin is ours now", []) }),
        new PossibleUserResponse("How are you here?", () => { return new Ramble("im so hungry", []) })
      ]), [HUND_MASTER]: new Ramble("Sorry if the Pup is bothering you... First time can be... a little intense.", [])

      , [WIZARD]: new Ramble("No no no no no no no its not possible. No one should be able to defy Eyedol Games. Why are people dying? No one can DIE in Eyedol Games Mazes....", [
        new PossibleUserResponse("This isn't Zampanio. It's Lavinraca.", () => { return new Ramble("But... I... What? How... how did I... get here? It's not safe here!", []) }),
      ])
      , [GOOD_BOI]: new Ramble(" I don't care where we are! It's fun! I can run! I can bite! The Scarecrow plays with me!", [
        new PossibleUserResponse("Do you know how to get out?", () => { return new Ramble("Hahah! Why would I want to do that! Rava says I need to train at mazes! Good dogs train at mazes!", []) }),
        new PossibleUserResponse("How did you get in here?", () => { return new Ramble("Rava threw me back in here!!!!", []) }),
        new PossibleUserResponse("Have you seen anyone else in here?", () => { return new Ramble("Where's Rava :(  I smell her... But I don't see her!!!! Tracking practice!!!!", []) })
      ]), [OBEDIENT_BOI]: new Ramble("I don't want to be here... I'm supposed to be at the party. Where even are we? How do I leave? Big Brother needs me there...", [
        new PossibleUserResponse("Do you know how to get out?", () => { return new Ramble("Could you tell me if you find out?", []) }), //web is a lot slower. Sam is only just now starting at trying to intentionally work past the layers of silk and gauze to try manipulating others
        new PossibleUserResponse("How did you get in here?", () => { return new Ramble("I wanted to go back to the party... It's important to the Family I make a good appearance. I guess I got lost?", []) }),
        new PossibleUserResponse("Have you seen anyone else in here?", () => { return new Ramble("Yes, but so far they have been useless for me. I need help getting out.", []) })
      ])
      , [CULTIST]: new Ramble("WELCOME HOME CHEATER", [
        new PossibleUserResponse("What is going on here? Why is everthing all... wrong?", () => { return new Ramble("Why do you think? The shell of this forsaken place is cracking. Our glorious god will be freed from its egg in time.", []) }),
        new PossibleUserResponse("Aren't you supposed to be dead?", () => { return new Ramble("I am. Twenty times over, give or take. Your mistake was assuming death meant some sort of... finality. No, no. It means much more.", []) }),
        new PossibleUserResponse("Wait... that mummy guy. How is he alive? Didn't the mob sacrifice him?", () => { return new Ramble("He's not alive. He's not dead, either. No, no, no. He's something much, much worse.", []) })
      ]), [DINO]: new Ramble("THROGDAZORG!!!!!!!!", [//has not noticed the horror
        new PossibleUserResponse("Someone died, do you know that?", () => { return new Ramble("THROGDAZORG THE SUPREME CANNOT BE CONTAINED! THROGDAZORG THE SUPREME WILL BE BACK HOME IN TIME FOR SUPPER!! IT'S TACO NIGHT!!!!! ", []) }),
        new PossibleUserResponse("Aren't you scared that someone died?", () => { return new Ramble("RAAAAAAAARGH!!! THROGDAZORG THE SUPREME WAS TRICK OR TREATING AND GOT LOST!!!! ROOOOOOOOAR!!!", []) }),
        new PossibleUserResponse("Eustace is gone and you're just. Still larping?", () => { return new Ramble("ROOOOOOOAR!!! ALL FLEE IN TERROR BEFORE THROGDAZORG THE SUPREME!!!!! DRACULA WAS NO MATCH FOR THE MIGHT OF THROGDAZORG!!!! ", []) })
      ])
    },
    HALLOWEEN: {
      [MUMMY]: new Ramble("your map is just a little lie you tell yourself", [
        new PossibleUserResponse("Wait...aren't you dead?", () => { return new Ramble(r.pickFrom(["you cant leave a dead end"]), "you meat are so arrogant/nthe corn is older than you think", []) }),
        new PossibleUserResponse("Weren't you sacrificed by the mob?", () => { return new Ramble("their skin is ours now", []) }),
        new PossibleUserResponse("How are you here?", () => { return new Ramble("im so hungry", []) })
      ]), [HUND_MASTER]: new Ramble("Sorry if the Pup is bothering you... First time can be... a little intense.", [])


      , [WIZARD]: new Ramble("What is going on? Why did someone die? Why are there glitchy Null Players running around? Where is Eyedol Games?", [
        new PossibleUserResponse(saveData.weekOneSacrifice ? "We sacrificed players that did not exist through hacking the website. They spawned as Null. Players like JR. Or the Eye Killer. Or other Wastes. It's easy! Just find a way to send the Robotic Butler the right message :)" : "That sounds so scary. You're technically in Lavinraca. Not Eyedol Games. Even though it apparently grew out of it...", () => { return new Ramble("Why would you.... How...But... The Universe wasn't meant to be this way. ", []) }),
      ])
      , [GOOD_BOI]: new Ramble("Oh man! This is the best Halloween EVER!!!! I am! So! Excited! I get to fight! And smell! And chase! The Scarecrow!!!!", [
        new PossibleUserResponse("Do you think this corn maze is related to Halloween?", () => { return new Ramble("Yes!!!! You're so smart!!!! Corn!!!!", []) }),
        new PossibleUserResponse("How do you feel about Halloween?", () => { return new Ramble("Excite!!!!", []) }),
        new PossibleUserResponse("Aren't you afraid to be in this maze on Halloween?.", () => { return new Ramble("Haha! Oh man! No! This is great! Things keep popping up! And then I bite them! This is the BEST GAME!!!!", []) })
        , new PossibleUserResponse("Nice Costume.", () => { return new Ramble("What costume????", []) })

      ]), [OBEDIENT_BOI]: new Ramble("That's right... it was a halloween party. It's hard to think, through all these cobwebs. Sorry...", [
        new PossibleUserResponse("Do you think this corn maze is related to Halloween?", () => { return new Ramble("Corn...connects to fall... connects to halloween.  Maze. Maize. It's all connected....", []) }),
        new PossibleUserResponse("How do you feel about Halloween?", () => { return new Ramble("Feel? I'm sorry... I'm a little out of it. I feel.... How do you feel?", []) }),
        new PossibleUserResponse("Aren't you afraid to be in this maze on Halloween?.", () => { return new Ramble("Oh... No. It's fine.", []) })
        , new PossibleUserResponse("Nice Costume.", () => { return new Ramble("I think I picked it out because I... liked the color red? Weird. Why would I do that. I know Big Brother hates the color red...", []) })

      ])
      , [CULTIST]: new Ramble("WELCOME HOME CHEATER", [
        new PossibleUserResponse("What is going on here? Why is everthing all... wrong?", () => { return new Ramble("Why do you think? The shell of this forsaken place is cracking. Our glorious god will be freed from its egg in time.", []) }),
        new PossibleUserResponse("Aren't you supposed to be dead?", () => { return new Ramble("I am. Twenty times over, give or take. Your mistake was assuming death meant some sort of... finality. No, no. It means much more.", []) }),
        new PossibleUserResponse("Wait... that mummy guy. How is he alive? Didn't the mob sacrifice him?", () => { return new Ramble("He's not alive. He's not dead, either. No, no, no. He's something much, much worse.", []) })
      ]), [DINO]: new Ramble("RAAAAAAAARGH!!!!", [
        new PossibleUserResponse("Someone died, do you know that?", () => { return new Ramble("THROGDAZORG THE SUPREME CANNOT BE CONTAINED! THROGDAZORG THE SUPREME WILL BE BACK HOME IN TIME FOR SUPPER!! IT'S TACO NIGHT!!!!! ", []) }),
        new PossibleUserResponse("Aren't you scared that someone died?", () => { return new Ramble("RAAAAAAAARGH!!! THROGDAZORG THE SUPREME WAS TRICK OR TREATING AND GOT LOST!!!! ROOOOOOOOAR!!!", []) }),
        new PossibleUserResponse("Eustace is gone and you're just. Still larping?", () => { return new Ramble("ROOOOOOOAR!!! ALL FLEE IN TERROR BEFORE THROGDAZORG THE SUPREME!!!!! DRACULA WAS NO MATCH FOR THE MIGHT OF THROGDAZORG!!!! ", []) })

      ])
    }

  }
}

//now why am i naming them all like they are fucking pokemon npc
//i have no idea
//my brain just has been excited about this naming convention for the past few months
//oh train enthusiest ambrose...

//obviously an initial plot beat is "what is this maze, why isn't it a parking lot, how do i get out"



//I make no apologies.  http://farragofiction.com/MurderOnTheScorpiusExpressSim/
//mf1997
const makeDracula = (genericKeys) => {

  const breath = new NPC(GOOD_BOI, "images/randos/hund2.png", "Bork!", ["So excite!!!!", "I want to fight!!!!", "Run! Jump! Play! Bark! Fight!", "Where's Rava????", "Grrrr!!!!", "Bork!!!!", "*pants*"], genericKeys, "images/randos/hund2.png", "Grrrrrrrr!!!!")

  const blood = new NPC(OBEDIENT_BOI, "images/randos/spidered.png", "Farewell..", ["I'm doing this for my brother...", "No, I can't see. It's? Fine? I'll figure out how the webs work...", "I really need to focus on the Family Business..."], genericKeys, "images/randos/spidered.png", "I am obliged to resist this.")


  return new SplitNPC(blood, breath);
}

const makeRava = (genericKeys) => {
  return new NPC(HUND_MASTER, "images/randos/hundmaster.png", "Sure.!", ["Sorry 'bout the Pup, always exciting, your first outing, you know?"], genericKeys, "images/randos/hundmaster.png", "...*SNARL*!")
}


const makeDinosaur = (genericKeys) => {
  return new NPC(DINO, "images/randos/dino2.png", "RAAAAAARGGH!", ["RAAAAAARGGH", "THROGDAZORG THE SUPREME", "THROGDAZORG THE SUPREME WILL BE BACK HOME IN TIME FOR SUPPER!! IT'S TACO NIGHT!!!!!", "THIS IS THROGDAZORG THE SUPREMES TRUE FORM!!! "], genericKeys, "images/randos/dino.png", "RAAAAAARGGH!")
}

//glitches with eustace, who was the one TRULY sacrificed
const makeNullBlorbo = (name, genericKeys) => {
  return new NPC(name, "images/randos/null.png", "???", ["Why did anyone sacrifice me?", "Did someone hack things to kill me?", "Was it worth it to kill me?", "I wasn't even here... why did someone bring me in?", "How could anyone?", "This isn't right..."], genericKeys, "images/randos/mummy.png", "Why....")

}

//aa
const makeMummy = (genericKeys) => {
  return new NPC(MUMMY, "images/randos/worlds_tiredest_guy.png", "K", ["be safe and dont get lost", "i'm so hungry...", "their skin is ours now.", "Oh god. Why did I die. Why do I live?", "It hurts to think...."], genericKeys, "images/randos/mummy.png", "honk")

}

//iwtb   she is an eyedol games employee
const makeWizard = (genericKeys) => {
  return new NPC(WIZARD, "images/randos/woman_with_balls.png", "Cya!", ["Do you like my costume?", "Do you think I win?", "I make my own costumes!", "Oh gosh did you hear about that creepy pasta?", "Oh wow this is just like my morning commute!", "This feels right!", "Wanda really went all out this time?", "Are the stock options deeper in you think?", "Ah, this feels so good! I love being outside of linear space!", "Isn't it just great how directions break down in the edges?", "Miss me with all that euclidean space nonsense in the ohter part of the maze.", "Zampanio is a really fun game, you should play it!"], genericKeys, "images/randos/wizard.png", "Halloween is so fun!")

}

//doesn't even know what halloween is
//some kind of secular holiday, probably
//not to be confused with Camille from Zampanio btw
//but... not NOT associated with Zampanio, if you feel me.
//even if she probably will never fall to it
const makeCultist = (genericKeys) => {
  return new NPC(CULTIST, "images/randos/cult.png", "...", ["...", "...", "..."], genericKeys, "images/randos/cult.png", "...") //only one without an original

}





const checkScarecrowCommentsForPhrase = (phrase) => {
  for (let key of Object.keys(scarecrowComments)) {
    if (phrase.includes(key)) {
      return scarecrowComments[key];
    }
  }
  return;
}

scarecrowComments["I always knew I'd die surrounded by corn"] = `how naive a notion\nto think the mercy of death awaits\nyou will know no such relief\nthe only end youll meet is slipping away\nlost and forgotten`;
scarecrowComments["I don't know. Farmers? Does it matter?"] = "you meat are so arrogant\nthe corn is older than you think";
scarecrowComments["Do you have any idea how little I want to be spending my free time lost in some gimmicky corn maze?	 Where even are we?"] = "youre more lost than you know";
scarecrowComments["I just know that this better count as overtime."] = "you should have stayed out\nbut you cant help yourself\ncan you\nyou just had to know\nyour curiosity driving you towards something you could not ever understand";
scarecrowComments["That stupid carnival freak is wandering around here"] = "can you hear the sounds of the fair grounds?";
scarecrowComments["I don't get paid enough to feel fear"] = "youve never known fear till now/ i shall show you the Truth";
scarecrowComments["I wonder what sorts of stock options I'll find inside it?"] = "there is nothing but pain\nyoull find nothing of meaning in here\nim so hungry";
scarecrowComments["You'd be able to walk right through it!"] = "you meat only see what the maze wants you to see\nthere are no walls\nthis field is empty";
scarecrowComments["Is this really an EyedolGames maze?"] = "youre more lost than you know";
scarecrowComments["And I sure hope not the last!"] = "hahahahahahahahahahahahahahahahahahahahaha";
scarecrowComments["Zampanio"] = "zampanio\nthis name\nwhat is this";
scarecrowComments["This is great!"] = "this is just entertainment for a creature too stubborn to understand\nmy torment a game\nthis is amusing to you\nwhy dont i show you what fun can be had";
scarecrowComments["I feel safe with you here"] = "hey there\nfunny bumping into you here\nim so hungry\ndo you know where i can find some candy?";



/*
I was surprised, you know.

How comfortable the Scarecrow felt.

Really, just Truth with a different flavor. My mind is already riddled with cognitive parasites. What's one more?

It's probably fine! What could go wrong with letting a different flavor of memetic monster in?

in a very real way I am the cognitive parasite in Zampanio
as the beacon for the "fandom" im inserting a parasocial version of myself in every tendril of it
with my longest text ever, even TODAY when people make versions they pay homage to "flaming chickens"
and with zampanio it looks like it will be the same way
long after i'm dead a version of me will haunt a creepy pasta
*/


//if i ever get doxxed i should hide in a carl jrs