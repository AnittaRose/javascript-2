// let str='';
// for (let i=0; i<5; i++){
//     for (let j=5; j>i; j--){
//         str=str+"*";
//     }
//     str=str+"\n";
// }
// console.log(str)


// console.log("\n\n\n\n\n")
// let x='';
// for (let i=0; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         x=x+j;
//     }
//     x=x+"\n";
// }
// console.log(x)

// console.log("\n\n\n\n\n")
// for(let i=1; i<=10; i++)
//     console.log(i)

// console.log("\n\n\n\n\n")
// let sum=0;
// for(let i=1; i<=10; i++){
//     sum=sum+i
// }
//     console.log(sum)


// console.log("\n\n\n\n\n")

// for(let i=0; i<=15; i++){
//     if (i % 2==0){
//         console.log(i);
//     }
// }

// //prime number 
// console.log("\n\n\n\n\n")



// let num=12;
// let count=0;

// for(let i=2; i<=num/2; i++){
//     if(num%i==0){
//         count++
//     }
//     if (count==0){
//         console.log("prime")
//     }
//     else{
//         console.log("no prime")
//     }
// }



// //spread operator
// console.log("\n\n\n\n\n\n")
// let arr = [1,2,3,4,5];
// console.log("arr ", arr);


// let arr1 = [...arr,6];
// console.log("arr1 : " , arr1);

// let obj = {
//     name : "anitta",
//     email : "anittanelson40@gmail.com",
// }
// console.log("obj : ", obj);

// let obj1={...obj,address : "my address"};
// console.log("obj1 : ", obj1);



// //destructuring

// let [a,b,c,d,e] = arr;
// console.log("a : ",a);
// console.log("b: ",b);
// console.log("e : ",e);

// let {email, name} = obj;
// console.log("name : ", name );
// console.log("email : ", email );



// //Nested Destructing

// let matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log("matrix : ",matrix);

// let [row1,row2,[g,h,i]] = matrix;
// console.log("row1 : ",row1);
// console.log("row2 : ",row2);


// let [p,v,k] =row1;
// console.log("p : ",1);
// console.log("v : ",v);
// console.log("k : ",k);


// let data = {
//     name1:"anitta",
//     email1:"anittanelson40@gmail.com",
//     address:{
//         city : "my city",
//         street: "my street",
//         pincode:"680562",
//     }
// }

// let{name1, email1, address :{city,street,pincode}} =data;
// console.log("name : ",name);
// console.log("email : ",email);
// console.log("pincode : ",pincode);
// console.log("city : ",city);
// console.log("street : ",street);



// console.log("/n/n/n/n/n/n");
// //array methods

// console.log("this : " , this);

// let obj2 = {
//     name : "mark",
//     email : "mark@gmail.com" ,
//     age : 30 ,
//     printAge : function () {
//         console.log("function execution started....");
//         console.log("this : " , this);
//         console.log("age : ", this.age);
//         return "function execution completed!";
//     }
// }


// console.log("/n/n/n/n/n");

// console.log("this : ", this);

// let obj3= {
//     name : "lachu",
//     email:"lachu123@gmail.com",
//     age : 19,
//     printAge : function() {
//         console.log("function execution started....");
//         console.log("this : " , this);
//         // console.log("age : ", age);
//         return "function execution completed!";
//     }
// }

// console.log("obj3 : ", obj3);
// console.log("name : ", obj3.name);
// console.log("obj3 : ", obj3.email);
// console.log("obj3.printAge() : ", obj3.printAge());

// console.log("/n/n/n/n/n");


// function greet(message1,message2) {
//     console.log("message1 : ",message1);
//     console.log("message2 : ",message2);


//     console.log("this : ",this);
//     console.log("name : " ,this.name);

//     let output = greet.bind(obj3, "hello","hai");
//     console.log("output : ",output);
//     output();



// }



// let obj4 ={
//     name : "Henry",
//     age : 12,
//     greeting : function() {
//         console.log(`Hello ${this.name}, your age is ${this.age}`);

//     }
// }



// //constructor function 

// function person(name,age){
//     this.name = name;
//     this.age = age;

//     this.greeting = function () {
//         console.log(`Hai ${this.name}, you are ${this.age}year old!`);

//     }
// }


// let  person1 =  new person("henry" , 55);
// console.log("person1 : ",person1);
// person1.greeting();


// let  person2 =  new person("shanks" , 32);
// console.log("person2 : ",person2);
// person1.greeting();


// console.log("/n/n/n/n/n/n");


// //using classes


// {
// class person{
//     name;
//     age;
//     mark;

//     constructor(name,age,mark){
//         this.name=name;
//         this.age=age;
//         this.mark=mark;
//     }

//     greeting() {
//         console.log(`Hello ${this.name}, your age is ${this.age} and your mark is ${this.mark}`);
//     }
// }

// let person3 = new person("john" , 12, 70);
// console.log("person1 : ",person);
// person3.greeting();
// }





// console.log("\n\n\n\n\n\n")

// {
// class button {
//     button;


//     constructor (content) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = content;
//         document.body.appendChild(this.button);
//     }


//     set width(width) {
//         this.button.style.width = width + "px";
//     }
    

//     set height(height) {
//         this.button.style.height = height + "px";
//     }

//     get width (){
//         return this.button.style.width;
//     }


//     get height (){
//         return this.button.style.height;
//     }

//     onClick (fn) {
//         this.button.onclick = fn;
//     }

// }

// let button1 = new button('click');
// console.log("button1",button1)


// button1.width = 100;
// button1.height = 100;
// console.log("button1  : " , button1);

// console.log("width : ",button1.width);
// console.log("height : " , button1.height); 
// console.log("yhhhuuu",button1);

// button1.onClick(function (){
//     console.log("buttonclicked")
// });

// class BlackButton extends button {
      

//     constructor(content) {
//         super(content);
//         this.button.style.background = "black";
//         this.button.style.color = "white";
//     }
// }



//     let BlackButton1 = new BlackButton("Don't click");

//     BlackButton1.onClick(function () {
//         console.log("Black button clicked.....");
//     })
// }




// //task
// //constructor= constructor is a special type of method used to initialize an object when it is created. The constructor is called automatically when a new instance of the class is created using the new keyword
  
// console.log("\n\n\n\n\n\n\n\n")

// class para {
//     constructor(content){
//         this.paragraph = document.createElement('p');
//         this.paragraph.innerHTML= content;
//         document.body.appendChild(this.paragraph);
//     }
//     onClick(fn){
//         this.paragraph.onclick=fn;
//     }
//     //mouseover  and mouseout

//     setBgColor(color){
//         this.paragraph.style.backgroundColor= color;
//     }
//     setColor(color){
//         this.paragraph.style.color=color;
//     }
//     onmouseover(fn){
//         this.paragraph.onmouseover=fn;
//     }

//     onmouseout(fn){
//         this.paragraph.onmouseout=fn;
//     }
//     setFontSize(size) {
//         this.paragraph.style.fontSize = size + "px";
//     }
// }
// let para1 = new para ('A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences in a paragraph to determine the subject and perspective of the paragraph. That’s why it’s often best to put the topic sentence at the very beginning of the paragraph. In some cases, however, it’s more effective to place another sentence before the topic sentence—for example, a sentence linking the current paragraph to the previous one, or one providing background information.Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence. For example, you might be able to omit a topic sentence in a paragraph that narrates a series of events, if a paragraph continues developing an idea that you introduced (with a topic sentence) in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence.')

// para1.onClick(function(){
//         console.log('paragraph clicked.....');
//         para1.setBgColor('blue');
//         para1.setColor('white');
//         para1. setFontSize(30);
        
// });
// para1.onmouseover(function(){
//     para1.setColor('green');
// })
// para1.onmouseout(function(){
//     para1.setColor('red');
//     para1.setBgColor('white');
//     para1. setFontSize(20);
// })



// console.log ("\n\n\n\n\n\n\n");

// console.log("first line.....");
// console.log("second line.....");
// console.log("Third line.....");





// console.log ("\n\n\n\n\n\n\n");

// console.log("first line.....");
// //Timers
// setTimeout(() => {
//     console.log("second line.....");
// })
// console.log("third line.....");



// console.log ("\n\n\n\n\n\n\n");

// console.log("first line.....");
// //Timers
// setTimeout(() => {
//     console.log("second line.....");
// })


// //event listeners
// let btn = document.getElementById('btn');
// console.log("btn : ",btn);

// btn.addEventListener('click' , function() {
//     console.log("Button clicked.....");
// })


// //network fetch() api
// let datas = fetch('https://jsonplaceholder.typicode.com/users');
// console.log("datas : " , datas);

// console.log("third line.....");


// let xhr = new XMLHttpRequest();
// console.log("xhr : " , xhr);

// //get
// //post
// //put
// //delete

// xhr.open('get' , 'https://jsonplaceholder.typicode.com/users');

// document.getElementById('btn').addEventListener('click' , function(){
//     xhr.send();
// })


// xhr.onreadystatechange = function (){
//     console.log("readystate : " , xhr.readyState);

//     if (xhr.readyState === 4) {
//         console.log("status : " , xhr.status);
         
//         if(xhr.status === 200) {

//             let response = xhr.response;
//             console.log("response : " , response);
//             console.log("typeof(response) : ", typeof(response));

//             let datas = JSON.parse(response);
//            console.log("datas : " , datas);

//            let datacontainer = document.getElementById('datacontainer');
//            console.log("datacontainer : " , datacontainer);
//            let rows = '';

//            for(let i = 0; i< datas.length; i++){
//             rows = rows + `
//             <tr>
//                 <td>${datas[i].name}</td>
//                 <td>${datas[i].username}</td>
//                 <td>${datas[i].email}</td>
//                 <td>${datas[i].website}</td>
//                 <td><button onClick="handleClick(${datas[i].id})">View</button>
//             </tr>
//             `
//            }
//            console.log("rows : ", rows);
           
//            datacontainer.innerHTML = rows;
//         }

//     }
//     function handleClick(id){
//         console.log("Reached here.......");
//         console.log("id : , id ");

//         window.location.href = `dashboard.html?id=${id}`;

//         return;
//     }

//     function loadUserDatas(){
//         console.log("loading....");

//         let location = window.location;
//         console.log("location : " , location);

//         let querystring = location.search;
//         console.log("querystring : ",querystring);
//     }
// }


// console.log ("\n\n\n\n\n\n\n");

// let datas1 = [
//     {
//         id : 1,
//         name : "john",
//         age : 12,
//     },
//     {
//         id : 2,
//         name : "jane",
//         age : 8,
//     }
// ]
// console.log("datas1 : " ,datas1);
// function findUser(id){
//     let user = datas1.find(data => data.id === id);
//     return user;
// }

// let user = findUser(1);
// console.log("user : ",user);


// function findUser1(id) {
//     let user = datas1.find(data => data.id === id);

//     setTimeout(()=>{
//         return user;
//     },1000);
// }



// let user1 = findUser1(2);
// console.log("user1 : ",user1);


// function findUser2(id) {
//     return new Promise ((resolve , reject)=>{
//         let user = datas1.find(data =>data.id === id);

//         setTimeout(()=> {
//             if(user){
//                 resolve(user);
//             }else{
//                 reject("user not found");
//             }
//         },1000);
//     })
// }


// findUser2(10)
//     .then((user)=>{
//         console.log("user2 : ",user);
//     })
//     .catch((message)=>{
//         console.log("message : ",message);
//     })


//     console.log("remaining code......")



// fetch('https://jsonplaceholder.typicode.com/users')

// .then((user)=> {
//     console.log("users : ",users);


//     users.json()
//     .then((parsed_datas) => {
//         console.log("parsed_datas : ", parsed_datas);
//     })
//     .catch((error)=>{
//         console.log("something went wrong! ");
//     });


//     console.log("parsed_user_data : ", parsed_user_data);
// })
// .catch((error)=>{
//     console.log("error : " , error);
// })




// const str1 = "The cat is white";
// const str2 = "rat eats fish";
// const str3 = "is it ok fishes";
// const str4 = `Hello 
// good meat 
// is always good 
// Hai`


// const regexp1 = /a/;
// const result1 = regexp1.test(str1);
// console.log("result1 : ",result1);

// const regexp2 = /A/i;
// const result2 = regexp2.test(str1);
// console.log("result2 : ",result2);

// const regexp3 = /ab/;
// const result3 = regexp3.test(str1);
// console.log("result3 : ",result3);

// const regexp4 = /[crb]a/i;
// const result4 = regexp4.test(str1);
// console.log("result4 : ",result4);

// const regexp5 = /[a-z]a/i;
// const result5 = regexp5.test(str1);
// console.log("result5 : ",result5);

// const regexp6 = /[a-z0-9]a/i;
// const result6 = regexp6.test(str1);
// console.log("result6 : ",result6);

// const regexp7 = /^rat/i;
// const result7 = regexp7.test(str2);
// console.log("result7 : ",result7);

// const regexp8 = /fish$/;
// const result8 = regexp8.test(str2);
// console.log("result8 : ",result8);

// const regexp9 = /^good/im;
// const result9 = regexp9.test(str4);
// console.log("result9 : ",result9);

// const regexp10 = /good$/im;
// const result10 = regexp10.test(str4);
// console.log("result10 : ",result10);

// const regexp11 = /fishes?/im;
// const result11 = regexp11.test(str3);
// console.log("result11 : ",result11);

// const regexp12 = /fish(es)?/im;
// const result12 = regexp12.test(str3);
// console.log("result12 : ",result12);

// const regexp13 = /fish*$/i;
// const result13 = regexp13.test(str3);
// console.log("result13 : ",result13);

// const regexp14 = /fish+$/i;
// const result14 = regexp14.test(str3);
// console.log("result14 : ",result14);

// const regexp15 = /fish.$/i;
// const result15 = regexp15.test(str3);
// console.log("result15 : ",result15);

// const regexp16 = /fish*$/i;
// const result16 = regexp16.test(str3);
// console.log("result16 : ",result16);

// const str5 = "Hello";

// const regexp17 = /[kjm]/i;
// const result17 = regexp17.test(str5);
// console.log("result17 : " , result17);

// const regexp18 = /[^kjm]/i;
// const result18 = regexp18.test(str5);
// console.log("result18 : " , result18);

// const regexp19 = /[H+]/i;
// const result19 = regexp19.test(str5);
// console.log("result19 : " , result19);

// const regexp20 = /O$/i;
// const result20 = regexp20.test(str5);
// console.log("result20 : " , result20);

// const regexp21 = /O?$/i;
// const result21 = regexp21.test(str5);
// console.log("result21 : " , result21);

// const regexp22 = /O+$/i;
// const result22 = regexp22.test(str5);
// console.log("result22 : " , result22);



// console.log("\n\n\n\n\n\n\n");

// //{} - indicates the number of characters, a{2} means 'aa' , ie 2 a

// const regexp23 = /L{2}o$/i;
// const result23 = regexp23.test(str5);
// console.log("result23 : ",result23);

// const regexp24 = /L{2,4}o$/i;
// const result24 = regexp24.test(str5);
// console.log("result24 : ",result24);

// const regexp25 = /HEL{2,4}O$/i;
// const result25 = regexp25.test(str5);
// console.log("result25 : ",result25);

// const regexp26 = /HEL{2,}O$/i;
// const result26 = regexp26.test(str5);
// console.log("result26 : ",result26);

// // \ - indicate escape characters used for matching any characters which has special meaning

// const regexp27 = /\d/i;
// const result27 = regexp27.test(str5);
// console.log("result27 : ",result27);

// const regexp28 = /\D/i;
// const result28 = regexp28.test(str5);
// console.log("result28 : ",result28);


// // suppose we want to match '-' in a string.since '-' has a special meaning in regular expressions it will not work as expected and will match everything

// const regexp29 = /-/i;
// const result29 = regexp29.test(str5);
// console.log("result29 : ",result29);


// // so we can write it as 
// const regexp30 = /\-/i;
// const result30 = regexp30.test(str5);
// console.log("result30 : ",result30);


//17/8/2024


//'^' and '$' can only be used in the start and end of a string and cannot be used in between string to match,so we use lookheads for giving starting and ending in between strings


//(?=) - positive lookahead, A(?=B) -> matches : A only if A is followed by B
//(?!) - Negative lookahead, A(?!B) -> matches : A only if A is not followed by B
//(?<=) - positive lookbehid, (?<=B)A -> Matches : A only if A is preceded by B
//(?<!) - Negative lookbehid, (?<!B)A -> Matches : A only if A is not preceded by B


{

    let dateString = '02-05-2003';

    let regex = /-\d+-/; // it will match also '-05-' in result and give as result array
    const result = dateString.match(regex);

    console.log("result : ",result);

    //inorder to match exactly '05' in datastring we can use lookheads
    let regexp1 = /(?<=-)\d+(?=-)/;// This will exactly match '05' in string
    const result1 = dateString.match(regexp1);
    console.log("result1 : ", result1);

    //example for negative lookhead and negative lookbehind
    let phone = "(91)8547986109";
    
    //to match numbers outside of (91)
    const phoneRegex = /(?<!\()\d+(?!\))/;
    const phoneRegexResult = phone.match(phoneRegex);
    console.log("phoneRegexResult : ",phoneRegexResult);


}
