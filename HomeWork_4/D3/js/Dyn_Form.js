var formDef1=
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'combo',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {label:'Опубликовать:',kind:'submit'},
    ];

var formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {label:'Зарегистрироваться:',kind:'submit'},
    ];

DrawForm1.addEventListener('click',drawForm(formDef1),false);
DrawForm2.addEventListener('click', drawForm(formDef2),false);


function drawForm(formDefN) {
   let form, addForm,a,b,c,d;

    form = document.createElement('form');
    form.setAttribute('action','http://fe.it-academy.by/TestForm.php ');
    form.setAttribute('target','_blank');
    form.setAttribute('style','padding: 30px');
    addForm = document.body;
    addForm.appendChild(form);
    for(let i=0;i<=formDefN.length-1; i++) {
        switch(formDefN[i].kind){
            case('longtext'):
                a = document.createElement('span');
                a.innerHTML = formDefN[i].label;
                b = addForm.lastChild;
                b.appendChild(a);
                a = document.createElement('input');
                a.setAttribute('name',formDefN[i].name);
                a.setAttribute('type','text');
                b.appendChild(a);
                c = document.createElement('br');
                b.appendChild(c);
                break;
            case('number'):
                a = document.createElement('span');
                a.innerHTML = formDefN[i].label;
                b = addForm.lastChild;
                b.appendChild(a);
                a = document.createElement('input');
                a.setAttribute('name',formDefN[i].name);
                a.setAttribute('type',formDefN[i].kind);
                b.appendChild(a);
                c = document.createElement('br');
                b.appendChild(c);
                break;

            case('shorttext'):
                a = document.createElement('span');
                a.innerHTML = formDefN[i].label;
                b = addForm.lastChild;
                b.appendChild(a);
                a = document.createElement('input');
                a.setAttribute('name',formDefN[i].name);
                a.setAttribute('type','email');
                b.appendChild(a);
                c = document.createElement('br');
                b.appendChild(c);
                break;

            case('check'):
                a = document.createElement('span');
                a.innerHTML = formDefN[i].label;
                b = addForm.lastChild;
                b.appendChild(a);
                a = document.createElement('input');
                a.setAttribute('name',formDefN[i].name);
                a.setAttribute('type','checkbox');
                b.appendChild(a);
                c = document.createElement('br');
                b.appendChild(c);
                break;
            case('memo'):
                a = document.createElement('span');
                a.innerHTML = formDefN[i].label;
                b = addForm.lastChild;
                b.appendChild(a);
                a = document.createElement('input');
                a.setAttribute('name',formDefN[i].name);
                a.setAttribute('type','textarea');
                b.appendChild(a);
                c = document.createElement('br');
                b.appendChild(c);
                break;

            case("submit"):
                a = document.createElement('input');
                a.setAttribute('type','submit');
                a.setAttribute('value',formDefN[i].label);
                b = addForm.lastChild;
                b.appendChild(a);
                break;

            case('radio'):
                a = document.createElement('span');
                a.innerHTML = formDefN[i].label;
                b = addForm.lastChild;
                b.appendChild(a);
                for(let j=0;j<=formDefN[i].variants.length-1; j++) {
                    a = document.createElement('input');
                    a.setAttribute('name', formDefN[i].name);
                    a.setAttribute('type', 'radio');
                    a.setAttribute('ID', formDefN[i].name + j);
                    a.setAttribute('value', formDefN[i].variants[j].value);
                    b = addForm.lastChild;
                    b.appendChild(a);
                    a = document.createElement('label');
                    a.setAttribute('for', formDefN[i].name + j);
                    a.innerHTML = formDefN[i].variants[j].text;
                    b.appendChild(a);
                };
                c = document.createElement('br');
                b.appendChild(c);
                break;

            case('combo'):
                a = document.createElement('span');
                a.innerHTML = formDefN[i].label;
                b = addForm.lastChild;
                b.appendChild(a);
                a = document.createElement('select');
                a.setAttribute('name', formDefN[i].name);
                b.appendChild(a);
                for(let j=0;j<=formDefN[i].variants.length-1; j++) {
                    a = document.createElement('option');
                    a.innerHTML = formDefN[i].variants[j].text;
                    a.setAttribute('value', formDefN[i].variants[j].value);
                    d=b.lastChild;
                    d.appendChild(a);
                };
                c = document.createElement('br');
                b.appendChild(c);
                break;
        }



    }
return;
}



