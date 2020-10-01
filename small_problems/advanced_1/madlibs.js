const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];

const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];

const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];

const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];

const template1 = "The -adjective- brown -noun- -adverb- -verb- the -adjective- yellow -noun-, who -adverb- -verb- his -noun- and looks around.";
const template2 = "The -noun- -verb- the -noun-'s -noun-.";

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function replaceAll(template, regex, array) {
  while (template.match(regex)) {
    template = template.replace(regex, sample(array));
  }

  return template;
}

function madlibs(template) {
  template = replaceAll(template, /-adjective-/, ADJECTIVES);
  template = replaceAll(template, /-noun-/, NOUNS);
  template = replaceAll(template, /-adverb-/, ADVERBS);
  template = replaceAll(template, /-verb-/, VERBS);
  console.log(template);
}

madlibs(template1);
madlibs(template2);