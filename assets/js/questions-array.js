const myQuestions = [
    { 
        questionNumber: 1,
        questionText: "What are large, spherical objects that orbit the Sun called?" ,
        options : ["Planets", "Moon","Stars", "Comets", ],
        correctAnswer : 0
    },
    { 
        questionNumber: 2,
        questionText: "Which is the furthest planet from the Sun?" ,
        options : ["Mercury","Neptune","Jupiter","Pluto", ],
        correctAnswer: 1
    },
    { 
        questionNumber: 3,
        questionText: "Which planet do we live on?" ,
        options : ["Mars","Saturn","Earth","Venus", ],
        correctAnswer: 2
    },
    { 
        questionNumber: 4,
        questionText: "What can be found between the orbits of Mars and Jupiter?",
        options : ["Halley`s Comet", "The Kuiper Belt", "The Oort Cloud", "The Asteroid Belt", ],
        correctAnswer: 3
    },
    { 
        questionNumber: 5,
        questionText: "Which planet's orbit is closest to Earth's orbit?" ,
        options : ["Jupiter","Venus","Mars", "Neptune", ],
        correctAnswer: 1
    },
    { 
        questionNumber: 6,
        questionText: "What is the star in our solar system called?" ,
        options : ["Moon","Pluto","Sun", "Phobos", ],
        correctAnswer: 2
    },
    { 
        questionNumber: 7,
        questionText: "Which is the largest planet in the Solar System? " ,
        options : ["Mars","Neptune","Earth", "Jupiter", ], 
        correctAnswer: 3
    },
    { 
        questionNumber: 8,
        questionText: "Which planet has the most rings around it?" ,
        options : ["Pluto","Saturn","Neptune","Venus", ],
        correctAnswer: 1
    },
    { 
        questionNumber: 9,
        questionText: "Which is the smallest planet in our Solar System?" ,
        options : ["Mercury","Earth","Jupiter", "Uranus", ],
        correctAnswer: 0
    },
    { 
        questionNumber: 10,
        questionText: "Which is the seventh planet from the Sun?" ,
        options : ["Jupiter","Neptune","Uranus", "Saturn", ],
        correctAnswer: 2
    },
    { 
        questionNumber: 11,
        questionText: "Which of the following is one of the dwarf planets in our Solar System?" ,
        options : ["Pluto","The Moon","Uranus","Mars", ],
        correctAnswer: 0
    },
    { 
        questionNumber: 12,
        questionText: "Which planet is also known as the red planet?",
        options : ["Neptune","Saturn","Mars", "Pluto", ], 
        correctAnswer : 2
    },
    { 
        questionNumber: 13,
        questionText: "Which is the hottest planet?" ,
        options : ["Venus","Uranus","Mars", "Neptune", ],
        correctAnswer: 0
    },
    { 
        questionNumber: 14,
        questionText: "Which is the coldest planet?" ,
        options : ["Saturn","Earth","Neptune", "Uranus", ],
        correctAnswer: 3
    },
    { 
        questionNumber: 15,
        questionText: "How old is the Sun now?" ,
        options : ["3 million years","4.6 billion years","2.5 billion years", "6 million years", ],
        correctAnswer: 1
    },
    { 
        questionNumber: 16,
        questionText: "What planet is green?" ,
        options : ["Earth","Mars","Uranus", "Mercury", ],
        correctAnswer: 2
    },
    { 
        questionNumber: 17,
        questionText: "How many planets are there in the Solar system?" ,
        options : ["11","6","9","8", ],
        correctAnswer: 3
    },
    { 
        questionNumber: 18,
        questionText: "What is the closest planet to Earth?" ,
        options : ["Venus","Neptune","Mercury","Mars", ],
        correctAnswer: 0
    },
    { 
        questionNumber: 19,
        questionText: "What is the largest object in the solar system?" ,
        options : ["Neptune","The Sun","The Moon", "Uranus", ],
        correctAnswer: 1
    },
    { 
        questionNumber: 20,
        questionText: "Which is the fastest planet to orbt the Sun?" ,
        options : ["Earth","Neptune","Mars", "Mercury", ],
        correctAnswer: 3
    },
    { 
        questionNumber: 21,
        questionText: "Which planets do not have moons, that otbit them?" ,
        options : ["Mercury and Earth","Venus and Mercury","Neptune and Venus", "Uranus and Saturn", ],
        correctAnswer: 1
    },
    { 
        questionNumber: 22,
        questionText: "How many miles away is the Earth from the Sun?" ,
        options : ["10 minutes walk","Quadrillion miles","150 billion miles", "93 million miles", ],
        correctAnswer: 3
    },
    { 
        questionNumber: 23,
        questionText: "When we celebrate the Earth Day?" ,
        options : ["31 March","22 April","27 June", "16 May", ],
        correctAnswer: 1
    },
    { 
        questionNumber: 24,
        questionText: "What is the 5th planet from the Sun?" ,
        options : ["Jupiter","Earth","Saturn", "Uranus", ],
        correctAnswer: 0
    },
    { 
        questionNumber: 25,
        questionText: "Who was the first man to observe Saturn?" ,
        options : ["Isaac Newton","William Huggins","Galileo Galilei", "Nicolas Copernicus", ],
        correctAnswer: 2
    },
    { 
        questionNumber: 26,
        questionText:"What is the name of our galaxy?",
        options : ["Andromeda","Comet","Black Eye", "Milky Way", ],
        correctAnswer: 3
    },
    { 
        questionNumber: 27,
        questionText: "What is the most common type of star found in the Milky Way?" ,
        options : ["Red Dwarf stars","Black stars","Yellow stars", "Orange dwarf stars",],
        correctAnswer: 0
    },
    { 
        questionNumber: 28,
        questionText: "What is at the center of our solar system" ,
        options : ["The Sun","A black hole","The Moon", "The Earth",],
        correctAnswer: 0
    },
    { 
        questionNumber: 29,
        questionText: "Approximately how many miles is a lightyear?" ,
        options : ["8.5 Trillion miles","5.9 Trillion miles","7.3 Trillion miles", "2.4 Trillion miles",],
        correctAnswer: 2
    },
    { 
        questionNumber: 30,
        questionText: "What are the three things comets are made out of?" ,
        options : ["Water, gas and land ","Land, oxygen and rocks","Ice, dust and gas", "Dust, rocks, and ice",],
        correctAnswer: 3
    },
    { 
        questionNumber: 31,
        questionText: "What type of galaxy is the Milky Way?" ,
        options : ["Elliptical","Spiral","Irregular", "Peculiar",],
        correctAnswer: 1
    },
    { 
        questionNumber: 32,
        questionText: "Which planet has the largest ocean?" ,
        options : ["Jupiter","Neptune","Uranus", "Saturn",],
        correctAnswer: 0
    },
    { 
        questionNumber: 33,
        questionText: "How long is one year on Jupiter?" ,
        options : ["88 Days","12 Years","1 Hour", "9 Million Years",],
        correctAnswer: 1
    },
    { 
        questionNumber: 34,
        questionText: "Which planet has the most volcanoes?" ,
        options : ["Mars","Earth","Venus", "Neptune",],
        correctAnswer: 2
    },
    { 
        questionNumber: 35,
        questionText: "What planet is orbited by a moon called Titan?" ,
        options : ["Mercury","Neptune","Earth", "Saturn",],
        correctAnswer: 3
    },
    { 
        questionNumber: 36,
        questionText: "Instead of water, what rains on Jupiter?" ,
        options : ["Acid","Iron","Fire", "Diamonds",],
        correctAnswer: 3
    },
    { 
        questionNumber: 37,
        questionText: "What is the name of the first spacecraft to bring astronauts to the moon?" ,
        options : ["Apollo 11","Voyager 2","Voyager 1", "Apollo 13",],
        correctAnswer: 0
    },
    { 
        questionNumber: 38,
        questionText: "What is the name of the force which keeps the planets in orbit around the Sun?" ,
        options : ["Kinetic","Gravity","Tension", "Elastic",],
        correctAnswer: 1
    },
    { 
        questionNumber: 39,
        questionText: "What is the term for a natural satellite?" ,
        options : ["Galaxy","Comet","Moon", "Sun",],
        correctAnswer: 2
    },
    { 
        questionNumber: 40,
        questionText: "Who was the first man in space?" ,
        options : ["Yuri Gagarin","Neil Armstrong","James Irwin", "Alan Bean",],
        correctAnswer: 0
    }
];
