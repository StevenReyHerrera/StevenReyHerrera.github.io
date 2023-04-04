import { lettersChange } from "../functions/letters.js";
export class Word {
    constructor() {
        this.word = "";
        this.words = [
            "PSYCHO",
            "EXORCIST",
            "HALLOWEEN",
            "IT",
            "POLTERGEIST",
            "ALIEN",
            "CARRIE",
            "JAWS",
            "SINISTER",
            "US",
            "MIDSOMMAR",
            "HEREDITARY",
            "INSIDIOUS",
            "MARTYRS",
            "REC"
        ];
    }
    // Función para obtener una palabra aleatorio en español 
    generateWord() {
        this.word = lettersChange.toUpper(this.words[Math.floor(Math.random() * (this.words.length - 1))]);
        return this.word;
    }
    getWord() {
        return this.word;
    }
}
