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


  GodOfBeingServed = () => {
    const body = document.querySelector("body");
    body.append(truthEle)
    body.innerHTML = "";
    const parent = createElementWithClassAndParent("div", body, "video-parent");
    const shop = createElementWithClassAndParent("div", parent, "shop");
    harvest = createElementWithClassAndParent("img", shop, "harvest");
    harvest.src = default_harvest;
    harvest.id = "harvest";
    bgMusic.src ="http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/NORTH/NORTH/NORTH/audio/music/get_it_because_pipe_organ.mp3";
    bgMusic.play();
    //you can feed the harvest fish, carrots and ram (its the scarecrow in her, so hungry) (feed her all your firefox ram)
    //oh god she's stealing the firefox ram for minecraft
    //caroot is sad face, vegan for only one day, did not enjoy, eustace hates teh corn
    //TODO buttons underneath for raising all of her emotions and also feeding her a lil carrot or a lil fish or a lil ram
    const buttonHolder = createElementWithClassAndParent("div", parent, "god-dialog-button-holder");

    
    //lowers compassion, lowers curious, raises energy, raises happy (reminds her of the Sacrifice that created her but also nourishes the scarecrow within (upsetting))
    const meatButton = createElementWithClassAndParent("button", buttonHolder);
    meatButton.innerText = "Feed Her Meat";

    //raises energy, lowers curious (what ARE fish, what is the ocean??? all she knows is corn) 
    const fishButton = createElementWithClassAndParent("button", buttonHolder);
    fishButton.innerText = "Feed Her Fish";

    //lowers compassion, raises curioius (she tried out veganism but did not like it, still, trying new things is interesting)
    const carrotButton = createElementWithClassAndParent("button", buttonHolder);
    carrotButton.innerText = "Feed Her Carrots";

    //GREATLY raises energy and happiness, lowers pride (she shouldn't need this but she craves it so much. )
    const ramButton = createElementWithClassAndParent("button", buttonHolder);
    ramButton.innerText = "Feed Her Ram";




    //GREATLY raises pride,slightly raises happiness,  at the expense of everything else
    const happyButton = createElementWithClassAndParent("button", buttonHolder);
    happyButton.innerText = "Praise Her";


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