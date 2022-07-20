// enums for demographics
const residency = {
  in_state: "In-state",
  out_of_state: "Out-of-state",
  international: "International"
}

const transfer = {
  yes: "Yes",
  no: "No"
}

const social_class = {
  working_class: "Working class",
  middle_class: "Middle class",
  upper_class: "Upper class"
}

const first_gen = {
  yes: "Yes",
  no: "No"
}

const ethnicity = {
  african_american: "African American or black",
  asian: "Asian American or Asian",
  middle_east: "Middle Eastern or North African",
  white: "White or Caucasian"
}

const gender = {
  woman: "Woman",
  man: "Man"
}

const sexuality = {
  heterosexual: "Heterosexual or straight",
  gay: "Gay or lesbian",
  bisexual: "Bisexual",
  queer: "Queer"
}

// every animal will get 100 word desc or so.

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

// alums
['aardvark', 'baldeagle', 'elephant', 'goldenret', 'koala', 'lion', 'mainecoon', 'octopus', 'owl', 'salmon', 'sloth']
// juniors
['bear', 'cobra', 'oppossum', 'panda', 'shark']
// seniros
['chicken', 'dolphin', 'flamingo', 'fox', 'gorilla', 'human', 'jaguar', 'moose', 'orca', 'otter', 'racoon', 'seal', 'zebrafish', 'zebra']
function getAllGradStudentNames() {
  // return [
  //   'aye-aye',
  //   'beaver',
  //   'giraffe',
  //   'hamster',
  //   'ibis',
  //   'monkey',
  //   'opsrey',
  //   'rfc',
  //   'sheep',
  //   'sugarglider',
  //   'whitetiger',
  // ];
  return [
    'aye-aye'
  ];
}

function getAllAlumniNames() {
  
}

function getAllSeniorNames() {

}

function getAllJuniorNames() {

}

function getTestName() {
  return ['test_pango'];
}

function getTestMap() {
  return {
    'test_pango': 
      {
        name: "Pangolin",
        age: 9000,
        school: "amazingness",
        academic_standing: "timeless",
        program: "perfection",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/test_pango.png',
        animal_info: <em>A perfect pangolin! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum aliquet augue vel semper. Phasellus mollis in dolor et hendrerit. Duis luctus nisl libero, eu luctus urna mollis et. Duis elementum tellus vitae sapien hendrerit bibendum. Vivamus sodales tellus a ultrices tincidunt. Nulla sed laoreet neque. Curabitur pretium nunc et leo condimentum vestibulum. Praesent pharetra ultrices eros eget scelerisque.

        Pellentesque suscipit justo ut condimentum dapibus. Phasellus non lectus ut mi vulputate commodo ac nec elit. Pellentesque eu purus et odio maximus maximus. Fusce tincidunt venenatis accumsan. Donec quis maximus odio, id ultrices purus. Pellentesque scelerisque, libero nec maximus scelerisque, tellus.</em>,
        demographic_info: {
          gpa: 4.5,
          residency: residency.in_state,
          country: "Paraguay",
          transfer: transfer.yes,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: "Is a pangolin",
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        } 
        // if a student declines to share, put down the following instead:
        // demographic_info: null
      }
  }
}

export { getAllIntervieweeNames, getAllAlumniNames, getAllGradStudentNames, getAllSeniorNames, getAllJuniorNames, getTestName, getTestMap };