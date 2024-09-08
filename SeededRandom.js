/*
You know, statistically: the only people who will end up here are TRUE Lavinraca ppl, not Zampanio ones.

Because this file never changes, in every sim, it remains the same, so why would they look?

But you don't know that, do you, hypothetical Lavinraca guest?

Which is interesting, isn't it?

Two sets of people, mingling together in a maze where they feel so so alone yet only inches apart.

The Zampanio ones are mine. They know how I work, they know how what I create works. They've already let the maze in.

They know NOTHING about Lavinraca, of course.

CAN know nothing.

Because... how can you?

Discord is the epitome of the rot taking all in the end, isn't it?

A place so barren not even google can find it.

And isn't that interesting?

Because YOU, my presumed Lavinraca friends, are in the exact opposite boat.

You could find out anything and everything you wanted to know about Zampanio.

Google to your hearts content!

The end is never the end, but what should that matter?

Well...

I suppose it matters a LITTLE.

Wouldn't want to take you out of THIS maze before you're ready, now would I? Wouldn't want to lose you.

So maybe do your best to wait. It's not as if Zampanio is going anywhere :) :) ;)

*/



//https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use

//https://longesttextever.neocities.org/
class SeededRandom {
  internal_seed;
  initial_seed;

  constructor(seed) {
    this.initial_seed = seed;
    this.internal_seed = seed;
  }

  //default is zero and one, type is inferred to be a number from this
  nextDouble = (min = 0, max=1) => {
    this.internal_seed = (this.internal_seed * 1664525 + 1013904223) % 4294967296;
    const rnd = this.internal_seed / 4294967296;
    return min + rnd * (max - min);
  }

  getRandomNumberBetween = (min, max) => {
    return Math.floor(this.nextDouble() * (max - min + 1)) + min;
  }

  pickFrom = (array) => {
    return array[this.getRandomNumberBetween(0, array.length - 1)];
  }

  //if you have say, a string "hello world my name is"
  //and you have a chunk size of 3, you'd get something like
  //"worhel na islo " etc
  shuffleInChunks = (array, chunkSize)=>{
    const chunks = chunkUpArray(array, chunkSize);
    this.shuffle(chunks);
    return chunks.flat();
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(this.nextDouble() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

