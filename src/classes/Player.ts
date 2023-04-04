import { Word } from "./Word.js";
import { lettersChange } from "../functions/letters.js";
interface IPlayer {
  name: string;
  trys: number;
  letter: string;
  word: string;
  word_:string[]
  curtWord:string
  getTrys(): number;
  lessAttempts(): void;
  selectLetter(letter: string, word: Word): boolean;
  startPlay(): void;
}

class Player implements IPlayer {
  name: string;
  trys: number = 10;
  letter: string = "";
  word: string = "";
  Word: Word=new Word();
  word_:string[]=[];
  curtWord:string="";
  constructor(name: string) {
    this.name = name;
  }
  getTrys(): number {
    return this.trys;
  }
  lessAttempts(): void {
    this.trys = this.trys - 1;
  }

  selectLetter(letter: string): boolean {
    if (this.curtWord.includes(lettersChange.toUpper(letter))) {
        this.lessAttempts()
        const wordCutArray:string []=this.curtWord.split('')
        const arrayIndexCut= wordCutArray.map((char: string, i:number) => lettersChange.toUpper(char) === lettersChange.toUpper(letter) ? i : -1).filter((index:number) => index !== -1)
        const arrayIndex=this.word.split("").map((char: string, i:number) => lettersChange.toUpper(char) === lettersChange.toUpper(letter) ? i : -1).filter((index:number) => index !== -1)
        arrayIndex.sort((a, b) => b - a);
        arrayIndexCut.sort((a, b) => b - a);
        arrayIndex.forEach(index=>{
            this.word_[index]=letter
        })
        arrayIndexCut.forEach(index=>{
            wordCutArray.splice(index,1)
        })
        this.curtWord=wordCutArray.join("")
       
        return true;
      
    } else {
        this.lessAttempts()
      return false;
    }
  }

  startPlay(): void {
    this.word =this.Word.generateWord();
    this.word_=lettersChange.converTo_(this.word)
    this.curtWord=this.word;
  }
  
  getWord_():string []{
    return this.word_
  }

}

export default Player;
