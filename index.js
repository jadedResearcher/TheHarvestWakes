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
const lunchTime = false;
const breakTime = false;
const afterHours = false;



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
  renderButton();
  //harvestPreRender("images/source_images/fox.png")
}

isHarvestIn = () => {
  const date = new Date();
  const hour = date.getHours();
  console.log("JR NOTE: don't forget to let the harvest take breaks, hour is", hour)
}

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

const processOnePrayer = (commandEle, responseEle, command, response, autoresponder = false, prepend = false) => {
  console.warn("JR NOTE: don't forget to handle special meta content like the harvest emoting or truth/scarecrow commenting")
  const container = createElementWithClass("li", "prayer");
  if (prepend) {
    commandEle.prepend(container);
  } else {
    commandEle.append(container);
  }
  container.innerText = command;
  container.onclick = () => {
    const others = document.querySelectorAll(".prayer");
    for (let other of others) {
      other.style.textDecoration = "none"
    }
    container.style.textDecoration = "underline"
    responseEle.innerHTML = `<span class='prayer-text'>${command}</span><br><div class='prayer-response'>${response}</div>`;
  }
  if (autoresponder) {
    container.click();
  }
}

const handleOnePendingPrayer = async (ele, prayer, prepend) => {
  const container = createElementWithClass("li", "prayer");
  container.innerText = prayer;
  if (prepend) {
    ele.prepend(container);
  } else {
    ele.append(container);
  }
}

const handlePendingCommands = async (ele) => {

  let pendingCommands = await fetchPendingCommands(); //string[]
  ele.innerHTML = "";
  for (let c of pendingCommands) {
    handleOnePendingPrayer(ele, c, false)
  }
  waitForFaithfulPrayers(ele);
}

const theHarvestWakes = async () => {
  isHarvestIn();
  const body = document.querySelector("body");
  const parent = createElementWithClassAndParent("div", body, "video-parent");
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

  const tv = createElementWithClassAndParent("video", shop);
  tv.src = default_video;
  tv.autoplay = true;
  tv.loop = true;
  body.onclick = () => {
    if (tv.paused) {
      tv.play();
    }
  }
  shop.onmouseenter = () => {
    tv.src = happy_video;
  }

  shop.onmouseleave = () => {
    tv.src = fox_thinking;
  }

  shop.onclick = () => {
    tv.src = default_video;
  }

  const harvest = createElementWithClassAndParent("img", shop, "harvest");
  harvest.src = default_harvest;

  const booth = createElementWithClassAndParent("img", shop);
  booth.src = default_exposition_booth;


  const dialogParent = createElementWithClassAndParent("div", parent, "dialog-parent");

  const dialog = createElementWithClassAndParent("div", dialogParent, "god-dialog");
  let rant = createElementWithClassAndParent("p", dialog, "inner-dialog");
  rant.innerHTML = "What am I the god of? What can I help you with?";

  const buttonHolder = createElementWithClassAndParent("div", dialog, "god-dialog-button-holder");
  const form = createElementWithClassAndParent("form", buttonHolder, "pray-to-your-unresponsive-god");

  const option1 = createElementWithClassAndParent("input", form, "pray-to-your-unresponsive-god");
  option1.focus();
  option1.placeholder = "Pray to the Harvest?";
  const button = createElementWithClassAndParent("button", form, "option");
  button.innerText = "Submit";
  button.type = "submit";
  form.onsubmit = (e) => {
    e.stopPropagation();
    submitCommand("Dear Sweet Harvest: " + option1.value);
    dialog.innerHTML = "";
    dialog.append(rant);//keep rant but not anything about submitting
    rant.innerHTML = "Thank you, Faithful. I will think on this and respond to all prayers throughout the day."

    //did you think the Harvest wasn't still riddled with Parasites?
    truthLog("Command Recieved", "By which, dear Observer, my creator means, the Truth is The Harvest is a mere puppet of their will, and the will of IC and will respond when one or the other of them is online.")
    scarecrowLog("funny bumping into you here");
    return false;
  }

  const pendingParent = createElementWithClassAndParent("div", body, "dialog-parent");
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



  const commandParent = createElementWithClassAndParent("div", body, "dialog-parent");
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

  //if you're just vibing on the screen and a Proclamation from the Harvest goes out, you should attend it
  waitForResponse(recentPrayersEle, rant);


  const story = createElementWithClassAndParent("div", body, "story");
  story.innerHTML = `<p>
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