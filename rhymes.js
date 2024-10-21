


//no constructor, set manually
class RhymeSet {
  places = []
  things = []
  actions = []
  adj = []//modifies nouns etc ("silent night")
  adv = []//modifies verbs etc ("walked silently")
}
let tmp;

const libraryRhmes = new RhymeSet();
tmp = "library gallery treasury granary armory scenery colony factory rectory balcony nunnery forestry fishery charity estuary mortuary winery sanctuary company industry agency faculty notary"
libraryRhmes.places = tmp.split(" ");
tmp = "potpourri larceny compadre patriarchy matriarchy hierarchy ravioli biology reality rivalry safari bikini sophistry  biscotti biography toiletry pedigree archery family catastrophe pottery carpentry calorie potency sorcery ebony felony wizardry tapestry shrubbery puberty greenery luxury empathy ivory secrecy atrophy allergy  agony drapery masonry oddity modesty enemy circuitry blackberry apathy malady travesty jealousy glossary decency blasphemy drudgery piracy jewelry ecstasy gallantry surgery specialty cranberry treachery trickery burglary strawberry blueberry comedy  raspberry  remedyquandary licensee ivories misery heraldry injury mulberry bribery canary finery parody therapy heresy scarcity topiary"
libraryRhmes.things = tmp.split(" ");
tmp = "primary piracy deviltry sanity history confetti tragedy crockery effigy fantasy lechery cutlery butchery perjury forgery penalty rosary tendency revelry strategy sympathy tyranny contrary charity canary novelty parody gallery therapy courtesy injury victory company blueberry raspberry remedy guarantee certainty canopy disagree tendency travesty unsteady bigotry blackberry busily oversee panoply referee atrophy pillory tapestry assembly fantasy untidy heavily hillbilly history facsimile multiply safari vainglory refugee safety arduously usually biography mutiny manually biopsy surety"
libraryRhmes.actions = tmp.split(" ");
tmp = "ebony non-binary primary unfriendly elderly ivory binary contrary unwary charity miserly spidery terribly summary bimonthly trinary topiary warily courtesy slippery victory company savory sensory sugary blueberry comedy cursory heavenly raspberry rotary strawberry bodily cranberry peppery airworthy century evenly gingerly legacy narrowly novelty nursery powdery quarterly tottery unhealthy awfully beggary carroty denary elderly enemy frequently mortuary openly shivery thoroughly unfriendly unsteady votary battery constantly honestly morally normally presently scholarly ternary vapory watery cautiously cookery ebony every feathery immensely leathery luxury masterly mystery overly partially pregnancy quality raggedy silvery southerly unworldly blatantly fidgety lathery motherly pedigree recently recklessly slithery snippety suddenly uppity casualty glittery mannerly matronly pedantry scantily summery absentee fantasy rascally untidy untimely carelessly completely extremely precisely unworthy aplenty easily mothery rapidly unready unruly unseemly unwieldy wintery womanly density easterly intensely northerly pottery savagery touristy actorly sanity slaphappy slatternly biweekly catchpenny insanely possibly unsightly candidly facsimile family filigree genuinely billowy carefree fatherly generally transversely geezery gingery laggardly satiny unthrifty fiery refugee compony conjointly daydreamy gimmicky safety sunshiny slovenly summerly savoury unscary wiry giggly dastardly practically soldierly garlicky praiseworthy toplofty wriggly biggety yesterday blameworthy noteworthy actually suety obliquely absurdly comradely somebody really"
libraryRhmes.adj = tmp.split(" ");
tmp = "primary vibrantly contrary silently miserly rightfully terribly vitally sizably verily frightfully mindfully merrily unfairly warily heavenly timeously bodily scarily evenly gingerly narrowly quarterly unhealthy awfully frequently openly secretly sparingly thoroughly totally unfriendly brutally busily cleverly constantly defiantly equally famously finally honestly instantly minorly morally normally presently scholarly utterly angrily brilliantly cautiously cheerfully correctly currently distantly every expressly fatally forcibly glaringly helplessly horribly immensely legally masterly notably overly painfully partially patiently randomly socially southerly urgently absently adversely blatantly blissfully consciously decently faithfully fearfully fidgety gleefully intently mortally motherly recently recklessly solidly suddenly suitably superbly artfully fervently matronly scantily woefully ardently capably fearlessly healthily helpfully manfully passably pregnantly rascally soberly sullenly sumptuously untimely valiantly validly acidly adeptly callously cannily carelessly cogently completely drearily drowsily extremely faultily faultlessly feasibly giddily heavily inertly latterly meagerly mournfully peaceably perfectly precisely raucously readily sanguinely snappily sneakily somberly sulkily tranquilly transiently wistfully wittily aplenty artlessly blearily easily heartlessly occultly rapidly regally unready wrongfully actively cattily causally dazedly drunkenly eagerly easterly intensely northerly passively sappily wishfully wondrously acutely commonly dreadfully heedfully lavishly markedly savagely slatternly supremely wordlessly adroitly bitterly biweekly bizarrely earnestly globally insanely lawfully patently possibly swimmingly abstractly achingly blessedly candidly concretely dreamily eerily genuinely gloomily glowingly multiply obscenely pressingly sluggishly solemnly casually concisely contently darlingly dashingly dazzlingly demurely facilely fatherly generally heedlessly innately mediocrely morosely movingly obscurely peevishly potently sassily scornfully slavishly sloppily sweepingly transversely unsurely unwisely worriedly wretchedly arguably astutely carefully carnally dauntlessly fetchingly gloriously laggardly obtusely pensively scathingly succinctly touchingly healthfully lambently notedly raspingly scalably scaredly smilingly snarkily soothingly winningly caringly conjointly dubiously factually fawningly fervidly genially laughingly peacefully sniffily tiringly abruptly arduously musically usually vacuously wittingly heartily massively medically saliently tragically usefully addedly compliantly congruently congruously tirelessly vaguely caustically hectically languidly lazily manically maturely morbidly mystically sleepily surgically compactly heatedly hiddenly lastingly mutually novelly obviously saucily sorrily vacantly abstrusely droopily dually practically soldierly toxically feebly manually raspily tiredly dauntingly medially subtly fatuously reactively uselessly biannually prayerfully yesterday actually abjectly obliquely unstably biasedly absurdly preemptively comradely really"
libraryRhmes.adv = tmp.split(" ");


const catRhymes = new RhymeSet();
tmp = "flat mat path";
catRhymes.places = tmp.split(" ");
tmp = "chat fat bat hat pat spat that at rat sat vat plat splat gat matt slat scat tat gnat matte sprat stat plait brat add bad mad pad sad gad lad plaid cad dad fad ad chad rad tad scad brad";
catRhymes.things = tmp.split(" ");
tmp = "chat flat fat bat hat mat pat spat rat sat vat plat splat gat slat scat tat drat stat plait  add bad mad pad clad glad had gad plaid bade brad";
catRhymes.actions = tmp.split(" ");
tmp = "flat fat mat pat that at plat matt phat matte bad mad sad clad glad had plaid fad rad";
catRhymes.adj = tmp.split(" ");
tmp = "flat pat that at stat bad mad";
catRhymes.adv = tmp.split(" ");

//three syllables

const possibleRhymeAs = [libraryRhmes];
const RHYMING_PLACE_A = "RHYMING_PLACE_A";
const RHYMING_THING_A = "RHYMING_THING_A";
const RHYMING_ACTION_A = "RHYMING_ACTION_A";
const RHYMING_ADJ_A = "RHYMING_ADJ_A";
const RHYMING_ADV_A = "RHYMING_ADV_A";

//one syllable
const possibleRhymeBs = [catRhymes];
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

const limmeric_intro_templates = [
  `There once was a clown who worked at a ${RHYMING_PLACE_A}.
  They really were quite ${RHYMING_ADJ_A}.
  When asked for a ${RHYMING_THING_B},
  they gave them a ${RHYMING_THING_B},
  then absconded really quite ${RHYMING_ADJ_A}.`,

  `There once was a clown from a ${RHYMING_PLACE_A}, 
  who lived excessively ${RHYMING_ADV_A}.
  `
]

const line_1_templates = [`There once was a clown from the ${RHYMING_PLACE_A},`, `There lived once a clown in a ${RHYMING_PLACE_A},`, `Tales tell of a clown in the ${RHYMING_PLACE_A},`, `There once was a clown named ${RHYMING_THING_A}`];
const line_2_templates = [`Who lived really quite ${RHYMING_ADJ_A}.`, `obsessed as they were with the ${RHYMING_THING_A}.`, `who could never quite stop walking ${RHYMING_ADV_A}.`];
const line_3_templates = [`When asked for the ${RHYMING_THING_B},`, `They saw a rare ${RHYMING_THING_B}`, `They walked to the ${RHYMING_THING_B},`];
const line_4_templates = [`they gave them the ${RHYMING_THING_B},`, `and gave it the ${RHYMING_THING_B},`, `and got scared by the ${RHYMING_THING_B},`];
const line_5_templates = [`and absconded really quite ${RHYMING_ADJ_A}.`, `and ran screaming right back to the ${RHYMING_PLACE_A}.`, `and never again left the ${RHYMING_PLACE_A}.`];


const generateLimmerick = () => {
  const a = pickFrom(possibleRhymeAs);
  const b = pickFrom(possibleRhymeBs);

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


/*


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





