import { Word } from "./Word.js";
import { lettersChange } from "../functions/letters.js";
class Player {
    constructor(name) {
        this.trys = 10;
        this.letter = "";
        this.word = "";
        this.Word = new Word();
        this.word_ = [];
        this.curtWord = "";
        this.name = name;
    }
    getTrys() {
        return this.trys;
    }
    lessAttempts() {
        this.trys = this.trys - 1;
    }
    selectLetter(letter) {
        if (this.curtWord.includes(lettersChange.toUpper(letter))) {
            this.lessAttempts();
            const wordCutArray = this.curtWord.split('');
            const arrayIndexCut = wordCutArray.map((char, i) => lettersChange.toUpper(char) === lettersChange.toUpper(letter) ? i : -1).filter((index) => index !== -1);
            const arrayIndex = this.word.split("").map((char, i) => lettersChange.toUpper(char) === lettersChange.toUpper(letter) ? i : -1).filter((index) => index !== -1);
            arrayIndex.sort((a, b) => b - a);
            arrayIndexCut.sort((a, b) => b - a);
            arrayIndex.forEach(index => {
                this.word_[index] = letter;
            });
            arrayIndexCut.forEach(index => {
                wordCutArray.splice(index, 1);
            });
            this.curtWord = wordCutArray.join("");
            return true;
        }
        else {
            this.lessAttempts();
            return false;
        }
    }
    startPlay() {
        this.word = this.Word.generateWord();
        this.word_ = lettersChange.converTo_(this.word);
        this.curtWord = this.word;
    }
    getWord_() {
        return this.word_;
    }
}
export default Player;
