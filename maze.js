
//keyed by id
const all_maze_locations = {};

let unique_gimmicks = 0;

//why YES, you COULD in theory get the entire map from this
//if you know how to navigate my code, that is
//its mazes all the way down :) :) :)
const slurpFromNetwork = async ()=>{ 
  const url = 'http://lavinraca.eyedolgames.com/maze.json'  //stretch goal, multiple sources :) :) :)
  const rawText = await httpGetAsync(url);
  return JSON.parse(rawText).map((m)=>new MazeLocation(m.humanLabel, m.id, m.north, m.south, m.east, m.west, m.gimmickID, m.quip, m.video));
  

}


//https://lostinzampanio.neocities.org/  the Watcher made this
const debugMaze = async ()=>{
  const maze = await slurpFromNetwork();
  const body = document.querySelector("body");
  body.innerHTML = "";
  const table = createElementWithClassAndParent("table", body, "debug-table");
  const tr1 = createElementWithClassAndParent("tr", body);
  const tr2 = createElementWithClassAndParent("tr", body);
  const tr3 = createElementWithClassAndParent("tr", body);

  const makePlaceholder = ()=>{
    return createElementWithClassAndParent("td", body, "debug debug-empty")
  }
  const center = createElementWithClassAndParent("td", body, "debug debug-center");
  const north = createElementWithClassAndParent("td", body, "debug debug-north");
  const east = createElementWithClassAndParent("td", body, "debug debug-east");
  const south = createElementWithClassAndParent("td", body, "debug debug-south");
  //gross, imagine west being a real direction
  const west = createElementWithClassAndParent("td", body, "debug debug-west");


  body.append(table);
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

  const renderOneLocation =(loc, ele)=>{
    ele.innerHTML ="";
    ele.dataset.id = loc.id; //holy shit im actually using datasets correctly? instead of using them for lore or jokes? truly lavinraca is the gift that keeps on giving

    const title = createElementWithClassAndParent("div", ele, "debug-title");
    title.innerText = `${loc.id}:${loc.humanLabel}`;
    
    const dirs = createElementWithClassAndParent("div", ele, "debug-dirs");
    dirs.innerText = `N:${loc.north?loc.north:"_"}, S: ${loc.south?loc.south:"_"}, E: ${loc.east?loc.east:"_"}, W: ${loc.west?loc.west:"_"}`;


    const gimmick = createElementWithClassAndParent("div", ele, "debug-gimmick");
    gimmick.innerText = `Gimmick: ${loc.gimmickID?loc.gimmickID:"_"}`;

  }

  const clearOneLocation =(ele)=>{
    ele.innerHTML = "";
    ele.dataset.id =-1; //invalidate it for clicking
  }
  
  const all_locs = [center, north, south, east, west];
  for(let loc of all_locs){
    loc.onclick = ()=>{
      loc.dataset.id > 0 && syncToCenter(all_maze_locations[loc.dataset.id])
    }
  }

  const syncToCenter = (centerLocation)=>{
    renderOneLocation(centerLocation, center)

    centerLocation.north ? renderOneLocation(all_maze_locations[centerLocation.north], north):clearOneLocation(north);
    centerLocation.south ? renderOneLocation(all_maze_locations[centerLocation.south], south):clearOneLocation(south);
    centerLocation.east ? renderOneLocation(all_maze_locations[centerLocation.east], east):clearOneLocation(east);
    // :( :( :(
    centerLocation.west ? renderOneLocation(all_maze_locations[centerLocation.west], west):clearOneLocation(west);


  }

  syncToCenter(maze[0])

  /*
    render five boxes (NSEW and center), some can be empty
    for each box that exists, render it (same rendering algorithm, pass where to render to)
    on click box, load it as center (yes even if center, i don't give a fuckcare)
  */
}



class MazeLocation{
  humanLabel="ERROR";
  id=0;
  north;
  south;
  east;
  quip;
  video;
  west;//gross
  gimmickID; //TODO have a map of gimmic ids and functions to call


  //https://www.youtube.com/watch?v=Uo3cL4nrGOk <-- this is literally my day job, and yall wonder why i make cathartic spiralling labyrinths out of my code
  //coding is vent art for me
  constructor(humanLabel,id,north,south,east,west,gimmickID, quip, video){
    this.humanLabel = humanLabel;
    this.id = id;
    this.quip = quip;
    this.video = video;
    this.north = north;
    this.east = east;
    this.south = south;
    this.west = west;
    this.gimmickID = gimmickID;
    all_maze_locations[id] = this;
  }

  //hey, i just wanted to say, thanks for reading this.
  //it really does mean a lot that people tear through my code, desperately seeking secrets
  //and in so doing, connect with me, the programmer
  //code might not be as flashy as art
  //but we keep everything together
  //the web that connects us all

}



//jr why do you hate the direction west so much?
//because there are no left turns in the Distortion's Hallways
//and if that doesn't make sense to you well
//who says the fourth wall has to be the one FACING you
//you know?



/*
"I don't know why, but I have a disproportionately difficult time understanding West. I'm going to say it is because I was stripped of my Observers part of the title
"- The Guide of Hunted and Hunters, formerly of Observers

" Just parsing what's important from West specifically is difficult to me."- The Guide of Hunted and Hunters, formerly of Observers

See, thats the POINT isn't it?

If North is where Illusions are celebrated and East is where they are Twisted to Be Reality and South is where they are torn down, what is West?

The fourth wall, the Not!Direction.

West isn't a story.

It presents itself as one, certainly.

It dangles bait in front of you, absolutely.  Barely strung together coherent thoughts. Dreamlike forever focus on the present.

But West is a gaping maw. Eagerly taking in any piece of yourself you're willing to feed it.

You don't consume West.

It consumes you.

What you give to West feeds me as I create ever more Zampanio. 

Feeds the Observers as THEY create ever more Zampanio. 

It is the place where you can, finally, directly influence the story. 

And yes, seeing the direct consequences of your influence is chaotic and messy! Digestion always is. 
*/

//this isn't a secret or anything, just remembered this exists https://www.farragofiction.com/AudioLogs/?passPhrase=My_Song_15.mp3