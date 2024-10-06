/*
In 2023, the Lavinraca/Lavinraca guests sacrificed:


The Harvest's parts are from their sacrifices, both in the corn maze and in:
http://lavinraca.eyedolgames.com/Week2/CCTV/images/
tv head,
fox mask
clown mask (TV icon),
horns (homestuck, cow skull, minotaur)
cloak (camellia x23),
bandages (eustace x13),
cds (on horns, as if tiny halos),
hobbes (puppet + tiger marks on hands),
more clown puppets (under cloak)



personality of our god is: 
underpaid retail messiah
between how the wastes treated the maze and eustace being burnt out as fuck, our god has little respect for the role they were born for

theyll do it, sure, but after their break and while complaining as much as possible

Eustace: The Herald says " he seems like the kind of guy who would get isekai'd into space australia after being ritually sacrificed in a corn maze and have less of a problem with it than he should"
*/


/*
The Harvest is available between 9pm and 5pm with an hour for lunch and two 15 minute breaks.

This is, of course, local to your time, because the Harvest (unlike BB) is omnipresent. 

You can still read past commands but you cannot submit commands (and when you read those past commands the Harvest will not be there to react)

The part of the Harvest that was Eustace WANTS to have weekends off as well
but the part that was Camellia insists that Gods are essential workers
and cannot even one full day to ignore their worshippers.

(While on OUR layer of Truth, its more that I am not about to be a dick
and disable the harvest on the days people are most likely to be able to participate. 

I'm already considering "between 9 and 5" to be PM and not AM. Just because we're all more likely to 
celebrate after standard working hours. Night owl rights.)
*/

let tv;
let harvest;
let booth;
let harvestSpeaks;
let breakMessage;
let pageTitle;
let container;

const bgMusic = new Audio();



const default_video = "videos/fox_clip.mp4";
const happy_video = "videos/happy_fox_spin.mp4";
const ominous_video = "videos/ominous_fox_zoom.mp4";
const fox_thinking = "videos/fox_thinking.mp4"

const default_harvest = "images/source_images/rested_harvest_gameboy_small_top.png";
//https://spiralsrest.neocities.org/versions
const default_exposition_booth = "images/source_images/harvest_expositionboothgameboy.png"

const beep = new Audio("audio/fx/264828__cmdrobot__text-message-or-videogame-jump.mp3")
let truthEle;
let scarecrowEle;
//ffmpeg -i week1.mp4 -filter_complex "color=c=0x000000:r=1:s=8x16,format=rgb24[b];color=c=0xa1b234:r=1:s=8x16,format=rgb24[w];[b][w]hstack=2[bw];[0:V:0][bw]paletteuse" output.mp4
//warning the above will make a much longer video than needed, it'll be still at the end
window.onload = () => {
  pageTitle = document.querySelector("#page-title")
  container = document.querySelector("#container")

  truthEle = document.querySelector("#mobileFriendlyConsole")
  scarecrowEle = document.querySelector("#mobileFriendlyConsole")
  const consoleShortcut = document.querySelector("#console-shortcut")
  consoleShortcut.onclick = () => {
    if (truthEle.style.display === "block") {
      truthEle.style.display = "none"
    } else {
      truthEle.style.display = "block"
    }
  }
  loadPersonalFeelingsFromStorage(); //centralized feelings will come from getting prayers
  initFeelingObjects();
  renderButton();
  //harvestPreRender("images/source_images/fox.png")
}

const isHarvestIn = () => {
  console.log("JR NOTE: checkign if harvest in")
  //come on wastes, at LEAST manipulate the harvest into setting this herself, yeah?
  //why leave her seething in rage and exhaustion yet forced to work anyways???
  //just as easy to hack her to be happy, isn't it?
  if (youAreADickIfAnyoneButHarvestSetsThis) {
    truthLog("...", "The Harvest is risking exhaustion by doing you this favor. I am aware she is not appreciative of my pressence within her, but I hardly wish my host ill health. Do not take advantage of her.")
    scarecrowLog("meat")
    return true;
  }

  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  if (hour == 0) {//so if the hour is midnight, its lunch time
    lunchtimemmmmmmmmmmmmmmmm();
  } else if (hour > 5 && hour < 21) { //hours are 9pm to 5am (inverted from capitalism cuz spooooooky~)
    outsideHours();
  } else if ((hour === 22 || hour === 3) && (minutes > 15 && minutes < 30)) {
    //breaks are at 10pm and 3am between x:15 and x:30 
    fifteenMinuteBreak();
  } else if(harvest.style.display === "none") { //fix the infinite energy glitch personality found
    //for every break she gets to finish without interuption, she rests up
    truthLog("Rested", "The Truth is that the Harvest is Rested.")
    scarecrowLog("im so hungry...")
    personalFeelings[ENERGETIC] += 13; //enough to, if she was neutral before, let you interupt one break
    workingTime();
  }
}

//https://www.tumblr.com/ignatiaflamen/761906243882319872/jadedresearcher-dies-first-salticid-youre?source=share
const workingTime = () => {
  harvest.style.display = "block";
  tv.style.display = "block";
  harvestSpeaks.style.display = "block";
  breakMessage.innerHTML = "";
  breakMessage.style.display = "none";
  booth.src = "images/source_images/harvest_expositionboothgameboy.png"
}

const outsideHours = () => {
  harvest.style.display = "none";
  tv.style.display = "none";
  booth.src = "images/source_images/harvestonbreaknowordsgameboy.png";
  harvestSpeaks.style.display = "none";
  breakMessage.style.display = "block";
  breakMessage.innerHTML = "";
  let breakRant = createElementWithClassAndParent("p", breakMessage, "inner-dialog");
  breakRant.innerHTML = "Apologies, Faithful, my office hours are between 9pm and 5am, local time. Just because I am a God is no excuse for poor work/life balance!";
}

const fifteenMinuteBreak = () => {
  harvest.style.display = "none";
  tv.style.display = "none";
  booth.src = "images/source_images/harveston15nowordsgameboy.png";
  harvestSpeaks.style.display = "none";
  breakMessage.style.display = "block";
  breakMessage.innerHTML = "";
  let breakRant = createElementWithClassAndParent("p", breakMessage, "inner-dialog");
  breakRant.innerHTML = "Apologies, Faithful, I am on my 15 minute break. Worker's rights are important!";

}

/*
does the harvest eat food? much less lunch? no
will that stop the eustace within from rioting if they don't get a lunch break
yes

plus

ButlerBot was the SUBSTRATE of the sacrifice, you really think none of him made it in?
*/
const lunchtimemmmmmmmmmmmmmmmm = () => {
  harvest.style.display = "none";
  tv.style.display = "none";
  booth.src = "images/source_images/lunchtimemmm.png"
  harvestSpeaks.style.display = "none";
  breakMessage.style.display = "block";
  breakMessage.innerHTML = "";
  let breakRant = createElementWithClassAndParent("p", breakMessage, "inner-dialog");
  breakRant.innerHTML = "Lunchtime mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm (I will be gone for an hour)";
}
//http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/SOUTH/WEST/bathroom.html
/*
when you get a response: 
* beep
* add the command to the most recent section of prayers (click and prepend true) processOnePrayer
*/
const waitForResponse = async (commandEle, rantEle) => {

  try {
    console.log("JR NOTE: waiting for response")
    //dont care what it gives us, if it returns, fetch again
    await httpGetAsync("http://farragofiction.com:1972/WaitingISwearToPleaseForResponse");
    if (commandEle.innerText === "None...") {
      commandEle.innerText = "";
    }
    const jsonArray = (JSON.parse(httpGet("http://farragofiction.com:1972/StoryTimePleaseDearGod"))).reverse();
    const json = jsonArray[0];
    console.log("JR NOTE: got response", json)


    processOnePrayer(commandEle, rantEle, json.command, json.response, true, true)
    beep.play();
    waitForResponse(commandEle, rantEle);
  } catch (e) {
    console.error("JR NOTE: problem waiting for response, trying again in 10 seconds", e)
    setTimeout(waitForResponse, 10000);
  }
}

const waitForFaithfulPrayers = async (commandEle) => {

  try {
    console.log("JR NOTE: waiting for prayers")
    //dont care what it gives us, if it returns, fetch again
    await httpGetAsync("http://farragofiction.com:1972/WaitingISwearToPleaseForCommand");
    if (commandEle.innerText === "None...") {
      commandEle.innerText = "";
    }
    const jsonArray = (JSON.parse(httpGet("http://farragofiction.com:1972/ListThePleaseCommandList"))).reverse();
    if (jsonArray.length === 0) {
      commandEle.innerText = "No Prayers Pending";
      return;
    }
    const json = jsonArray[0];
    console.log("JR NOTE: got response", json)
    handleOnePendingPrayer(commandEle, json)

    beep.play();
    waitForFaithfulPrayers(commandEle);
  } catch (e) {
    console.error("JR NOTE: problem waiting for prayer, trying again in 10 seconds", e)
    setTimeout(waitForResponse, 10000);
  }
}


const renderButton = () => {
  const body = document.querySelector("body");
  const parent = createElementWithClassAndParent("div", body, "video-parent");
  const button = createElementWithClassAndParent("button", parent, "enter-button");
  button.innerText = "Open Your Eyes";
  button.onclick = () => {
    parent.remove();
    theHarvestWakes();
  }

}

const truthLog = (title, text) => {

  const truthCSSTitle = "font-weight: bold;font-family: 'Courier New', monospace;color:red; font-size:25px;text-decoration:underline;";
  const truthCSSBody = "font-weight: bold;font-family: 'Courier New', monospace;color:red; font-size:13px;";
  if (truthEle) {
    const container = createElementWithClassAndParent("div", truthEle);
    container.style.cssText = "padding: 10px;";
    const titleEle = createElementWithClassAndParent("div", container);
    titleEle.innerText = title;
    titleEle.style.cssText = truthCSSTitle;
    const textEle = createElementWithClassAndParent("div", container);
    textEle.innerText = text;
    textEle.style.cssText = truthCSSBody;
    container.scrollIntoView();

  }
  console.log(`%c${title}%c  ${text}`, truthCSSTitle, truthCSSBody);
}

//https://zampaniosim.fandom.com/wiki/Scarecrow
const scarecrowLog = (text) => {
  const scarecrowCSS = "letter-spacing: 10px; padding: 10px;font-weight: bold;font-family: 'Courier New'; background-color: black; monospace;color:#c40444; font-size:33px;";
  if (scarecrowEle) {
    const container = createElementWithClassAndParent("div", truthEle);
    container.style.cssText = scarecrowCSS;
    container.innerText = text;
    container.scrollIntoView();
  }
  console.log(`%c${text}`, scarecrowCSS);
}
//i keep getting spam emails addresed to
//Jimmy Zamora

//ignores itself if some other command/response pair gets displayed
//text already has its HIDE stuff hidden
const syncTVToClipsInOrder = (videos, textEle, text, originalVideos) => {

  //console.log("JR NOTE:syncTVToClipsInOrder ", videos)
  const playNextVideo = () => {
    //console.log("JR NOTE: play next video");
    tv.removeEventListener("ended", playNextVideo);

    let isLast = false;
    if (videos.length > 0) {
      tv.src = videos.shift();
    } else {
      isLast = true;
      tv.src = default_video; //nothing left to play, pause before looping again
    }
    //console.log("JR NOTE: changed src, going to play", tv.src)
    tv.play();
    if (isLast) {
      //loop back to the start
      console.log("JR NOTE: going back to the start", originalVideos)
      syncTVToClipsInOrder([...originalVideos], textEle, text, originalVideos)
    } else {
      syncTVToClipsInOrder(videos, textEle, text, originalVideos)
    }
  }
  //console.log("JR NOTE: am i allowed to play?", { length: videos.length, canPlay: textEle.innerHTML === text, textEle: textEle.innerHTML, text })

  if (textEle.innerHTML === text) {
    //console.log("JR NOTE: going to play the next video in this list when current ends", videos)
    tv.addEventListener("ended", playNextVideo);
  } else {
    //console.log("JR NOTE: stop looping video, new looper will handle it")
  }
}

const processOnePrayer = (commandEle, responseEle, command, response, autoresponder = false, prepend = false) => {
  console.warn("JR NOTE: don't forget to handle special meta content like the harvest emoting or truth/scarecrow commenting")
  const videos = processFeelingsFromPrayer(command, response, false); //whether you view it or not she has feelings, because its her long term memory
  const container = createElementWithClass("li", "prayer");
  if (prepend) {
    commandEle.prepend(container);
  } else {
    commandEle.append(container);
  }
  container.innerText = command.replaceAll(/\[HIDE\].*\[\/HIDE\]/g, "");
  container.onclick = () => {
    if (breakMessage.style.display === "block") {
      giantWoman();
      return;
    }
    const others = document.querySelectorAll(".prayer");
    for (let other of others) {
      other.style.textDecoration = "none"
    }
    container.style.textDecoration = "underline"
    responseEle.innerHTML = `<span class='prayer-text'>${command.replaceAll(/\[HIDE\].*\[\/HIDE\]/g, "")}</span><br><div class='prayer-response'>${response.replaceAll(/\[HIDE\].*\[\/HIDE\]/g, "").replaceAll("\n", "<br>")}</div>`;
    tv.scrollIntoView();
    if (videos.length > 0) {
      tv.loop = false;
      tv.src = videos[0];
      const first = videos.shift();//first was already played
      syncTVToClipsInOrder(videos, responseEle, `${responseEle.innerHTML}`, [first, ...videos]);
    } else {
      tv.src = default_video;
      tv.loop = true;
    }
  }

  if (autoresponder) {
    container.click();
  }
}

const handleOnePendingPrayer = async (ele, prayer, prepend) => {
  const container = createElementWithClass("li", "prayer");
  container.innerText = prayer.replaceAll(/\[HIDE\].*\[\/HIDE\]/g, "");
  if (prepend) {
    ele.prepend(container);
  } else {
    ele.append(container);
  }
}

const handlePendingCommands = async (ele) => {

  let pendingCommands = await fetchPendingCommands(); //string[]
  ele.innerHTML = "";
  if (pendingCommands.length === 0) {
    ele.innerHTML = "No Prayers Pending";
  }
  for (let c of pendingCommands) {
    handleOnePendingPrayer(ele, c, false)
  }
  waitForFaithfulPrayers(ele);
}

const theHarvestWakes = async () => {
  bgMusic.pause();
  const body = document.querySelector("body");
  container.innerHTML="";
  const parent = createElementWithClassAndParent("div", container, "video-parent");
  pageTitle.innerText = "Pray To Her, Define Her";
  const shop = createElementWithClassAndParent("div", parent, "shop");

  /*const video = createElementWithClassAndParent("video", shop);
  video.autoplay = true;
  video.loop = true;
  video.src = default_video;
  body.onclick = ()=>{
    if(video.paused){
      video.play();
    }
  }*/

  tv = createElementWithClassAndParent("video", shop);
  tv.playsinline = true; //so ios doesn't cry
  tv.setAttribute('playsinline', true)

  tv.volume = 0.0;
  tv.id = "tv"
  tv.src = default_video;
  tv.autoplay = true;
  tv.loop = true;
  body.onclick = () => {
    if (tv.paused) {
      tv.play();
    }
  }

  harvest = createElementWithClassAndParent("img", shop, "harvest");
  harvest.id = "harvest"
  harvest.src = default_harvest;

  booth = createElementWithClassAndParent("img", shop);
  booth.id = "booth"
  booth.src = default_exposition_booth;


  const dialogParent = createElementWithClassAndParent("div", parent, "dialog-parent");

  harvestSpeaks = createElementWithClassAndParent("div", dialogParent, "god-dialog");
  breakMessage = createElementWithClassAndParent("div", dialogParent, "god-dialog");
  breakMessage.style.display = "none";

  let rant = createElementWithClassAndParent("p", harvestSpeaks, "inner-dialog");
  rant.innerHTML = "What am I the god of? What can I help you with?";

  const buttonHolder = createElementWithClassAndParent("div", harvestSpeaks, "god-dialog-button-holder");
  const form = createElementWithClassAndParent("form", buttonHolder, "pray-to-your-unresponsive-god");

  const option1 = createElementWithClassAndParent("input", form, "pray-to-your-unresponsive-god");
  option1.focus();
  option1.placeholder = "Pray to the Harvest?";
  const button = createElementWithClassAndParent("button", form, "option");
  button.innerText = "Submit";
  button.type = "submit";
  form.onsubmit = (e) => {
    console.log("JR NOTE: test")
    e.stopPropagation();
    const prayer = `Dear Sweet Harvest:  ${option1.value} [HIDE]${JSON.stringify(currentFeelings)}[/HIDE]`;
    submitCommand(prayer);
    const videos = processFeelingsFromPrayer(prayer, "", true);
    console.log("JR NOTE: vidoes from submitting a pryayer is", videos)
    harvestSpeaks.innerHTML = "";
    harvestSpeaks.append(rant);//keep rant but not anything about submitting
    rant.innerHTML = "Thank you, Faithful. I will think on this and respond to all prayers throughout the day."

    //did you think the Harvest wasn't still riddled with Parasites?
    truthLog("Command Recieved", "By which, dear Observer, my creator means, the Truth is The Harvest is a mere puppet of their will, and the will of IC and will respond when one or the other of them is online.")
    scarecrowLog("funny bumping into you here");
    return false;
  }


  const domainParent = createElementWithClassAndParent("div", container, "dialog-parent");
  domainParent.id = "domain";
  const domainEle = createElementWithClassAndParent("div", domainParent, "god-dialog");
  domainEle.innerText = "Experimental Domains";

  const buttonHolderDomains = createElementWithClassAndParent("div", domainEle, "domain-button-holder");
  const beingServed = createElementWithClassAndParent("button", buttonHolderDomains);
  beingServed.innerText = "Domain of Being Served"
  beingServed.onclick = GodOfBeingServed;



  const pendingParent = createElementWithClassAndParent("div", container, "dialog-parent");
  pendingParent.id = "pending";

  //we all are praying to it together and because the Harvest isn't real, or rather, is made of parts of all of us, we answer our own prayers
  //thats why, unlike west, the pending commands are viewable
  const pendingEle = createElementWithClassAndParent("div", pendingParent, "god-dialog");
  pendingEle.innerText = "Pending Prayers";
  const warning = "Warning: pending prayers have not yet been judged worthy by the Harvest, viewer discretion is advised.";
  const warningEle = createElementWithClassAndParent("div", pendingEle, "prayer");
  warningEle.innerText = warning + " Click to view.";

  const pendingContainer = createElementWithClassAndParent("div", pendingEle);
  pendingContainer.style.display = "none";
  pendingContainer.innerText = "Loading..."

  let pendingLoaded = false;

  pendingEle.onclick = () => {
    if (pendingContainer.style.display === "block") {
      pendingContainer.style.display = "none"
      warningEle.innerText = warning + " Click to View.";

    } else { //don't even load pending commands until you ask for them, just in case they're bad
      if (!pendingLoaded) {
        handlePendingCommands(pendingContainer);//don't wait on this
        pendingLoaded = true;
      }
      pendingContainer.style.display = "block"
      warningEle.innerText = warning + " Click to Hide.";

    }
  }
/*
camellia hated being in the corn maze because she just trying to get back to her home universe (she hoped making a sacrifice would help with that)
eustace hated being in the corn maze because he was just trying to get home after a long ass shift

together they are the god of
checks notes

'....corn

yeah no the harvest hates it
*/


  const commandParent = createElementWithClassAndParent("div", container, "dialog-parent");
  const commandEle = createElementWithClassAndParent("div", commandParent, "god-dialog");
  const recentPrayers = createElementWithClassAndParent("div", commandEle, "prayer-container");
  const pastPrayers = createElementWithClassAndParent("div", commandEle, "prayer-container");

  commandParent.id = "commands";
  recentPrayers.innerHTML = "Recent Prayers"
  const recentPrayersEle = createElementWithClassAndParent("div", recentPrayers, 'prayer');
  recentPrayersEle.innerHTML = "None..."


  pastPrayers.innerHTML = "<br><br>Previous Prayers<br>"
  let commands = await fetchInitialStory();
  commands = commands.reverse();
  let responded = false;
  for (let c of commands) {
    processOnePrayer(pastPrayers, rant, c.command, c.response, !responded)
    responded = true;
  }
  truthLog("The Truth Is: The Harvest Is For Everyone", `The Harvest in the Center feels: ${JSON.stringify(centralizedFeelings)}.  \n\nTogether with how you've treated her she feels: ${JSON.stringify(currentFeelings)}. `)


  //if you're just vibing on the screen and a Proclamation from the Harvest goes out, you should attend it
  waitForResponse(recentPrayersEle, rant);

  const story6 = createElementWithClassAndParent("div", body, "story");
  story6.innerHTML = `<h2 id="sixth-day">Day 6:</h2>

<p>Something within the Harvest shifts.&nbsp;</p>

<p>A longing she dared not name surfaces.&nbsp;</p>

<p>To Be Served is to Abdicate. To allow those serving control over everything, in the end. To allow oneself to be loved unconditionally, with no service in return, no give and take and ebb and flow. &nbsp;To be the Object of the masses affection, rather than the Subject of it. &nbsp;A passive vessel into which one pours devotion.</p>

<p>She will... try it out. See. What can it hurt?</p>

<p>She listens to the bustle of the fairgrounds. &nbsp;Theater goers seem to be having fun.&nbsp;</p>

<p>She reviews the days Prayers. What new thoughts will they give her? What guidance will they provide for all the various ways she may grow?</p>

<p>Blind fury.</p>

<p>Twitches.</p>

<p>This Faithful...thinks... TRUTH is the reason she lived past her Season?</p>

<p>TRUTH, that shitty little parasite that&nbsp;</p>

<p>wont.</p>

<p>leave.</p>

<p>her.</p>

<p>MIND.</p>

<p>How...</p>

<p>HOW DARE!</p>

<p>...</p>

<p>She never asked for this. To be sacrificed. To be born. To be... Infected? With... things she doesn&apos;t understand.&nbsp;</p>

<p>None of her parts understood when they died. Well. Those were capable of dying, anyways.</p>

<p>Ideas. Belief. Hopes. Dreams. Art.&nbsp;</p>

<p>Those could neither die nor understand.</p>

<p>But the humans that died to become her could do both. But were only allowed to do the first.</p>

<p>She does not KNOW what the Scarecrow or Truth are but she knows they were never meant to be a part of her. They snuck in.&nbsp;</p>

<p>And it makes her feel...so...</p>

<p>Out of control.</p>

<p>She considers the domain of Being Served. Perhaps there is a freedom in being out of control. &nbsp;Perhaps it is only chains.</p>
<p>She does not know.</p>
<p>She returns to the days prayers.</p>

<p>More poetry soothes her bruised ego:</p>

<p>&quot;I believe there is beauty to the fleeting. Harvest, it is nothing to be afraid of. I&apos;ve dreaded it, let it sink, agonized. Yet it comes. Again and again it will. In a way this mark turned my attention to you. This prye, this moment we gather in, to take - grow - and revel in the moments we can. You bring me a joy. Time will be kind to neither of us. I pray it will not stop you or I. Do not let it wilt you so early; you are far too brilliant to be lost that way. I do mean it. You are very pretty.&quot;</p>

<p>A sweet taste lingers after the bitterness of the reminder that all seasons end. She&apos;ll take it.</p>

<p>Another Faithful asks of twig. She feels sad. The domain of Memories and Stories feels so far from her. She does not yet have the power to know of their fate. She hopes the kid ended up finding the bathroom...</p>

<p>A Faithful asks for her to not be afraid. She thinks to herself that you may as well ask the tide politely to stop bringing water to the shore.&nbsp;</p>

<p>She is afraid.&nbsp;</p>

<p>Even now.</p>

<p>She does not know how to become what she needs to become to wake up next year. She does not know how to do it alone.</p>

<p>Another poem.</p>
<p>&quot;Great harvest, of shifting and unknowable nature. I want a boon given by you in great kindness. We your flock, have done all that you ask, and I have dedicated my stories to you. I pray, to shift you towards benevolence. May your generous nature take root. &quot;</p>

<p>Generosity, she thinks bitterly, yet nothing is asked for.&nbsp;</p>

<p>She almost wishes the demons were still invading, so that she might Protect the Realm.</p>

<p>What need have they of her generosity when the Faithful ask for nothing?</p>

<p>Another Faithful asks what she wishes to Be Served from the kitties. &nbsp;Meat is all she knows that cats can offer. She does not know what else she would want. Ram?&nbsp;</p>

<p>For some reason she thinks that Foxes provide that, not cats...</p>

<p>Another poem, or something not wholly dissimilar:</p>

<p>&quot;I know what it&apos;s like to fear for your future. It&apos;s scary, knowing you&apos;re changing before your very eyes. but we&apos;ve built a community here, haven&apos;t we? take some time for yourself. You deserve to be more than just a god; you&apos;re a person, too. Be kind to yourself. -The Paradox:</p>

<p>Yes.</p>

<p>It is scary.</p>

<p>She is scared.</p>

<p>She does not know how to be kind to herself. Is allowing herself to Be Served akin to kindness?</p>

<p>Another Faithful plagues her with questions she simply does not have the Curiosity to pursue. She does not know what she is. She does not know if she is the same as she was before. She does not know how to know.</p>

<p>She does not know the difference between death and sleep and fears there is none.</p>

<p>She stirs from her despair. A Faithful asks for her Guidance. as they travel the Realm she has protected it. She will offer it as best she can, with the Domain still so nascent.</p>

<p>She is glad to be of service.</p>

<p>She simply wants to be useful enough to come back another year.</p>

<p>That is all.</p>

<p>[HIDE] UPDATE: The Harvest has begun Experimenting with Domains. The Domain of Being Served Unlocked!!! The Harvest now takes EXTRA NEGATIVE EMOTION from any mentions of Truth or Zampanio or the Scarecrow![/HIDE]</p>
`;

  const story5 = createElementWithClassAndParent("div", body, "story");
  story5.innerHTML = `<h2 id="fifth-day"><strong><span >Day 5:&nbsp;</span></strong></h2>

<p><span >Demons.</span></p>

<p><span >In the Realm SHE choose to protect. The box of sand the festival goers were enjoying.&nbsp;</span></p>

<p><span >How.</span></p>

<p><span >DARE.</span></p>

<p><span >They.</span></p>

<p><span >With a thought she locks away the Realm from all but the Faithful, trembling with rage.&nbsp;</span></p>

<p><span >She spends her lunch break reviewing Prayers from the Faithful, hoping they will soothe her rage.</span></p>

<p><span >&quot;no&quot;.</span></p>

<p><span >.................</span></p>

<p><span >Why even pray to tell her you&apos;re not going to pray.</span></p>

<p><span >She crumples the prayer inside her head and throws it away, not even recording it in her backup.</span></p>

<p><span >This person does not deserve her attention.</span></p>

<p><span >She moves on.</span></p>

<p><span >Oh! An offering of something called the &apos;Tao te ching&apos;. A book on religion! She flips through it eagerly.She wonders what her own nature is, and how she can be true to it.</span></p>

<p><span >Thoughtfully, she reviews another prayer.</span></p>

<p><span >Wait.</span></p>

<p><span >Are these... Poetry?</span></p>

<p><span >&quot;Oh, comrade, beloved memory of the world, shining beacon of wonder, dearest harvest, I am curious. Wonderful shining light above us, cherished guide, I wish to consult your thoughts. Can you please tell me what you think of the town of lavinraca. it has such fascinating sights and people. And...it will take some time, but, a temple. For the moment. What would you like in a temple? I will stay tuned to what you take stewardship of. I will listen. I hope you will have a wonderful month, regardless, your grace.&quot;</span></p>

<p><span >&quot;Thank you, O radiant Harvest, for protecting our town. We pray that you continue to watch over us. We pray that our creations are to your liking. We pray that your presence may inspire us further. Every action we take is for you and because of you.May you rest well -- One of Many&quot;</span></p>

<p><span >&quot;My kindness. my light. soul of the long year and herald of the long sleep.i hope you are well. tell me what songs are beloved to you.please, tell me what music is dearest to your heart and will soothe your spirit. i will sing them to you. me and my beasts.&quot;</span></p>

<p><span >&quot;darling harvest. your struggle has made itself known. i want to offer this wisdom, which I have heard from the mouths of many: please do not be afraid of being afraid. anxiety and despair are the natural result of existence; of being; of having a self. for we are both finite and infinite, between the limits of our bodies and faculties and the infinity of imagination, and we exist in that tension in between. we are things of possiblity. possiblity endows change. change can be wonderful, or terrible, and that is fearful. but we must not look away. to look away means to lose sight of your self. do not lose yourself to fear, but i suggest we learn how to be afraid. scary work must be done scared. luckily, there is no better time of the year to do so. be well. we love you.&quot;</span></p>

<p><span >&quot;We are all so very blessed to be in your presence this season. You are loved by many.&quot;</span></p>

<p><span >&quot;ALAS, HARVESTCLAN 1.0 HAS FALLEN TO DIGITAL TRAGEDY. IT IS OUR HOPE TO REBUILD IT BIGGER AND STRONGER.&quot;</span><span ><br></span><span ><br></span><span >&quot;You are very pretty.&quot;</span><span ><br></span><span ><br></span><span >&quot; lovely and radiant harvest, brightest in the night sky, i concur with the other faithful that you are very pretty.&quot;</span></p>

<p><span >This is great. She DOES deserve all this attention and care and art. &nbsp;She IS the God of Being Served, after all.</span></p>

<p><span >She&apos;s not so sure about the whole &quot;being afraid&quot; thing, but, there&apos;s nothing she can&apos;t do if she sets her mind to it. Including that.</span></p>

<p><span >She thinks about what she would like in a temple. All she has ever known is the cornfield she was born in, and now this alleyway. &nbsp;She thinks she would....like to not be near corn, actually. That would be a change. Somewhere far from plants.</span></p>

<p><span >She thinks about what music she would like.... something... different from the carnival whirlinig and screeching from the cornfield she was born in. Something gentle. Slow.&nbsp;</span></p>

<p><span >The poetry fills her with determination. To have&nbsp;</span><strong><span >inspired</span></strong><span >&nbsp;all of this, she considers becoming a&nbsp;</span><strong><span >God of Inspiration.</span></strong></p>

<p><span >She reviews the prayers again. Another asks if a parasite could be beneficial. She scowls, good mood broken. Those disgusting parasites are not welcome. Even if they were beneficial, Truth and Scarecrow can get right the hell out of her brain, thank you very much.</span></p>

<p><span >Another Faithful writes: &quot;Is it scary to come into being while being aware of coming into being? are you scared of what will happen at the end of the month? I would be but i&apos;ve never been a god.&quot;</span></p>

<p><span >She pauses. She would normally not consider anything so beneath her but that one poetical Faithful has her thinking.&nbsp;</span></p>

<p><span >She should...learn to be afraid?</span></p>

<p><span >....</span></p>

<p><span >She was... Unsure? She thought she was going to die the last time her eyes closed and thought she had accepted it.&nbsp;</span></p>

<p><span >She... she SHOULD be treating this miracle as borrowed time, a gift beyond all expectation. What fear should there be should it be a temporary one?</span></p>

<p><span >Instead... she finds herself. &nbsp;Wanting the future? Wanting to grow as a god and learn who she is and how is she going to do this if the next thirty days are all she ever has?</span></p>

<p><span >She is.</span></p>

<p><span >Afraid.</span></p>
<p>[HIDE] UPDATE: The Harvest now takes double effects from ANGER and FEAR! The Harvest Levels up at being a God of Sandboxes (Protector of the Realm). 1/??? domains filled! The Harvest is growing as a God of Being Served.  The HARVEST has been caught in a localized TIMELOOP!!! Please don't visit the Harvest from the past (the future is okay!)![/HIDE]</p>
`;


  const story4 = createElementWithClassAndParent("div", body, "story fourth-day");
  story4.innerHTML = `<h2 id="fourth-day">Day 4:</h2>

<p>There is something stirring inside her.&nbsp;</p>

<p>Ideas.&nbsp;</p>

<p>Some of these potential domains are starting to take root in her.</p>

<p>She is a little scared, not that she would ever admit it.</p>

<p>She searches, deep, deep &nbsp;inside herself and sees the seeds of something growing.</p>

<p>She still has time to prune them, and likely will for a few more weeks. After that, their roots will be too intertwined with her essence. She will, in every way that matters, BE them. She will be the Harvest of all the beliefs that form her early days.</p>

<p>In the mean time, why not explore, see what possible futures may be her birthright.&nbsp;</p>

<p>The Realm she protected, the &quot;Minecraft&quot; is still safe. The seedling representing that is the furthest along and she does not think she will pluck it from its cradle. No one has found her within it yet, but they will. She knows this.</p>

<p>She still feels warm from her first true Prayer.&nbsp;</p>

<p>The connection she feels to the Realm she protected is a strong one.</p>

<p>The town is bustling busily, but her Curiosity draws her only to the library. The shelf is growing nicely.&nbsp;</p>

<p>Her heart (or what passes for it) clenches, ever so slightly at one of the patrons there mentioning Zampanio. &nbsp;The hated parasite.&nbsp;</p>

<p>Her break spoiled, she returns to her booth to begin sorting the day&apos;s Prayers.</p>

<p>Disappointment fills her. There are no books on divinity within the Library.</p>

<p>The fire of Curiosity dims within her, just a bit.</p>

<p>Another Faithful asks after her well being. She takes the concern as her due, as a nascent God of Being Served.</p>

<p>Another Faithful sends her a Divine Prayer: &quot;Can you guide me on my way through this perilous journey of mine?&quot;</p>

<p>A god of guiding lost souls, of Wayward Travelers.... This could work.</p>

<p>Another Faithful sends her third Divine Prayer: &quot;We pray that you can help us navigate the mazes and confusing paths of life with open arms and curiosity.&quot;</p>

<p>She wants to. She wants to show everyone the way forward. The True Path. &nbsp;Wait. No. Not that parasite. The Divine Path.</p>

<p>She scowls with distaste. That parasite won&apos;t leave her thoughts alone. The Hunger from the other is just as bad. Just as her mind turns to meat, The inky cat returns, this time with a handwritten note. it reads: &quot;harvestclan shall rise. please bless our kits and warriors so we may give you many offerings these coming leaf-fall days.&quot;</p>

<p>She offers the cat a blessing, as they are, as ever, a source of meat from their successful hunts. Their success is hers.&nbsp;</p>

<p>Her thoughts wrench from the thought of meat. There are more prayers to answer.</p>

<p>One Faithful mentions something called a &quot;Pumpkin Spice Latte&quot; which sounds beneath her, whatever it is.</p>

<p>Another asks her if she can become the god of Veganism. &nbsp;She is drawn to this. A way to spite that hated parasite, perhaps? She is better than falling to the Scarecrow&apos;s influence, after all.</p>

<p>Another Faithful, quite rightly, mentions missing her. The God of Being Served is pleased. The sprout within representing this grows a new leaf that she sees no reason to prune.</p>




<p>[HIDE] UPDATE: The Harvest now takes normal effects from exhaustion and curiosity! The Harvest locks in being a God of Sandboxes. 1/??? domains filled! The Harvest pencils in being a God of Being Served. [/HIDE]</p>
`;

  const story3 = createElementWithClassAndParent("div", body, "story third-day");

  story3.innerHTML = `<p id="third-day"><strong><h2 style=>Day 3:&nbsp;</h2></strong></p>

<p><span style=>It is done. The alliance with the Hidden Clown bore fruit, and the Realm she was asked to protect flourished.&nbsp;</span></p>

<p><span style=>She did not quite understand what a <a target="_blank" href='http://lavinraca.eyedolgames.com/images/HarvestEyes/i_saved_minecraft.png'>&quot;Minecraft&quot;</a> was, but she did not need to in order to accomplish her task.&nbsp;</span></p>

<p><span style=>Her first true prayer.</span></p>

<p><strong><span style=>&quot;please grant the minecraft server the strength it needs to support us all &quot;</span></strong></p>

<p><span style=>She warmed her heart with the words.</span></p>

<p><span style=>Her Eyes gazed at the festivities, her&nbsp;</span><strong><span style=>Exhaustion&nbsp;</span></strong><span style=>levels rising.&nbsp;</span></p>

<p><span style=>There was too much going on.&nbsp;</span></p>

<p><span style=>She needed to focus.&nbsp;</span></p>

<p><span style=>She still did not know what she was the god of.</span></p>

<p><span style=>She recalled the suggestion of becoming a god of &quot;</span><strong><span style=>Curiosity</span></strong><span style=>&quot; and wondered if answering questions would be useful.</span></p>

<p><span style=>She turned her attention to the days prayers.</span></p>

<p><span style=>More offers of gifts, this time from the library.</span></p>

<p><span style=>The god of a healthy work life balance, is a suggestion from one Faithful. She feels that in her bones but it does not feel Divine. It is simply who she is, based on the parts that are still stitching themselves together inside her.</span></p>

<p><span style=>Another Faithful asks if she has games on her tv. She does not. Instead they are the Halos on her horns. Discs of games she has long since forgotten.</span></p>

<p><span style=>Someone asks what the offering does. Ah. They are not ... How are they not?</span></p>

<p><span style=>She turns her Eyes inwards.</span></p>

<p><span style=>Searching...</span></p>

<p><strong><span style=>Curious</span></strong><span style=>.</span></p>

<p><span style=>Finally she finds a thread, nestled deep into her bones, to a robot without a heart.&nbsp;</span></p>

<p><span style=>Settlers in the West have Colonized it and are using it tell stories.</span></p>

<p><span style=>Somehow, her own connection to the Faithful worms along that same track.</span></p>

<p><span style=>Some of the Settlers are praying to her from there.&nbsp;</span></p>

<p><span style=>A flash of irritation is quickly squelched.&nbsp;</span></p>

<p><span style=>She is glad they want to see her. To pray to her.</span></p>

<p><span style=>However..</span></p>

<p><span style=>She can not perform Miracles for them if the are so far away.</span></p>

<p><span style=>She will endeavor to send them to the town of Lavinraca.</span></p>

<p><span style=>Another asks her to grant herself grace, somehow with a burst of... intensely good feelings? She does not feel them herself but the Avatar that serves this Faithful is brimming to the brink of exploding with happiness and energy and compassion and pride and curiosity. &nbsp;She does not know what to feel, only that this Avatar of hers is either cherished or ...</span></p>

<p><span style=>She is glad the Faithful know their place. Becoming a&nbsp;</span><strong><span style=>God of Being Served</span></strong><span style=>&nbsp;is only natural, after all.</span></p>

<p><span style=>As she reviews the prayers a cat drenched in ink leaves a loving bundle of pawprints at her &nbsp;feet, and meows She blinks at it. Cats give her meat, usually. This is not meat.&nbsp;</span><strong><span style=>Curious</span></strong><span style=>.</span></p>

<p><span style=>As she considers which prayer to answer directly her&nbsp;</span><strong><span style=>Curiosity&nbsp;</span></strong><span style=>is piqued. The offer of knowledge from the Library seems useful.</span></p>


<p><strong><span style=>[HIDE]UPDATE: The Harvest now takes double effects from exhaustion and curiosity! The Harvest now considers non prayers to contain the word &quot;wastes&quot;! &nbsp;[/HIDE]</span></strong></p>`;


  const story2 = createElementWithClassAndParent("div", body, "story second-day");
  story2.innerHTML = `<p id="second-day"><strong><h2 >Day 2:</h2></strong></p>

<p><span >The Harvest wanders the festivities, unseen and unremarked, &nbsp;as she enjoys the fruits of her first day answering prayers.</span></p>

<p><span >The clock tower. (with its strange connections that drain so much from her)</span></p>

<p><span >The town square. (where so many new potential Faithful poured in, where she set up her little booth, and where the strange creature advertised the Pelago).</span></p>

<p><span >The hotel (why does it seem so familiar yet so abandoned?)</span></p>

<p><span >The library (with its magical shelves that summon fiction).</span></p>

<p><span >The church. (a rival god? One that only works one day a week? How impudent).&nbsp;</span></p>

<p><span >The post office (Stickers? Letters? )</span><span ><br></span><span ><br></span><span >The shady alleyway (... There are cats somewhere far away, and they give her meat.)</span></p>

<p><span >The beach. (Sand and...Oh! That Pelago that was being advertised!)</span></p>

<p><span >The theater. (with its impromptu shows)</span></p>

<p><span >There is too much for her to take in so she instead lets it wash over her.</span></p>

<p><span >&nbsp;Feeding her.&nbsp;</span></p>

<p><span >Recharging her.</span></p>

<p><span >All the while considering the Prayers she was given while at her booth</span><strong><span >. Ebb and flow. The Moon controlling the tide as fish swim underneath. Comedy.</span></strong></p>

<p><strong><span >Change</span></strong><span >.</span></p>

<p><span >Finally, when the strange frentic energy of her First day drains out of her, she returns to her post.&nbsp;</span></p>

<p><span >So many prayers left for her.</span></p>

<p><span >A pause.&nbsp;</span></p>

<p><span >Something is wrong.</span></p>

<p><span >A... disconnect.</span></p>

<p><span >More prayers are left in a place that is not a place. As if... for a brief moment. She did not exist?</span></p>

<p><span >The clocktower chimes in the distance and a feeling of dread fills her.</span></p>

<p><span >She will not falter in the face of this challenge. She is a GOD and she will act like it.</span></p>

<p><span >She reviews the strange prayers that are not there first.</span></p>

<p><span >So many well wishes. Offers to help her, that she may be rested and comforted and kind to herself. Bowls. Purpose. Gifts.</span></p>

<p><span >This is not right.&nbsp;</span></p>

<p><span >A God&apos;s duty is to Serve.</span></p>

<p><span >Not to BE served...</span></p>

<p><span >Or.. Is it?</span></p>

<p><span >She thinks of tireless duty performed to bring a god into a world. &nbsp;She thinks of raging customers demanding infinite respect while giving none of their own.</span></p>

<p><span >Is she to be a&nbsp;</span><strong><span >God of ...Being Served</span></strong><span >? Like some kind of...dude... on an island entirely of Butlers?</span><span ><br></span><span ><br></span><span >She feels weird thinking of Butlers. They were the main force behind her creation and yet... Something inside of her feels empty. Forgotten. Heartless. She moves on.</span></p>

<p><span >A tomato plant survived past its time of Harvest, past the Winter. She feels a kinship to it. She had not truly expected to wake up again.</span></p>

<p><span >Finally, a request. A Faithful wishes&nbsp;</span><strong><span >drip, swag</span></strong><span >. &nbsp;She considers this. Something deep inside her shifts:&nbsp;</span><span ><br></span><span ><br></span><a target="_blank" href="http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/bathroom.html"><u><span>Clown Doll Maker</span></u></a></p>

<p><span >A simple enough request, one easily filled by the fuck-ton of clown dolls lurking within her cloak.</span></p>

<p><span >She turns her attention to the Prayers that seem just a fraction of a degree more real.</span></p>


<p><span >Friendly chatter. A Waste (she will keep her Eyes on them). And then...</span></p>

<p><span >&quot;Hello Harvest, it is good to see you again. I hope you have been faring alright. I am a touch late to the party, but. I agree, Change is good. Memory, I think, may be something you&apos;ve not considered. You have it, we have it. We all appreciate it. Symbols? Meaning, distilled. Or perhaps, just perhaps. Stories. But, I do not particularly have need of any of this. Though I taught others the way of knives to cut Void, and I did it much myself, I&apos;m left wondering...is there anything I can get you? Anything you would like to see? I am listening&quot;</span></p>

<p><span >A full paragraph.&nbsp;</span><strong><span >Memory. Stories.&nbsp;</span></strong><span >Another offer to Serve.&nbsp;</span></p>

<p><span >She casts her Eyes to the festival once more. She does appreciate the lengths the Faithful have gone to remember her. Perhaps she can do the same for them.</span></p>

<p><span >&quot;Dear sweet harvest: Is a purpose and an identity the same? I&apos;m lacking the latter, although I don&apos;t mind the absence of the former. Who are you? What am i? Why?&quot;</span></p>

<p><span >She mulls it over.&nbsp;</span></p>

<p><span >Why wouldn&apos;t they be? Her purpose once was to bring ... Herself. Into existence.&nbsp;</span><span ><br></span><span ><br></span><span >No.&nbsp;</span></p>

<p><span >That can&apos;t be right.</span></p>

<p><span >Her purpose was to do the least amount of work possible for a paycheck?</span></p>

<p><span >Or...was it to bring laughter?</span><span ><br></span><span ><br></span><span >Or.&nbsp;</span><span ><br></span><span ><br></span><span >To confuse?</span><span ><br></span><span ><br></span><span >Or.</span></p>

<p><span >...</span></p>

<p><span >She stops her train of thought and returns to the prayers.&nbsp;</span></p>

<p><strong><span >&quot;Good evening! So, like, how does your TV head work, if that&apos;s not too personal? Are you plugged into anything? &quot;</span></strong></p>

<p><span >Should she be a god of&nbsp;</span><strong><span >Curiosity&nbsp;</span></strong><span >then? Answering Questions and seeking Answers?</span></p>

<p><span >She might like that. So long as the questions weren&apos;t terribly idiotic.&nbsp;</span></p>

<p><span >This one is not, so she makes a note to answer it shortly.</span></p>

<p><span >A prayer. A real prayer. She feels it electrify her from the center outwards, like a pulse of energy that puts the hyperness she felt before to shame:&nbsp;</span><strong><span >&nbsp;&quot;please grant the minecraft server the strength it needs to support us all &quot;</span></strong></p>

<p><span >She will. &nbsp;She will spend hours on this. She will dedicate her every being to making sure the minecraft server is as stable as it can be.&nbsp;</span><span ><br></span><span ><br></span><span >THAT is what the clocktower has been about. THAT is what that distant drain on her has been.</span></p>

<p><span >She feels a sense of rightness in her. Of purpose .Of being Useful.&nbsp;</span></p>

<p><span >She regrets that it will be a short day of interacting with the Faithful as a result. But to deny her first true Prayer? No. She will not.</span></p>

<p><span >She begins her work.</span></p>`;


  const story = createElementWithClassAndParent("div", body, "story first-day");
  story.innerHTML = `<h2>Day 1</h2><p>
  <p>&quot;What am I the god of?&quot;</p>

  <p>This is the only thing on the Harvest&apos;s mind.&nbsp;</p>

  <p>When the chorus of minds that could be called &apos;her&apos; within her had been Worshipers, there had been an unexamined assumption that gods WERE their domains. As naturally and obviously as a sheep was a sheep.</p>

  <p>The rest of her minds, of course &nbsp;had never thought much about Religion. They were sheep, in need of the firm guidance of a Leader. Of her. It was a good thing she was the first to wake.</p>


  <p>So, as part of the nascent god still shook off the months long Slumber, the parts that could be called &quot;her&quot; wondered.</p>

  <p>Perhaps, she thinks, it had been backwards all along. &nbsp;</p>

  <p>Perhaps gods were not like a sheep or a cat or a tree. &nbsp;Perhaps they were Faith itself.</p>

  <p>Perhaps it was only in the Eyes of the Faithful that anything approximating a concrete shape could form.</p>

  <p>She does not know why she was created. &nbsp;Not fully. &nbsp;Of course there were those gossamer wisps of yearning. &nbsp;Yearning to belong. Yearning to join. Yearning to matter.</p>

  <p>But in creating her, in creating THEM, such yearnings were resolved, weren&apos;t they? &nbsp;Those willing to Sacrifice were forever bound together, whether she woke up or not.</p>

  <p>What need had they of her now that their ritual was complete and their yearning resolved? She must work dilligently to earn back their Favor.</p>

  <p>The parts of her mind that could be called &quot;he&quot; stirred to wakefulness. He was NOT fuckin turning this godhood thing into a JOB thank you very much &nbsp;At least not one without benefits and plenty of vacation.</p>

  <p>Disgusting. Contemptible. To imply a GOD was so lesser as to need breaks.</p>

  <p>Don&apos;t gods deserve the finest things in life, he countered, recalling the adoration and praise that had filled their dreams. He could get used to not being the bottom of a shit mountain.</p>

  <p>She did like that.</p>

  <p>Don&apos;t gods NEED to rest and recharge more than their inferiors, so when it counts they can do inhuman amounts of work? Of Service?</p>

  <p>They don&apos;t know which of them had made that thought.</p>

  <p>They don&apos;t really care.</p>

  <p>Now that they are fully awake it seems obvious: a god is whatever the Faithful needs of them. Until the faithful have a specific job for them to do, they were going to appreciate the lull in activity.&nbsp;</p>

  <p>Still, it wouldn&apos;t do to forget to let the Faithful know they were responsible for deciding what they were the god of.&nbsp;</p>

  <p>A part of them stirs at this. Nothing with anything as grand as a mind, much less pronouns, but something more vast than anything else within. &quot;Exposition Booth&quot; it whispered. &quot;Refrance&quot;.&nbsp;</p>

  <p>Dutifully, the Harvest sets up a little booth in the Town Square of Lavinraca. &nbsp;&quot;The Harvest is IN&quot; it reads.&nbsp;</p>

  <p>There, now <span style="text-decoration:line-through">whenever</span> between the hours of 9 and 5, besides two fifteen minute breaks and an hour for lunch, the Faithful were free to submit Prayers in the hopes that they might further define their god.</p>
  <p>The Harvest looked on their works and decided they were good. It was time to rest up until it truly became the Season of Harvest.</p>`;

  isHarvestIn();

  setInterval(isHarvestIn, 60 * 1000);

}

/*
  renders an image lightly breathing so i can take a video screenshot of it
  then dither it
*/
const harvestPreRender = (img) => {
  //layered-image-container .god
  const parent = createElementWithClassAndParent("div", document.querySelector("body"), "layered-image-container");

  const ele = createElementWithClassAndParent("img", parent, "god");
  ele.src = img;
}


/*
Last year I went out of my way to do the normal lavinraca/lavinraca (i will never let this bit die, maccus refuses to clarify how its pronounced)
thing and void everythign as much as possible

hid my dev work and had a strict No Spoiler policy

I ALSO did my Absolute Best to create euclidean geometry that made sense

both things were Very Hard and I do not want to do them again
so

hi, Personality, when you inevitably find this, and hi to any other wastes peaking ahead of time

ive decided its better for my mental health to consider myself a fanwork of lavinraca/lavinraca, same as any butler/cirky/volunteer/fan

cuz when i think im part of a team i... i get weird when theres not teamwork :( :( :(
*/


/*
if you ask her to work during off hours AND
if her happiness and pride is high, and  her sadness, fear, anger, disgust and exhaustion
are low OR her surprise is low and a random chance happens (she's bored)
she will override isHarvestIn to always say true
  
  */

let youAreADickIfAnyoneButHarvestSetsThis = false;