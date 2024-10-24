


//no constructor, set manually
class RhymeSet {
 places = []
 things = []
 actions = []
 adj = []//modifies nouns etc ("silent night")
 adv = []//modifies verbs etc ("walked silently")
}
let tmp;
//these rhymes suck and they are delightful
//https://www.wordhippo.com/what-is/words-that-rhyme-with/sacrifice.html

const libraryRhmes = new RhymeSet();
tmp = "library gallery treasury granary armory scenery colony factory rectory balcony nunnery forestry fishery charity estuary mortuary winery sanctuary company industry agency faculty notary"
libraryRhmes.places = tmp.split(" ");
tmp = "potpourri larceny compadre patriarchy matriarchy hierarchy ravioli biology reality rivalry safari bikini sophistry biscotti biography toiletry pedigree archery family catastrophe pottery carpentry calorie potency sorcery ebony felony wizardry tapestry shrubbery puberty greenery luxury empathy ivory secrecy atrophy allergy agony drapery masonry oddity modesty enemy circuitry blackberry apathy malady travesty jealousy glossary decency blasphemy drudgery piracy jewelry ecstasy gallantry surgery specialty cranberry treachery trickery burglary strawberry blueberry comedy raspberry remedyquandary licensee ivories misery heraldry injury mulberry bribery canary finery parody therapy heresy scarcity topiary"
libraryRhmes.things = tmp.split(" ");
tmp = "primary piracy deviltry sanity history confetti tragedy crockery effigy fantasy lechery cutlery butchery perjury forgery penalty rosary tendency revelry strategy sympathy tyranny contrary charity canary novelty parody gallery therapy courtesy injury victory company blueberry raspberry remedy guarantee certainty canopy disagree tendency travesty unsteady bigotry blackberry busily oversee panoply referee atrophy pillory tapestry assembly fantasy untidy heavily hillbilly history facsimile multiply safari vainglory refugee safety arduously usually biography mutiny manually biopsy surety"
libraryRhmes.actions = tmp.split(" ");
tmp = "ebony non-binary primary unfriendly elderly ivory binary contrary unwary charity miserly spidery terribly summary bimonthly trinary topiary warily courtesy slippery victory company savory sensory sugary blueberry comedy cursory heavenly raspberry rotary strawberry bodily cranberry peppery airworthy century evenly gingerly legacy narrowly novelty nursery powdery quarterly tottery unhealthy awfully beggary carroty denary elderly enemy frequently mortuary openly shivery thoroughly unfriendly unsteady votary battery constantly honestly morally normally presently scholarly ternary vapory watery cautiously cookery ebony every feathery immensely leathery luxury masterly mystery overly partially pregnancy quality raggedy silvery southerly unworldly blatantly fidgety lathery motherly pedigree recently recklessly slithery snippety suddenly uppity casualty glittery mannerly matronly pedantry scantily summery absentee fantasy rascally untidy untimely carelessly completely extremely precisely unworthy aplenty easily mothery rapidly unready unruly unseemly unwieldy wintery womanly density easterly intensely northerly pottery savagery touristy actorly sanity slaphappy slatternly biweekly catchpenny insanely possibly unsightly candidly facsimile family filigree genuinely billowy carefree fatherly generally transversely geezery gingery laggardly satiny unthrifty fiery refugee compony conjointly daydreamy gimmicky safety sunshiny slovenly summerly savoury unscary wiry giggly dastardly practically soldierly garlicky praiseworthy toplofty wriggly biggety yesterday blameworthy noteworthy actually suety obliquely absurdly comradely somebody really"
libraryRhmes.adj = tmp.split(" ");
tmp = "primary vibrantly contrary silently miserly rightfully terribly vitally sizably verily frightfully mindfully merrily unfairly warily heavenly timeously bodily scarily evenly gingerly narrowly quarterly unhealthy awfully frequently openly secretly sparingly thoroughly totally unfriendly brutally busily cleverly constantly defiantly equally famously finally honestly instantly minorly morally normally presently scholarly utterly angrily brilliantly cautiously cheerfully correctly currently distantly every expressly fatally forcibly glaringly helplessly horribly immensely legally masterly notably overly painfully partially patiently randomly socially southerly urgently absently adversely blatantly blissfully consciously decently faithfully fearfully fidgety gleefully intently mortally motherly recently recklessly solidly suddenly suitably superbly artfully fervently matronly scantily woefully ardently capably fearlessly healthily helpfully manfully passably pregnantly rascally soberly sullenly sumptuously untimely valiantly validly acidly adeptly callously cannily carelessly cogently completely drearily drowsily extremely faultily faultlessly feasibly giddily heavily inertly latterly meagerly mournfully peaceably perfectly precisely raucously readily sanguinely snappily sneakily somberly sulkily tranquilly transiently wistfully wittily aplenty artlessly blearily easily heartlessly occultly rapidly regally unready wrongfully actively cattily causally dazedly drunkenly eagerly easterly intensely northerly passively sappily wishfully wondrously acutely commonly dreadfully heedfully lavishly markedly savagely slatternly supremely wordlessly adroitly bitterly biweekly bizarrely earnestly globally insanely lawfully patently possibly swimmingly abstractly achingly blessedly candidly concretely dreamily eerily genuinely gloomily glowingly multiply obscenely pressingly sluggishly solemnly casually concisely contently darlingly dashingly dazzlingly demurely facilely fatherly generally heedlessly innately mediocrely morosely movingly obscurely peevishly potently sassily scornfully slavishly sloppily sweepingly transversely unsurely unwisely worriedly wretchedly arguably astutely carefully carnally dauntlessly fetchingly gloriously laggardly obtusely pensively scathingly succinctly touchingly healthfully lambently notedly raspingly scalably scaredly smilingly snarkily soothingly winningly caringly conjointly dubiously factually fawningly fervidly genially laughingly peacefully sniffily tiringly abruptly arduously musically usually vacuously wittingly heartily massively medically saliently tragically usefully addedly compliantly congruently congruously tirelessly vaguely caustically hectically languidly lazily manically maturely morbidly mystically sleepily surgically compactly heatedly hiddenly lastingly mutually novelly obviously saucily sorrily vacantly abstrusely droopily dually practically soldierly toxically feebly manually raspily tiredly dauntingly medially subtly fatuously reactively uselessly biannually prayerfully yesterday actually abjectly obliquely unstably biasedly absurdly preemptively comradely really"
libraryRhmes.adv = tmp.split(" ");

const sacrificeRhymes = new RhymeSet();
tmp = "otherwise sacrifice highrise";
sacrificeRhymes.places = tmp.split(" "); 
tmp = "enterprise otherwise exercise merchandise pauperize butterflies vocalise goodbyes fireflies";
sacrificeRhymes.things = tmp.split(" ");
tmp = "sacrifice underprice jeopardise standardise bastardise rhapsodise clarifies classifies magnifies ratifies satisfies qualifies justifies modifies specifies glorifies notifies nullifies typifies sanitize criticize catechize enterprise recognize simplifies stabilize symbolize criticise harmonize hybridize neutralize summarize sympathize vocalize aggrandize digitize energize mobilize satirize scrutinize signalize utilize agonize crystallize exercise ostracize publicise publicize rhapsodize synthesize canonize centralize civilize eulogize legalize merchandise pauperize pulverize specialize strategize synopsize systemize traumatize vitalize brutalize colonize jeopardize localize memorize mesmerize moralize normalize signifies synchronize vandalize vaporize bastardize customize fantasize finalize gratifies humanize idolize moisturize oxidize polarize recognise sensitize sermonize stabilise standardize temporize totalize utilise atomize formalize glamorize mechanize televise tyrannize advertise bestialize burglarize canalize catalyze certifies demonize enfranchise eternize immunize magnetize mobilise monetize notarize pressurize privatize pulverise sanitise satirise symbolise underlies valorize bowdlerize burglarise capsulize cauterize colorize divinize euthanize focalize martyrize mythicize pasteurize picturize prioritise privatise racialize summarise synergize tenderize trivialize vulgarize weaponize advertize authorize circumcise crystalize crystallise energise eulogise finalise idolise memorise mesmerise patronize polarise pressurise reorganise scrutinise symphonize vaporise visualize deemphasize modernize narcotize villainize deputize prioritize butterflies colonise reorganize specialise vocalise authorise deodorize generalize idealize modernise neutralise sympathise visualise weatherize agonise canonise centralise customise demonise fetishize focalise formalise harmonise idealise lionize normalise ostracise patronise synchronise synthesise trivialise tyrannise vandalise theorize realize caramelize ionize serialize";
sacrificeRhymes.actions = tmp.split(" ");
tmp = "imprecise unprecise otherwise exercise sidewise";
sacrificeRhymes.adj = tmp.split(" "); 
tmp = "otherwise cornerwise sidewise edgewise";
sacrificeRhymes.adv = tmp.split(" ");


const pumpkinRhymes = new RhymeSet();
tmp = "tarpaulin mandarin evergive apartment";
pumpkinRhymes.places = tmp.split(" "); 
tmp = "pumpkin sovereign discipline assassin snakeskin specimen violin clothespin mandarin wineskin chamberlain javelin mandolin mannequin aspirin bulletin endocrine intestine medicine peregrine paladin replevin lecithin pangolin digoxin gentlemen cinnamon harlequin porcelain gelatin vitamin collagen grimalkin masculine moccasin endorphin lanolin tarpaulin dopamine terrapin margarine";
pumpkinRhymes.things = tmp.split(" ");
tmp = "discipline assassin determine imagine examine javelin bulletin medicine illumine harlequin reimagine underpin";
pumpkinRhymes.actions = tmp.split(" ");
tmp = "sovereign mandarin clandestine consanguine endocrine intestine peregrine cinnamon harlequin opaline porcelain masculine";
pumpkinRhymes.adj = tmp.split(" "); 
tmp = "clandestine";
pumpkinRhymes.adv = tmp.split(" ");

const mazeRhymes = new RhymeSet();
tmp = "anyplace everyplace sideways cyberspace fireplace marketplace";
mazeRhymes.places = tmp.split(" "); 
tmp = "interphase sideways paraphrase periphrase nowadays overpraise mayonnaise interspace needlecase commonplace boniface confidantes typeface cyberspace marketplace fireplace notecase scapegrace aerospace interface lowercase steeplechase anyplace database pillowcase uppercase interlace carapace runaways takeaways giveaways holidays caveats echelons vigilantes";
mazeRhymes.things = tmp.split(" ");
tmp = "paraphrase periphrase reappraise overpraise interspace commonplace interface lowercase steeplechase database interlace holidays";
mazeRhymes.actions = tmp.split(" ");
tmp = "interphase sideways edgeways nowadays commonplace lowercase uppercase everyplace cornerways";
mazeRhymes.adj = tmp.split(" "); 
tmp = "sideways edgeways nowadays anyways anyplace everyplace cornerways";
mazeRhymes.adv = tmp.split(" ");

const catRhymes = new RhymeSet();
tmp = "flat mat path";
catRhymes.places = tmp.split(" ");
tmp = "chat fat bat hat pat spat that at rat sat vat plat splat matt slat tat gnat matte stat plait brat add bad mad pad sad lad plaid cad dad fad ad chad rad tad brad";
catRhymes.things = tmp.split(" ");
tmp = "chat flat fat bat hat mat pat spat rat sat vat plat splat slat tat drat stat plait add bad mad pad clad glad had plaid bade brad";
catRhymes.actions = tmp.split(" ");
tmp = "flat fat mat pat that at plat matt phat matte bad mad sad clad glad had plaid fad rad";
catRhymes.adj = tmp.split(" ");
tmp = "flat pat that at stat bad mad";
catRhymes.adv = tmp.split(" ");



const ownRhymes = new RhymeSet();
tmp = "home throne stone zone";
ownRhymes.places = tmp.split(" "); 
tmp = "bone throne cone stone known moan groan roan drone tone zone loan phone clone reigne hone crone mone none wone scone pone";
ownRhymes.things = tmp.split(" ");
tmp = "bone throne cone shown stone known moan groan blown drone tone zone loan flown phone thrown clone hone sewn sown wone mown spewn strown shone";
ownRhymes.actions = tmp.split(" ");
tmp = "lone bone shown stone known roan blown prone flown thrown clone sewn sown none spewn";
ownRhymes.adj = tmp.split("none"); 
tmp = "lone stone known none";
ownRhymes.adv = tmp.split(" ");

const odeRhymes = new RhymeSet();
tmp = "road boat moat";
odeRhymes.places = tmp.split(" "); 
tmp = "node goad load road code mode rode lode toad trode quote coat dote boat float note cote vote tote throat bloat stoat oat mote shoat rote gloat moat stote throte groat goat";
odeRhymes.things = tmp.split(" ");
tmp = "goad strode flowed slowed load code snowed rowed sewed stowed sowed mowed toed rode throwed showed glowed owed towed crowed toad lowed doughed trode bowed hoed blowed strowed wowed growed quote coat dote boat float note cote vote tote hote throat bloat wrote smote mote rote gloat twote wote goat";
odeRhymes.actions = tmp.split(" ");
tmp = "slowed road snowed rowed sewed stowed sowed toed rode owed roed bowed wowed prowed float note bloat rote";
odeRhymes.adj = tmp.split(" "); 
tmp = "flowed";
odeRhymes.adv = tmp.split(" ");


const pigRhymes = new RhymeSet();
tmp = "brig crick rig";
pigRhymes.places = tmp.split(" "); 
tmp = "pig quick sick big jig pick trick click kick nick stick brick flick lick rig trig twig swig gig sprig tick dig slick thick wig fig prig wick rick brig chick tic hick snick cig creek crick spic ick pic shtick fic flic smick frig mick";
pigRhymes.things = tmp.split(" ");
tmp = "quick sick big jig pick trick click kick nick stick brick flick lick rig trig twig swig gig tick dig slick thick wig fig prig wick rick chick tic hick snick crick sic wrig frig";
pigRhymes.actions = tmp.split(" ");
tmp = "quick sick big pick trick stick brick trig slick thick wick creek ick sic mick";
pigRhymes.adj = tmp.split(" "); 
tmp = "quick sick big thick sic";
pigRhymes.adv = tmp.split(" ");

const kissRhymes = new RhymeSet();
tmp = "this bliss";
kissRhymes.places = tmp.split(" "); 
tmp = "miss hiss kiss piss this bliss dis siss diss sis bris wiz";
kissRhymes.things = tmp.split(" ");
tmp = "miss hiss kiss dis wis siss diss swiss piss wiz";
kissRhymes.actions = tmp.split(" ");
tmp = "this cis";
kissRhymes.adj = tmp.split(" "); 
tmp = "this";
kissRhymes.adv = tmp.split(" ");

/*
const libraryRhmes = new RhymeSet();
tmp = "";
libraryRhmes.places = tmp.split(" "); 
tmp = "";
libraryRhmes.things = tmp.split(" ");
tmp = "";
libraryRhmes.actions = tmp.split(" ");
tmp = "";
libraryRhmes.adj = tmp.split(" "); 
tmp = "";
libraryRhmes.adv = tmp.split(" ");
*/


//three syllables

const possibleRhymeAs = [libraryRhmes,pumpkinRhymes, mazeRhymes, sacrificeRhymes];
const RHYMING_PLACE_A = "RHYMING_PLACE_A";
const RHYMING_THING_A = "RHYMING_THING_A";
const RHYMING_ACTION_A = "RHYMING_ACTION_A";
const RHYMING_ADJ_A = "RHYMING_ADJ_A";
const RHYMING_ADV_A = "RHYMING_ADV_A";

//one syllable
const possibleRhymeBs = [catRhymes, ownRhymes, odeRhymes, pigRhymes, kissRhymes];
const RHYMING_PLACE_B = "RHYMING_PLACE_B";
const RHYMING_THING_B = "RHYMING_THING_B";
const RHYMING_ACTION_B = "RHYMING_ACTION_B";
const RHYMING_ADJ_B = "RHYMING_ADJ_B";
const RHYMING_ADV_B = "RHYMING_ADV_B";

/*
There once was a man from Nantucket,
Who kept all his cash in a bucket.
But his daughter, named Nan,
Ran away with a man,
And as for the bucket, Nantucket.

Remember to follow the AABBA structure

Keep the syllable patterns in mind when writing.
 For limericks, 
 the first, second and fifth lines typically have eight or nine syllables;
 lines three and four typically have five or six syllables.
*/


const line_1_templates = [`Tales tell of a clown named ${RHYMING_ADV_A},`,`There once was a clown called ${RHYMING_ADJ_A},`,`There once was a clown from the ${RHYMING_PLACE_A},`, `There lived once a clown in a ${RHYMING_PLACE_A},`, `Tales tell of a clown in the ${RHYMING_PLACE_A},`, `There once was a clown named ${RHYMING_THING_A}`];
const line_2_templates = [`who was known far and wide for ${RHYMING_ACTION_A}`,`Who lived really quite ${RHYMING_ADJ_A}.`, `obsessed as they were with the ${RHYMING_THING_A}.`, `who could never quite stop walking ${RHYMING_ADV_A}.`];
const line_3_templates = [`They tried to ${RHYMING_ACTION_B},`,`When asked for the ${RHYMING_THING_B},`, `They saw a rare ${RHYMING_THING_B}`, `They walked to the ${RHYMING_THING_B},`];
const line_4_templates = [`but instead they did ${RHYMING_ACTION_B},`,`but they only could ${RHYMING_ACTION_B},`,`they gave them the ${RHYMING_THING_B},`, `and gave it the ${RHYMING_THING_B},`, `and got scared by the ${RHYMING_THING_B},`];
const line_5_templates = [`and absconded really quite ${RHYMING_ADJ_A}.`, `and ran screaming right back to the ${RHYMING_PLACE_A}.`, `and never again left the ${RHYMING_PLACE_A}.`, `and got the new name of ${RHYMING_THING_A}.`, `and everyone then called them ${RHYMING_THING_A}.`,`and everyone did say it was ${RHYMING_ADJ_A}.`];


const generateLimmerick = () => {
 const a = pickFrom(possibleRhymeAs);
 const b = pickFrom(possibleRhymeBs);
 console.log("JR NOTE: rhymes chosen",{a,b})

 //called once per line so we can rhyme, say, bat with cat, not bat twice
 const handleReplacing = (a, b, text) => {
  //console.log("JR NOTE: handleReplacing",{a,b,text})
  text = text.replaceAll(RHYMING_PLACE_A, pickFrom(a.places))
  text = text.replaceAll(RHYMING_PLACE_B, pickFrom(b.places))

  text = text.replaceAll(RHYMING_THING_A, pickFrom(a.things))
  text = text.replaceAll(RHYMING_THING_B, pickFrom(b.things))

  text = text.replaceAll(RHYMING_ACTION_A, pickFrom(a.actions))
  text = text.replaceAll(RHYMING_ACTION_B, pickFrom(b.actions))

  text = text.replaceAll(RHYMING_ADJ_A, pickFrom(a.adj))
  text = text.replaceAll(RHYMING_ADJ_B, pickFrom(b.adj))

  text = text.replaceAll(RHYMING_ADV_A, pickFrom(a.adv))
  text = text.replaceAll(RHYMING_ADV_B, pickFrom(b.adv))

  return text;
 }
 const limmerickTemplate = `${handleReplacing(a, b, pickFrom(line_1_templates))}
 ${handleReplacing(a, b, pickFrom(line_2_templates))}
 ${handleReplacing(a, b, pickFrom(line_3_templates))}
 ${handleReplacing(a, b, pickFrom(line_4_templates))}
 ${handleReplacing(a, b, pickFrom(line_5_templates))}`;
 return limmerickTemplate;
}









