// src/QuizData.js

export const quizData = [
  // SLÁNUIMHIR (INTEGER)
  {
    question: "Cén uimhir is Slánuimhir?", // Which number is an integer?
    type: "Slánuimhir",
    options: ["3.14", "-5", "1/2", "3.0001"],
    correctAnswer: "-5"
  },
  {
    question: "Cén cineál sonraí atá i 100?", // What data type is 100?
    type: "Slánuimhir",
    options: ["Réadach", "Teagrán", "Dáta /am", "Slánuimhir"],
    correctAnswer: "Slánuimhir"
  },
  {
    question: "An Slánuimhir é 0?", // Is 0 an integer?
    type: "Slánuimhir",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Is ea"
  },
  {
    question: "Cén ceann de seo is Slánuimhir dhiúltach?", // Which of these is a negative integer?
    type: "Slánuimhir",
    options: ["2.5", "-99", "1.0", "0"],
    correctAnswer: "-99"
  },
  {
    question: "Cén uimhir is Slánuimhir dhearfach?", // Which number is a positive integer?
    type: "Slánuimhir",
    options: ["-10", "15", "5.5", "3/4"],
    correctAnswer: "15"
  },
  {
    question: "Cén cineál sonraí atá ag an uimhir 42?",
    type: "Slánuimhir",
    options: ["Réadach", "Carachtar", "Slánuimhir", "Teagrán"],
    correctAnswer: "Slánuimhir"
  },
  {
    question: "Cén luach seo atá mar Shlánuimhir?",
    type: "Slánuimhir",
    options: ["'20'", "20.0", "-20", "20.1"],
    correctAnswer: "-20"
  },
  {
    question: "Cén ceann de seo is Slánuimhir?",
    type: "Slánuimhir",
    options: ["1,000,000", "0.999", "12/5", "3.14"],
    correctAnswer: "1,000,000"
  },
  {
    question: "An bhféadfadh '3.0' a bheith ina Shlánuimhir?",
    type: "Slánuimhir",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Ní hea"
  },
  {
    question: "Cén luach nach Slánuimhir?",
    type: "Slánuimhir",
    options: ["10", "15", "-20", "2.5"],
    correctAnswer: "2.5"
  },

  // RÉADACH (REAL/FLOAT)
  {
    question: "Cén cineál sonraí atá i 9.81?", // What data type is 9.81?
    type: "Réadach",
    options: ["Slánuimhir", "Réadach", "Dáta /am", "Carachtar"],
    correctAnswer: "Réadach"
  },
  {
    question: "Cén ceann de seo is Réadach?", // Which of these is a Real?
    type: "Réadach",
    options: ["-1", "0", "1.23", "123"],
    correctAnswer: "1.23"
  },
  {
    question: "An Réadach é an uimhir 10.0?", // Is the number 10.0 a Real?
    type: "Réadach",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Is ea"
  },
  {
    question: "Cén luach is Réadach?", // Which value is a Real?
    type: "Réadach",
    options: ["5", "'5'", "5.0", "5-a"],
    correctAnswer: "5.0"
  },
  {
    question: "Cén cineál sonraí atá sa luach 0.001?", // What data type is the value 0.001?
    type: "Réadach",
    options: ["Slánuimhir", "Réadach", "Teagrán", "Carachtar"],
    correctAnswer: "Réadach"
  },
  {
    question: "Cén luach atá ina Réadach?", // Which value is a Real number?
    type: "Réadach",
    options: ["1/2", "3.14", "10", "5"],
    correctAnswer: "3.14"
  },
  {
    question: "Cén ceann nach Réadach?", // Which one is not a Real?
    type: "Réadach",
    options: ["-10.5", "1.0", "0", "99.99"],
    correctAnswer: "0"
  },
  {
    question: "Cén luach seo is Réadach?",
    type: "Réadach",
    options: ["20", "3.0", "1.1.1", "22"],
    correctAnswer: "3.0"
  },
  {
    question: "An Réadach é '2.5'?",
    type: "Réadach",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Ní hea"
  },
  {
    question: "Cén cineál sonraí atá ag an uimhir 1.618?",
    type: "Réadach",
    options: ["Slánuimhir", "Réadach", "Carachtar", "Dáta /am"],
    correctAnswer: "Réadach"
  },

  // DÁTA /am (DATE/TIME)
  {
    question: "Cén cineál sonraí atá i 25/12/2025?", // What data type is 25/12/2025?
    type: "Dáta /am",
    options: ["Réadach", "Carachtar", "Dáta /am", "Slánuimhir"],
    correctAnswer: "Dáta /am"
  },
  {
    question: "Cén cineál sonraí a úsáidtear le haghaidh '15:30'?", // What data type is used for '15:30'?
    type: "Dáta /am",
    options: ["Réadach", "Teagrán", "Dáta /am", "Slánuimhir"],
    correctAnswer: "Dáta /am"
  },
  {
    question: "An Dáta /am é an 28 Márta 2025?", // Is March 28, 2025 a Date/time?
    type: "Dáta /am",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Is ea"
  },
  {
    question: "Cén ceann seo atá ina Dáta /am?", // Which of these is a Date/time?
    type: "Dáta /am",
    options: ["1/1", "1/1/2020", "1-1-2o", "112020"],
    correctAnswer: "1/1/2020"
  },
  {
    question: "Cén cineál sonraí a bhaineann leis an luach '20:00:00'?",
    type: "Dáta /am",
    options: ["Réadach", "Dáta /am", "Carachtar", "Slánuimhir"],
    correctAnswer: "Dáta /am"
  },
  {
    question: "An cineál sonraí dáta é '01-01-01'?",
    type: "Dáta /am",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Ní hea"
  },
  {
    question: "Cén ceann de seo is Dáta /am bailí?",
    type: "Dáta /am",
    options: ["2023-13-01", "30 Feabhra 2024", "2024-02-29", "25:00"],
    correctAnswer: "2024-02-29"
  },
  {
    question: "Cén cineál sonraí a úsáideann an luach 'Dé Máirt'?",
    type: "Dáta /am",
    options: ["Dáta /am", "Teagrán", "Carachtar", "Slánuimhir"],
    correctAnswer: "Dáta /am"
  },
  {
    question: "Cén cineál sonraí a dhéanann ionadaíocht ar '2024-05-15T10:00:00Z'?",
    type: "Dáta /am",
    options: ["Teagrán", "Dáta /am", "Réadach", "Slánuimhir"],
    correctAnswer: "Dáta /am"
  },
  {
    question: "Cén ceann de seo is dáta?",
    type: "Dáta /am",
    options: ["'10:30 MP'", "20/20/2020", "2023-11-01", "12/32/2022"],
    correctAnswer: "2023-11-01"
  },

  // CARACHTAR (CHARACTER)
  {
    question: "Cén cineál sonraí atá i 'A'?", // What data type is 'A'?
    type: "Carachtar",
    options: ["Slánuimhir", "Teagrán", "Carachtar", "Réadach"],
    correctAnswer: "Carachtar"
  },
  {
    question: "Cad a úsáidtear chun Carachtar a léiriú?", // What is used to represent a Character?
    type: "Carachtar",
    options: ["Uaschamóga dúbailte", "Uaschamóga singil", "Lúibíní cearnacha", "Lúibíní cuartha"],
    correctAnswer: "Uaschamóga singil"
  },
  {
    question: "An Carachtar é an luach '5'?", // Is the value '5' a Character?
    type: "Carachtar",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Is ea"
  },
  {
    question: "Cén cineál sonraí atá ag an siombail '$'?", // What data type is the symbol '$'?
    type: "Carachtar",
    options: ["Teagrán", "Réadach", "Carachtar", "Slánuimhir"],
    correctAnswer: "Carachtar"
  },
  {
    question: "Cén cineál sonraí is féidir le litir aonair a stóráil, m.sh. 'p'?",
    type: "Carachtar",
    options: ["Teagrán", "Carachtar", "Dáta /am", "Réadach"],
    correctAnswer: "Carachtar"
  },
  {
    question: "An Carachtar é an luach 'Hello'?",
    type: "Carachtar",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Ní hea"
  },
  {
    question: "Cén ceann de seo is Carachtar?",
    type: "Carachtar",
    options: ["'O'", "10", "10.0", '"1_0"'],
    correctAnswer: "'O"
  },
  {
    question: "An Carachtar é an luach ' ' (spás)?",
    type: "Carachtar",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Is ea"
  },
  {
    question: "Cén luach seo is Carachtar?",
    type: "Carachtar",
    options: ["'ba'", "ab", "abc", '"b"'],
    correctAnswer: '"b"'
  },
  {
    question: "Cén cineál sonraí a bhaineann leis an luach '?'?",
    type: "Carachtar",
    options: ["Slánuimhir", "Teagrán", "Réadach", "Carachtar"],
    correctAnswer: "Carachtar"
  },

  // TEAGRÁN (STRING)
  {
    question: "Cén cineál sonraí atá i 'Dia duit'?", // What data type is 'Dia duit'?
    type: "Teagrán",
    options: ["Slánuimhir", "Réadach", "Dáta /am", "Teagrán"],
    correctAnswer: "Teagrán"
  },
  {
    question: "Cén cineál sonraí a bhaineann leis an luach 'ABC'?",
    type: "Teagrán",
    options: ["Carachtar", "Slánuimhir", "Teagrán", "Réadach"],
    correctAnswer: "Teagrán"
  },
  {
    question: "An Teagrán é '123'?", // Is '123' a string?
    type: "Teagrán",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Is ea"
  },
  {
    question: "Cén cineál sonraí a úsáidteart do théacs?", // What data type represents text?
    type: "Teagrán",
    options: ["Slánuimhir", "Teagrán", "Réadach", "Dáta /am"],
    correctAnswer: "Teagrán"
  },
  {
    question: "An Teagrán é an luach 'True'?",
    type: "Teagrán",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Is ea"
  },
  {
    question: "Cén ceann de seo is Teagrán?", // Which of these is a String?
    type: "Teagrán",
    options: ["Hello", "'Hello'", '"Hello"', "(Hello)"],
    correctAnswer: '"Hello"'
  },
  {
    question: "Cén cineál sonraí a bhaineann leis an luach 'Teas: 25 céim'?",
    type: "Teagrán",
    options: ["Réadach", "Teagrán", "Slánuimhir", "Dáta /am"],
    correctAnswer: "Teagrán"
  },
  {
    question: "Cén ceann seo nach Teagrán?",
    type: "Teagrán",
    options: ["'12345'", "12345", '"abc"', "Cén ainm atá ort?"],
    correctAnswer: "12345"
  },
  {
    question: "An Teagrán é an luach 'Aon Litir Aonair'?",
    type: "Teagrán",
    options: ["Is ea", "Ní hea"],
    correctAnswer: "Is ea"
  },
  {
    question: "Cén cineál sonraí a bheadh ag an luach 'Arás an Uachtaráin'?",
    type: "Teagrán",
    options: ["Slánuimhir", "Réadach", "Teagrán", "Carachtar"],
    correctAnswer: "Teagrán"
  },
];