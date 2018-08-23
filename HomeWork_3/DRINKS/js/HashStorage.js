
function HashStorage() {
    let keys,
        self=this;
    self.addValue=function(key,value) {self[key]=value; return self;/*работает, добавление в хэш */
    };
    self.getValue=function(key) { return self[key]; /*работает, вывод занчения по ключу*/
    };
    self.deleteValue=function(key) {if(self[key]===undefined){
                                        return false                                        }
                                    else {self[key]=delete self[key]; return true;}   /* удаление значения по ключу*/
    };
    self.getKeys=function() {keys=Object.keys(self); return keys;/*работает, вывод ключей*/
    }
}

let
    drinkStorage=new HashStorage(),
    NameOfDrink,
    Alkohol,
    Recipe;
    // создаем обект

EnteringInfoOfDrink.addEventListener('click', enteringInfoOfDrink, false);
function enteringInfoOfDrink() { //функция добавления
    NameOfDrink=prompt("Введите название напитка");
    Alkohol=prompt("Алкогольный напиток или нет");
    Recipe=prompt("Ведите рецепт приготовления напитка");
    drinkStorage.addValue(NameOfDrink,{"Напиток":NameOfDrink,"Алкогольный":Alkohol, "Рецепт приготовления":Recipe });
    }

GettingInfoOfDrink.addEventListener('click', gettingInfoOfDrink, false);
function gettingInfoOfDrink() {
    NameOfDrink=prompt("Введите название напитка");//функция вывода информациии по ключу
    drinkStorage.getValue(NameOfDrink)===undefined?console.log("Напиток отсутствует в хранилище"):console.log(drinkStorage.getValue(NameOfDrink));
    }

DeletingInfoOfDrink.addEventListener('click', deletingInfoOfDrink, false);
function deletingInfoOfDrink() { //функция удаления информации по ключу
    NameOfDrink=prompt("Введите название напитка");
    drinkStorage.deleteValue(NameOfDrink)===true?alert("Ваш напиток"+" " +NameOfDrink +" " +"удален"):alert(("Напиток" +" " +NameOfDrink +" " +"отсутствует в хранилище"));
}

ListOfAllDrinks.addEventListener('click', listOfAllDrinks, false);
function listOfAllDrinks() { //функция вывода ключей
    alert(drinkStorage.getKeys());
}