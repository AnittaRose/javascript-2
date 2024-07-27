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









