

// yes, this is dumb.

// import aardvark from '../md/interviews/aardvark.md';
// import ayeAye from '../md/interviews/aye-aye.md';
// import baldeagle from '../md/interviews/baldeagle.md';
// import bear from '../md/interviews/bear.md';
// import beaver from '../md/interviews/beaver.md';
// import chicken from '../md/interviews/chicken.md';
// import cobra from '../md/interviews/cobra.md';
// import dolphin from '../md/interviews/dolphin.md';
// import elephant from '../md/interviews/elephant.md';
// import flamingo from '../md/interviews/flamingo.md';
// import fox from '../md/interviews/fox.md';
// import giraffe from '../md/interviews/giraffe.md';
// import goldenret from '../md/interviews/goldenret.md';
// import gorilla from '../md/interviews/gorilla.md';
// import hamster from '../md/interviews/hamster.md';
// import ibis from '../md/interviews/ibis.md';
// import jaguar from '../md/interviews/jaguar.md';
// import koala from '../md/interviews/koala.md';
// import lion from '../md/interviews/lion.md';
// import macaque from '../md/interviews/macaque.md';
// import mainecoon from '../md/interviews/mainecoon.md';
// import moose from '../md/interviews/moose.md';
// import octopus from '../md/interviews/octopus.md';
// import oppossum from '../md/interviews/oppossum.md';
// import orca from '../md/interviews/orca.md';
// import osprey from '../md/interviews/osprey.md';
// import otter from '../md/interviews/otter.md';
// import owl from '../md/interviews/owl.md';
// import panda from '../md/interviews/panda.md';
// import racoon from '../md/interviews/racoon.md';
// import rfc from '../md/interviews/rfc.md';
// import salmon from '../md/interviews/salmon.md';
// import seal from '../md/interviews/seal.md';
// import shark from '../md/interviews/shark.md';
// import sheep from '../md/interviews/sheep.md';
// import sloth from '../md/interviews/sloth.md';
// import sugarglider from '../md/interviews/sugarglider.md';
// import whitetiger from '../md/interviews/whitetiger.md';
// import zebra from '../md/interviews/zebra.md';
// import zebrafish from '../md/interviews/zebrafish.md';

// still dumb



// import test from '../md/test.md';


async function getTextMdFromPath(module) {
  const response = await fetch(module)
  const text = await response.text()
  return text;
    // then((response) => await response.text()).
    //   then((text) => text).result;
}



function getAllIntervieweeNames() {
  return [
      'aardvark',
      'aye-aye',
      'baldeagle',
      'bear',
      'beaver',
      'chicken',
      'cobra',
      'dolphin',
      'elephant',
      'flamingo',
      'fox',
      'giraffe',
      'goldenret',
      'gorilla',
      'hamster',
      'ibis',
      'jaguar',
      'koala',
      'lion',
      'macaque',
      'mainecoon',
      'moose',
      'octopus',
      'oppossum',
      'orca',
      'osprey',
      'otter',
      'owl',
      'panda',
      'racoon',
      'rfc',
      'salmon',
      'seal',
      'shark',
      'sheep',
      'sloth',
      'sugarglider',
      'whitetiger',
      'zebra',
      'zebrafish'
    ];
}

function getAllAlumniNames() {

}

function getAllGradStudentNames() {

}

function getAllSeniorNames() {

}

function getAllJuniorNames() {

}

function getTestName() {
  return ['test_pango'];
}

let something = '../md/test.md'

function getTestMap() {
  return {
    'test_pango': 
      {
        age: 9000,
        school: "amazingness",
        academic_standing: "timeless",
        program: "perfection",
        path_md: '/md/test.md',
        // text_md: getTextMdFromPath('../md/test.md'),
        text_md: getTextMdFromPath(something)
      }
  }
}

export { getAllIntervieweeNames, getAllAlumniNames, getAllGradStudentNames, getAllSeniorNames, getAllJuniorNames, getTestName, getTestMap };