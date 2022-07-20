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
      'human',
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

function getAllIntervieweeMap() {
  return {
    'aardvark':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'aye-aye': 
      {
        name: "Aye-Aye",
        age: 23,
        school: "engineering",
        academic_standing: "PhD precandidate",
        program: "perfection",
        path_md: '/md/interviews/aye-aye.md',
        path_image: '/imgs/portraits/aye-aye.png',
        animal_info: <div><em>It may not be obvious, but the aye-aye is a type of monkey, specifically a lemur. Besides being the largest nocturnal primate and severely confusing all the biologists who first discovered it, the aye-aye is distinctive for having an unusually long and thin middle finger (visible in the portrait photo on the left hand). The aye-aye will chew a hole in tree bark and then use this finger to scoop out invertebrates inside the tree bark, essentially giving it the job of a hairy flightless woodpecker. The only other animal to feed in a similar way is the striped possum, which has an unusually long and thin </em>fourth <em>finger instead.</em> 
        <p></p>
        <em>Lemurs are among the most endangered mammals in the world, and the aye-aye is classified as endangered on the IUCN Red List.</em></div>,
        demographic_info: null
      },
    'baldeagle':
      {
        name: "Eagle",
        age: 23,
        school: "engineering",
        academic_standing: "alumni",
        program: "computer science and data science, math minor",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/baldeagle.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'bear':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'beaver':
      {
        name: "Beaver",
        age: 24,
        school: "engineering",
        academic_standing: "master's",
        program: "electrical and computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/beaver.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'chicken':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'cobra':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'dolphin':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'elephant':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'flamingo':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'fox':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'giraffe':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'goldenret':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'gorilla':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'hamster':
      {
        name: "Hamster",
        age: 20,
        school: "engineering",
        academic_standing: "incoming master's; undergraduate alumni",
        program: "biomedical engineering, unspecified minor",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/hamster.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'human':
      {
        name: "Human",
        age: 20,
        school: "engineering",
        academic_standing: "rising senior",
        program: "computer science, math minor",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/human.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'ibis':
      {
        name: "Ibis",
        age: 28,
        school: "engineering",
        academic_standing: "PhD candidate",
        program: "computer science",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/ibis.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'jaguar':
      {
        name: "Jaguar",
        age: 20,
        school: "business",
        academic_standing: "rising senior",
        program: "business administration, computer science minor",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/jaguar.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'koala':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'lion':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'macaque':
      {
        name: "Macaque",
        age: 23,
        school: "engineering",
        academic_standing: "Master's; undergraduate alumni",
        program: "Unspecified; computer science and engineering (unspecified minor)",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/macaque.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'mainecoon':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'moose':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'octopus':
      {
        name: "Octopus",
        age: 22,
        school: "engineering",
        academic_standing: "alumni",
        program: "computer science",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/octopus.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'oppossum':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'orca':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'osprey':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'otter':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'owl':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'panda':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'racoon':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'rfc':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'salmon':
      {
        name: "Salmon",
        age: 21,
        school: "business",
        academic_standing: "rising senior",
        program: "business administration, computer science minor",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/salmon.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'seal':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'shark':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'sheep':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'sloth':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'sugarglider':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'whitetiger':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'zebra':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
    'zebrafish':
      {
        name: "Bear",
        age: 20,
        school: "engineering",
        academic_standing: "rising junior",
        program: "computer engineering",
        path_md: '/md/test.md',
        path_image: '/imgs/portraits/bear.png',
        animal_info: <em></em>,
        demographic_info: null
      },
  }
}

// alums

// juniors

// seniros
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
  // return [
  //   'aardvark', 
  //   'baldeagle', 
  //   'elephant', 
  //   'goldenret', 
  //   'koala', 
  //   'lion', 
  //   'mainecoon', 
  //   'octopus', 
  //   'owl', 
  //   'salmon', 
  //   'sloth',
  // ]
  return ['salmon']
}

function getAllSeniorNames() {
  // return [
  //   'chicken', 
  //   'dolphin', 
  //   'flamingo', 
  //   'fox', 
  //   'gorilla', 
  //   'human', 
  //   'jaguar', 
  //   'moose', 
  //   'orca', 
  //   'otter', 
  //   'racoon', 
  //   'seal', 
  //   'zebrafish', 
  //   'zebra',
  // ]
  return ['jaguar']

}

function getAllJuniorNames() {
  // return [
  //   'bear', 
  //   'cobra', 
  //   'oppossum', 
  //   'panda', 
  //   'shark',
  // ]
  return ['bear']
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