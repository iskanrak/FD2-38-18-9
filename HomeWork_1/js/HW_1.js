buttonCheck.addEventListener('click', checkData, false);

function checkData() {
    var retirementAgeWoman = 56;
    var retirementAgeMan = 61;
    patronymic = prompt('Введите вашу фамилию');
    while (patronymic===""){
        patronymic = prompt('Вы не ввели фамилию, ведите вашу фамилию')
    }
    name = prompt('Введите ваше имя');
    while (name===""){
        name = prompt('Вы не ввели имя, ведите ваше имя')
    }
    secondName = prompt('Ведите ваше отчество');
    while (secondName===""){
        secondName = prompt('Вы не ввели отчество, ведите ваше отчество')
    }
    age = prompt('Введите ваш возраст');
    while (age!=age/1 || age<=0){
        age = prompt('Ваш возраст введен неверно, ведите ваш возраст еще раз');

    }
    gender = confirm('Ваш пол - мужской?');
    ageDay = age*365;
    age5Years = age+5;
    document.getElementById('fullName').innerHTML = patronymic + " " + name + " " + secondName;
    document.getElementById('age').innerHTML = age;
    document.getElementById('ageDay').innerHTML = ageDay;
    document.getElementById('age5Years').innerHTML = age5Years;
    if(gender==true){
        youGender="Мужской";
        document.getElementById('gender').innerHTML = "Мужской";
        if(age>=retirementAgeMan){
            youRetirement= "Да";
            document.getElementById('retirement').innerHTML = "Да";

        }
        else {
            youRetirement= "Нет";
            document.getElementById('retirement').innerHTML = "Нет";
        }


    }
    else {
        youGender = "Женский";
        document.getElementById('gender').innerHTML = "Женский";


        if (age >= retirementAgeWoman) {
            youRetirement= "Да";
            document.getElementById('retirement').innerHTML = "Да";

        }
        else {
            youRetirement= "Нет";
            document.getElementById('retirement').innerHTML = "Нет";
        }

    }
    alert("Эти данные отобразятся в форме" + "\n" + "ФИО: " + patronymic + " " + name + " " + secondName +"\n" + "Ваш возраст в годах: " + age + "\n" + "Ваш возраст в днях: " + ageDay + "\n" +"Через 5 лет вам будет: "
        + age5Years + "\n"+ "Ваш пол: " + youGender + "\n" + "Вы на пенсии: " + youRetirement);
}

