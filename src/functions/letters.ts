export namespace lettersChange {
  export const toUpper = (word: string): string => {
    return word.toUpperCase();
  };
  export const alphabet = () => {
    const alphabetString: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabet: string[] = alphabetString.split("");
    return alphabet;
  };
  export const converTo_ = (word: string): string[] => {
    const arrayWord = word.split("");
    const array_: string[] = [];
    for (let i = 0; i < arrayWord.length; i++) {
      array_.push("_");
    }
    return array_;
  };
}
