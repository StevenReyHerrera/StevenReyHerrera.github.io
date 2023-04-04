import { lettersChange } from "../functions/letters.js"
interface IWord{
    word:string
    generateWord():string,
    getWord():string,
  
}
export class Word implements IWord {
    word:string="";
    words:string[]=  [
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
    // Función para obtener una palabra aleatorio en español 
    generateWord(){
        this.word= lettersChange.toUpper(this.words[Math.floor(Math.random()*(this.words.length-1))])
        return this.word
    }

    getWord(){
        return this.word
    }
  
    
 
}