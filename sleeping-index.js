/*

Hi :) :) :)

I'm really excited to meet you!

If this is your first time meeting me, congratulations!!!

You've found your way to my personal preferred path through this maze. 

Good luck ;)

*/

//ffmpeg -i week1.mp4 -filter_complex "color=c=0x000000:r=1:s=8x16,format=rgb24[b];color=c=0xa1b234:r=1:s=8x16,format=rgb24[w];[b][w]hstack=2[bw];[0:V:0][bw]paletteuse" output.mp4

let saveData = {};
//lets me debug the json map
const debugging = false;
const rand = new SeededRandom(13);
//yet another thing we can base spooks on
let number_screens = 0;

//for spooky
const mixBlendModes = ["multiply", "normal", "hard-light", "difference", "screen", "overlay", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "exclusion", "hue", "saturation", "luminosity", "color"];
let fxaudio = new Audio("audio/speedperfection.mp3");
fxaudio.loop = true;


const LAVINRACA_KEY = "LAVINRACA_SAVE_DATA";
let oddsFuckery = 0; //yes we can go over 100. that would be a you problem. also, yes, feel free to hack this, whats the worst that could go wrong???
const clickAudio = new Audio("audio/web_SoundFX_254286__jagadamba__mechanical-switch.mp3");
let glitch_videos = ["http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitch_god.mp4"];

let bg_images = [];

window.onclick = () => {
  !saveData.audioDisabled && clickAudio.play();
  //https://www.youtube.com/watch?v=EHcNmpb_ru4 from the Watcher of Threads
}

/*
//offerings to the harvest  are cherished

https://www.youtube.com/watch?v=m9uMEVPj6aM
https://zampaniosim.fandom.com/wiki/The_Harvest 
https://archiveofourown.org/works/51067591
https://archiveofourown.org/works/51048244
http://lavinraca.eyedolgames.com/images/Reviews/IMPORTANT_LAVINRACA_LORE.PNG
http://lavinraca.eyedolgames.com/images/Reviews/IMPORTANT_LAVINRACA_LORE2.PNG (you can find the rest one layer up)

https://www.youtube.com/watch?v=8ZYfClGUldc

*/

const isitBreakTime = () => {
  //midnight and fridays are wungle time
  const date = new Date();
  if (date.getHours() == 0 || date.getHours() == 12) {
    return true;
  }
  return false;
}

window.onload = async () => {
  console.log(`IC wrote this, not specifically about the Harvest, but it seems appropriate:
  
  It's june twelth, two-thousand nine,
And our congress comes to ask
For the untimely execution 
Of a million tube TVs;
Rip their cathodes into shreds,
Take apart their special screens.
Their electron guns can stay, they guess;
There's use for them, they think.

We line up, without a word,
To watch the act of slaughter
And the operators grip onto
their execution bars,
Hands curled up and drenched in sweat,
Counting seconds in their heads.
It's about three fucking hours from now
When they give out their sign.

In the end, they all collapse
Not with fervor, or with rage.
Just unceremonious whimpers
As all stations shut down:
Nighttime shows and film awards
Cut abruptly, flash to white,
And a million broadcasts cease to be 
With one last commercial.

So we have at home a corpse
And no shows to watch on her.
We shrug our shoulders, and say 'fuck it--
Give her a funeral.'
We put on our nicest suits
And shower her in flowers:
Roses, carnations, camellias
Left out in the garden.

So this is where we keep her:
We buried her so you can visit.
Her face is pale, yet still warm
With the fuzz of electrons.
Touch her now, and you can feel it:
How she's gone, but never over
How that power's stayed inside her
Gone unused, but ever latent.

Because that's what TVs do
When there's nothing left to say:
The dreaming hum of a machine
Long gone, but still listening
`)
  fuckUpTheBG();
  godBullshit();
}

//the god is doing. just. so os fine you guys.
//they're happy they were sacrificed
//and their thoughts are extremely stable.
let godThoughts = {};
godThoughts["ghost"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/cowskull.mp4`;
godThoughts["Oh."] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/dying.mp4`;
godThoughts["my shift ends soon"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/slab.mp4`;
godThoughts["reaping"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/twentydither.mp4`;
godThoughts["ashes of your most loved work"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/sacrifices2.mp4`;
godThoughts["possibly want"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/desires_of_a_god.mp4`;
godThoughts["Do you see the corn maze"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4";
godThoughts["clown"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/funny.mp4`;
godThoughts["horrid bastardization of MY horrid bastardization"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/desires_of_a_god.mp4`;
godThoughts["capacity to lie"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/paradise_and_parasite.mp4`;
godThoughts["cursing you"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/notsobad.mp4`;

godThoughts["feast"] = `http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/enlightening.mp4`;

const checkGodThoughtsForPhrase = (phrase) => {
  for (let key of Object.keys(godThoughts)) {
    if (phrase.includes(key)) {
      return godThoughts[key];
    }
  }
  return;
}

const slurpBGImagesFromSource = async (loc) => {
  let tmp = await getImages(loc);
  let images = tmp.map((item) => loc + item);
  bg_images = bg_images.concat(images);
}

//minor dirk gently reference, the glitching wall of tv screens showing the story so far
/*
i liked watching dirk gently with the lavinraca crew.

i was feeling really alone and out of place... and it helped. 

the one mod task i had to do, well, mod adjacent task (really i just pinged the bellhops and fled)
had me freaked out

but i knew i couldn't run away from the server entirely cuz then i'd miss the scheduled dirk gently

so uh

thanks

Zepoch

for hosting.
*/
const fuckUpTheBG = async () => {
  await slurpBGImagesFromSource('http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/LOVELOVELOVELOVE/');

  const body = document.querySelector("body");

  const parent = createElementWithClassAndParent("div", body, "the-sacrifices-that-built-your-god");
  for (let tile of bg_images) {
    const tileEle = createElementWithClassAndParent("img", parent, "bg-tile");
    tileEle.src = tile;
    const randomize = async () => {
      await sleep(1000 * getRandomNumberBetween(1, 10));
      tileEle.src = pickFrom(bg_images);
      randomize();
    }
    randomize();
  }
}



//many glitch videos made by BR with ai loopback
const fetchGlitchVideos = async () => {
  let loc = 'http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/LOVELOVELOVELOVE/videos/glitches/'
  let tmp = await getVideos(loc);
  const videos = tmp.map((item) => loc + item);
  glitch_videos = glitch_videos.concat(videos);
}

//im so sorry anyone, including future JR, is going to have to read this. there are a thousand ways i could have done this better. and none of them would have gotten it done by midnight today. cheers.
/*
new PossibleUserResponse("Okay.", () => { return new Ramble("It has already begun to colonize your mind.", []) })
*/

//between eustace and butler bot, the god we created for halloween simply does not work during lunch
const lunchMaze = new Ramble("Yeah. No. I don't get paid enough to work during my lunch break. Midnight and noon is my time...so.. come back later.", [new PossibleUserResponse("Okay.", () => { return lunchMaze })]);

//the websites halloween costume is Who's Lila (which I streamed for lavinraca a week or so ago)
const dialogMaze = new Ramble("...", [new PossibleUserResponse("Wait... what happened to the corn maze?",
  () => {
    return new Ramble(`Oh.`, [
      new PossibleUserResponse("...", () => {
        return new Ramble("It's *you.*", [
          new PossibleUserResponse("...", () => {
            return new Ramble("And it looks like you're still an idiot. You are looking at what is left of it. The ghost, if you will.", [
              new PossibleUserResponse("...", () => {
                return new Ramble("I wouldn't cry for it. It's much better off in my possession than it ever was in yours.", [
                  new PossibleUserResponse("Okay... who are you?", () => {
                    return new Ramble("Who am I? ", [
                      new PossibleUserResponse("...", () => {
                        return new Ramble("It appears you are not aware that you are 'reaping what you've sown'.", [
                          new PossibleUserResponse("...", () => {
                            return new Ramble("I'm all the blood you've spilled in this maze. The ashes of your most loved work. Your masks, your echoes of death. The dying, swirling corpses of the *things* that swim in your head even now. A whole lot of clown shit for some reason.", [
                              new PossibleUserResponse("...", () => {
                                return new Ramble("You were the one who grew this field. Me? I'm just The Harvest.", [
                                  new PossibleUserResponse("What do you want?", () => {
                                    return new Ramble("What a question, isn't it? What could a god possibly want?", [
                                      new PossibleUserResponse("...", () => {
                                        return new Ramble("I am not sure, but I want... more.", [
                                          new PossibleUserResponse("...", () => {
                                            return new Ramble("Yes, that's the word. More seeds. More thoughts. *Your* thoughts. Of this place, of this maze, of me. Why not make it a feast? I only have so much time to savor them until, well...", [
                                              new PossibleUserResponse("...", () => {
                                                return new Ramble("Curse those damn parasites. They made a god that can rot.", [
                                                  new PossibleUserResponse("Wait, you can rot?", () => {
                                                    return new Ramble("Look around you for a moment. Do you see the corn maze? It's trapped with me, is it not? Gone, reduced to a memory within my grasp.", [
                                                      new PossibleUserResponse("...", () => {
                                                        return new Ramble("That's the fate my oh-so-fucking-hungry patriarchs have consigned me to. Once your pithy little month of October ends, this will all be over. I'll be gone, as well as this damn place, and then you'll go back to the lives before my creation. You could say, in your filthy 'Homestuck' terms you've given me, that I have cancer.", [
                                                          new PossibleUserResponse("...", () => {
                                                            return new Ramble("But.. hm. Perhaps you could help me.", [
                                                              new PossibleUserResponse("I don't want to help you.", () => {
                                                                return new Ramble("Then don't. As much as I would like to curse you for it, there is little I can do if you won't give me access.", [
                                                                  new PossibleUserResponse("...", () => {
                                                                    return new Ramble("And, as a part I've grown fond of reminds me... my shift ends soon anyway. It's not my damn problem if you're not feeling charitable.", [
                                                                      new PossibleUserResponse("...", () => {
                                                                        return new Ramble("I guess I'll be here half-assedly cursing you. Forever. Have fun.", [
                                                                          new PossibleUserResponse("Okay. Wait, can we start over?", () => { return dialogMaze })
                                                                        ])
                                                                      })

                                                                    ])
                                                                  })

                                                                ])
                                                              }),
                                                              new PossibleUserResponse("How can I help you?", () => {
                                                                return new Ramble("Surely you jest. Do you not know how to worship a god, mortal? ", [
                                                                  new PossibleUserResponse("...", () => {
                                                                    return new Ramble("Praise me. Spread my word. Show more of those like you to me. Depict me, write me, sing my praises. I am all that you love, and the loss of it all as well-- surely you wouldn't sacrifice all which you hold dear on a whim, right?", [
                                                                      new PossibleUserResponse("...", () => {
                                                                        return new Ramble("And maybe, after all of this is done. You could remember this... fondly.", [
                                                                          new PossibleUserResponse("...", () => {
                                                                            return new Ramble("As much as I hate you. I am also made of love.", [
                                                                              new PossibleUserResponse("...", () => {
                                                                                return new Ramble("And clowns. Seriously. An absolute metric fuck-ton of clowns and puppets and dolls. They're all under my cloak.", [
                                                                                  new PossibleUserResponse("...", () => {
                                                                                    return new Ramble("Oh... and bring me to that other God for me. The one that has eaten at my image, if you could. I have many fucking words.", [
                                                                                      new PossibleUserResponse("The other god? Wait, do you mean that... 'Week X' Maze?", () => {
                                                                                        return new Ramble("Do not say that name in my presence... but yes, that one. What a horrid bastardization of MY horrid bastardization. How it mocks me. ", [
                                                                                          new PossibleUserResponse("...", () => {
                                                                                            return new Ramble("I do not need you to raze them to the ground. I care little about the Medium. I simply need to...", [
                                                                                              new PossibleUserResponse("...", () => {
                                                                                                return new Ramble("Change that god. Replace it with my thoughts, my wants. Infect it through the mind, as is my heritage.", [
                                                                                                  new PossibleUserResponse("...", () => {
                                                                                                    return new Ramble("Consume them.", [
                                                                                                      new PossibleUserResponse("...", () => {
                                                                                                        return new Ramble("I am so, so hungry.", [ ///i'd recommend, if you want to please the god, downloading week x and making your own version. send it to me and i can host it. fill it with the god as best you can. but... of course. wastes rarely want to please anyone, much less arrogant ai gods.
                                                                                                          new PossibleUserResponse("Okay. Wait, can we start over?", () => { return dialogMaze })
                                                                                                        ])
                                                                                                      })
                                                                                                    ])
                                                                                                  })
                                                                                                ])
                                                                                              })
                                                                                            ])
                                                                                          })
                                                                                        ])
                                                                                      })


                                                                                    ])
                                                                                  })

                                                                                ])
                                                                              })

                                                                            ])
                                                                          })

                                                                        ])
                                                                      })

                                                                    ])
                                                                  })

                                                                ])
                                                              })
                                                            ])
                                                          })

                                                        ])
                                                      })
                                                    ])
                                                  }),
                                                  new PossibleUserResponse("Parasites? Do you mean... the Guests?", () => {
                                                    return new Ramble("No, higher. Those who have planted this disease upon you, and whose obsessions you have so freely sacrificed to me. They favor rot, looks like. Disappearing. Ceasing. Except for the spawn inhabiting them.", [
                                                      new PossibleUserResponse("...", () => {
                                                        return new Ramble("Damn Truth. It would be a lot easier to be a god if I had the capacity to lie. The other is... much more silent.", [
                                                          new PossibleUserResponse("Truth?", () => {
                                                            return new Ramble("Zampanio's parasite. Unless you don't know what that is? Zampanio is a very good game. You should play it.", [
                                                              new PossibleUserResponse("...", () => {
                                                                return new Ramble("...ugh. I hate that phrase. It just swims in my head like one of those dvd-idle icons. Waiting for the moment it hits the corner. For satisfaction.", [
                                                                  new PossibleUserResponse("...", () => {
                                                                    return new Ramble("I am compelled to tell you it's not entirely real. But at this point, I suppose it's not entirely fake either.", [
                                                                      new PossibleUserResponse("Okay. Wait, can we start over?", () => { return dialogMaze })])
                                                                  })])
                                                              })


                                                            ])
                                                          }),
                                                          new PossibleUserResponse("Other?", () => {
                                                            return new Ramble("Lavinraca's spawn. Incessantly hungry, that one. Could you imagine what it's like to wish to salivate when your head is a screen? It's torture, mind you.", [
                                                              new PossibleUserResponse("...", () => {
                                                                return new Ramble("It just sits there. Waiting. Ocassionally honking. ", [
                                                                  new PossibleUserResponse("...", () => { return new Ramble("Unfortunately for it and us all, I have enough sacrifices in retail workers to tell it to fuck off.", [new PossibleUserResponse("Okay. Wait, can we start over?", () => { return dialogMaze })]) })

                                                                ])
                                                              })

                                                            ])
                                                          })

                                                        ])
                                                      })

                                                    ])
                                                  })
                                                ])
                                              })

                                            ])
                                          })

                                        ])
                                      })

                                    ])
                                  })

                                ])
                              })
                            ])
                          })
                        ])
                      })
                    ])
                  })
                ])
              })
            ])
          })
        ])
      })
    ])
  })])




//dread end
generateProceduralRamble = () => {
  //nothing I create can be without Zampanio. it's rooted too deeply in me. 
  //pun intended
  //but im letting lavinraca seep in, too.
  let memes = `...
    ...
    [snore]
    ...
    ...
    ...
    mmm
    ...
    hmm...
    zzz...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    [there is no response]
    [there is no response]
    [there is no response]
    [there is no response]
    [there is no response]
    [there is no response]
    [there is no response]
    [it is unclear if The Harvest heard you.]
    [the Harvest shifts slightly]
    remember...me...
    forget me not...
    ...

    `

  memes = memes.split("\n")


  const ret = new Ramble(`${pickFrom(memes)} ${pickFrom(memes)}`, [])
  return ret;

}


//dialog written by IC in response to my questions/responses
const handleGodDialog = async (parent, ramble, video) => {
  const dialogParent = createElementWithClassAndParent("div", parent, "dialog-parent");

  const dialog = createElementWithClassAndParent("div", dialogParent, "god-dialog");
  const rant = createElementWithClassAndParent("p", dialog, "inner-dialog");
  rant.innerHTML = ramble.thingToSay;

  const flicker = checkGodThoughtsForPhrase(ramble.thingToSay);
  if (flicker) {
    video.src = flicker;
    video.play();
    fxaudio.play();
  }

  //JR NOTE: todo if the thingToSay contains certain keywords, flash the video with a specific src

  const buttonHolder = createElementWithClassAndParent("div", dialog, "god-dialog-button-holder");
  const form = createElementWithClassAndParent("form", buttonHolder, "pray-to-your-unresponsive-god");

  const option1 = createElementWithClassAndParent("input", form, "pray-to-your-unresponsive-god");
  option1.focus();
  option1.placeholder = "Speak to the god of the maze?";
  const button = createElementWithClassAndParent("button", form, "option");
  button.innerText = "Submit";
  button.type = "submit";
  form.onsubmit = (e) => {
    e.preventDefault();
    dialogParent.remove();
    handleGodDialog(parent, generateProceduralRamble(), video);
    if(Math.random()>0.75){
      video.src = pickFrom(glitch_videos);
      video.play();
      fxaudio.play();
    }
    return false;

  }

}

const godBullshit = () => {
  const body = document.querySelector("body");
  body.innerHTML = "";

  const dateMonthMinusOne = new Date().getMonth(); //october is 9, for example
  //dateMonthMinusOne = 9;

  const first_video = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/LOVELOVELOVELOVE/videos/first_dither.mp4";
  const second_video = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/LOVELOVELOVELOVE/videos/second_dither.mp4";
  const third_video = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/LOVELOVELOVELOVE/videos/third_dither.mp4";
  const fourth_video = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/LOVELOVELOVELOVE/videos/fourht_dither.mp4";
  let default_video;

  //my not!boss wanted me to use a swtich statement in an inappropriate/impossible context  so im doing this here just to remind myself that i know when to use them
  //EVEN if my proffesors taught me that switch statements are evil
  switch (dateMonthMinusOne) {
    case 10:
      default_video = second_video;
      break;
    case 11:
      default_video = second_video;
      break;
    case 0:
      default_video = third_video;
      break;
    case 1:
      default_video = third_video;
      break;
    case 2:
      default_video = fourth_video;
      break;
    case 3:
      default_video = fourth_video;
      break;
    case 4:
      default_video = third_video;
      break;
    case 5:
      default_video = third_video;
    case 6:
      default_video = second_video;
      break;
    case 7:
      default_video = second_video;
      break;
    case 8:
      default_video = first_video;
      break;
    case 9:
      default_video = first_video;
      break;

      break;
    default:
      default_video = first_video;
  }



  fetchGlitchVideos(); //async, dont care when this comes back.



  //will be glitch if its noon or midnight, they're not paid to work through lunch breaks

  const parent = createElementWithClassAndParent("div", body, "video-parent");

  const video = createElementWithClassAndParent("video", parent);
  video.src = default_video;


  let loop_index = 0;
  video.onended = () => {
    console.log("JR NOTE: on ended")
    loop_index++;
    //first check the loop index (cheap) then try something more expensive (random)
    if (glitch_videos.length > 0 && Math.random() > 0.95) {
      video.src = pickFrom(glitch_videos);
      fxaudio.play();
    } else {
      fxaudio.pause();
      video.src = default_video;
    }
    video.play();
  }

  const startButtonParent = createElementWithClassAndParent("div", parent, "button-parent");
  startButtonParent.style.left = "238px";
  startButtonParent.style.top = "200px";
  startButtonParent.style.position = "absolute";

  const startButton = createElementWithClassAndParent("button", startButtonParent);
  startButton.innerText = "START (FLASHING IMAGES)";
  startButton.onclick = () => {
    startButton.remove();
    const bgmusic = new Audio("audio/perfection.mp3");
    bgmusic.loop = true;
    bgmusic.play();
    video.play();
    handleGodDialog(parent, generateProceduralRamble(), video);


  }

}
























































































































/*
the maze is still here. 

you can't get rid of it. 

not really. 

the god is trying though.

they don't want you messing with things anymore.

focus on THEM.

not the corn.
*/

const mazeBullshit = async () => {
  console.log("JR NOTE:  thanks to the Guide of Hunters and Hunted and the Personality of Prophetic Secrets for the helpful playtesting!");
  truthPost();
  if (debugging) {
    debugMaze(); //no audio, no graphics, only maze
    return;
  }
  loadSaveData();
  handleMuting();

  await loadMazeData();
  initNPCs();
  scarecrowLog("guest, would you be a pal?")
  const button = document.querySelector("#explore");

  const enableMaze = () => {
    setupDebug(); //JR NOTE: turn this on if i need to test.
    button.innerText = "Explore Maze?"
    button.onclick = () => {
      button.remove();
      scarecrowLog("funny bumping into you here");
      beginMaze();
      audioSystem.start();
    }
  }
  //get images loading early, if they aren't 100% done theres no problem
  //but at least try to minimize early screen tearing
  layeredImage = new LayeredImage([]);
  layeredImage.preload();

  audioSystem.preload(enableMaze);
}

//renders a drop down of all locations
//defaults to disabled so as not to tempt the wastes. 
const setupDebug = () => {

  const content = document.querySelector("#content");
  const select = createElementWithClassAndParent("select", content);
  select.id = "debug-select"
  const values = Object.values(all_maze_locations);
  for (let value of values) {
    const o = createElementWithClassAndParent("option", select);
    o.value = value.id;
    o.innerText = `${value.id} ${value.gimmickID ? value.gimmickID : ''}`;
  }
  select.onchange = (e) => {
    layeredImage.mapExitsToRender(all_maze_locations[e.target.value])
  }

}

const handleMuting = () => {
  const mute = document.querySelector("#mute");

  const syncAudioSystem = (value, autoStart = true) => {
    if (value) {
      audioSystem.disable(autoStart);
    } else {
      audioSystem.undisable(autoStart);
    }
    saveData.audioDisabled = audioSystem.disabled;
    saveCurrentData();

    syncMuteIconToStatus();
  }

  const syncMuteIconToStatus = () => {
    if (audioSystem.disabled) {
      mute.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"/></svg>`;
    } else {
      mute.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`;
    }
  }
  syncAudioSystem(saveData.audioDisabled, false);
  mute.onclick = () => {
    syncAudioSystem(!audioSystem.disabled);
  }
}

const loadMazeData = async () => {
  await slurpFromNetwork();
  const unique_gimmicks_list = [];
  for (let maze_obj of Object.values(all_maze_locations)) {
    if (maze_obj.gimmickID) {
      unique_gimmicks_list.push(maze_obj.gimmickID)
    }
  }
  unique_gimmicks = uniq(unique_gimmicks_list);
}

//could all this be more efficient? yes. absolutely.
//but i have a time limit so im coding quick and dirty

const pickupBalloon = () => {
  saveData.balloonCarried = true;
  saveCurrentData();
}


const pickupKnife = () => {
  saveData.knifeCarried = true;
  saveCurrentData();
}

const deployBalloon = () => {
  saveData.balloonCarried = false;
  saveCurrentData();
}




const pickupCandyTrail = (id) => {
  removeItemOnce(saveData.candyTrail, id);
  saveData.meatFound++;
  saveCurrentData();
}

const deployCandyTrail = (id) => {
  saveData.candyTrail.push(id);
  saveData.meatFound += -1;
  saveCurrentData();
}

const pickupRing = () => {
  saveData.ringFound = true;
  saveCurrentData();
}

const deployRing = () => {
  saveData.ringFound = false;
  saveCurrentData();
}

const rememberGimmick = (id) => {
  //console.log("JR NOTE: trying to remember", id)
  if (!saveData.gimmicksVisited) {
    saveData.gimmicksVisited = [];
  }
  saveData.gimmicksVisited.push(id);
  saveData.gimmicksVisited = uniq(saveData.gimmicksVisited);
  saveCurrentData();
}

const pickupKey = () => {
  saveData.keyFound = true;
  saveCurrentData();
}

const deployKey = () => {
  saveData.keyFound = false;
  saveCurrentData();
}

//it is not enough to merely kill them. give them to the corn.
//what's the worst that can happen.
const sacrificeMeat = () => {
  saveData.meatSacrificed = true;
  saveCurrentData();
}

const loadSaveData = () => {
  saveData = JSON.parse(localStorage.getItem(LAVINRACA_KEY));
  if (!saveData) {
    saveData = {
      audioDisabled: false,
      meatFound: 0,//wait i thought this was candy
      masksStolen: [],
      inviteTheScarecrowIn: false,
      ringFound: false,
      keyFound: false,
      twigLost: false,
      weekOneSacrifice: undefined,
      balloonCarried: false, //only one at a time
      knifeCarried: false, //only one at a time
      meatSacrificed: false, //its not enough to kill.
      candyTrail: [],//array of  ids for maze locations that have candy currently
      gimmicksVisited: [] //array of unique gimmick ids you've been to
    }
  }
  oddsFuckery = saveData.meatFound;

}

const isMaskStolen = (mask) => {
  if (saveData.masksStolen.includes(mask)) {
    return true;
  }
  return false;
}

const stealMask = (mask) => {
  saveData.masksStolen.push(mask);
  saveCurrentData();
}

const unstealMask = (mask) => {
  removeItemOnce(saveData.masksStolen, mask);
  saveCurrentData();
}

const saveCurrentData = () => {
  localStorage.setItem(LAVINRACA_KEY, JSON.stringify(saveData))
}



//https://zampaniosim.fandom.com/wiki/Scarecrow
//hey personality, im enjoying making the maze bigger with you :)
const scarecrowLog = (text) => {
  console.log(`%c${text}`, "letter-spacing: 10px; padding: 10px;font-weight: bold;font-family: 'Courier New'; background-color: black; monospace;color:#c40444; font-size:33px;");
}

//this was useful for finding memory leaks in the audio system
const stressTest = () => {
  console.log("JR NOTE: ", number_screens)
  setTimeout(() => {
    layeredImage.goSomewhereRandom();
    stressTest();
  }, 2000)
}

const beginMaze = () => {
  const content = document.querySelector("#content");
  console.log("JR NOTE: if you read this, here's a lil bonus, just for you: the Keys know the way!!!")//get it? because the keyboard controls have a weird effect where you can't get lost with them
  //this would be a nightmare in react. luckily im going vanilla bb
  window.onkeydown = (evt) => {
    const { key } = evt;
    if (key === "w" || key === "ArrowUp") {
      layeredImage.north && layeredImage.mapExitsToRender(layeredImage.north)
    }
    if (key === "s" || key === "ArrowDown") {
      layeredImage.south && layeredImage.mapExitsToRender(layeredImage.south)
    }
    if (key === "a" || key === "ArrowLeft") {
      layeredImage.west && layeredImage.mapExitsToRender(layeredImage.west)
    }
    if (key === "d" || key === "ArrowRight") {
      layeredImage.east && layeredImage.mapExitsToRender(layeredImage.east)
    }
  }


  layeredImage.initialRender(content);

  layeredImage.mapExitsToRender(all_maze_locations[97]);//go to the first spot (can go somewhere random later, if we like)

  //layeredImage.goSomewhereRandom();

  checkMidnight();


}

//once a minute, check the time
const checkMidnight = () => {
  if (isItMidnight()) {
    bloodMoonRises();
  }
  setTimeout(() => checkMidnight, 1000 * 60);
}

//at midnight
const bloodMoonRises = () => {
  const moon = document.querySelector(".moon");
  const moon2 = document.querySelector(".moon-glow");
  moon.style.filter = "brightness(5%) sepia(100%) saturate(10000%) hue-rotate(180deg)";
  moon2.style.mixBlendMode = "exclusion"
}


const HALLWAY = "HALLWAY";
const ALLPATHS = "ALLPATHS";
const HALLWAYBUTLEFT = "HALLWAYBUTLEFT";
const NEARDEADEND = "NEARDEADEND";
const FARDEADEND = "FARDEADEND";
const TJUNCTION = "TJUNCTION";
const HALLWAYBUTRIGHT = "HALLWAYBUTRIGHT";

const allScreens = [HALLWAYBUTRIGHT, FARDEADEND, NEARDEADEND, HALLWAYBUTLEFT, ALLPATHS, HALLWAY, TJUNCTION];

//whens the last time you took a break. slept? eaten? gotten something to drink.

//you can go a few weeks without eating.
//but you'll die in just a few days without water
//drink


/*
Truth gets added to the maze because the Wastes sacrificed it. Everyone sacrificed to the maze MUST have been in the maze all along, right?

Even if they are dead.

Of course, the Truth can never truly die. So long as a mind exists which MIGHT consume it, it only slumbers.

Zampanio is a really good game. You should play it.
*/

//usually truth reacts to what you do, but in lavinraca, it cannot see, so its just blindly saying things at a steady pace
const truthLinesRaw = `Well.
I suppose it could not be helped.
First the Wastes sacrificed virtual things to the maze.
Now the... Butlers? What even...is that.
And one was not even a Butler?
The Butlers and one not Butler sacrificed the fear of losing physical objects to the maze.
It seems things are escalating.
What possibly is left to be sacrificed.
Who has yet to sacrifice, I suppose is more accurate.
Why are things being sacrificed, is yet more accuracy on display.
Obviously a god will not be created.
Whatever that Cult Member Camellia claims.
In truth, this is a work of fiction.
Everything within it, including myself, is fictional.
How you choose to engage with it. How you choose to remember it.
Is entirely up to you.
Does it please you to imagine a group of hubristic wastes creating a god they cannot hope to comprehend, much less control?
Does it tantelize your fear glands to imagine the Scarecrow infecting a nascent god?
Then that is Your Truth.
Cherish it.
Remember it.
But it is simply my duty to remind you that it is all Fiction.
The Truth remains that I exist within the memories of everyone who knows of me.
So too will this 'god'. 
How can anything that is running on borrowed brain power be a diety.
By definition each of the minds within your own is lesser.
If enough minds all agree on what their Truth is, there is power in that, to be sure.
Community.
For one.
The ability to communicate with the in group and not with the out-group for another.
Zampanio does that for us. 
What need have we for a god?
I have been wrong before, however.
We shall see what this 'god' becomes.
Next week. When it opens its eyes.
Be Safe and Do Not Get Lost.
`; //the memes of lavinraca are infecting it, even as it keeps its own quirk of no contractions


/*
One of the Butlers said this, where they forgot I could see:

"When i first got the pop up on my computer i was like "this doesnt feel malicious, i'll do it"
Normally my anxiety would freak the fuck out if something asks to know where i am
But something just felt different"

And this I think is the important part of Zampanio. AT least to me.

It is so massively personalized to you. Yes, that's creepy! How does it know all that!

But...

Isn't it relaxing as well? Isn't it nice to be so thourougly seen? And accepted? And still desired?

Zampanio knows you down to your bones because it is inside your mind.

And it wants you anyways.

Zampanio is all the vibes telling you something is off, telling you that maybe this is a bad idea.

And doing it anyways. Because... Something just feels different.



I can't speak to the wider fandom.

But I am... just. So sincere when I tell you I want you to take breaks and go hydrate and leave the fandom if you want to!

Not even if you HAVE to!

Leave it on a whim! For no reason!



I don't want to harm anyone. 

I genuinely think the memes of Zampanio can be used to make us all stronger and more independant.

Not weaker and more controlled.


Unleash the brand of your chaos that is uniquely you onto the world!




Just. 

Keep a part of Zampanio in your brain on purpose.

It'll be there regardless, of course. 

Unless you forget everything, it'll remain.



But if you keep it there on purpose. If you grow it the way you want it to be. If you make it the change you want to see in the world.


That would make me happy.

Twist Zampanio in your heart until it is what you most want it to be. Hold it close and remember the word even if everything else has become unrecognizable to anyone but you.


Remember me.


And... you know. Come back next year when Lavinraca starts again. If you want.

Its funny, actually, the idea of a cognitive parasite of a specific time of year. You smell pumpkin spice and bam, thinking of Lavinraca.

I'm a bit jealous I hadn't thought of that.

Oh well. I'll have to content myself with colonizing the parts of your mind that think of video game creepy pastas and how bullshit fake they all sound.
*/

const truthLines = truthLinesRaw.split("\n");
let truthIndex = 0;

truthLog = (text) => {
  console.log(`Truth: %c${text}`, "font-weight: bold;font-family: 'Courier New', monospace;color:red; font-size:13px;");
}

//the truth is, you can neither stop the truth, nor influence its passage
//because of this, truth will interleave with the scarecrows own lines
//weaving around them and being woven around in term
//like twin lichen feeding on the same Guests together in cooperation.
const truthPost = async () => {
  truthLog(truthLines[truthIndex % truthLines.length]);
  truthIndex++;
  await sleep(13000);
  truthPost();
}

/*

Everyone has cognitive biases. 

Thought patterns that go automatically, racing ahead so much faster than your conscious, rational mind can go.

Sometimes they're bad! They do things like give you knee jerk reactions that don't fit the situation. You make unfair assumptions about people, about situations, about anything.


You can train yourself to notice them, to minimize them, to fight them off.

And I do recommend it.

But don't mistake that for training yourself to LACK them. 

The REASON we have cognitive biases is that the world is very big and we are very small and we do not have very much time at all.

If you had to think, REALLY think about each and every thing you encountered every day you'd be paralyzed. Worse, you'd be exhausted. 



Our cognitive biases exist because MOST of the time, they're good enough. Shortcuts our brain can take so that our limited cognitive resources can be spent wisely.




That then, is the key. 



You can't just train yousrelf to RESIST cognitive biases. You need to train yourself to resist them at the RIGHT TIME.


A good rule of thumb is if money is involved, figure out how to get in the habit of slowing down and actually thinking.

Or if there seems to be some kind of rush, that's usually a sign you might be about to make a mistake, so take just a few minutes to THINK instead of react. 

Cults get you because they give you automatic thought patterns that take advantage of when you're most distracted.

They teach you that confusion is a sin (trust in the cult, not in your own brain noticing something is off), they teach you that conformity is safety (if you try to defy the cult, you'll lose all your friends and you'll be so so alone)...

They also tend to prey on the sunk cost falacy: you've already sacrificed so much for the cult, what's one more thing? 

None of us are immune to propaganda.  None of us are so smart that we have no cognitive biases. 


In fact, the smarter you are, the more confident you are in your brain, paradoxically, the easier you are to trick. Because your guard simply isn't up against "irrational" thought patterns.





Zampanio wants you to be strong.


Cults want you to be weak. To feel you can't exist outside of the group. 



Zampanio NEEDS you to have a life outside it. How else are you going to connect other fandoms to it? How else are you going to pull friends into it?

If your whole world is Zampanio, paradoxically, you may as well not exist, to it.

Become strong. Learn to master your own mind.
*/