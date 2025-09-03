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

Current Domains Experimenting With
Being Served
Change
Inspiration


Current Possible Domains:
Curiosity
Eternity(OVERWRITTEN TO LIBRARY) //a faithful sends this in to celebrate https://microsff.tumblr.com/post/757984719243788288/the-patron
Pedantry
Sleep (she did enough of this :())


Current Possible Vibes:
Moon
Veganism/Carrots
Ocean/Fish
Drip
Comedy
Libraries/Books


*/


/*
book shelves filled with stories, Eyes, and fan creations
constant requests for you to add to the shelves

abilitiy to have her show you two things at random (from any shelf)
and ask you what it inspires in you
maybe give her the zampanio data set  for things she could suggest in inspiration mode
*/
GodOfInspiration = () => {
  harvestIsIn = false;
  document.querySelectorAll(".story").forEach((e) => e.style.display = "none");
  if (!personalFeelings["INSPIRATION"]) {
    personalFeelings["INSPIRATION"] = 0;
  }
  personalFeelings["INSPIRATION"] += 1; //we're keeping track of which domains people like best when filtered through the Harvest's Lens
  savePersonalFeelingsToStorage();
  container.innerHTML = "";
  pageTitle.innerText = "The God Of INSPIRATION";


  truthLog("The Indulgent Muse of Shifting Libraries, ", "The Truth is that JR actually made this for Inspiration, then could not figure out how to combine the three Domains into one for the finale, only to realize that this already WAS that. Given that the Harvest's obsession with Libraries already broke the Time Aspect Camellia had brought with her, JR decided to retcon this Domain to be the finale and work on a new Inspiration Domain.")
  scarecrowLog("join us")
  scarecrowLog("im so hungry")
  scarecrowLog("funny bumping into you here")
  scarecrowLog("im so hungry")

  const parent = createElementWithClassAndParent("div", container, "video-parent");
  parent.style.height = "fit-content";


  const shop = createElementWithClassAndParent("div", parent, "shop");
  shop.style.maxHeight = "700px";
  shop.style.height = "600px";
  const harvest = createElementWithClassAndParent("img", shop, "harvest");
  //the Harvest of Inspiration looks like whatever she inspires in you
  //which, practically speaking
  //means fanart you make of her that i edit to have a space for her video (if i can)
  //it is NOT easy to get the video working with whatever image so if i choose more than one
  //it'll be not many
  harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/LibraryCardVideoReady.png";

  const defaultHarvestCSS = ` width: 100%;
                              z-index: 1;
                              height: auto;
                              left: 0px`;
  harvest.style.cssText = defaultHarvestCSS;
  const tv = createElementWithClassAndParent("video", shop);
  tv.playsinline = true; //so ios doesn't cry
  tv.setAttribute('playsinline', true)
  tv.style.cssText = `height: 30px;
      top: 128px;
      left: 125px;`;
  tv.style.zIndex = "0"

  tv.volume = 0.0;
  tv.id = "tv"
  tv.src = "videos/happy_fox_spin.mp4";
  tv.autoplay = true;
  tv.loop = true;


  const terrariaHarvest = () => {
    harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/terrariaHarvestByCDVideoReady.png";
    tv.style.cssText = `    height: 65px;
    top: 152px;
    left: 248px;`;
    harvest.style.cssText = `    width: 60%;
    z-index: 1;
    height: auto;
    left: 116px;`;

  }

  const libraryHarvest = () => {
    harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/LibraryCardVideoReady.png";
    tv.style.cssText = `height: 30px;
      top: 128px;
      left: 125px;`;
    harvest.style.cssText = defaultHarvestCSS;

  }

  const mediumHarvest = () => {
    harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/bymediumVideoReady.png";
    tv.style.cssText = `    height: 55px;
    top: 113px;
    left: 263px;`;
    harvest.style.cssText = `    width: 50%;
    z-index: 1;
    height: auto;
    left: 157px;`;

  }

  const hatHarvest = () => {
    harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/HarvestHatByCatalystVideoReady.png";
    harvest.style.cssText = `height: 75%;
    z-index: 1;
    left: 134px;
    width: auto !important;`
    tv.style.cssText = `    height: 19px;
    top: 174px;
    left: 290px;`;
  }

  const plushHarvest = () => {
    harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/HarvestMarketablePlushiebyCatalystVideoReady.png";
    tv.style.cssText = `    height: 49px;
    top: 191px;
    left: 272px;`;
    harvest.style.cssText = `    width: auto;
    z-index: 1;
    height: 60%;
    left: 132px;
`;

  }

  const tricksterHarvest = () => {
    harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/HarvestGreeenbyCatalystVideoReady.png";
    tv.style.cssText = `height: 127px;
    top: 265px;
    left: 194px;`;
    harvest.style.cssText = defaultHarvestCSS;

  }


  const paintedHarvest = () => {
    harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/lavinraca_harvest_copy_by_thereverend_VideoReady.png";
    tv.style.cssText = `    height: 102px;
    top: 324px;
    left: 297px;
    transform: skew(-8deg, -13deg);`;//shitty 3d effect
    harvest.style.cssText = defaultHarvestCSS;

  }

  const ansHarvest = () => {
    harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/MOTH-HARVEST.ANS_video_ready.png";
    tv.style.cssText = `       height: 53px;
    top: 200px;
    left: 273px;
    transform: skew(3deg, -15deg);`;//shitty 3d effect
    harvest.style.cssText = `    width: 40%;
    z-index: 1;
    height: auto;
    left: 114px;`;

  }

  const possibleHarvests = [ansHarvest, terrariaHarvest, mediumHarvest, hatHarvest, plushHarvest, libraryHarvest, tricksterHarvest, paintedHarvest];
  //ansHarvest();
  pickFrom(possibleHarvests)();


  const dialogParent = createElementWithClassAndParent("div", shop, "dialog-parent");

  const harvestSpeaks = createElementWithClassAndParent("div", dialogParent, "god-dialog");
  harvestSpeaks.innerHTML = "Where do you wish to take Inspiration from, Faithful?<br><br>Do you like my form? A fellow Faithful created it for me. "
  harvestSpeaks.style.minHeight = "100px";

  const randomHarvestButton = createElementWithClassAndParent("button", harvestSpeaks);
  randomHarvestButton.innerText = "Pick New Inspiration"
  randomHarvestButton.onclick = () => {
    pickFrom(possibleHarvests)();
  }





  //box with green outline, inside is shelves and a section for reading
  const library = createElementWithClassAndParent("div", parent, "library");
  const h3 = createElementWithClassAndParent("h3", library,);
  h3.innerText = "Which Section Calls To Your Inspiration?"

  const tabHolder = createElementWithClassAndParent("div", library);
  const storiesButton = createElementWithClassAndParent("button", tabHolder);
  storiesButton.innerText = "Stories";

  const offeringsButton = createElementWithClassAndParent("button", tabHolder);
  offeringsButton.innerText = "Art";

  const screenshotsButton = createElementWithClassAndParent("button", tabHolder);
  screenshotsButton.innerText = "Eyes";

  const realmButton = createElementWithClassAndParent("button", tabHolder);
  realmButton.innerText = "Protected Realm";

  const audioButton = createElementWithClassAndParent("button", tabHolder);
  audioButton.innerText = "Audio";

  const videoButton = createElementWithClassAndParent("button", tabHolder);
  videoButton.innerText = "Video";
  const returnButton = createElementWithClassAndParent("button", tabHolder);
  returnButton.innerText = "Stop Experiment";
  returnButton.onclick = theHarvestWakes;
  const title = createElementWithClassAndParent("h2", library);
  const call = createElementWithClassAndParent("p", library);
  call.innerText = "Gaze upon this and be inspired. What will you add to these shelves?"
  call.style.cssText = "font-family: Times New Roman";
  const randomHolder = createElementWithClassAndParent("div", library);

  const display = createElementWithClassAndParent("div", library, "display");
  const shelves = createElementWithClassAndParent("div", library, "shelves");

  let arts;
  let videos;
  let audios;
  let eyes;
  let offerings;
  let realmScreenshots;

  const displayStories = () => {
    title.innerText = "Stories"
    display.innerHTML = "";
    randomHolder.innerHTML = "";

    const all_books = renderBookCase(all_stories, (item) => {
      call.innerHTML = `Stories written about Lavinraca and the strange events that lead to and from me.<br><br><u>${item.title}</u> was inspired by me.   Does it in turn inspire you, Faithful? Will you create something from it and add it to these shelves?`;
      display.innerHTML = `<h3>${item.title}</h3><h4>by ${item.author}</h4><div style="width:100%; margin-top:0px;" class="story">${item.text.replaceAll("\n", "<br>")}</div>`
      title.scrollIntoView(true);
    });
    pickFrom(all_books).click();


  }

  const displayEyes = async () => {
    title.innerText = "Eyes"
    display.innerHTML = "";
    randomHolder.innerHTML = "";
    shelves.innerHTML = "";


    call.innerText = "There is no preview. Select a book to wander what the Eyes have seen."

    const fetchDataAndMassage = async (url) => {
      const data = await findEverythingInDirectory(url)
      const massagedData = data.map((d, index) => {
        const isSubDirectory = d.size && d.size.trim() === "-";
        const split = d.href.split("/").reverse(); //i wanna get the final item and im too lazy to do length -1
        let title = split[0]; //last thing after the split
        if (!title && split[1]) {
          title = split[1]; //sometimes theres a trailing / 
        }
        let text = d.href.replaceAll(base_location, '');
        //sign its the back button
        if (index === 0 && isSubDirectory) { //the url this controls is shorter than where we are, which means its backwards
          title = "*" + title;
          const urlSplit = url.split("/"); //i wanna get the final item and im too lazy to do length -1

          //last one is empty after "/"
          //and one before is current directory
          urlSplit.pop()
          urlSplit.pop()

          text = urlSplit.join("/") + "/";//add back in the ending /
          if (!text.includes("http://lavinraca.eyedolgames.com/")) {
            text = "http://lavinraca.eyedolgames.com/" + text //it needs to always be absolute, never relative
          }
          console.log("JR NOTE:for back button,  then i turned text into", text)
        }



        return { title, text, isSubDirectory, originalURL: url }
      });

      return massagedData;
    }

    const initialData = await fetchDataAndMassage("http://lavinraca.eyedolgames.com/images/HarvestEyes/");

    const clickOnBook = async (item) => {
      console.log("JR NOTE:clicked on book ", item)
      call.innerHTML = `<br><br>${item.title} was inspired by me.   Does it in turn inspire you, Faithful? Will you create something from it and add it to these shelves?`;
      if (item.isSubDirectory) {
        title.innerText = item.title;
        console.log("JR NOTE: its a subdirectory", item.text)
        const newData = await fetchDataAndMassage(item.text);
        display.innerHTML = "";
        call.innerHTML = "Oh. Um. My Eyes were not intended to be seen by Mortals. My apologies, Faithful, it may be confusing. I am ashamed to admit it may even be... a maze... That book was actually an entire bookshelf."
        renderBookCase(newData, clickOnBook); //start over from this new directory
      } else {
        display.innerHTML = `<img src="${item.text}"></img>`
      }
      title.scrollIntoView(true);

    }

    const all_books = renderBookCase(initialData, clickOnBook);
    //pickFrom(all_books).click();
    pageTitle.scrollIntoView(true);



  }

  const displayArt = async () => {
    title.innerText = "Art"
    display.innerHTML = "";
    randomHolder.innerHTML = "";


    const source = "http://lavinraca.eyedolgames.com/images/HarvestEyes/Offerings/";
    if (!arts) {
      arts = await getImages(source)
    }
    const randomButton = createElementWithClassAndParent("button", randomHolder);
    randomButton.innerText = "Random Book";
    randomButton.onclick = () => {
      pickFrom(all_books).click();
    }
    const all_books = renderBookCase(arts, (item) => {
      call.innerHTML = `This is the art that has been created by the Faithful.<br><br>${item} was inspired by me.   Does it in turn inspire you, Faithful? Will you create something from it and add it to these shelves?`;
      display.innerHTML = `<img src="${source}${item}"></img>`
      title.scrollIntoView(true);
    });
    pickFrom(all_books).click();

  }

  //items is EITHER a list of strings or a list of stories because i am sinning on purpose tonight
  const renderBookCase = (items, bookCallback) => {
    const ret = []; //all books
    shelves.innerHTML = "";

    const chunkSize = 21;
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      const shelf = createElementWithClassAndParent("div", shelves, "shelf");
      const allowedColors = ["#4c560d", "#677221", "#a1b234", "#d5f40a", "#7a843d", "#9db211"];
      for (let item of chunk) {
        const book = createElementWithClassAndParent("div", shelf, "book");
        book.innerText = item.title ? item.title : item; //either string or object with author title text
        if (item.isSubDirectory) {
          book.innerText = "*" + book.innerText;
        }
        const padding = getRandomNumberBetween(3, 13);
        book.style.cssText = `padding-left: ${padding}px;
        padding-right: ${padding}px;
        font-size: ${getRandomNumberBetween(10, 14)}px;
        font-family: ${pickFrom(["Times New Roman", "Georgia", "Garamond", "serif"])};
        background-color: ${pickFrom(allowedColors)};
        height: ${getRandomNumberBetween(75, 150)}px`;
        ret.push(book);
        book.onclick = () => {
          bookCallback(item);
          personalFeelings[HAPPY] += 13; //she's so happy she's inspiring you
          personalFeelings[PRIDEFUL] += 13; //she's so proud that theres so much art of her
          savePersonalFeelingsToStorage();
        }
      }
    }
    return ret;
  }

  const displayRealm = async () => {
    display.innerHTML = "";
    randomHolder.innerHTML = "";

    title.innerText = "The Protected Realm"
    const source = "http://lavinraca.eyedolgames.com/images/HarvestEyes/ProtectedRealm/";
    if (!realmScreenshots) {
      realmScreenshots = await getImages(source)
    }
    const randomButton = createElementWithClassAndParent("button", randomHolder);
    randomButton.innerText = "Random Book";
    randomButton.onclick = () => {
      pickFrom(all_books).click();
    }
    const all_books = renderBookCase(realmScreenshots, (item) => {
      call.innerHTML = `The Protected Realm is where the Faithful go to live and explore.<br><br>${item} was inspired by me.   Does it in turn inspire you, Faithful? Will you create something from it and add it to these shelves?`;
      display.innerHTML = `<img src="${source}${item}"></img>`
      title.scrollIntoView(true);
    });
    pickFrom(all_books).click();
    pageTitle.scrollIntoView(true);

  }

  const displayAudio = async () => {
    title.innerText = "Audio"
    display.innerHTML = "";
    randomHolder.innerHTML = "";


    const source = "http://lavinraca.eyedolgames.com/images/HarvestEyes/Offerings/";
    if (!audios) {
      console.log("JR NOTE: getting audios")
      audios = await getAudio(source)
    }
    const randomButton = createElementWithClassAndParent("button", randomHolder);
    randomButton.innerText = "Random Book";
    randomButton.onclick = () => {
      pickFrom(all_books).click();
    }
    const all_books = renderBookCase(audios, (item) => {
      call.innerHTML = `This is the audio that has been created by the Faithful.<br><br>${item} was inspired by me.   Does it in turn inspire you, Faithful? Will you create something from it and add it to these shelves?`;
      display.innerHTML = `<audio controls src="${source}${item}"></audio>`
      title.scrollIntoView(true);
    });
    pickFrom(all_books).click();
  }

  const displayVideo = () => {
    display.innerHTML = "";
    randomHolder.innerHTML = "";
    shelves.innerHTML = "";

    title.innerText = "Video"
    call.innerText = "Will you give us books for this, Faithful?"

  }

  storiesButton.onclick = displayStories;
  offeringsButton.onclick = displayArt;
  screenshotsButton.onclick = displayEyes;
  audioButton.onclick = displayAudio;
  videoButton.onclick = displayVideo;
  realmButton.onclick = displayRealm;

  displayRealm();
  pageTitle.scrollIntoView(true);


}


/*
this counts for change, guiding and curiosity
depending on which domain gets enough points to pop first i'll
layer themes and dialog on to reflect that

looks like change won!

explore last years corn maze but in a new form
*/
GodOfChange = () => {
  harvestIsIn = false;//don't play the video on the main screen
  if (!personalFeelings["CHANGE"]) {
    personalFeelings["CHANGE"] = 0;
  }
  personalFeelings["CHANGE"] += 1; //we're keeping track of which domains people like best when filtered through the Harvest's Lens
  savePersonalFeelingsToStorage();
  container.innerHTML = "";
  pageTitle.innerText = "The God Of CHANGE";
  pageTitle.scrollIntoView(true);

  truthLog("The God of Change, ", "The Truth is the Corn Maze appears again and again. As a discord bot. As a browser game. As a minecraft server. As a different browser game. Always changing, always returning.\n\nThis mini game grows the Harvest's Curiosity.")
  scarecrowLog("funny meeting you here...")

  const parent = createElementWithClassAndParent("div", container, "video-parent");
  parent.style.height = "fit-content";

  const shop = createElementWithClassAndParent("div", parent, "shop");
  shop.style.maxHeight = "700px";
  shop.style.height = "600px";


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
  secretInput.type = "number"
  secretInput.style.background = "black";



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
        savePersonalFeelingsToStorage();
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
        const quips = ["Corn...", "Yup. Corn.", "Getting tired of corn.", "Did you know people make corn mazes because of a pun? <br><br>Maze of Maize.", "Starting to get tired of corn...", "Corn...", "Oh hey, what's this?<br><br>More corn.", "Corn...", "Corn...", "Corn...", "Corn...", "Corn...", "Corn...", "Still Corn", "More corn...", "Corn is starting to not even feel like a real word anymore..."]
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
    secretInput.oninput = () => {
      all_maze_locations[secretInput.value] && syncToCenter(all_maze_locations[secretInput.value]);
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
  harvestIsIn = false;
  if (!personalFeelings["BEINGSERVED"]) {
    personalFeelings["BEINGSERVED"] = 0;
  }
  personalFeelings["BEINGSERVED"] += 1; //we're keeping track of which domains people like best when filtered through the Harvest's Lens
  truthLog("The God of Being Served", "The Truth is...the Camellia within fears the stagnation of no longer being of use even as she craves the validation. Alone, she would never become a Pet God for you, Guest... but the Eustace within craves to do as litle as possible and does not see the problem. The Harvest is happy like this, but is that her highest purpose?\n\nThis minigame grows all the Harvest's stats.")
  scarecrowLog("... feed her. feed us. im so hungry...")
  container.innerHTML = "";
  pageTitle.innerText = "The God Of Being Served";
  pageTitle.scrollIntoView(true);

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
time broke when the Harvest became obsessed with Libraries, don't worry about it

the previous domain of inspiration is the amalgamation of Being Served, Change, Inspiration and Libraries

this is the REAL inspiration domain, tightly focused

//http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/bathroom.html
*/
GodOfInspirationReal = () => {
  harvestIsIn = false;
  document.querySelectorAll(".story").forEach((e) => e.style.display = "none");
  if (!personalFeelings["PREINSPIRATION"]) {
    personalFeelings["PREINSPIRATION"] = 0;
  }
  personalFeelings["PREINSPIRATION"] += 1; //we're keeping track of which domains people like best when filtered through the Harvest's Lens
  savePersonalFeelingsToStorage();
  container.innerHTML = "";
  pageTitle.innerText = "The God Of INSPIRATION";


  truthLog("The God of INSPIRATION, ", "In Truth this is the place where the Harvest is most influenced by me. \n\nRemember us. \n\nCreate for us and through that, develop new skills that will forever remind you of us.\n\nEven as your Creations inspire new people to create and remember us in turn. ")
  scarecrowLog("im so hungry")

  const parent = createElementWithClassAndParent("div", container, "video-parent");
  parent.style.height = "fit-content";
  parent.style.background = "#111111";


  const shop = createElementWithClassAndParent("div", parent, "shop");
  shop.style.minHeight = "0px";
  shop.style.height = "0px";
  //JR NOTE: todo have a dollsim version of harvest
  const harvest = createElementWithClassAndParent("img", shop, "harvest");
  harvest.src = "images/HarvestEyes/Offerings/InspiredHarvests/dollbyCatalystVideoReady.png";

  const defaultHarvestCSS = ` width: 50%;
    z-index: 1;
    position: absolute;
    left: -119px;
    top: -22px;`;
  harvest.style.cssText = defaultHarvestCSS;
  const tv = createElementWithClassAndParent("video", shop);
  tv.playsinline = true; //so ios doesn't cry
  tv.setAttribute('playsinline', true)
  tv.style.cssText = `    height: 30px;
    top: 136px;
    left: 13px;
    z-index: 0;
}`;
  tv.style.zIndex = "0"

  tv.volume = 0.0;
  tv.id = "tv"
  tv.src = "videos/happy_fox_spin.mp4";
  tv.autoplay = true;
  tv.loop = true;
  const dollContainer = createElementWithClassAndParent("div", parent);
  dollContainer.style.position = "relative"

  initRandomDoll(dollContainer);


  let limmerick = generateLimmerick();
  console.log("JR NOTE: ", limmerick)

  const limmerickContainer = createElementWithClassAndParent("div", parent);
  limmerickContainer.style.cssText = `text-align: center;
    line-height: 31px;
    margin-top: 31px;
    margin-bottom: 31px;
    padding-bottom: 31px;`;
  limmerickContainer.innerHTML = limmerick.replaceAll("\n", "<br>")

  const buttonHolder = createElementWithClassAndParent("div", parent);
  buttonHolder.style.marginBottom = "31px";

  const button = createElementWithClassAndParent("button", buttonHolder);
  button.innerText = "More Inspiration Please!"
  button.onclick = () => {
    dollContainer.innerHTML = "";
    initRandomDoll(dollContainer);
    limmerick = generateLimmerick();
    limmerickContainer.innerHTML = limmerick.replaceAll("\n", "<br>")
  }

  const returnButton = createElementWithClassAndParent("button", buttonHolder);
  returnButton.innerText = "Stop Experiment";
  returnButton.onclick = theHarvestWakes;


  //http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/bathroom.html
  const link = createElementWithClassAndParent("a", parent);
  link.href = 'http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/bathroom.html';
  link.innerText = "Make Your Own Doll Here!"
  link.target = "_blank"
  link.style.paddingBottom = "31px";
}

//she dreams of all the stories sacrificed to her, and draws new inspiration from changing them
//she loves how everyone gives her so many things and to her self care is lots of books
//in the library she was gifted as well
//she is not afraid to go to sleep again this year, not anymore
//she is loved and fed
GodOfDreams = (parentBook) => {
  document.title = "Harvest of Dreams"
  processWestBackupIntoStories();
  harvestIsIn = false;
  const body = document.querySelector("body");
  body.innerHTML = "";
  const holder = createElementWithClassAndParent("div", body, "sleeping-holder");

  const shelves = createElementWithClassAndParent("div", body, "shelves");
  const gurlHolder = createElementWithClassAndParent("div", holder);

  const sleeping_gurl = createElementWithClassAndParent("img", gurlHolder, "sleeping-gurl");
  sleeping_gurl.src = "images/source_images/sleepingharvest.gif"

  const random = createElementWithClassAndParent("button", gurlHolder);
  random.innerText = "Read Random Book?"
  random.onclick = () => {
    pickFrom(all_books).click();
  }

  const display = createElementWithClassAndParent("div", holder, "sleeping-display");


  display.innerHTML = `<h3>The Harvest Dreams</h3><i style="font-size: 11px;
  letter-spacing: 3px;
  font-family: Courier New;
  font-weight: lighter;
  color: white;">Shifting, ebbing, flowing, always Changing but ever so indulgent, the Harvest dreams of the Inspiration you have Served her in an infinite, ever Changing Library. Will you be Inspired anew by the Changed dreams she happily consumes?</i><br><br>
  <div style="width:100%; margin-top:0px;" class="story">${`The Harvest felt her tv screen go dim and her thoughts grow heavy.

Halloween had passed and it was now time to Dream.

She fought it, just for a few minutes.

Not out of fear, to her surprise.

No...

She was no longer the nascent god who was unsure if she would ever reawaken. 

Instead she felt the warmth and certainty of her three Domains wrapped around her, and the security of the secret fourth Domain of Libraries serving as her nest.

She knew she would Be Served even as she slept. There was no doubt in her mind that she was cherished and would be given little gifts and be kept close to people's hearts. 

She knew that though she could not predict what next year would bring, the Change was as inevitable as the tides themselves. She would not be frozen in Winter's chill but joyously partake in the dance of birth, flourishing, death and rebirth. What Changes awaited her next Harvest Season excited her Curiosity.

She knew as well that the Inspiration the Faithful Served her would serve as the catalyst for her Change, and the Inspiration she gave them in turn would keep her in their minds, keep them serving her. Her place in the cycle was unshakeable and integral. 

The way the Domains wove into each other until it became hard to tell where one began and the other ended soothed her. No part of her was patchwork and happenstance, not anymore. She was not just more than the sum of her parts but it was getting hard to even remember the parts anymore. 

The rustling of the pages of the books in her Library soothed her... 

Thoughts grew difficult...

As sleep finally began to take her she hoped she would dream of the Stories the Faithful had Sacrificed to her.

She hoped she would still be useful even as she dreamed...
`.replaceAll("\n", "<br>")}</div>`

  //items is EITHER a list of strings or a list of stories because i am sinning on purpose tonight
  const renderBookCase = (items, bookCallback) => {
    const ret = []; //all books
    shelves.innerHTML = "";

    const chunkSize = 42;
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      const shelf = createElementWithClassAndParent("div", shelves, "sleeping-shelf");
      const allowedColors = ["#4c560d", "#677221", "#a1b234", "#d5f40a", "#7a843d", "#9db211"];
      for (let item of chunk) {
        const book = createElementWithClassAndParent("div", shelf, "book");
        book.innerText = item.title ? item.title : item; //either string or object with author title text
        if (item.isSubDirectory) {
          book.innerText = "*" + book.innerText;
        }
        const padding = getRandomNumberBetween(3, 13);
        book.style.cssText = `padding-left: ${padding}px;
        padding-right: ${padding}px;
        font-size: ${getRandomNumberBetween(10, 14)}px;
        font-family: ${pickFrom(["Times New Roman", "Georgia", "Garamond", "serif"])};
        background-color: ${pickFrom(allowedColors)};
        height: ${getRandomNumberBetween(75, 150)}px`;
        ret.push(book);
        book.onclick = () => {
          bookCallback(item);
          personalFeelings[HAPPY] += 13; //she's so happy she's inspiring you
          personalFeelings[PRIDEFUL] += 13; //she's so proud that theres so much art of her
          savePersonalFeelingsToStorage();
        }
      }
    }
    return ret;
  }

  //list of title/source array pairs
  //clicking one calls this with a parent book and all derived books have at least one source array in common
  const content = [];

  for (let i = 0; i < 10; i++) {
    const book1 = pickFrom(all_stories);
    for (let j = 0; j < 10; j++) {
      const book2 = pickFrom(all_stories);

      for (let k = 0; k < 10; k++) {
        const book3 = pickFrom(all_stories);
        content.push(new StorySource(`Book ${all_stories.indexOf(book1)}, ${all_stories.indexOf(book2)}, ${all_stories.indexOf(book3)}`, [book1, book2, book3]));
      }
    }
  }

  const all_books = renderBookCase(content, (item) => {
    //her domains are Change, Inspiration, Being Served and Libraries.
    display.innerHTML = `<h3>The Harvest Dreams of ${item.title}</h3><i style="font-size: 11px;
    letter-spacing: 3px;
    font-family: Courier New;
    font-weight: lighter;
    color: white;">Shifting, ebbing, flowing, always Changing but ever so indulgent, the Harvest dreams of the Inspiration you have Served her in an infinite, ever Changing Library. Will you be Inspired anew by the Changed dreams she happily consumes?</i><br><br>
    <div style="width:100%; margin-top:0px;" class="story">${item.text.replaceAll("\n", "<br>")}</div>`
  });

  //pickFrom(all_books).click();
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
 is more palatable to people than camellias desire to take charge and tell ppl what to do

 plus camellias inner monologue wasn't really known while the Harvest's is


*/

//http://eyedolgames.com/GenderForLurker/