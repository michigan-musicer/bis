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

// swapped b/c question is "Did either of your parents complete 4 years or higher?"
const first_gen = {
  yes: "No",
  no: "Yes"
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
      'human',
      'ibis',
      'jaguar',
      'koala',
      'lion',
      'macaque',
      'mainecoon',
      'moose',
      'octopus',
      'opossum',
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

function getAllIntervieweeMap() {
  return {
    'aardvark':
      {
        name: "Aardvark",
        age: 21,
        school: "engineering",
        academic_standing: "alumni undergraduate",
        program: "computer science, physics minor",
        path_md: '/md/interviews/aardvark.md',
        path_image: '/imgs/portraits/aardvark.png',
        animal_info: '/md/animals/aardvark.md',
        demographic_info: {
          gpa: 3.6,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: null,
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        }, 
      },
    'aye-aye': 
      {
        name: "Aye-Aye",
        age: 23,
        school: "engineering",
        academic_standing: "PhD precandidate",
        program: "computer science",
        path_md: '/md/interviews/aye-aye.md',
        path_image: '/imgs/portraits/aye-aye.png',
        animal_info: '/md/animals/aye-aye.md',
        demographic_info: null
      },
    'baldeagle':
      {
        name: "Eagle",
        age: 23,
        school: "engineering",
        academic_standing: "alumni undergraduate",
        program: "computer science and data science, math minor",
        path_md: '/md/interviews/baldeagle.md',
        path_image: '/imgs/portraits/baldeagle.png',
        animal_info: '/md/animals/baldeagle.md',
        demographic_info: null
      },
    'bear':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/interviews/bear.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: '/md/animals/bear.md',
        demographic_info: {
          gpa: 3.5,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.no,
          religion: "Christian",
          ethnicity: ethnicity.white,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'beaver':
      {
        name: "Beaver",
        age: 24,
        school: "engineering",
        academic_standing: "master's",
        program: "electrical and computer engineering",
        path_md: '/md/interviews/beaver.md',
        path_image: '/imgs/portraits/beaver.png',
        animal_info: '/md/animals/beaver.md',
        demographic_info: null
      },
    'chicken':
      {
        name: "Chicken",
        age: 20,
        school: "LSA",
        academic_standing: "rising senior",
        program: "Math and computer science",
        path_md: '/md/interviews/chicken.md',
        path_image: '/imgs/portraits/chicken.png',
        animal_info: '/md/animals/chicken.md',
        demographic_info: null
      },
    'cobra':
      {
        name: "Cobra",
        age: "pending",
        school: "pending",
        academic_standing: "pending",
        program: "pending",
        path_md: '/md/interviews/pending.md',
        path_image: '/imgs/portraits/cobra.png',
        animal_info: '/md/animals/pending.md',
        demographic_info: null
      },
    'dolphin':
      {
        name: "Dolphin",
        age: 21,
        school: "SMTD",
        academic_standing: "rising senior",
        program: "music performance",
        path_md: '/md/interviews/dolphin.md',
        path_image: '/imgs/portraits/dolphin.png',
        animal_info: '/md/animals/dolphin.md',
        demographic_info: {
          gpa: 3.9,
          residency: residency.out_of_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: "Unsure",
          ethnicity: ethnicity.african_american,
          gender: gender.woman,
          sexuality: sexuality.queer,
        },
      },
    'elephant':
      {
        name: "Elephant",
        age: 21,
        school: "unspecified; engineering",
        academic_standing: "incoming master's; alumni undergraduate",
        program: "applied data science; computer science, applied statistics minor",
        path_md: '/md/interviews/elephant.md',
        path_image: '/imgs/portraits/elephant.png',
        animal_info: '/md/animals/elephant.md',
        demographic_info: null
      },
    'flamingo':
      {
        name: "Flamingo",
        age: 21,
        school: "engineering",
        academic_standing: "rising senior",
        program: "electrical engineering, computer science minor",
        path_md: '/md/interviews/flamingo.md',
        path_image: '/imgs/portraits/flamingo.png',
        animal_info: '/md/animals/flamingo.md',
        demographic_info: {
          gpa: 3.88,
          residency: residency.out_of_state,
          transfer: transfer.no,
          social_class: social_class.working_class,
          first_gen: first_gen.yes,
          religion: "Jewish",
          ethnicity: ethnicity.white,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'fox':
      {
        name: "Fox",
        age: 20,
        school: "engineering",
        academic_standing: "rising senior",
        program: "computer science",
        path_md: '/md/interviews/fox.md',
        path_image: '/imgs/portraits/fox.png',
        animal_info: '/md/animals/fox.md',
        demographic_info: {
          gpa: 3.2,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.working_class,
          first_gen: first_gen.no,
          religion: "Atheist",
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'giraffe':
      {
        name: "Giraffe",
        age: 26,
        school: "unspecified; engineering; engineering",
        academic_standing: "PhD precandidate; alumni master's; alumni undergraduate",
        program: "unspecified; computer science; computer science",
        path_md: '/md/interviews/giraffe.md',
        path_image: '/imgs/portraits/giraffe.png',
        animal_info: '/md/animals/giraffe.md',
        demographic_info: null
      },
    'goldenret':
      {
        name: "Dog",
        age: 24,
        school: "LSA",
        academic_standing: "alumni undergraduate",
        program: "communication and media; film, television, and visual media",
        path_md: '/md/interviews/goldenret.md',
        path_image: '/imgs/portraits/goldenret.png',
        animal_info: '/md/animals/goldenret.md',
        demographic_info: {
          gpa: 3.3,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.upper_class,
          first_gen: first_gen.yes,
          religion: "Christian",
          ethnicity: ethnicity.white,
          gender: gender.man,
          sexuality: sexuality.bisexual,
        },
      },
    'gorilla':
      {
        name: "Gorilla",
        age: 20,
        school: "LSA",
        academic_standing: "rising senior",
        program: "psychology",
        path_md: '/md/interviews/gorilla.md',
        path_image: '/imgs/portraits/gorilla.png',
        animal_info: '/md/animals/gorilla.md',
        demographic_info: {
          gpa: 3.7,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.working_class,
          first_gen: first_gen.no,
          religion: null,
          ethnicity: ethnicity.white,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'hamster':
      {
        name: "Hamster",
        age: 20,
        school: "engineering",
        academic_standing: "incoming master's; alumni undergraduate",
        program: "unspecified; biomedical engineering, unspecified minor",
        path_md: '/md/interviews/hamster.md',
        path_image: '/imgs/portraits/hamster.png',
        animal_info: '/md/animals/hamster.md',
        demographic_info: {
          gpa: 3.8,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.upper_class,
          first_gen: first_gen.yes,
          religion: "Christian",
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'human':
      {
        name: "Human",
        age: 20,
        school: "engineering",
        academic_standing: "rising senior",
        program: "computer science, math minor",
        path_md: '/md/interviews/human.md',
        path_image: '/imgs/portraits/human.png',
        animal_info: '/md/animals/human.md',
        demographic_info: {
          gpa: 3.8,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: "Agnostic",
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'ibis':
      {
        name: "Ibis",
        age: 28,
        school: "engineering",
        academic_standing: "PhD candidate",
        program: "computer science",
        path_md: '/md/interviews/ibis.md',
        path_image: '/imgs/portraits/ibis.png',
        animal_info: '/md/animals/ibis.md',
        demographic_info: null
      },
    'jaguar':
      {
        name: "Jaguar",
        age: 20,
        school: "business",
        academic_standing: "rising senior",
        program: "business administration, computer science minor",
        path_md: '/md/interviews/jaguar.md',
        path_image: '/imgs/portraits/jaguar.png',
        animal_info: '/md/animals/jaguar.md',
        demographic_info: null
      },
    'koala':
      {
        name: "Koala",
        age: 21,
        school: "engineering; engineering",
        academic_standing: "alumni master's; alumni undergraduate",
        program: "computer engineering; computer science",
        path_md: '/md/interviews/koala.md',
        path_image: '/imgs/portraits/koala.png',
        animal_info: '/md/animals/koala.md',
        demographic_info: null
      },
    'lion':
      {
        name: "Lion",
        age: 23,
        school: "engineering",
        academic_standing: "alumni master's; alumni undergraduate",
        program: "electrical and computer engineering; computer engineering, physics minor",
        path_md: '/md/interviews/lion.md',
        path_image: '/imgs/portraits/lion.png',
        animal_info: '/md/animals/lion.md',
        demographic_info: null
      },
    'macaque':
      {
        name: "Macaque",
        age: 23,
        school: "engineering",
        academic_standing: "master's; alumni undergraduate",
        program: "Unspecified; computer science and engineering (unspecified minor)",
        path_md: '/md/interviews/macaque.md',
        path_image: '/imgs/portraits/macaque.png',
        animal_info: '/md/animals/macaque.md',
        demographic_info: null
      },
    'mainecoon':
      {
        name: "Cat",
        age: 23,
        school: "engineering",
        academic_standing: "alumni undergraduate",
        program: "computer science",
        path_md: '/md/interviews/mainecoon.md',
        path_image: '/imgs/portraits/mainecoon.png',
        animal_info: '/md/animals/mainecoon.md',
        demographic_info: {
          gpa: 3.3,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.no,
          religion: "Agnostic",
          ethnicity: ethnicity.white,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'moose':
      {
        name: "Moose",
        age: 20,
        school: "engineering",
        academic_standing: "rising senior",
        program: "computer science",
        path_md: '/md/interviews/moose.md',
        path_image: '/imgs/portraits/moose.png',
        animal_info: '/md/animals/moose.md',
        demographic_info: null
      },
    'octopus':
      {
        name: "Octopus",
        age: 22,
        school: "engineering",
        academic_standing: "alumni undergraduate",
        program: "computer science",
        path_md: '/md/interviews/octopus.md',
        path_image: '/imgs/portraits/octopus.png',
        animal_info: '/md/animals/octopus.md',
        demographic_info: {
          gpa: 3.8,
          residency: residency.out_of_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: null,
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'opossum':
      {
        name: "Opossum",
        age: 20,
        school: "LSA",
        academic_standing: "rising junior",
        program: "computer science, unspecified minor",
        path_md: '/md/interviews/opossum.md',
        path_image: '/imgs/portraits/opossum.png',
        animal_info: '/md/animals/opossum.md',
        demographic_info: {
          gpa: 3.5,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: "Agnostic",
          ethnicity: ethnicity.white,
          gender: gender.woman,
          sexuality: sexuality.gay,
        },
      },
    'orca':
      {
        name: "Orca",
        age: 20,
        school: "engineering",
        academic_standing: "rising senior",
        program: "computer science, entrepreneurship minor",
        path_md: '/md/interviews/orca.md',
        path_image: '/imgs/portraits/orca.png',
        animal_info: '/md/animals/orca.md',
        demographic_info: {
          gpa: 3.6,
          residency: residency.out_of_state,
          transfer: transfer.no,
          social_class: social_class.upper_class,
          first_gen: first_gen.yes,
          religion: null,
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'osprey':
      {
        name: "Osprey",
        age: "pending",
        school: "pending",
        academic_standing: "pending",
        program: "pending",
        path_md: '/md/interviews/pending.md',
        path_image: '/imgs/portraits/osprey.png',
        animal_info: '/md/animals/pending.md',
        demographic_info: null
      },
    'otter':
      {
        name: "Otter",
        age: 22,
        school: "LSA",
        academic_standing: "senior",
        program: "computer science",
        path_md: '/md/interviews/otter.md',
        path_image: '/imgs/portraits/otter.png',
        animal_info: '/md/animals/otter.md',
        demographic_info: {
          gpa: 3.4,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.upper_class,
          first_gen: first_gen.yes,
          religion: "Agnostic",
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'owl':
      {
        name: "Owl",
        age: 22,
        school: "engineering",
        academic_standing: "alumni undergraduate",
        program: "computer science",
        path_md: '/md/interviews/owl.md',
        path_image: '/imgs/portraits/owl.png',
        animal_info: '/md/animals/owl.md',
        demographic_info: null
      },
    'panda':
      {
        name: "Panda",
        age: 19,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer science, math minor",
        path_md: '/md/interviews/panda.md',
        path_image: '/imgs/portraits/panda.png',
        animal_info: '/md/animals/panda.md',
        demographic_info: {
          gpa: 3.6,
          residency: residency.out_of_state,
          transfer: transfer.no,
          social_class: null,
          first_gen: first_gen.yes,
          religion: null,
          ethnicity: ethnicity.asian,
          gender: gender.woman,
          sexuality: sexuality.heterosexual,
        },
      },
    'racoon':
      {
        name: "Racoon",
        age: 21,
        school: "Engineering, SMTD",
        academic_standing: "rising first-year senior",
        program: "Unspecified dual degree",
        path_md: '/md/interviews/racoon.md',
        path_image: '/imgs/portraits/racoon.png',
        animal_info: '/md/animals/racoon.md',
        demographic_info: null
      },
    'rfc':
      {
        name: "Royal Flycatcher",
        age: 23,
        school: "LSA; LSA",
        academic_standing: "master's; alumni undergraduate",
        program: "applied statistics; cognitive science and data science",
        path_md: '/md/interviews/rfc.md',
        path_image: '/imgs/portraits/rfc.png',
        animal_info: '/md/animals/rfc.md',
        demographic_info: null
      },
    'salmon':
      {
        name: "Salmon",
        age: 21,
        school: "engineering; engineering",
        academic_standing: "alumni master's; alumni undergraduate",
        program: "computer science; computer science, math minor",
        path_md: '/md/interviews/salmon.md',
        path_image: '/imgs/portraits/salmon.png',
        animal_info: '/md/animals/salmon.md',
        demographic_info: {
          gpa: 3.8,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.working_class,
          first_gen: first_gen.yes,
          religion: "Christian",
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'seal':
      {
        name: "Seal",
        age: 20,
        school: "engineering",
        academic_standing: "rising senior",
        program: "industrial and operations engineering",
        path_md: '/md/interviews/seal.md',
        path_image: '/imgs/portraits/seal.png',
        animal_info: '/md/animals/seal.md',
        demographic_info: {
          gpa: 3.5,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: "Christian",
          ethnicity: ethnicity.african_american,
          gender: gender.man,
          sexuality: sexuality.heterosexual,
        },
      },
    'shark':
      {
        name: "Shark",
        age: 19,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer science",
        path_md: '/md/interviews/shark.md',
        path_image: '/imgs/portraits/shark.png',
        animal_info: '/md/animals/shark.md',
        demographic_info: null
      },
    'sheep':
      {
        name: "Sheep",
        age: 25,
        school: "engineering",
        academic_standing: "PhD candidate",
        program: "computer science",
        path_md: '/md/interviews/sheep.md',
        path_image: '/imgs/portraits/sheep.png',
        animal_info: '/md/animals/sheep.md',
        demographic_info: null
      },
    'sloth':
      {
        name: "Sloth",
        age: 24,
        school: "LSA",
        academic_standing: "alumni undergraduate",
        program: "Math, computer science minor",
        path_md: '/md/interviews/sloth.md',
        path_image: '/imgs/portraits/sloth.png',
        animal_info: '/md/animals/sloth.md',
        demographic_info: {
          gpa: 3.9,
          residency: residency.out_of_state,
          transfer: transfer.yes,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: "Agnostic",
          ethnicity: null,
          gender: gender.woman,
          sexuality: sexuality.heterosexual,
        },
      },
    'sugarglider':
      {
        name: "Sugar Glider",
        age: 22,
        school: "engineering; engineering",
        academic_standing: "PhD precandidate; alumni undergraduate",
        program: "unspecified; computer science, math and philosophy minors",
        path_md: '/md/interviews/sugarglider.md',
        path_image: '/imgs/portraits/sugarglider.png',
        animal_info: '/md/animals/sugarglider.md',
        demographic_info: {
          gpa: 3.7,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.upper_class,
          first_gen: first_gen.yes,
          religion: null,
          ethnicity: ethnicity.white,
          gender: gender.woman,
          sexuality: sexuality.heterosexual,
        },
      },
    'whitetiger':
      {
        name: "White Tiger",
        age: 24,
        school: "engineering",
        academic_standing: "master's",
        program: "electrical and computer engineering",
        path_md: '/md/interviews/whitetiger.md',
        path_image: '/imgs/portraits/whitetiger.png',
        animal_info: '/md/animals/whitetiger.md',
        demographic_info: null
      },
    'zebra':
      {
        name: "Zebra",
        age: 21,
        school: "LSA",
        academic_standing: "rising senior",
        program: "unspecified, business administration and unspecified minors",
        path_md: '/md/interviews/zebra.md',
        path_image: '/imgs/portraits/zebra.png',
        animal_info: '/md/animals/zebra.md',
        demographic_info: {
          gpa: 3.9,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.upper_class,
          first_gen: first_gen.yes,
          religion: "Catholic",
          ethnicity: ethnicity.white,
          gender: gender.woman,
          sexuality: sexuality.heterosexual,
        },
      },
    'zebrafish':
      {
        name: "Zebrafish",
        age: 21,
        school: "LSA",
        academic_standing: "rising senior",
        program: "unspecified and philosophy",
        path_md: '/md/interviews/zebrafish.md',
        path_image: '/imgs/portraits/zebrafish.png',
        animal_info: '/md/animals/zebrafish.md',
        demographic_info: {
          gpa: 3.9,
          residency: residency.in_state,
          transfer: transfer.no,
          social_class: social_class.middle_class,
          first_gen: first_gen.yes,
          religion: "Hindu",
          ethnicity: ethnicity.asian,
          gender: gender.man,
          sexuality: sexuality.gay + ', ' + sexuality.bisexual,
        },
      },
  }
}

function getAllGradStudentNames() {
  return [
    'aye-aye',
    'beaver',
    'giraffe',
    'hamster',
    'ibis',
    'macaque',
    'osprey',
    'rfc',
    'sheep',
    'sugarglider',
    'whitetiger',
  ];
}

function getAllAlumniNames() {
  return [
    'aardvark', 
    'baldeagle', 
    'elephant', 
    'goldenret', 
    'koala', 
    'lion', 
    'mainecoon', 
    'octopus', 
    'owl', 
    'salmon', 
    'sloth',
  ]
}

function getAllSeniorNames() {
  return [
    'chicken', 
    'dolphin', 
    'flamingo', 
    'fox', 
    'gorilla', 
    'human', 
    'jaguar', 
    'moose', 
    'orca', 
    'otter', 
    'racoon', 
    'seal', 
    'zebra',
    'zebrafish', 
  ]
}

function getAllJuniorNames() {
  return [
    'bear', 
    'cobra', 
    'opossum', 
    'panda', 
    'shark',
  ]
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

// a better global var solution here:
// https://stackoverflow.com/questions/46476426/how-do-i-share-a-global-variable-between-multiple-files

export { getAllIntervieweeNames, getAllIntervieweeMap, getAllAlumniNames, getAllGradStudentNames, getAllSeniorNames, getAllJuniorNames, getTestName, getTestMap };