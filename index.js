// // // console.log(ifeoluwa)
// // // variables 
// // var firstName = 'ifeoluwa'

// // // with the var you can redeclare and reassign
// // //redeclaring
// // var car= 'Toyota'
// // console.log(car);
// // var car = 'Benz'
// // console.log(car);
// // //reassignment
// // car ='Tesla'
// // console.log(car);


// // // you can only reassign 
// // let laptop = 'HP'
// // laptop ='MacBook'

// // console.log(laptop)

// // const Gender = 'male'

// // // favorite name, favorite club,
// // // phone number, spouse , laptop name
// // //print a sentence with them 


// // var favoriteName ='Pogba'
// // var favoriteClub ="shooting star's";
// // var phoneNumber = 801232332;
// // var spouse = 'sts'
// // var laptopName ='HP'



// // console.log('my name is ' + favoriteName + ' my fav club is '+ favoriteClub)


// //Datatypes in javascript
// // string
// //Number
// //bigint
// //boolean
// //undefined
// //null
// //object
// //symbol


// //strings
// // var school = 'AppClick'

// // console.log(typeof(school));

// // //number
// // var age = 16
// // console.log(typeof(age));

// // //bigint
// // var kilometerspeed = 12n
// // console.log(typeof(kilometerspeed));

// // //boolean
// // var is_online = false
// // console.log(typeof(is_online));

// // var food 
// // console.log(typeof(food))

// // var brain = null
// // console.log(typeof(brain));


// // // object
// // // 1. date, 2.object, 3.array

// // // date
// // var date = new Date()
 
// // //object
// // let user = {
// //     name:'Akin',
// //     favFood:'Rice',
// //     school:'appClick',
// //     age:20,
// //     listOfBallers:[]

// // }
// // //array
// // let ballers = ['ali','simbi',1,{},true,]
// // console.log(user);


// // // var chord = new Symbol()


// // //strings

// // var club = 'Newcastle  United'
// // var street ='Ajagungbade street'
// // var city =`London`
// // console.log(club.length);
// // console.log(club[0]);

// // // string concatenation

// // console.log('the club i suppor is '+ club +' '+ street+ city);
// // //string interpolation
// // console.log(`the club i support is ${club} which is in ${city}`);


// // var Usersname = prompt('enter your name?')

// // alert(`The length of your username is  ${Usersname.length}`);


// var number1 = 7
// var number2 = 5

// // addition operator +
// // substraction -
// // multiplication *
// // division /
// // modulus %
// console.log(number1 % number2)

// // console.log(2**3);


// var num3 = 45
// // console.log(num3+=3);
// num3 = num3 +3
// // console.log(num3);


// var number4 =30

// // var number4 = number4- 2
// // number4-=2
// number4/=5
// number4++
// // console.log(number4);

// // comparison operator
// //< less than
// // > greater than
// //>= greater than or equal to

// //<= less than or equal to
// // == equal value
// // === equal value and dataTypes
// // != not equal to

// var ola = 50
// var seun = '50'



// // console.log(ola === seun);

// // var age = 20
// // var score = 200

// // logical 
// //or  ||
// //and &&
// //not !
// // console.log(age >= 18 || score > 200 );

// // console.log(!(score > 180));



// // var word = 'Usman'
// // var slicedword = word.slice(2,5);
// // console.log(slicedword);
// // console.log(word);

// // // replace
// // var club = "Manchester united "

// // var newClub =club.replace('Manchester','Newcastle')
// // console.log(newClub);

// // console.log(newClub.toUpperCase());

// // newClub.toLowerCase()
// // newClub.toLocaleLowerCase()
// // newClub[0,5].toUpperCase()

// // console.log(club.concat(newClub))

// // var church =' Redeem '
// // console.log(church);
// // console.log(church.trim());
// // console.log(church.charAt(2));

// // console.log(church.split());

// // var name = prompt('what is your name ?')

// // alert(name.slice(0,3) + '...')
// // console.log(true == 'true');


// let animal = 'hippopotamus'

// console.log(animal.indexOf('p'));
// console.log(animal.lastIndexOf('p'));

// console.log(animal.search('o'));
// console.log(animal.includes('h'));

// console.log(animal.startsWith('h'));
// animal.endsWith('s')

// console.log(animal.match('hippopotamus'));


// //number methods 
// var num2= 2

// console.log(num2.toFixed());
// console.log(num2.toExponential());
// console.log(num2.toString() +2 );
// let num4=num2.toString()
// // console.log(num4+2);
// console.log(num2.toPrecision());


// //Math methods
// var num7 = 30.3

// console.log(Math.ceil(num7));
// console.log(Math.floor(num7));

// console.log(Math.round(num7));
// console.log(Math.PI);
// console.log(Math.sqrt(4));

// console.log(Math.round(Math.random() * 10));
// console.log(Math.min(10,12,32));


// //funtions
// // a block of code that runs when u call it ...
// function sayHello(){
// console.log(`Hello `);
// }

// sayHello() 
// sayHello() 
// sayHello()

// function sayHello2(name){
// console.log(`hello ${name}`);
// }
// sayHello2('Ola')
// sayHello2('sandra')


// //declare a function that squares a number!

// // const name = 'ade'
// function square(num){
   
//     return(`the square of ${num} is : ${num**2}`

// );
// }
// // console.log(name);
// console.log(square(8));
// square(5)


// function CalcAge(useryear){
// return(
//     `your current age is ${2024 - useryear}`
// )
// }

// // console.log(CalcAge(2000));

// // write a functon that converts celcius to farienheit


// // 9/5 x + 32

// function convertToFarenheit(celcius){
//    return(
//     (9/5 * celcius) +32
//    ) 

// }

// console.log(convertToFarenheit(2));

// //write a function tha calculates area of a circle
// //piR2
// // Math.PI

// function AreaOfCircle(radius){
//     return Math.PI * radius**2
// }

// console.log(AreaOfCircle(3));


// function isEven(number){
//     return number % 2 === 0
// }

// console.log(isEven(4));
// // m name - my favorite aNIMAL IS - AND I COME FROM -

// function goodsentence(name,animal,place){
// return(
//      `my name ${name} and im from ${place} and my fav animal ${animal} `
//     // "my name " + name +" and "
// )
// }

// console.log(goodsentence('Emma','snake','kogi'));
// console.log(goodsentence('ire','snail','califonia'))

// // a function that returns the total characters of the text

// function TotlChar(text){
    
// return(
//     `the total characters of  ${text} is: ${text.length}`
// )

// }

// console.log(TotlChar('logokoma'));
// //no diff
// function totalcharacter (text){
// var lengthOfText = text.length
// return(
//     `the total characters of ${text}  is ${lengthOfText} `
// )
// }


// // arrays 
// var myArray = ['rice','Declan','Musa','Musiala',{club:'Developers united'}]
// console.log(myArray);
// myArray[4]= 'wenger';
// console.log(myArray);
// myArray.push('ali')



// var NamesOfPeople = ['Ali','Ife','Shola']

// var cart = []
// console.log(cart);
// //push method
// //add an element to the back of an array 
// cart.push('Iphone15')
// console.log(cart);
// cart.push('chocolate')
// console.log(cart);

// //pop method
// //removes last element in an array
// cart.pop()
// console.log(cart);
// //push method to add 2 items
// cart.push('bag','cooking pot')
// // shift method
// //removes first element
// cart.shift()
// console.log(cart);

// //unshift methods add to the beginning of an array
// cart.unshift('biro')
// console.log(cart);

// console.log(cart.length);
// cart.splice(1,5)
// console.log(cart);
// var alphabets = ['a','b','c','d','e','f','g']
// // alphabets.splice(2,3,'z','p','p')
// var vowel1 = alphabets.slice(0,1)
// var vowel2= alphabets.slice(4,5)
// var vowel = []
// // vowel.push(vowel1,vowel2)
// vowel.push(alphabets[0],alphabets[4])
// console.log(vowel);
// var food = ['rice','beans',['eba','iyan',[['okro']]]]
// // food[2][2][0]= 'ewedu';
// food[2][2][0].splice(0,1,'ewedu');
// console.log(food);


// var system = ['a','b','c',['d',['e',['c',1,['zoo','dfgf']]]],'f']


// system[3][1][1][2].splice(0,2,'Bank','accra');
// console.log(system);


// var fruits = [1,2,3,'breadfruit','Breadfruit','apple','Apple','orange','lemon']
// console.log(fruits.sort());

// var date = new Date()
// var hours = date.getHours()
// var minute = date.getMinutes()

// console.log(`${hours} : ${minute}`);


// conditionals
// var age = 20;
// if(age > 20){
// console.log('correct!!!');
// }
// else if(age < 20){
// console.log('gfgdf');
// }
// else{
//     console.log('not correct!!!');
// }

// var MarchSchool = 300
// var age = 18

// if(MarchSchool >= 200){
//     console.log('you are eligible for admission');
// }
// else if(MarchSchool < 200){
//     console.log('not eligible');
// }

// prompt to user to enter age and score and if age and score is above 18 and 200 
//respectively alert admission granted to user

// var Score = prompt('kindly enter score!')
// var age = prompt('kindly enter age ')

// if(age >= 18 && Score >= 200){
//     alert('You are eligible for admission')
// }
// else if(age >=18 || Score>=200){
// alert('you are eligible for predegree')
// }
// else{
//     alert('you are not eligible')
// // }


// // var password = prompt('enter your password!')
// // password[0] == password[0].toUpperCase()
// // if(password.length < 10 ){
// //     alert('password is < 10 xxx')
// //     if(!(password.includes('@'))){
// //         alert('password must include @')
// //         }
// // }
// // else{
// //     alert('every is correct')
// // }
// // if (password.length < 10 && !password.includes('@')){
// //     alert('password is < 10 xxx and must include @')
// // }

// // const mssg = password.length > 10 ? 'password must be more than 10' :'fgdfhgdh'



// //  the password must have @
// //switch operator


// // var day = new Date().getDay()

// // // switch (day) {
// // //     case 1:
// // //         alert('today is monday');
// // //         break;
// // //     case 2:
// // //         alert('today is Tuesday');
// // //         break;
// // //     case 3:
// // //         alert('today is Wednesday');
// // //         break;
// // //     case 4:
// // //         alert('today is Thursday');
// // //         break;

// // //     default:
// // //         alert('day does not exist');
// // //         break0;
// // // }


// // // ternary operator


// // // const age = 20

// // // if(age > 18){
// // //     alert('age is greater than 18')
// // // }else{
// // //     alert('age is less than 18')
// // // }
// // //ternary
// // // age > 18 ? alert('age is greater than 18'): age == 18 ? alert('you are 18 years'):alert('age is less than 18')


// // // Loops
// // // console.log('hello world')

// // // for(let text = 0; text > -5; text--){
// // // console.log(text)
// // // }

// // // for (declaration, condition, iteration){

// // // }

// // //print out numbers from 25 - 100

// // for(let number = 25; number <= 100; number++){
// //   if(number % 2 == 0 && number % 3 == 0){
// //     console.log(number);
// //   }
// // }

// // var goodPeople = ['ade','cassandra','Elizabeth']

// // for (names in goodPeople){
// //    console.log(goodPeople[names] + '50000');

// // }

// // var numbers = [1,2,3,4,5,6]

// // for(items in numbers){
// //     console.log(numbers[items] * 2);
// // }

// // var stringss = 'taiye'
// // for(items in stringss){
// //     console.log(stringss[items] +'hello');
// // }

// // var emails = ['nameone@Mail.com','mail2@mail.com','mail3@mail.com']


// // for (mails in emails){
// //     console.log(emails[mails] + 'hello how are you');
// // }


// // //DOM Document object model
// // //selecting
// // //1.using ID
// // //2.CLASSNAME
// // //3.tagnames
// // //4.queryselector
// // //5.queryselectorAll

// // // var text =document.getElementById('text')
// // // var bird = document.getElementsByClassName('bird')

// // // var h1 = document.getElementsByTagName('h1')
// // // console.log(h1);
// // // var bird2 = document.querySelector('span')
// // // console.log(bird2);
// // // var list= document.querySelectorAll('h1')

// // // var text = document.getElementById('text')
// // // var word = document.querySelector('.word')

// // var QuestionBank =[
// //   {
// //     question:'who is the CEO Of APPCLICK??',
// //     options: ['seyi Adeleke','Osimhen','Paul Pogba','Obasanjo'],
// //     answer:'seyi Adeleke'
// //   },
// //   {
// //     question:'who is President of Nigeria',
// //     options: ['Obasnjo','Thomas muller','Bola Ahmed Tinubu','Moses Isreal'],
// //     answer:'Bola Ahmed Tinubu'
// //   },
// //   {
// //     question:'what is the capital Germany',
// //     options: ['Zurich','Munich','Lagos','Berlin'],
// //     answer:'Berlin'
// //   }
// // ]


// // var timer = document.getElementById('timer')
// // // text.innerHTML ='i love football'
// // // word.innerText ='i hate football'
// // var btn = document.getElementById('btn')
// // var question = document.getElementById('question')
// // var option0 = document.getElementById('option0')
// // var option1 = document.getElementById('option1')
// // var stat = document.querySelector('.stat')
// // var i = 0
// // var scoreBoard = document.getElementById('scoreboard')
// // var answerboard =document.getElementById('answerboard')
// // var score = 0

// // function DisplayQuestion(){
// //   question.innerHTML = QuestionBank[i].question
// // option0.innerHTML = QuestionBank[i].options[0]
// // option1.innerHTML = QuestionBank[i].options[1]

// // stat.innerHTML = `question ${i+1} of ${QuestionBank.length}`
// // }

// // function nextQuestion(){
// //   if(i < QuestionBank.length -1){
// //   i++
// //   console.log(i);
// //   DisplayQuestion()
// //   }
// //   else{
// //     scoreBoard.style.display ='block'
// //     document.querySelector('.quizContainer').style.display ='none'
// //   }
// //   }

// // btn.addEventListener('click',nextQuestion)

// // // setInterval(nextQuestion,10000)

// // function BackToQuiz(){
// //   window.location.reload()
// // }



// // //1. function
// // //2.increment score
// // //3.color

// // function calculateScore(userClickedAnswer){
// //   // QuestionBank[i].answer
// // //  console.log( userClickedAnswer.innerHTML );
// // //validation
// // if(userClickedAnswer.innerHTML === QuestionBank[i].answer  ){
// //   score =score+1
// //   var optionID=document.getElementById(userClickedAnswer.id).style.backgroundColor='green'

// // }
// // else{
// //   document.getElementById(userClickedAnswer.id).style.backgroundColor='pink'
// //   // score =score-0.5
// // }
// // // setTimeout(nextQuestion,2000)

// // }


// // function checkAnswer(){
// //   scoreBoard.style.display='none'
// //   answerboard.style.display='block'


// //   for( var num = 0;num< QuestionBank.length;num++){
// //    var createdList = document.createElement('li')
// //    createdList.innerHTML =QuestionBank[num].answer
// //   // console.log(createdList.innerHTML);
// //   // answerboard.appendChild(createdList)
// //   document.querySelector('.ol').appendChild(createdList)
  
// //   }
// // }


// // // function add(x,y){
// // //    console.log(x,y)
// // // }
// // // add()
// // // ...





// // DisplayQuestion()


// // // var image = document.querySelector('.image')
// // // console.log(image)
// // // image.setAttribute('src',QuestionBank[0].img)






















// // function clock(){
// //  var date = new Date()
// // var Hours =date.getHours()
// // var minute =date.getMinutes()
// // var sec = date.getSeconds()
// // var richard = 0

// // timer.innerHTML = `${Hours} : ${minute} : ${sec}`
// // timer.style.color ='green'
// // if (Hours >= 13 && minute > 2){
// //   timer.style.color ='red'
// // }

// // // timer.innerHTML = `${richard} : ${sec}`
// // // if (sec === 60){
// // //  richard + 1
// // // }
// // }

// // clock()

// // setInterval(clock,1000)


// // btn.addEventListener('click',function(){
// // timer.style.display='block'
// // })


// // const weather = async() =>{
// //   const url = 'https://forecast9.p.rapidapi.com/datesCreated[';
// //   const options = {
// //     method: 'GET',
// //     headers: {
// //       'X-RapidAPI-Key': 'ebfa7d7606msha3da6e75be3f545p12cb31jsn71135121e0a4',
// //       'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
// //     }
// //   };
  
// //   try {
// //     const response = await fetch(url, options);
// //     const result = await response.text();
// //     console.log(result);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // weather()


// // let units = "metric"


// //  function fetcher(){
// // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`)
// // .then(response => {
// //  return  response.json()
// // })
// // .then((data) =>{
// // console.log(data);
// // })
// // }

// // fetcher()

// let locationSpan = document.querySelector('.location')
// let search = document.querySelector('.search')
// let humid = document.querySelector('.humid')



// var submit = document.querySelector('.submit')

// const HandleSubmit = (e) =>{
//   e.preventDefault()
//   const API_KEY = '50e011a9acc81ee3ed08622ff8255a25'
// let  currentCity = search.value
// var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`

// fetch(weatherAPI)
// .then((response) =>{
// return response.json()
// })
// .then((data) =>{
//   console.log(data);
//   locationSpan.innerHTML = data.name
//   humid.innerHTML = data.main.humidity + '%'
// })
   
     
//     // console.log( search.value.length)

// }

// submit.addEventListener('click',HandleSubmit)

// document.querySelector('.icon-1').addEventListener('click',function(){
//   document.querySelector('.icon-2').style.display ='block'
//   document.querySelector('.icon-1').style.display ='none'
// })
// document.querySelector('.icon-2').addEventListener('click',function(){
//   document.querySelector('.icon-1').style.display ='block'
//   document.querySelector('.icon-2').style.display ='none'
// })




// // if(search.value.length < 8){
// //   alert('vscvsn')
// // }
// //input 
// //class

// //git init
// // git add .
// // git commit -m ""
// //git push origin main
// //git push --set-upstream origin main 
// // git clone https://github.com/Sahar009/Blopia-frontend09.git



// function Register(){
//   var UserEmail =document.getElementById('email').value
//   var UserPassword =document.getElementById('password').value
//   var Cpassword =document.getElementById('cPassword').value
// var regex = "\^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"

// if(!(regex.test(UserPassword))){
// alert(`At least one upper case English letter, 
// At least one lower case English letter, 
// At least one digit,
// At least one special character, 
// Minimum eight in length `)
// }
//   var localStorageDetails = localStorage.getItem('email')
//   if (UserEmail ===  localStorageDetails){
//     alert('email already exist ')
//   }
//   // other validations 

//   localStorage.setItem('email',UserEmail)
// }



// localStorage.setItem('March','Appclick student')

// var storedItem = localStorage.getItem('March')

// console.log(storedItem);

// var products = [{
//   id:1,
// name:'Arthemeter lufanthrin',
// price:2000,
// beforePrice:2500,
// quantity:20,
// description:'aesdfghjkler',
// img:'https://'
// },{

// }]
// // cloudinary 

var phone = [{
  title:'iphone',
  image:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww',
  description:'a kdkdkdkdkdk'

}]

console.log(phone.length);

phone.push({
  title:'shirt',
  image:''
})
phone.pop()
console.log(phone.length);

localStorage.setItem('product',phone)
var all_product=localStorage.getItem('product')


