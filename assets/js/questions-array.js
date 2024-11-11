const myQuestions = [
    { 
        questionNumber: 1,
        questionText: "What are large, spherical objects that orbit the Sun called?" ,
        answers : {
            a: "Planets",
            b: "Moon",
            c: "Stars", 
            d: "Comets", },
            correctAnswer : "a",
    },
    { 
        questionNumber: 2,
        questionText: "Which is the furthest planet from the Sun?" ,
        answers : {
            a: "Mercury",
            b: "Neptune",
            c: "Jupiter", 
            d: "Pluto", },
            correctAnswer: "b",
    },
    { 
        questionNumber: 3,
        questionText: "Which planet do we live on?" ,
        answers : {
            a: "Mars",
            b: "Saturn",
            c: "Earth", 
            d: "Venus", },
            correctAnswer: "c",
    },
    { 
        questionNumber: 4,
        questionText: "What can be found between the orbits of Mars and Jupiter?",
        answers : {
            a: "",
            b: "The Kuiper Belt",
            c: "The Oort Cloud", 
            d: "The Asteroid Belt", },
            correctAnswer: "d",
    },
    { 
        questionNumber: 5,
        questionText: "Which planet's orbit is closest to Earth's orbit?" ,
        answers : {
            a: "Jupiter",
            b: "Venus",
            c: "Mars", 
            d: "Neptune", },
            correctAnswer: "b",
    },
    { 
        questionNumber: 6,
        questionText: "What is the star in our solar system called?" ,
        answers : {
            a: "Moon",
            b: "Pluto",
            c: "Sun", 
            d: "Phobos", },
            correctAnswer: "c",
    },
    { 
        questionNumber: 7,
        questionText: "Which is the largest planet in the Solar System? " ,
        answers : {
            a: "Mars",
            b: "Neptune",
            c: "Earth", 
            d: "Jupiter", }, 
            correctAnswer: "d",
    },
    { 
        questionNumber: 8,
        questionText: "Which planet has the most rings around it?" ,
        answers : {
            a: "Pluto",
            b: "Saturn",
            c: "Neptune", 
            d: "Venus", },
            correctAnswer: "b",
    },
    { 
        questionNumber: 9,
        questionText: "Which is the smallest planet in our Solar System?" ,
        answers : {
            a: "Mercury",
            b: "Earth",
            c: "Jupiter", 
            d: "Uranus", },
            correctAnswer: "a",
    },
    { 
        questionNumber: 10,
        questionText: "Which is the seventh planet from the Sun?" ,
        answers : {
            a: "Jupiter",
            b: "Neptune",
            c: "Uranus", 
            d: "Saturn", },
            correctAnswer: "c",
    },
    { 
        questionNumber: 11,
        questionText: "Which of the following is one of the dwarf planets in our Solar System?" ,
        answers : {
            a: "Pluto",
            b: "The Moon",
            c: "Uranus", 
            d: "Mars", },
            correctAnswer: "a",
    },
    { 
        questionNumber: 12,
        questionText: "Which planet is also known as the red planet?",
        answers : {
            a: "Neptune",
            b: "Saturn",
            c: "Mars", 
            d: "Pluto", }, 
            correctAnswer : "c",
    },
    { 
        questionNumber: 13,
        questionText: "Which is the hottest planet?" ,
        answers : {
            a: "Venus",
            b: "Uranus",
            c: "Mars", 
            d: "Neptune", },
            correctAnswer: "a",
    },
    { 
        questionNumber: 14,
        questionText: "Which is the coldest planet?" ,
        answers : {
            a: "Saturn",
            b: "Earth",
            c: "Neptune", 
            d: "Uranus", },
            correctAnswer: "d",
    },
    { 
        questionNumber: 15,
        questionText: "How old is the Sun now?" ,
        answers : {
            a: "3 million years",
            b: "4.6 billion years",
            c: "2.5 billion years", 
            d: "6 million years", },
            correctAnswer: "b",
    },
    { 
        questionNumber: 16,
        questionText: "What planet is green?" ,
        answers : {
            a: "Earth",
            b: "Mars",
            c: "Uranus", 
            d: "Mercury", },
            correctAnswer: "c",
    },
    { 
        questionNumber: 17,
        questionText: "How many planets are there in the Solar system?" ,
        answers : {
            a: "11",
            b: "6",
            c: "9", 
            d: "8", },
            correctAnswer: "d",
    },
    { 
        questionNumber: 18,
        questionText: "What is the closest planet to Earth?" ,
        answers : {
            a: "Venus",
            b: "Neptune",
            c: "Mercury", 
            d: "Mars", },
            correctAnswer: "a",
    },
    { 
        questionNumber: 19,
        questionText: "What is the largest object in the solar system?" ,
        answers : {
            a: "Neptune",
            b: "The Sun",
            c: "The Moon", 
            d: "Uranus", },
            correctAnswer: "b",
    },
    { 
        questionNumber: 20,
        questionText: "Which is the fastest planet to orbt the Sun?" ,
        answers : {
            a: "Earth",
            b: "Neptune",
            c: "Mars", 
            d: "Mercury", },
            correctAnswer: "d",
    },
    { 
        questionNumber: 21,
        questionText: "Which planets do not have moons, that otbit them?" ,
        answers : {
            a: "Mercury and Earth",
            b: "Venus and Mercury",
            c: "Neptune and Venus", 
            d: "Uranus and Saturn", },
            correctAnswer: "b",
    },
    { 
        questionNumber: 22,
        questionText: "How many miles away is the Earth from the Sun?" ,
        answers : {
            a: "10 minutes walk",
            b: "Quadrillion miles",
            c: "150 billion miles", 
            d: "93 million miles", },
            correctAnswer: "d",
    },
    { 
        questionNumber: 23,
        questionText: "When we celebrate the Earth Day?" ,
        answers : {
            a: "31 March",
            b: "22 April",
            c: "27 June", 
            d: "16 May", },
            correctAnswer: "b",
    },
    { 
        questionNumber: 24,
        questionText: "What is the 5th planet from the Sun?" ,
        answers : {
            a: "Jupiter",
            b: "Earth",
            c: "Saturn", 
            d: "Uranus", },
            correctAnswer: "a",
    },
    { 
        questionNumber: 25,
        questionText: "Who was the first man to observe Saturn?" ,
        answers : {
            a: "Isaac Newton",
            b: "William Huggins",
            c: "Galileo Galilei", 
            d: "Nicolas Copernicus", },
            correctAnswer: "c",
    },
    { 
        questionNumber: 26,
        questionText:"What is the name of our galaxy?",
        answers : {
            a: "Andromeda",
            b: "Comet",
            c: "Black Eye", 
            d: "Milky Way", },
            correctAnswer: "d",
    },
    { 
        questionNumber: 27,
        questionText: "What is the most common type of star found in the Milky Way?" ,
        answers : {
            a: "Red Dwarf stars",
            b: "Black stars",
            c: "Yellow stars", 
            d: "Orange dwarf stars",},
            correctAnswer: "a",
    },
    { 
        questionNumber: 28,
        questionText: "What is at the center of our solar system" ,
        answers : {
            a: "The Sun",
            b: "A black hole",
            c: "The Moon", 
            d: "The Earth",},
            correctAnswer: "a",
    },
    { 
        questionNumber: 29,
        questionText: "Approximately how many miles is a lightyear?" ,
        answers : {
            a: "8.5 Trillion miles",
            b: "5.9 Trillion miles",
            c: "7.3 Trillion miles", 
            d: "2.4 Trillion miles",},
            correctAnswer: "c",
    },
    { 
        questionNumber: 30,
        questionText: "What are the three things comets are made out of?" ,
        answers : {
            a: "Water, gas and land ",
            b: "Land, oxygen and rocks",
            c: "Ice, dust and gas", 
            d: "Dust, rocks, and ice",},
            correctAnswer: "d",
    },
    { 
        questionNumber: 31,
        questionText: "What type of galaxy is the Milky Way?" ,
        answers : {
            a: "Elliptical",
            b: "Spiral",
            c: "Irregular", 
            d: "Peculiar",},
            correctAnswer: "b",
    },
    { 
        questionNumber: 32,
        questionText: "Which planet has the largest ocean?" ,
        answers : {
            a: "Jupiter",
            b: "Neptune",
            c: "Uranus", 
            d: "Saturn",},
            correctAnswer: "a",
    },
    { 
        questionNumber: 33,
        questionText: "How long is one year on Jupiter?" ,
        answers : {
            a: "88 Days",
            b: "12 Years",
            c: "1 Hour", 
            d: "9 Million Years",},
            correctAnswer: "b",
    },
    { 
        questionNumber: 34,
        questionText: "Which planet has the most volcanoes?" ,
        answers : {
            a: "Mars",
            b: "Earth",
            c: "Venus", 
            d: "Neptune",},
            correctAnswer: "c",
    },
    { 
        questionNumber: 35,
        questionText: "What planet is orbited by a moon called Titan?" ,
        answers : {
            a: "Mercury",
            b: "Neptune",
            c: "Earth", 
            d: "Saturn",},
            correctAnswer: "d",
    },
    { 
        questionNumber: 36,
        questionText: "Instead of water, what rains on Jupiter?" ,
        answers : {
            a: "Acid",
            b: "Iron",
            c: "Fire", 
            d: "Diamonds",},
            correctAnswer: "d",
    },
    { 
        questionNumber: 37,
        questionText: "What is the name of the first spacecraft to bring astronauts to the moon?" ,
        answers : {
            a: "Apollo 11",
            b: "Voyager 2",
            c: "Voyager 1", 
            d: "Apollo 13",},
            correctAnswer: "a",
    },
    { 
        questionNumber: 38,
        questionText: "What is the name of the force which keeps the planets in orbit around the Sun?" ,
        answers : {
            a: "Kinetic",
            b: "Gravity",
            c: "Tension", 
            d: "Elastic",},
            correctAnswer: "b",
    },
    { 
        questionNumber: 39,
        questionText: "What is the term for a natural satellite?" ,
        answers : {
            a: "Galaxy",
            b: "Comet",
            c: "Moon", 
            d: "Sun",},
            correctAnswer: "c",
    },
    { 
        questionNumber: 40,
        questionText: "Who was the first man in space?" ,
        answers : {
            a: "Yuri Gagarin",
            b: "Neil Armstrong",
            c: "James Irwin", 
            d: "Alan Bean",},
            correctAnswer: "a",
    },
]
