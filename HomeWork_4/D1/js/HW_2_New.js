
//forEach
StartCounting0.addEventListener('click', countingOfVowels0, false);

function countingOfVowels0 () {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я', 'А', 'О', 'И', 'Е', 'Ё', 'Э', 'Ы', 'У', 'Ю', 'Я'],
        numberOfLetters = 0,
        youString = prompt("Ведите строку");
    youString = youString.split('');
    youString.forEach(function(V,I){
        let i=I;
        vowels.forEach(function (V) {
            switch (V) {
                case youString[i]:
                    numberOfLetters += 1;
                    break;
            }
        });
    })
    console.log("Число гласных равно: " + numberOfLetters);
}

//filter
StartCounting1.addEventListener('click', countingOfVowels1, false);

function countingOfVowels1 () {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я', 'А', 'О', 'И', 'Е', 'Ё', 'Э', 'Ы', 'У', 'Ю', 'Я'],
        numberOfLetters = 0,
        youString = prompt("Ведите строку");
    youString = youString.split('');
    vowels.forEach(function(V,I){
        let i=I;
        numberOfLetters+=youString.filter(function (V) {
            return V === vowels[i];
        }).length;
    })
    console.log("Число гласных равно: " + numberOfLetters);
}
