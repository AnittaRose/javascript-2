let str='';
for (let i=0; i<5; i++){
    for (let j=5; j>i; j--){
        str=str+"*";
    }
    str=str+"\n";
}
console.log(str)


console.log("\n\n\n\n\n")
let x='';
for (let i=0; i<=5; i++){
    for(let j=1; j<=i; j++){
        x=x+j;
    }
    x=x+"\n";
}
console.log(x)

console.log("\n\n\n\n\n")
for(let i=1; i<=10; i++)
    console.log(i)

console.log("\n\n\n\n\n")
let sum=0;
for(let i=1; i<=10; i++){
    sum=sum+i
}
    console.log(sum)


console.log("\n\n\n\n\n")

for(let i=0; i<=15; i++){
    if (i % 2==0){
        console.log(i);
    }
}

//prime number 
console.log("\n\n\n\n\n")



let num=12;
let count=0;

for(let i=2; i<=num/2; i++){
    if(num%i==0){
        count++
    }
    if (count==0){
        console.log("prime")
    }
    else{
        console.log("no prime")
    }
}



//spread operator
console.log("\n\n\n\n\n\n")
let arr = [1,2,3,4,5];
console.log("arr ", arr);


let arr1 = [...arr,6];
console.log("arr1 : " , arr1);

let obj = {
    name : "anitta",
    email : "anittanelson40@gmail.com",
}
console.log("obj : ", obj);

let obj1={...obj,address : "my address"};
console.log("obj1 : ", obj1);



//destructuring

let [a,b,c,d,e] = arr;
console.log("a : ",a);
console.log("b: ",b);
console.log("e : ",e);

let {email, name} = obj;
console.log("name : ", name );
console.log("email : ", email );



//Nested Destructing

let matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log("matrix : ",matrix);

let [row1,row2,[g,h,i]] = matrix;
console.log("row1 : ",row1);
console.log("row2 : ",row2);


let [p,v,k] =row1;
console.log("p : ",1);
console.log("v : ",v);
console.log("k : ",k);


let data = {
    name1:"anitta",
    email1:"anittanelson40@gmail.com",
    address:{
        city : "my city",
        street: "my street",
        pincode:"680562",
    }
}

let{name1, email1, address :{city,street,pincode}} =data;
console.log("name : ",name);
console.log("email : ",email);
console.log("pincode : ",pincode);
console.log("city : ",city);
console.log("street : ",street);



console.log("/n/n/n/n/n/n");
//array methods

console.log("this : " , this);

let obj2 = {
    name : "mark",
    email : "mark@gmail.com" ,
    age : 30 ,
    printAge : function () {
        console.log("function execution started....");
        console.log("this : " , this);
        console.log("age : ", this.age);
        return "function execution completed!";
    }
}


console.log("/n/n/n/n/n");

console.log("this : ", this);

let obj3= {
    name : "lachu",
    email:"lachu123@gmail.com",
    age : 19,
    printAge : function() {
        console.log("function execution started....");
        console.log("this : " , this);
        // console.log("age : ", age);
        return "function execution completed!";
    }
}

console.log("obj3 : ", obj3);
console.log("name : ", obj3.name);
console.log("obj3 : ", obj3.email);
console.log("obj3.printAge() : ", obj3.printAge());

console.log("/n/n/n/n/n");


function greet(message1,message2) {
    console.log("message1 : ",message1);
    console.log("message2 : ",message2);


    console.log("this : ",this);
    console.log("name : " ,this.name);

    let output = greet.bind(obj3, "hello","hai");
    console.log("output : ",output);
    output();



}



let obj4 ={
    name : "Henry",
    age : 12,
    greeting : function() {
        console.log(`Hello ${this.name}, your age is ${this.age}`);

    }
}



//constructor function 

function person(name,age){
    this.name = name;
    this.age = age;

    this.greeting = function () {
        console.log(`Hai ${this.name}, you are ${this.age}year old!`);

    }
}


let  person1 =  new person("henry" , 55);
console.log("person1 : ",person1);
person1.greeting();


let  person2 =  new person("shanks" , 32);
console.log("person2 : ",person2);
person1.greeting();


console.log("/n/n/n/n/n/n");


//using classes


{
class person{
    name;
    age;
    mark;

    constructor(name,age,mark){
        this.name=name;
        this.age=age;
        this.mark=mark;
    }

    greeting() {
        console.log(`Hello ${this.name}, your age is ${this.age} and your mark is ${this.mark}`);
    }
}

let person3 = new person("john" , 12, 70);
console.log("person1 : ",person);
person3.greeting();
}





console.log("\n\n\n\n\n\n")

{
class button {
    button;


    constructor (content) {
        this.button = document.createElement('button');
        this.button.innerHTML = content;
        document.body.appendChild(this.button);
    }


    set width(width) {
        this.button.style.width = width + "px";
    }
    

    set height(height) {
        this.button.style.height = height + "px";
    }

    get width (){
        return this.button.style.width;
    }


    get height (){
        return this.button.style.height;
    }

    onClick (fn) {
        this.button.onclick = fn;
    }

}

let button1 = new button('click');
console.log("button1",button1)


button1.width = 100;
button1.height = 100;
console.log("button1  : " , button1);

console.log("width : ",button1.width);
console.log("height : " , button1.height); 
console.log("yhhhuuu",button1);

button1.onClick(function (){
    console.log("buttonclicked")
});

class BlackButton extends button {
      

    constructor(content) {
        super(content);
        this.button.style.background = "black";
        this.button.style.color = "white";
    }
}



    let BlackButton1 = new BlackButton("Don't click");

    BlackButton1.onClick(function () {
        console.log("Black button clicked.....");
    })
}




//task
//constructor= constructor is a special type of method used to initialize an object when it is created. The constructor is called automatically when a new instance of the class is created using the new keyword
  
console.log("\n\n\n\n\n\n\n\n")

class para {
    constructor(content){
        this.paragraph = document.createElement('p');
        this.paragraph.innerHTML= content;
        document.body.appendChild(this.paragraph);
    }
    onClick(fn){
        this.paragraph.onclick=fn;
    }
    //mouseover  and mouseout

    setBgColor(color){
        this.paragraph.style.backgroundColor= color;
    }
    setColor(color){
        this.paragraph.style.color=color;
    }
    onmouseover(fn){
        this.paragraph.onmouseover=fn;
    }

    onmouseout(fn){
        this.paragraph.onmouseout=fn;
    }
    setFontSize(size) {
        this.paragraph.style.fontSize = size + "px";
    }
}
let para1 = new para ('A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences in a paragraph to determine the subject and perspective of the paragraph. That’s why it’s often best to put the topic sentence at the very beginning of the paragraph. In some cases, however, it’s more effective to place another sentence before the topic sentence—for example, a sentence linking the current paragraph to the previous one, or one providing background information.Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence. For example, you might be able to omit a topic sentence in a paragraph that narrates a series of events, if a paragraph continues developing an idea that you introduced (with a topic sentence) in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence.')

para1.onClick(function(){
        console.log('paragraph clicked.....');
        para1.setBgColor('blue');
        para1.setColor('white');
        para1. setFontSize(30);
        
});
para1.onmouseover(function(){
    para1.setColor('yellow');
})
para1.onmouseout(function(){
    para1.setColor('red');
    para1.setBgColor('white');
    para1. setFontSize(20);
})










