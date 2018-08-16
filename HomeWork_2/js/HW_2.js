/*домашка основная часть*/
StartCounting.addEventListener('click', countingOfVowels, false);

function countingOfVowels () {
   var vowels=['а','о','и','е','ё','э','ы','у','ю','я','А','О','И','Е','Ё','Э','Ы','У','Ю','Я'],
       numberOfLetters=0,
       i,
       j,
       youString=prompt("Ведите строку");
   youString=youString.split('');
   for (i=0; i<vowels.length ; i++) {//перебор элементы сравнения
        for (j = 0; j <youString.length ; j++) {//перебор элементов для сравнения
            if (youString[j] === vowels[i]) {
                numberOfLetters+=1;
            }
        }
    }
    console.log("Число гласных равно: " + numberOfLetters);
    alert("Открой консоль");
}

/*Доп1: инвертирование и сумма массива*/

StartInverting.addEventListener('click', invertingArray, false);

function invertingArray(){
   var sumArray=0,
       i,
       yourArray=[];
   for(i=1; i<100; i+=2){//создаем массив
       yourArray.push(i);}
   for(i=0; i<50; i++){//суммируем элеметы массива последовательно
       sumArray+=yourArray[i];
   }
    console.log("Сумма элементов массива равна: " + sumArray);
    console.log("Ваш массив: " + yourArray.reverse());
    alert("Открой консоль");
}

/*Доп 2: проверка на палиндром*/

StartPalindromeTest.addEventListener('click', checkOnPalindrome, false);

function checkOnPalindrome(){
    var yourData=prompt("Ведите данные для проверки"),
        n=0,
        i;
    yourData=yourData.split(''); //цикл для удаления пробелов
    for (i=0; i<yourData.length; i++){
        if (yourData[i]===' '){
            yourData.splice(i,1);
            i-=1;
        }
    }
    for (i=0; i<yourData.length/2; i++) //цикл сравнения
        if(yourData[i]===yourData[yourData.length-1-i])
        {n+=1;}


    console.log(n==yourData.length/2&&yourData.length%2==0||n-1==(yourData.length-yourData.length%2)/2&&yourData.length%2!=0?
        "Введенные данные являются палиндромом":"Введенные данные не являются палиндромом");
    alert("Открой консоль");
}

/*Доп 3: Определение лучших свойств детей*/

StartSupremeProperty.addEventListener('click',determinationOfSupremeProperties,false);

function determinationOfSupremeProperties(){
    var children = [
        {
            name: 'Ваня',
            age: 12,
            weight: 46,
            height: 167
        },
        {
            name: 'Петя',
            age: 13,
            weight: 48,
            height: 162
        },
        {
            name: 'Маша',
            age: 11,
            weight: 40,
            height: 158
        },
        {
            name: 'Марина',
            age: 14,
            weight: 43,
            height: 164
        }
    ];

    var childrenHeight=0, // вычисление самого высокого объекта
        childrenHighest;
    for (i=0; i<children.length; i++){
        if(children[i].height>childrenHeight){
            childrenHeight=children[i].height;
            childrenHighest=children[i];
                }
    }
    console.log("Самый высокий(ая)"+childrenHighest.name);

    var childrenAge=0, // вычисление самого старшего объекта
        childrenOlder;
    for (i=0; i<children.length; i++){
        if(children[i].age>childrenAge){
            childrenAge=children[i].age;
            childrenOlder=children[i];
        }
    }
    console.log("Самый старший(ая): "+childrenOlder.name);

    var childrenWeight=0, // вычисление самого тяжелого объекта
        childrenTheHeaviest;
    for (i=0; i<children.length; i++){
        if(children[i].weight>childrenWeight){
            childrenWeight=children[i].weight;
            childrenTheHeaviest=children[i];
        }
    }
    console.log("Самый тяжелый(ая): "+childrenTheHeaviest.name);

    var weightSum=0; // расчет суммы веса объектов
    for (var i=0; i<children.length; i++){
        weightSum+=children[i].weight;
    }
    console.log("Суммарный вес объектов: "+weightSum);
    alert("Открой консоль");
}