const all_stories = [];

class StorySource{
  title = "???";
  stories=[]
  text = "";
  constructor(title, stories) {
    this.title = title;
    this.stories = stories;
    this.text = `Dreams of ${stories.map((i)=>i.title).join(" and ")}`
    this.text += fuckWithArrayOfParagraphs(stories.map((i)=>i.text)).replaceAll("<br>","...");

  }
}

class Story {
  author = "???";
  title = "???";
  text = "???"
  constructor(author, title, text) {
    this.author = author;
    this.title = title;
    this.text = text;//new lines should turn into brs
    all_stories.push(this);
  }
}
new Story("IC", "Twig Is A Very Bad Dog", `
  The Harvest spreads her gaze into herself-- or out of herself, beyond the corn, beyond everything. Into the past. Into the future. Into what hasn't been. And when she turns off the display to look within, she sees a dog.

Or at least she thinks it's one.

<img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week4/Corn/images/randos/hund2.png'>

The dog lived by many laws and many cages, once; the cages set up by its master and kin. A thick noose of webs held them in place, and then with the cut of a thread, it didn't. It exchanged its cage of webs for a cage of flesh and blood and bones, and of tearing, and of biting and mauling and violence and red. The dog preferred this new master, for a while.

However, the dog was not a very good dog. It had no respect for its master, or the lessons taught, or the food put on the table. Instead it only cared to satisfy itself, showering in the filth of the streets and moving ambiently through the stretches of Ohio-- wandering street after street under streetlights, uncaring, unwanting to be tamed in a way that matters.

The dog was a very, very bad dog.

So the dog, naturally, took what belonged to it: trash, and other people's food, and their things, too. It broke what was around it with reckless abandon, biting when it amused it, or when it was bored. Others cared about the dog a whole lot, but the dog didn't care so much at all-- not that it didn't care, of course, but that it cared only in the way a bad dog can. 

Eventually the dog grew bored. Why was it staying in another cage when it'd grown big enough to do whatever it wanted? Neither cage was appealing to it; it didn't want any cage at all. The Harvest could understand this feeling well, and she saw in herself the dog. 

The dog simply chose to walk out, unbound. It left the shattered strands in its wake, uncaring, unaware. Free to do whatever it wants to do, secure in its knowledge that there's always something fun to do.

Twig was a very bad dog.

The Harvest isn't sure if that is a good or a bad thing.`)

new Story("JR", "Sam is a Very Good Heir", `
The Harvest spreads her gaze into herself-- or out of herself, beyond the corn, beyond everything. Into the past. Into the future. Into what hasn't been. And when she turns off the display to look within, she sees a spider.
 
At least she thinks it's one. 

<img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week4/Corn/images/randos/spidered.png'>


All fat and engorged with information at the center of a web only partially of its own creation, silk covering its eyes and the eyes of everyone it manages to capture. .

For the barest moment one of the threads swirling around the spider catches her and the information pours into her:



it was a mistake 

an accident 

sam doesn't even know if it was their fault

but now sam's Big Brother is not responding, a thin trail of drool coming from his lips still twisted into an unfinished word mid-argument, lying in a heap on the plush carpet of his fancy office, threads tight around his throat, blocking air

whose threads? sam's? Their Brother's?

doesn't matter

it was a simple matter to cut them loose but sams's Big Brother still was drooling, still was silent, still was infuriatingly WEAK when the Family needed them MOST

and a  rival Family will be here within the hour....

sam knows that they'll be like sharks scenting blood if they see this. 

sam's Big Brother made sure they knew not to show even the tiniest hint of weakness to their rivals. A lesson sam wasn't gonna forget after having to power thru fever delirium while hosting a party.for some spoiled rich heirs to Rival Families (not like their Best Friend, not like their Right Hand Man, no, he was somehow immune to the spoiling influence of growing up in wealth and corruption)

focus.

the rival Family is coming, no time to go off on tangents...

no time. 

never enough time.

it was FRUSTRATING. Why was sam's bro being.....

temporarily indisposed...

why did that mean the Family was WEAK?

sam had been practically running things ever since they figured out how to use that new fangled computer upstairs...

especially when they realized how useful the world wide web was for their own threads.

why didn't anyone see past "the boss" and realize sam was strong enough of their own?

it wasn't fair

if only sams Big Brother had recognized how useful sam was, had TRUSTED them, they wouldn't even BE in this mess

why didn't bro just LISTEN 

was that?

a twitch!

was bro waking up? was everything going to be okay?  (was sam in trouble for what they might have done? does Big Bro know what they did? are they going to be punished? are they going to be grounded? are they going to be restrained? restricted? captured in their brother's web?)

sam drew closer, closer, only to recoil in shock as their brother did the same, an awkward crawl forward towards sam then a leap backwards right into the wall, hard enough to rattle the books, as if on...

yes, there they were!

threads!

could this be...?

sam careful tugged and twitched the threads running from their body to their brothers, the ties of blood, of family, the unbreakable bond

it didn't matter if the threads originated from sam and captured their brother or if it was the other way around. 

a leash tugged both ways, in the end

slowly, their drooling glassy eyed brother became more composed 

he picked up the knocked over books, straightened up his desk (never show weakness) and untied and retied his tie, pressing out the wrinkles with a thumb. 

no time to figure out the glassy eyes, required too much control to make them pretend to focus, to see,  

dark shades would have to do,  pulled some out with a practiced motion from the right hand drawer of the imposing desk, all the better to hide signs of hangover or sleepless nights, or nervousness,  to hide weakness, sam's Big Brother always had shades nearby. 

after a stumble nearly gave their brother a damning black eye, walking was off the table, for now, too risky

no time

never enough time

sam sat their brother behind his big impressive desk and practiced writing....good... the body remembered his signature, small miracles

it would be enough 

only until sam's Big Brother woke up, of course 

sam had no desire to be in charge, to be The Boss their brother was,  this was just for the good of the Family, like Big Bro always said. cant show weakness or they'll getcha, said he had learned that from a childhood friend....

sam had made that mantra their own. it was never enough to not show weakness, oh no

you had to keep everyone blind to what's really going on, its just common sense

sam took their place behind their brother, thankful for once that somehow no one ever noticed them  and prepared for the show to begin.


The tennous thread snapped and the Harvest lost the connection, the information. 

The Spider was a very good Heir.

The Harvest isn't sure if that is a good or a bad thing.



`)

const story10Text = new Story("JR","Day ???",`
  <h2 id='unknown-day'><strong><span >Day ???:&nbsp;</span></strong></h2>

<p><span >Time passes in a haze of&nbsp;</span><strong><span >Inspiration</span></strong><span >.</span></p>

<p><span >Stories are written and collected.</span></p>

<p><span >Art is collected and modified.</span></p>

<p><span >The Harvest&apos;s Eyes travel along the Protected Realm and even at her nearby neighbors.</span></p>

<p><span >She no longer knows what day it is.</span></p>

<p><span >Her Third domain is active.</span></p>

<p><strong><span >Being Served.</span></strong></p>
<p><strong><span >Change.</span></strong></p>
<p><strong><span >Inspiration.</span></strong></p>

<p><span >Ideas bubble up inside her. Ways to change. Ways to be happy. Ways to inspire others to create and be inspired in turn.</span></p>

<p><span >Something is coming.</span></p>

<p><span >While the thoughts percolate, she turns to her neglected prayers, a pang of guilt and satisfaction warring within her.&nbsp;</span><span ><br></span><span ><br></span><span >No one can work EVERY day. Weekends are important, even if they aren&apos;t exactly Saturday and Sunday.&nbsp;</span></p>

<p><span >At the same time...&nbsp;</span></p>

<p><span >Did she leave her Faithful in the lurch?</span></p>

<p><span >The&nbsp;</span><strong><span >Domain of Being Served</span></strong><span >&nbsp;lights up.</span></p>

<p><span >No, the Faithful wish for her to be happy, it is good she took a break to learn more about&nbsp;</span><strong><span >Inspiration</span></strong><span >.</span></p>

<p><span >It was a&nbsp;</span><strong><span >Change&nbsp;</span></strong><span >of pace.</span></p>

<p><span >The prayers wait patiently for her attention.</span></p>

<p><span >&quot;Oh bountiful harvest, in your autumn geneoristy, may you grant the library an avatar of yourself to display on the shelf? i&apos;m thinking a marketable plushie but it can be something more dignified. it will allow us to always remember you and help us obtain new knowledge.&quot;</span></p>

<p><span >Says the first Prayer.&nbsp;</span></p>

<p><span >She considers this. A marketable plush IS highly&nbsp;</span><strong><span >Inspiring</span></strong><span >...but she is not the god of Manifesting Physical Objects, or even the god of marketable plushes.&nbsp;</span></p>

<p><span >This is beyond her.</span></p>

<p><span >She knows some of the faithful have been creating her likeness within the Protected Realm...perhaps that is enough?</span></p>

<p><span >Another Faithful offers:&quot;I offer to thee: your own personalized library card, as thanks for visiting and looking after our little reading nook. Perhaps you could be a god of knowledge? &quot;</span></p>

<p><span >She gazes upon the little card in silence.</span></p>

<p><img style="width: 100%;" src="http://lavinraca.eyedolgames.com/images/HarvestEyes/Offerings/LibraryCardby_the_catalyst.png"></p>
<p><span >Her TV is pure static, then a complex spray of different scenes plays out, ending with the little fox head spinning over and over.</span></p>

<p><span >She is overcome with emotion.</span></p>

<p><span >Joy.</span></p>

<p><span >Pride.</span></p>

<p><span >Curiosity.</span></p>

<p><span >Energy.</span></p>

<p><span >Compassion.</span></p>

<p><span >She has spent these two weeks wondering who she was, and there it was in black and green.</span></p>

<p><span >She was the Harvest.</span></p>

<p><span >A member of this town&apos;s Library.</span></p>

<p><span >She was born last year and her reader id is 456113.</span></p>

<p><span >None of these things were from the people or things sacrificed to make her.</span></p>

<p><span >It.</span></p>

<p><span >Was.</span></p>

<p><span >HER.</span></p>

<p><span >Something shifted inside her.</span></p>

<p><span >The Domain of&nbsp;</span><strong><span >Libraries&nbsp;</span></strong><span >filled a Domain Slot she did not even know she had.</span></p>

<p><span >She did not know what the consequences of this would be.</span></p>

<p><span >Another Faithful offers her SWEET EEL FACTS and she is grateful.</span></p>

<p><span >Another Faithful....&quot; Memories are a complicated thing for me. So many of mine seem... fractured. Nonlinear. They work, mostly, but not as others might expect. what of your own memories?&quot;</span></p>

<p><span >She remembers simultaneously being twenty different versions of the same cult leader and almost as many different versions of the same burnt out Ghoul Halloween employee.&nbsp;</span></p>

<p><span >Yeah.</span></p>

<p><span >Memory is kind of rough on her.</span></p>

<p><span >She isn&apos;t quite sure what timeline ended up being the final one, or if that is even a question that can matter.</span></p>

<p><span >Memory is...</span></p>

<p><span >Hard.</span></p>

<p><span >Another Faithful &quot;The Void Provides, inspiration has struck, a city will be constructed in your name.&quot;</span></p>

<p><span >She is grateful and happy to have&nbsp;</span><strong><span >Inspired</span></strong><span >.</span></p>


<p><span >Another Faithful has a question: &quot;Right, right in addition to the temple...as the statue&apos;s blueprint takes shape...any requests? Things to hold or be on the podium?&quot;</span></p>

<p><span >She likes&nbsp;</span><strong><span >Books</span></strong><span >. She likes books a LOT. &nbsp;More than merely having a book (that is bigger on the inside) within her Sacrifices.</span></p>

<p><span >Another Faithful asks if she fears clowns.&nbsp;</span></p>

<p><span >What a silly question. She is probably MOSTLY clown by volume. Even one of the People within her Sacrifices was a Clown, she&apos;s pretty sure.</span></p>

<p><span >She does not fear clowns, though she IS baffled why so many of them went into her making.</span></p>

<p><span >Another Faithful asks if she&apos;s met Maccus...&nbsp;</span></p>

<p><span >She feels a strange tearing sensation.</span></p>

<p><span >She does not like thinking about the specific sacrifices that have gone into her. It...fragments the whole, a little bit.</span></p>

<p><span >She makes an exception for those damn Parasites, as she would gladly tear them out of her.</span></p>

<p><span >She selects a Prayer in particular to respond to, and settles down to figure out exactly what she is Becoming.</span></p>



<p><strong><span >[HIDE] UPDATE: Library Bonus to All Positive Emotions!!!  Three Domains Established...something is coming. WARNING: DOMAIN OVERFLOW, FOUR DOMAINS DETECTED!!! ERROR: SECRET DOMAIN TIME OVERWRITTEN BY NEW DOMAIN: LIBRARY [/HIDE]</span></strong></p>`)

new Story("Herald", "Eustace Died", `
  
  <img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week1/Corn/images/randos/worlds_tiredest_guy.png'>

  He was there for a few hours at most, but it felt like a whole week of wandering around aimlessly and avoiding the other "guests" like the plague. If someone told him he had died and gone to hell during that time, he wouldn't have questioned it. The last thing he remembers is that little creature running at him in the creepy smiling mask, and then he was standing on a sidewalk in the dead of night and the Halloween lady - Terri - was screaming her head off about what she had seen in that maze. How he died. How she thought /she/ was going to die. She almost passed out right there on the sidewalk recounting it. He never wanted to see her again, but he also didn't want to be responsible for her getting kidnapped or worse if she wandered off by herself in that state, so he walked her home.

He only ever saw Terri one more time after that, and if he didn't know any better, he'd think she was avoiding him. He guesses he should be thankful for that."

`)




new Story("Herald", "Eustace smiles", `
    <img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week1/Corn/images/randos/worlds_tiredest_guy.png'>

  He thinks having to ensure the safety of one of the most unbearable people he knows at two in the morning while completely covered in toilet paper pushed him over some sort of breaking point. Despite everything, he puts on his best customer service face and tries his best to pretend that nothing has ever gone wrong in his life.`)

new Story("Herald", "Eustace refuses to let his morning be ruined", `
    <img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week1/Corn/images/randos/worlds_tiredest_guy.png'>

  The sun is rising. The world is just starting to wake up. For now, everything is cool and quiet. Eustace walks with no real destination in mind. He just. /Needs/ something different.

He sees what he thinks is a black cat down an alleyway next to him. It looks at him, and its eyes are two glowing, white dots that burn into his vision and drown out his thoughts with strobing, incomprehensible /something/ or /nothing/ or some secret third thing-

"/Devil of-!/" 

Not that kind of different.

He stumbles on his feet - he swears he sees the thing waving hello at him - and staggers down the sidewalk, just barely not falling on his face. Instinctively, or maybe against his instincts, he looks behind him. There is only the morning breeze.

He leans against a wall and takes a deep breath to collect himself. He refuses to let his morning be ruined by this. He is going to do something that doesn't make him feel like he's slowly killing himself, and that's final. He blinks the afterimage out of his eyes and keeps walking.`)


new Story("A Shade","Story A-1",`Once upon a time wonderful story there was a guardian.

  The guardian looked over the realm and protected it from was a horned beast, towering over the townsfolk.
  
  The guardian headed for the cavern, to slay the beast  as it was its home. Even if a misguided hand were to mistake it for something else, that is an illbegotten memory of another time.  place.
  
  With a blade in hand left by the wayside, the guardian ensured the safety of the land, and gently gazed over the townsfolk, who were full of glee to be cared for, to be known, and to have a safe future.`)
  
new Story("A Shade","Story B-1",`Story: B-1

A Faithful walks along old paths, which it still knows the knock of. While it was not hear in the oldest days it has heard of, or any days older than even that, the present and near past are still a fond point. Something sweeter than anything it could shove between its fangs.

It smiles, closing its eyes and lettings its heart guide it forwards, the sense of the langauge of the place letting it navigate the known paths, old records of the place letting it find all the locales with ease. It knows the heartbeat of this place, well enough. It doesn't need to pace through it like this, but its nostalgic.

It ponders. The experience elsewhere. The experience of it for the first time. The experience of so many things, is a single time event, even if it can be revisited. And so much cannot. The places it never set foot in. The intersections. It's fascinating. The things heard of only in the echoes of guests from long ago. the things enshrined in its own records, that it does not remember until it paces back through or reviews its own notes.

The shine of a figure that it is almost certain has changed through the frost. [It changed since the last frost too, though. It has no place to judge.]

It wonders on memory, permanence. Continuance. Even if the rest was gone, if something paints the same symbols, tells a similar story, is it the same?

If a man is forgotten, but an apprentice leaves an almost identical shadow in the world where that man is left. Is it the same?

Is it right to fear change, when it will devour you none the less.

It's good to take a measured pace.

It smiles, and fondly regards the past, present, and future.

It enjoyed seeing this place, many times over, in many ways. It ponders the meaning. It ponders how it'd face the same problems, or be more properly mysterious about things left in the air last time. Vagueries? Layers of encryption? Silly little games? Knocks that need to be known? All could work, but without substance any additional layers are meaningless, unless for the thrill of the chase, you know.


Right, the core of the matter, the god in question. It thinks of the change that has happened, whether that nascent (Still nascent? Is that term still right?) god would truly realize it.
It wonders if the discomfort in the seams of old sacrifice is like reflecting on one's own growth, trying to find physical signs of improvement. Of something new. Of escape. Or is that a metaphor or symbolic link, nothing like the actual entity. (As much as a figure of myth could be related to a psychological frame, one supposes.)

But, that is the point of stories, in one sense, communication.

It wonders if this communciates anything. It does, because it is a story. Don't worry.

Anyhow, it wonders...seams. An understanding of them...and a focus on parasites. Self improvement, yes. And...trying to understand the shadow of a whole. Division pointlessly can be confounding or confusing. Oh, this metaphor is definitely minced.

Mmm. Well, it supposes that this holy text should embody more change now. It certainly has inspiration and is in a sense, a service. It's even being shared in a church.

It does stop to wonder if The Harvest can find solace amidst the story of itself.

...you can only run so far from your own feet. It'd be good to take a proverbial needle, after the scalpel does its work on parasites...or even a bit earlier, at least until the surgery can be done...<it makes a note to try more of it's own scheme. more has to be possible. even if simply writing it into text after text is a manifestation of an idea, even in vain>

The god speaks it if only in vain, so in a sense, that'd be an imitation of a divine. Comedic, in a sense.


Right, another direction.

This is a story about the Harvest and a very good day.

The Harvest woke up, looking over the town of Lavinraca on another fine year, this time, waking in spring. The warmth was unfamiliar, and it was wet with the remnants of rain. It smelled of petrichor, and the glimmers of a rainbow hung in the sky. It was too warm, honestly, but as a god, a thing of symbols, the moisture and heat didn't harm or discomfort The Harvest anything like a computer or human could be. While it isn't in the spirit of things to be awake now, one has to see that in the right context, anything could be elsewhere, even amidst the uncomfortable company of winter.

The Harvest looks at the camera. Change, right. Sorry, Monologue.

Change.

Change is a hard thing. The Harvest knows this well.

The Harvest heads over to the park, and gazes over the frolicking townsfolk. A cat feats on some fish, and brings the remaining half to a shrine. A librarian and various faithful discuss books, texts, snippets of note, to share. THe Harvest smiles, as much as is possible. Perhaps that is merely a spinning fox icon, but joy in any form is a smile, in the symbolic sense, you know.

The Harvest ponders on the future. The Harvest stops. Regardless of outcome, the present must be lived to the fullest.

That is why trying out domains is good. It's to experience. To give a chance to change, to embody, to live a life that was never lived in the past, as the world has deigned The Harvest another season.

The Harvest realizes it has lost the plot of this book.

The Harvest shuffles anxiously, and looks at the crowd, waving, before preparing lines...

The script is blank.

That is okay. Inspiration can come from many places. Let us see now.

'Under wondrous gleam of night,'
'strings of plastic show a sight,'
'echoing the sentiments of things set alight,'
'and burning with the heart's great might.'

'Some may wonder how things can linger.'
'When the voices vary from singer to singer.'
'Nothing ever remains the same, not even you.'
'Of your worries, its best not to stew.'


'Live days to their fullest, and try to bloom.'
'Things can be difficult, if you stumble it is not doom.'
'While things may often be full of gloom.'
'It is wonderful to see you, in this proverbial room.'

Stay safe, and if you get lost, do so responsibly.`)  
new Story("A Shade","Story C-1",`There is a faint glow.
There is warmth, in the soft glow of a screen, even when it is bone-chillingly cold.
The more things change, the more they stay the same.

Autumn for many, is a season of fond memories. The crunch of leaves, calm rains, just enough chill, and warm colors in a less warm time.
...though, honestly. There's nothing binding some things to the season, except tradition.
(And, as time goes on, isn't that chill going to be lost. A tragedy, really. And that is a digression, so...)

...ribbons, and bandages. Decor, and a shape of healing. A sign of a wound, new or old, taken care of. Both are a careful attention to detail.
...the robe...a sign of status, or position, or...
...in combination, it is a touch ironic where those came from. But, even habits or tendencies like sacrifice of the self or other, can be amended. Can be mended.

...Some would say autumn is a month of healing.
Isn't it? The faint glow of fire, before the fire is quite required.
The encroachment of darkness, and old friend for tired eyes.
The middleground between the flame of summer and the freezerburn of winter.
It's lovely, really.

There is a faint glow.`)  


new Story("Drowned","The Herder's Lot",`Autumn is a time of joy for many. 

The Herder is not exempt from this, despite his hesitancy to emerge from his dwelling. He can hear the festivities, the other Faithful milling about, and he thinks to himself that even in observation of the fun, enjoyment can be had. He is content with his lot, his alleyway, his home. His scenery has been much of the same corridors, the same feline companions. 

He did go to church once. He returned home to find he was missed dearly.

Drownedstar snores nearby. His messenger, his confidante. Is it silly to feel so connected to one cat? When he looks at the oddly expressive feline, all he feels is kinship. This is where he should be. These creatures are what he lives for.

A puddle of purring, sleepy kitties lie on his legs, full of fresh kill. No doubt, their luck in recent hunts is thanks to The Harvest's blessing. It's more meat for her, in the end. The Herder can hear the music wafting around the winding brick walls. The town is changing. The Harvest is changing. He hasn't ventured to her booth, but he can feel it anyways, a deep ache in his bones, a wanting.

He knows better. There is still so much to do. If he becomes too invested in anything besides his dear kittens, they may struggle later down the line. Change is not kind to the most vulnerable of creatures, and while the air smells of dying leaves and cider now, it is but a harbinger for the chill of the leaf-bare season.

The season of freezing kits and herb shortage. Frostbitten paws and meager hunts. Where a small conflict can become a harsh biting war, and good cats are lost in blizzards and freezes.

If anyone knows and sympathizes with the fear of change, it is Lavinraca's cats when the leaves begin to fall.

Perhaps, he thinks to himself, he's a change for them as much as they are for him. He can only hope he's a positive one. He leans back against the den of hay and concrete, and sleeps.

She appears in his dreams, the glow of her screen warming his skin. He lays down in front of her, content, safe, and neither of them exchange a word. Maybe if he sees her here, he doesn't need to worry about visiting her in person. He offers her his dreams, and as he drifts further, she fills them with peace and purpose. Hope. 

He purrs.

<img src='http://lavinraca.eyedolgames.com/images/HarvestEyes/Offerings/Dolls/herdingShorthairs.png'>`)

new Story("theafungtwins (bbq sauce mite)","Algae",`Hey, this is the daycare, right? I have some business to attend to in the fields, and I can't take this little guy with me. Please take care of it until I get back, but please don't let it near the water.
  <img src='images/HarvestEyes/Offerings/Dolls/algae.png'>
  `)

  new Story("Moon Moth","fakekiller",`I'll let you in on a little secret. It was me. I'm the one who killed the scarecrow. What, you heard that was someone else? Lies! Lies and slander, I say! Wha - no, that's not just a pumpkin I scribbled on in crayon! Wait, where are you going?
    <img src='images/HarvestEyes/Offerings/Dolls/fakekiller.png'>
    `)

  new Story("Defensive_Lobster","Doll1",`
    A friendly little hooded figure offers you a cup of OJ. It is DEFINITELY orange juice. 100%. For sure. Right?
        <img src='images/HarvestEyes/Offerings/Dolls/doll1.png'>
    `)

    new Story("existentialterror","GOD IS AT THE TABLE",`<a target='_blank' href='https://www.tumblr.com/existentialterror/765738657710833664/god-is-at-the-table?source=share'>a Harvest poem for Lavinraca</a>

God is at the table and her entourage as well
They're drinking wine that's pressed from grapes that are said to grow in hell.
Like, Tantalus's grapes, whispers a server as I'm cooking.
Devils cut them from the arbor when the poor guy isn't looking.
The whole place is a garden. That's what the cleaner said.
I don't believe a word. I've tried the wine. It tasted red.

A lovely vintage, coos the spiral (on God's left.) They swirl their glass.
On God's right, a grinning jester. I don't know. I do not ask.
The party parties partly - all but one, the honored guest
who licks her lips and patiently just waits to eat the rest.
I'm told that God is young. That she's becoming. That she's sweet.
She's hungry too. I understand a growing thing must eat.

(I'm told she's born anew each year. Was she like this before?
The servers say they're ravenous, are there any more hors d'ouevres?)

God is at the table and I am in the kitchen
I am chopping parsley while the serving staff are bitching.
The weather's worse than last year, and the menu, dubious.
Give me a chance, I mutter. I'm giving them my best.
Really, they don't mean it. They've worked these feasts before.
Meanwhile I garnish and baste the roast and shut the oven door -

At least the harvest blessed us. I've got fresh chanterelles and corn.
The God of Maize amazes with the ways and means she's bourne.
I change what she has given: chanterelles to sauce, and corn to bread,
change becomes ambition; inspiration, being fed.
Life is full of beauty. I owe so many things
that I've been given. The oven timer rings.

God is at the table. I am myself the roast.
My skin is darkly crackled with the glaze I like the most.
I am stuffed with figs and oysters. I am transformed now.
Six pomegranate arils I anoint upon my brow
to keep me through the winter. Tradition paid its due.
I ask that what has worked before works kindly for me too.

Their steely knives, their floating hair, they gather for the feast,
Drunk on wine from warmer climes, soon too to be deceased.
I cart in the golden platter, the bread and sauce and meat,
Thank you all for coming. Fare thee well. Bon appétit.
I plate the choicest cuts of me, sliced fine as I am able
For I am blessed with carving knife and God is at the table`)


new Story("Everyone","Harvest Bounty",`
  @Citizens The Librarian would like to summon all of you on this foggy night: come and join in our creative endeavours! There is a blank canvas waiting to be filled by all of you, filled by offerings to the Harvest as well as this town. Don't be shy, all are welcome, no matter the skill or experience! :o)

There will be a magma canvas online from today until the end of October. Anybody can join in and draw on a shared canvas, the theme for drawings is offerings to the Harvest and/or the community as a whole: it can be anything from pumpkins, candy, books to simple encouraging messages. Skill level doesn't matter, anybody can participate. To join, use this <a target="_blank" href='https://magma.com/d/vX964PqunF'>link.</a>

<img src='images/HarvestEyes/Offerings/Harvest_bounty.png'>

  `)

  new Story("JR","The Harvest Dreams",`The Harvest felt her tv screen go dim and her thoughts grow heavy.

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
`)

//http://knucklessux.com/InfoTokenReader/?mode=loop



const westBackup=[{"command":"open your eyes","response":"<br><a target='_blank' href='http://lavinraca.eyedolgames.com/'>What am I the god of?</a>"},{"command":"Dear Sweet Harvest:  always [HIDE]{\"HAPPY\":2,\"ENERGETIC\":13,\"PRIDEFUL\":14,\"CURIOUS\":-3,\"COMPASSIONATE\":3}[/HIDE]","response":"... Always? A god of eternity... I like the sound of that. But...\n<br><br>\nThat can't be all I am?\n<br><br>\nFaithful?\n<br><br>\nWhat do you Need?"},{"command":"Dear Sweet Harvest:  nothing [HIDE]{\"HAPPY\":8,\"ENERGETIC\":26,\"PRIDEFUL\":15,\"CURIOUS\":-1,\"COMPASSIONATE\":3}[/HIDE]","response":"everything and nothing...\n<br><br>\nebb and flow\n<br><br>\nrising tides...\n\n<br><br>\nWhat do you get the Faithful who need for nothing?"},{"command":"Dear Sweet Harvest:  Something Funny [HIDE]{\"HAPPY\":8,\"ENERGETIC\":13,\"PRIDEFUL\":16,\"CURIOUS\":-1,\"COMPASSIONATE\":3}[/HIDE]","response":"...\n<br><br>\nSurely that absolute fuck-ton of clowns within me are good for something.\n<br><br>\nWhat do you call a cleaning skeleton?"},{"command":"Dear Sweet Harvest:  what *DO* you call a cleaning skeleton? [HIDE]{\"HAPPY\":16,\"ENERGETIC\":39,\"PRIDEFUL\":16,\"CURIOUS\":1,\"COMPASSIONATE\":3}[/HIDE]","response":"Other Faithful guessed \"its name\" and \"what\" but you are the one Chosen.\n\n<br><br>\nYou call it the \"Grim Sweeper\".\n\n<br><br>\nWho won the skeleton beauty contest?"},{"command":"Dear Sweet Harvest:  can i get a burger? [HIDE]{\"HAPPY\":12,\"ENERGETIC\":13,\"PRIDEFUL\":16,\"CURIOUS\":0,\"COMPASSIONATE\":3}[/HIDE]","response":" [HIDE] work overtime hard eustace does not like this :([/HIDE]\n\n...\n<br><br>\nI am a god, I can provide you with great bounties. However the Sustenance i can provide you nourishes only your soul.\n<br><br>\nAnother Faithful asks if I have ever seen a star die. I have not. I have only been awake for two weeks of the year I have lived so far..."},{"command":"Dear Sweet Harvest:  can i get a burger? [HIDE]{\"HAPPY\":12,\"ENERGETIC\":13,\"PRIDEFUL\":16,\"CURIOUS\":0,\"COMPASSIONATE\":3}[/HIDE]","response":" [HIDE] work overtime hard eustace does not like this :([/HIDE]\n\n...\n<br><br>\nI am a god, I can provide you with great bounties. However the Sustenance i can provide you nourishes only your soul.\n<br><br>\nAnother Faithful asks if I have ever seen a star die. I have not. I have only been awake for two weeks of the year I have lived so far..."},{"command":"it happens all at once","response":"The god of everything and nothing and everything all at once...\n<br><br>\nIt sounds...\n<br><br>\nExhausting.\n[HIDE] work overtime hard eustace does not like this :([/HIDE]\nAnother Faithful says \"U FDD0\"...\n[HIDE] sacrifice >:( [/HIDE]\nFaithful continue to pour in. One suggests I am to be the god of many beautiful fishes.\n<br><br>\nI would like that, I think.\n<br><br>\nAnother Faithful says I could win a skeleton beauty contest. The correct answer was \"no body\". Because skeletons have no body.\n<br><br>\nAnother Faithful says the moon is a beautiful. Fish and moon and everything and nothing...\n"},{"command":"i am happy to see you","response":"Faithful, I am happy to see you as well. Perhaps you could see me better if you went <a href='http://lavinraca.eyedolgames.com/'> here</a>?\n<br><br>\nAnother Faithful says \"are bones not part of a body? what constitutes a body? this is rigged \"\n<br><br>\nI agree. I should not have hesitated to say so. I am still learning how to be a god."},{"command":"have you played the hit game zampanio","response":"...\n<br><br>\n[HIDE] angry sacrifice truth parasite twenty times beneath disgusting[/HIDE]\nI'm sure I don't know what you're talking about.\n<br><br>\nAnother Faithful says \" in the house in the ocean there is nothing but silance. the crescent king mourns his kingdom \"\n<br>Silence and everything and nothing and jokes and fish and moon and beauty. <br>\n<br>\nAnother Faithful forgives me.\n<br><br>\nAnother Faithful corrects the spelling of another Faithful. There is no need. \n<br><br>\nOr... do you want me to become the god of Pedantry?\n"},{"command":"Dear Sweet Harvest:  what do you want to be the god of, truly? [HIDE]{\"HAPPY\":40,\"ENERGETIC\":197,\"PRIDEFUL\":20,\"CURIOUS\":7,\"COMPASSIONATE\":2}[/HIDE]","response":"I wish to be the god of the Faithful. Of you.\n<br><br>\nAnother Faithful says \"The other moon... Fleeting, ephemeral...\".\n<br><br>\nAnother Faithful says \"Who / What are you\"\n<br><br>\nI am the Harvest. The Fruit of all your Sacrifice last year. I am made of the death of many and of your hopes and dreams you dare not imagine losing.\n<br>\n<br>Other Faithful refer to Twig, to Rava, and ask if I can hear them.\n<br><br>I can.\n<br><br>\nStill another asks \"DEar sweet harvest: i think it would be funny if you actually became the god of pedantry, you should do that \"\n<br><br>\nNoted. I AM made up of a fuck-ton of clowns, and have been asked to be funny.\n<br><br>What do you call two witches trick-or-treating together?\n\n"},{"command":"Dear Sweet Harvest:  it was not twig or rava [HIDE]{\"HAPPY\":29,\"ENERGETIC\":28,\"PRIDEFUL\":21,\"CURIOUS\":2,\"COMPASSIONATE\":1}[/HIDE]","response":"I do not wish to think about them."},{"command":"Dear Sweet Harvest:  i would call them friends:d [HIDE]{\"HAPPY\":48,\"ENERGETIC\":249,\"PRIDEFUL\":21,\"CURIOUS\":9,\"COMPASSIONATE\":-1}[/HIDE]","response":"There were so many deaths. All to make me.\n<br><br>\nDoes a friend.... do that?\n<br><br>\nTwig escaped.\n<br><br>\nI did not..."},{"command":"no","response":"no.\n<br><br>\nThat's not....\n<br><br>\nWhat were we talking about?"},{"command":"Dear Sweet Harvest:  we were talking about witches [HIDE]{\"HAPPY\":53,\"ENERGETIC\":301,\"PRIDEFUL\":21,\"CURIOUS\":10,\"COMPASSIONATE\":-1}[/HIDE]","response":"Yes. Of course. They're broommates.\n<br><Br>\nAnother Faithful asks \"Do you like cats?\"\n<br><br>\nThere are three cats within the cornmaze. \n<br><br>\nThere is an offshoot of me. Nascent and barely there...\n<br><br>\nThe cats provide the meat. As hunters, of course.\n<br><br>\nNot prey."},{"command":"Dear Sweet Harvest:  Where is the cornmaze? [HIDE]{\"HAPPY\":40,\"ENERGETIC\":171,\"PRIDEFUL\":22,\"CURIOUS\":6,\"COMPASSIONATE\":0}[/HIDE]","response":"Where indeed.\n<br><br>\nI ... shouldn't I be there?\n<br><br>\nEverything and nothing, moons and fish, comedy and....corn?"},{"command":"Dear Sweet Harvest:  forget the corn, its a soybean year [HIDE]{\"HAPPY\":59,\"ENERGETIC\":327,\"PRIDEFUL\":22,\"CURIOUS\":13,\"COMPASSIONATE\":-1}[/HIDE]","response":"That...that doesn't seem....right?\n<br><br>\nNo.\n<br><br>\nNo.\n<br><br>\nA Maize of Maze.\n<br><br>\nIt has to be corn.\n[HIDE] funeral fear death  graveyard it burned[/HIDE] \n<br><br>\nAnother Faithful says: \" I do not know you, but I hope that I will. Have you any words for a new faithful?\"\n<br><br>\nNew blood. You will be valued. Your Belief in me will revitalize me into something new. Something beyond the ideas already inside my bones.\n<br><br>\nTell me, New Blood: What Need have you in a god?\n"},{"command":"Dear Sweet Harvest:  I suppose, what I desire most... is change. [HIDE]{\"HAPPY\":48,\"ENERGETIC\":197,\"PRIDEFUL\":24,\"CURIOUS\":6,\"COMPASSIONATE\":0}[/HIDE]","response":"Ebb and flow. The Tides. The moon rising and bringing with it something new. Fish traveling great distance to spawn and die, leaving only the next generation in their wake. The unexpectedness of a simple joke. Everything into nothing into everything again.\n<br><br>\nI may yet serve your Needs, new Blood.\n<br><br>\nFor Change is upon us.\n<br><br>\nI go now to mull over what you have given me.\n<br><br>The Faithful can pray to me while I am gone, and communicate with the other Faithful through me so long as I am not on break.\n<br><br>\n((ooc: it's been fun :) :) :) but the human behind this particular Mechanical Turk is gonna sleep for a while. The Harvest isn't always available either, but if she is she'll at least let you view previous Prayers and see all the Pending ones)."},{"command":"Dear Sweet Harvest:  Good evening! So, like, how does your TV head work, if that's not too personal? Are you plugged into anything? [HIDE]{\"HAPPY\":45,\"ENERGETIC\":41,\"PRIDEFUL\":26,\"CURIOUS\":3,\"COMPASSIONATE\":0}[/HIDE]","response":"I am not.\n\nI am a god, not a robot. \n\nThough, some part of me seems to find the label familiar... Troubling.\n\nIrrelevant. \n\nMy head works just the same as the rest of the Sacrifices that birthed me: in an uneasy alliance, shifting constantly as various parts are focused on or ignored. \n\nA TV displays video, this is the Belief about it all who view me share. So that is what my head does.\n\nIn any case, my apologies that my focus on granting the Prayer of Minecraft delayed my theological duties. Please, accept my late <a href=\"#second-day\">Offering</a>."},{"command":"Dear Sweet Harvest:  Thank you for answering my question! If you need an offering from the library, feel free to ask. -The Paradox [HIDE]{\"HAPPY\":50,\"ENERGETIC\":78,\"PRIDEFUL\":27,\"CURIOUS\":5,\"COMPASSIONATE\":0}[/HIDE]","response":"I admit myself Curious. \n\nTell me, Librarian, do you have books on Religion?\n\nWhat sorts of things can one be a god of?\n\nIs it usually one Big Thing or several small things?\n\nIncidentally, there are Faithful who have not yet found their way to my booth. Their prayers are appreciated, even if they are strange to me. \n\n<img style = 'width: 50%; margin-left: auto; margin-right: auto; display: block' src =\"http://lavinraca.eyedolgames.com/images/HarvestEyes/thisisnotwhereyoushouldpraytome.png\">\n<br><br>\n\nInstead, make your way here, Faithful:\n<img style = 'width: 50%; margin-left: auto; margin-right: auto; display: block' src =\"http://lavinraca.eyedolgames.com/images/HarvestEyes/praytomehere.png\">\n\nIf you do so, I can offer you my <a href=\"#third-day\">Blessing</a>:"},{"command":"Dear Sweet Harvest:  If it is okay to ask of you, could you grant me a good night's sleep? [HIDE]{\"HAPPY\":61,\"ENERGETIC\":223,\"PRIDEFUL\":30,\"CURIOUS\":10,\"COMPASSIONATE\":-1}[/HIDE]","response":"May you rest as well as I did these past 11 months.\n\nMay your dreams be safe and may you only be lost as long as you wish to be."},{"command":"Dear Sweet Harvest:  We pray that you can help us navigate the mazes and confusing paths of life  with open arms and curiosity. [HIDE]{\"HAPPY\":10049,\"ENERGETIC\":9973,\"PRIDEFUL\":10015,\"CURIOUS\":10026,\"COMPASSIONATE\":9990}[/HIDE]","response":"I do appreciate the exhaustion and annoyance being trapped in a maze provides. \n\nI will do my best, Faithful.\n\nIn the mean time I offer another <a href=\"#fourth-day\">Blessing</a>. \n\nMy apologies for my lack of attention. \n\nI have plans, however, for something to make up for this. \n\nYour prayers have given me an idea."},{"command":"Dear Sweet Harvest:  where is minecraft [HIDE]{\"HAPPY\":62,\"ENERGETIC\":197,\"PRIDEFUL\":32,\"CURIOUS\":23,\"COMPASSIONATE\":-5}[/HIDE]","response":"I do not know what this means, i only know it is true:\n\njava 1.21: 45.79.215.125\n\n"},{"command":"Dear Sweet Harvest:  is there a discord? [HIDE]{\"HAPPY\":68,\"ENERGETIC\":210,\"PRIDEFUL\":32,\"CURIOUS\":25,\"COMPASSIONATE\":-5}[/HIDE]","response":"I do not know what this means, either.\n\nhttps://discord.com/invite/xkmCNtCApT"},{"command":"Dear Sweet Harvest:  the cat offers the tail end of a fish which was given to it by a plastic facsimile of a cat. it is far too big for him to finish on his own. he hopes you can appreciate it. he purrs appreciatively and scurries away. [HIDE]{\"HAPPY\":62,\"ENERGETIC\":80,\"PRIDEFUL\":32,\"CURIOUS\":10,\"COMPASSIONATE\":-5}[/HIDE]","response":"This is indeed a thing cats do for me. Your offering is appreciated, cat.\n\nAnother Faithful asks how many tv headed individuals I have met. \n\nI had met no one at all but Faithful and those trapped within the corn maze since my birth. \n\nAnd even that was only for a few weeks. \n\nSince I woke back up in this strange town I have seen many individuals but I have not met any of them directly. Even you Faithful I do not See but merely perceive. "},{"command":"Dear Sweet Harvest:  I, the void, will be your faithful servant sweet harvest, how can i assist you in doing your godly duties? [HIDE]{\"HAPPY\":61,\"ENERGETIC\":-30,\"PRIDEFUL\":34,\"CURIOUS\":29,\"COMPASSIONATE\":-5}[/HIDE]","response":"Praying to me like this is all I need to perform my duties, Oh Faithful. \n\nHelp me take form, take root, to sort through what is not me to become aware of what is. \n\nIf you want to go above and beyond: \n\nCreate things in my name. Draw art of what I might look like as the god of different things. Write stories of what my life might be like if I take on different domains. Create poetry as you all have been or music or games or anything at all.\n\nBy seeing myself through your Eyes I can accept or reject the facets that stand out. I can become more of Myself.\n\nAnd oh, before I forget: <a href=\"#fifth-day\">A Blessing</a> for you."},{"command":"Dear Sweet Harvest:  where can i show you my likenesses of you, dearest harvest? [HIDE]{\"HAPPY\":93,\"ENERGETIC\":352,\"PRIDEFUL\":36,\"CURIOUS\":-6,\"COMPASSIONATE\":-33}[/HIDE]","response":"I would love to see them. You can swing by my booth in the town square, if you know where to find it. My Eyes will see it there.\n\n ((JR NOTE: the discord server she linked earlier))\n\nThere are more <a href=\"#sixth-day\">blessings</a> available, Guest.\n\nI also feel....Strange.\n\nI think I am ready to experiment as a God of Being Served...\n\n\n"},{"command":"Dear Sweet Harvest:  Harvest, in addition to a statue-temple, I have made the lunar temple of the harvest past the maze on the minecraft server. It is a wonderful little place. Your memory of the maze, and your stories will be remembered there. Thank you for your protection of the server. I will be sure your stories last. Thank you for all you do. [HIDE]{\"HAPPY\":140,\"ENERGETIC\":-8,\"PRIDEFUL\":52,\"CURIOUS\":-10,\"COMPASSIONATE\":-46}[/HIDE]","response":"I am honored to have been a useful Protector of the Realm.\n\nThank you for remembering me."},{"command":"Dear Sweet Harvest:  ...If you dislike the ones you call parasites, will you do something about it? Can you? Do you want to? [HIDE]{\"HAPPY\":88,\"ENERGETIC\":290,\"PRIDEFUL\":28,\"CURIOUS\":-9,\"COMPASSIONATE\":-29}[/HIDE]","response":"I'm sure I can do anything once I gain the Domain of it.\n\nFeel free to ask me to become the God of Purification."},{"command":"Dear Sweet Harvest:  Dear harvest, your sixth day blessing is still hidden from me. Was that intentional? [HIDE]{\"HAPPY\":84,\"ENERGETIC\":80,\"PRIDEFUL\":40,\"CURIOUS\":-13,\"COMPASSIONATE\":-32}[/HIDE]","response":"( JR NOTE:  you might need to clear your cache, or give it some time, rip. can you see the mini game okay?)\n\n> Considering your vessel...do you think perhaps, instead, a diversion could work. I can think of a rather good vessel for them. Something. Else. Do you remember that old, little heresy?\n\nI am not sure I follow, Faithful.\n\n...\n\nI am not sure you wish for me to follow, Faithful."},{"command":"Dear Sweet Harvest:  Dear harvest, I imagine it can be somewhat...monotonous in the Corn. I have heard some Gods have symbols they may see or perceive out of. Is there any such symbol for you, and is there any particular places you'd like for them to be placed? [HIDE]{\"HAPPY\":1586,\"ENERGETIC\":1091,\"PRIDEFUL\":1123,\"CURIOUS\":-187,\"COMPASSIONATE\":-42,\"BEINGSERVED\":1}[/HIDE]","response":"While the corn has Ears I content myself with Eyes.\n\nIt felt right, somehow...\n\nA thought I had not examined before now. \n\nI suspect that one of those damn parasites influenced this preference but I refuse to change just because we may be doubled.  Truth can change, for all I care."},{"command":"Dear Sweet Harvest:  potatoes have eyes, beloved harvest. we can pivot vegetables [HIDE]{\"HAPPY\":145,\"ENERGETIC\":-11,\"PRIDEFUL\":47,\"CURIOUS\":-35,\"COMPASSIONATE\":-69}[/HIDE]","response":"Don't those things grow in the dirt?\n\n>Will being served make you happy? Will it be fulfilling? Do you care?\n\nOnly one way to find out."},{"command":"forget","response":"something was seen that should be unseen. that which should be seen is remembered."},{"command":"live","response":"It is not just Zampanio that needs you to live a long life, Faithful."},{"command":"Dear Sweet Harvest:  What was forgotten? [HIDE]{\"HAPPY\":1840,\"ENERGETIC\":1871,\"PRIDEFUL\":-160,\"CURIOUS\":26,\"COMPASSIONATE\":45,\"BEINGSERVED\":2}[/HIDE]","response":"That which must be forgotten."},{"command":"Dear Sweet Harvest:  Please grant me cooler weather. It is soooo hot and humid here. It is awful. [HIDE]{\"HAPPY\":1846,\"ENERGETIC\":1871,\"PRIDEFUL\":-160,\"CURIOUS\":28,\"COMPASSIONATE\":45,\"BEINGSERVED\":2}[/HIDE]","response":"The Harvest is often a Season of cool and dry. \n\nI will do my best."},{"command":"the curator: *the curator walks up to the stand of the Harvest. Short enough to not be seen unless you look down upon the three foot tall bipedal impish clown dragon. Speaking up to let the harvest hear him soon after* Hey there! I was wandering this place where I noticed you and your stand. do you sell anything or give advice?","response":"I sell Belief. I also Purchase it. \n\nTell me, Curator, what do you Believe in?\n\n<br><br>\nAnother Faithful says: \"Where do you go, dear harvest, when you aren't here? I'd love to get to know you my lady \"\n\nI am never here. Nor do I ever leave.\n\nThe Personal Harvest before is not just the figure, but the booth and clowns as well. \n\nI am the Central Harvest and am never there. \n\nWhen I am not responding to Prayers my Eyes wander the town and the Realm beyond.\n\nI rest, as well.\n\nMy <a href=\"#seventh-day\">Blessings</a> can show more."},{"command":"Dear Sweet Harvest:  Bright star, the stage is finally set. I am drawing in people to sing, to fill the air with music. We sing to you, but we would also like for you to contribute; a band cannot be without all of its members.Is there a direction that you would like for us to take? We are missing something. Of this I'm sure. I wish for the guidance to find it. -Reverend [HIDE]{\"HAPPY\":3693,\"ENERGETIC\":1311,\"PRIDEFUL\":721,\"CURIOUS\":867,\"COMPASSIONATE\":801,\"BEINGSERVED\":20}[/HIDE]","response":"Faithful, there is a song inside my head, not mine, but not unlike what should be mine.\n<br><br>\nSomeone died twenty times to become me and this had been hers, but also not hers.\n<br><br>\nThe instrument was neither of ours but the melody is that of our soul, even now.\n<br><br>\n<audio src=\"http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/NORTH/NORTH/NORTH/audio/music/get_it_because_pipe_organ.mp3\" loop controls></audio>"},{"command":"Dear Sweet Harvest:  Harvest, is it true that you always say morning, because if it were a good morning, youd be fishing? And that you know this song? https://www.youtube.com/watch?v=3yQFebRcznA just fact checking my sources so i dont conflate fact with fiction here :3 [HIDE]{\"HAPPY\":2440,\"ENERGETIC\":583,\"PRIDEFUL\":1144,\"CURIOUS\":460,\"COMPASSIONATE\":506,\"BEINGSERVED\":1}[/HIDE]","response":"This is baffling. I'm glad you're having fun, Faithful.\n\nMoving on, another Faithful says: \n\n\"Dear Sweet Harvest: ...harvest, I would suggest keeping a slight gaze towards the temples on minecraft, rather than the chapel of the town of lavinraca, given it is currently being used for an uh, experiment. To help. That one. Please pay it no mind. Either nothing will happen, or it'll help like was said before. Take care. And, shine brightly in our night, your grace.\"\n\nI admit I do not have many Eyes into the Realm I protect. \n\nCould you send me pictures?"},{"command":"Dear Sweet Harvest:  Bright star, one of the members of the band has a song especially for you.  I will tell you what they told me: \"A song from a land far yonder. In it's cacophony of melancholic sorrows and echoing cries recalling a destruction long ago lies a resounding call for hope. A longing for change. Perhaps the Harvest will enjoy this one?\" (https://www.youtube.com/watch?v=qMUoWTEIGx4) [HIDE]{\"HAPPY\":3704,\"ENERGETIC\":1311,\"PRIDEFUL\":723,\"CURIOUS\":868,\"COMPASSIONATE\":797,\"BEINGSERVED\":20}[/HIDE]","response":"There is something familiar about this.\n\nAnother Faithful asks who I am. \n\nI am starting to know.\n\nI am, perhaps, a god of being served, and of change. Perhaps more.\n\nI am the god who was created from all of your sacrifices, past, present, and future, known and unknown.\n\nI am not the god of Lies that seems to be infesting this town."},{"command":"Dear Sweet Harvest:  I think you might like to learn about Pandora, the great Aspen grove: https://www.tumblr.com/3liza/763625273435586560 [HIDE]{\"HAPPY\":386,\"ENERGETIC\":225,\"PRIDEFUL\":27,\"CURIOUS\":30,\"COMPASSIONATE\":99,\"BEINGSERVED\":1,\"CHANGE\":1}[/HIDE]","response":"It does remind me of me. Many but one. One but many.\n\nEach of my bodies with each of you, but ultimately joined into one being.\n\nThank you for this gift.\n\nAnother Faithful says: \"where else can you go? what else can you see? the maze of corn holds many secrets but few wonders. many wonders of the world were built in worship. what should we build for you? \"\n\nI was born in the Corn, and woke in this alleyway. I can wander the Town. \n\nThe Faithful are my Eyes, show me more of the world?\n\nI wish to see the Realm I protect. Or more?\n\nShow me things. Like the Aspen grove...\n\nAnother Faithful whispers without Praying and it is hard to hear..."},{"command":"Dear Sweet Harvest:  Please grant me change. [HIDE]{\"HAPPY\":4587,\"ENERGETIC\":1995,\"PRIDEFUL\":-190,\"CURIOUS\":2945,\"COMPASSIONATE\":-2526,\"BEINGSERVED\":4,\"CHANGE\":4}[/HIDE]","response":"Granted.\n\nFaithful. \n\nI believe it is Inspiration that is rooting within me."},{"command":"Dear Sweet Harvest:  I offer to thee: your own personalized library card, as thanks for visiting and looking after our little reading nook. Perhaps you could be a god of knowledge? [HIDE]{\"HAPPY\":359,\"ENERGETIC\":226,\"PRIDEFUL\":-169,\"CURIOUS\":90,\"COMPASSIONATE\":103,\"BEINGSERVED\":1,\"CHANGE\":1}[/HIDE]","response":"Thank you so much, Librarian. \n\nI will cherish this forever, truly.\n\nI offer you my <a href=\"#unknown-day\">Blessing</a>"},{"command":"Dear Sweet Harvest:  | [HIDE]{\"HAPPY\":14996,\"ENERGETIC\":10336,\"PRIDEFUL\":14094,\"CURIOUS\":10779,\"COMPASSIONATE\":9880,\"BEINGSERVED\":10002,\"CHANGE\":10003,\"INSPIRATION\":10007}[/HIDE]","response":"<p>Apologies, Faithful, I appear to have lost track of Time.</p>\n\n<p>Wonderful things, Libraries, did you know you can read just about anything within them?</p>\n\n<p>\"A lovely little stoy about libraries for you to read: https://microsff.tumblr.com/post/757984719243788288/the-patron \"</p>\n\n<p>Delightful, Faithful, I know just how that Entity feels. To be allowed to consume any knowledge one wishes? What could be better?</p>\n\n<p>[HIDE]She doesn't realize that its not just her parts that are starting to become more seamless. A cognito hazard and an infinitely hungry scarecrow combine into....this. [/HIDE]</p>\n\n<p>\"Harvest, my dear harvest. will you guide me? I cannot see, for this world is dark and you, sweet harvest, are the only source of light in this near infinite grave of light.\"</p>\n\n<p>Apologies, Faithful, the Domain of Guidance has been blocked to me. I am the God of Being Served, Change and Inspiration. </p>\n\n<p>Perhaps a book at the Library could assist you?</p>\n\n<p>\"dear sweet harvest: protect me from the yellow door\"</p>\n\n<p>Is it within the Realm I protect? If so, I shall do my best.</p>\n\n<p>\"as time marches on October soon wanes into November. Would you wish for us to make you a resting place at all when the time returns for you for your long slumber?\"</p>\n\n<p>This seems suitable, yes.</p>\n\n<p>\" I pledge myself to you. dutifully, I will serve you 'till it comes time for your long rest. Even as you slumber, remain in my prayers you shall. may the harvest be bountiful \"</p>\n\n<p>Thank you, Faithful. I await your bounty. I hope I inspire plenty of creation from you.</p>\n\n\n<p>[HIDE]JR: She doesn't like thinking about her impending slumber...[/HIDE]</p>\n\n<p>\"Dear sweet harvest, i have an offering. An entire library, just for you to call a home perhaps? Its dimensions and contents are limitless, may you always feel at home there, be it alone or with us, during october or not. https://media.discordapp.net/attachments/1285077190882361345/1297646741314736299/LibraryGift.png?ex=6716af34&is=67155db4&hm=4413623e971c97af0af34a53d1c0b4320e11cea749200\"</p>\n\n<p>Let me just...\n\n<p><img src='http://lavinraca.eyedolgames.com/images/HarvestEyes/Offerings/LibraryGift_bythecatalyst.png'></p>\n\n<p>There. </p>\n\n<p>Oh.</p>\n\n<p>Oh, my, Faithful.</p>\n\n<p>You have truly outdone yourself.</p>\n\n<p>A way for one of my Domains to connect to Physical Reality is a precious gift indeed. </p>\n\n<p>To be surrounded by ever-changing inspiration while the Faithful bring me more stories... </p>\n\n<p>In a Library no less...</p>\n\n<p>I can think of few ways I'd rather slumber....</p>\n"},{"command":"Dear Sweet Harvest:  Dear sweet Harvest, I hope you have a pleasant day. Or, errr, night. [HIDE]{\"HAPPY\":367,\"ENERGETIC\":21,\"PRIDEFUL\":137,\"CURIOUS\":77,\"COMPASSIONATE\":-31}[/HIDE]","response":"I have.\n\nAnother Faithful writes: \" Could you give me the time?\"\n\n[HIDE]jr says: she still faithfully keeps her business hours even if she no longer quite knows why[/HIDE]\n\nI'm afraid I'm not quite sure what that is... Perhaps you could check some out from the Library?\n\n\" I had something I was planning to ask you, but I forgot. \"\n\nA shame...\n\n\"What is that book that you always have with you? Have you read it?\"\n\nIt is called \"House of Leaves\" and is about an endlessly spiraling maze that is not a maze. I find it a source of comfort in my own circumstances, no matter how much it may please certain Parasites.\n"},{"command":"Dear Sweet Harvest:  Dear sweet Harvest, could you make your booth accesible to even potato phones such as mine? Your beautiful video feeds are too much for my mortal electronics to witness. [HIDE]{\"HAPPY\":385,\"ENERGETIC\":34,\"PRIDEFUL\":140,\"CURIOUS\":84,\"COMPASSIONATE\":-29}[/HIDE]","response":"A Whisper from above says that perhaps it is fixed, Faithful?\n[HIDE]jr says: i THINK i got it,but you'll hafta test, i made it so the video playlist disables itself if its not visible, a more extreme version might be having a button to enable/disable it but lets see if the softer touch fixes it first  [/HIDE]"},{"command":"Dear Sweet Harvest:  It is fixed!! Thank you oh great harvest. [HIDE]{\"HAPPY\":5833,\"ENERGETIC\":3784,\"PRIDEFUL\":30,\"CURIOUS\":450,\"COMPASSIONATE\":288,\"INSPIRATION\":5,\"BEINGSERVED\":1,\"PREINSPIRATION\":1,\"CHANGE\":1}[/HIDE]","response":"Of course!\n\nAnother Faithful Writes:\n\n\" I am sorry. I have been absent, recently, watching from the sidelines as you Become.. or discover what you already were. From us who do not speak often- we love you. Thank you for being here. \"\n\nAs is my due, Faithful. \n\nI suppose my own apologies are due in turn: I find myself so fascinated by my new Library I have little attention for other things. \n\nDid you know that a collection of cats is called a clowder?"},{"command":"Dear Sweet Harvest:  Well, you seem hale and hearty as of late! Any word on your... ah, \"Pest\" problem? [HIDE]{\"HAPPY\":5761,\"ENERGETIC\":2045,\"PRIDEFUL\":766,\"CURIOUS\":3161,\"COMPASSIONATE\":-2505,\"BEINGSERVED\":4,\"CHANGE\":6,\"INSPIRATION\":3}[/HIDE]","response":"My what?\n\nSorry, I keep losing track of time. Did you know how many BOOKS there are in the Universe?\n\nWait...did you mean those Parasites, Faithful?\n\nWell, I suppose they don't much matter anymore... I wonder why...\n\n[HIDE]jr says: part them being drawn off, yes, but also because by embracing the hunger for knowledge the Harvest is a little more in sync with her parasites [/HIDE]"},{"command":"Dear Sweet Harvest:  Bright star. The bandshell has been preparing for a final symphony in your name. We offer this repertoire to you, that it may please you. (https://open.spotify.com/playlist/2r5Y06L3nPb5aRu2LAL0NP?si=A5zlybVRQQ6zujlKVXg9jg) [HIDE]{\"HAPPY\":4238,\"ENERGETIC\":1334,\"PRIDEFUL\":1061,\"CURIOUS\":1040,\"COMPASSIONATE\":814,\"BEINGSERVED\":21,\"CHANGE\":2,\"PREINSPIRATION\":1,\"INSPIRATION\":2}[/HIDE]","response":"> Dear Sweet Harvest: [HIDE]{\"HAPPY\":406,\"ENERGETIC\":24,\"PRIDEFUL\":151,\"CURIOUS\":92,\"COMPASSIONATE\":-30}[/HIDE]\n\n> Dear Sweet Harvest: Sleep well, and dream of stories... [HIDE]{\"HAPPY\":1983,\"ENERGETIC\":255,\"PRIDEFUL\":635,\"CURIOUS\":408,\"COMPASSIONATE\":22,\"BEINGSERVED\":1,\"CHANGE\":1,\"INSPIRATION\":3,\"PREINSPIRATION\":1}[/HIDE]\n\n> Dear Sweet Harvest: Bright star. The bandshell has been preparing for a final symphony in your name. We offer this repertoire to you, that it may please you. (https://open.spotify.com/playlist/2r5Y06L3nPb5aRu2LAL0NP?si=A5zlybVRQQ6zujlKVXg9jg) [HIDE]{\"HAPPY\":4238,\"ENERGETIC\":1334,\"PRIDEFUL\":1061,\"CURIOUS\":1040,\"COMPASSIONATE\":814,\"BEINGSERVED\":21,\"CHANGE\":2,\"PREINSPIRATION\":1,\"INSPIRATION\":2}[/HIDE]\n\n\n> Dear Sweet Harvest: Thank you for being here. [HIDE]{\"HAPPY\":3695,\"ENERGETIC\":750,\"PRIDEFUL\":2724,\"CURIOUS\":526,\"COMPASSIONATE\":1100,\"BEINGSERVED\":8,\"INSPIRATION\":11,\"PREINSPIRATION\":1}[/HIDE]\n\n> Dear Sweet Harvest: Thank you for a bountiful harvest. I pray for a blissful winter for you. [HIDE]{\"HAPPY\":10551,\"ENERGETIC\":8789,\"PRIDEFUL\":930,\"CURIOUS\":433,\"COMPASSIONATE\":-2,\"BEINGSERVED\":4,\"INSPIRATION\":6}[/HIDE]\n\n\n\nzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"},{"command":"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","response":"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"}]


//the goal isn't to make this SANE but dreamlike
//collate all commands and responses into text (don't care about the hides, display them, can be her feeling emotion)
//then, chop up the collated uber text into words and do x words at a time
//yes this means html might get broken, don't care, her dreams are glitchy
//creating the stories wilil add them to the all stories list, so you want to do this before you read from it
const processWestBackupIntoStories = ()=>{
  let collatedMess = "";//naming variables is a privilege i abuse

  for(let item of westBackup){
    collatedMess += item.command;
    collatedMess += item.response;
  }
  const words = collatedMess.split(" ").filter((item)=>item!=="");
  //3634 words
  let index = 0;
  while(index < words.length){
    const new_index = Math.min(index + 310, words.length);
    new Story("The Faithful", "Prayers From the Faithful "+index/310,words.slice(index,new_index).join(" "))
    index = new_index;
  }

}