export var lettersChange;
(function (lettersChange) {
    lettersChange.toUpper = (word) => {
        return word.toUpperCase();
    };
    lettersChange.alphabet = () => {
        const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const alphabet = alphabetString.split("");
        return alphabet;
    };
    lettersChange.converTo_ = (word) => {
        const arrayWord = word.split("");
        const array_ = [];
        for (let i = 0; i < arrayWord.length; i++) {
            array_.push("_");
        }
        return array_;
    };
})(lettersChange || (lettersChange = {}));
