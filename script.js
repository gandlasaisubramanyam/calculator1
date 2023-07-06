var div1=createDiv("div","class","container");
var div2=createDiv("div","class","calculator");
var div3=createDiv("div","class","heading");
var h1tag=createH1("h1","id","title","Calculator");
var Ptag=createH1("p","id","description","design by Boobalan");

function createDiv(tagName,attrName,attrValue){
    var ele=document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    return ele;
}
function createH1(tagName,attrName,attrValue,content){
    var ele=document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    ele.innerHTML=content;
    return ele;
}

                   //* input

 var input1 =createInput("input","type","text","id","result");
                 
 
 function createInput(tagName,attrName,attrValue,attrName1,attrValue1){
    var ele=document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    ele.setAttribute(attrName1,attrValue1);
    return ele;
 }


         //* buttons
 var buttons=createButton("button","onclick","Clear()","id","clear","C");
 var buttons1=createButton("button","onclick","Delete()","id","del","Del");
 var buttons2=createButton("button","onclick","display('%')","id","modulas","%");
 var buttons3=createButton("button","onclick","display('/')","id","division","/");
 var buttons4=createButton("button","onclick","display('7')","id","7","7");
 var buttons5=createButton("button","onclick","display('8')","id","8","8");
 var buttons6=createButton("button","onclick","display('9')","id","9","9");
 var buttons7=createButton("button","onclick","display('*')","id","multiply","*");
 var buttons8=createButton("button","onclick","display('4')","id","4","4");
 var buttons9=createButton("button","onclick","display('5')","id","5","5");
 var buttons10=createButton("button","onclick","display('6')","id","6","6");
 var buttons11=createButton("button","onclick","display('-')","id","subtract","-");
 var buttons12=createButton("button","onclick","display('1')","id","1","1");
 var buttons13=createButton("button","onclick","display('2')","id","2","2");
 var buttons14=createButton("button","onclick","display('3')","id","3","3");
 var buttons15=createButton("button","onclick","display('+')","id","add","+");
 var buttons16=createButton("button","onclick","display('.')","id","dot",".");
 var buttons17=createButton("button","onclick","display('0')","id","zero","0");
 var buttons18=createButton("button","onclick","Calculate()","id","equal","=");



            //* Buttons function
 function createButton(tagName,attrName,attrValue,attrName1,attrValue1,content){
    var ele=document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    ele.setAttribute(attrName1,attrValue1);
    ele.innerHTML=content;
    return ele;
 }
 div3.append(h1tag,Ptag);
 document.body.append(div3);

div2.append(input1,buttons,buttons1,buttons2,buttons3,buttons4,buttons5,buttons6,buttons7,buttons8,buttons9,buttons10,buttons11,buttons12,buttons13,buttons14,buttons15,buttons16,buttons17,buttons18)

div1.append(div2)
document.body.append(div1);






let outputScreen =document.getElementById("result"); 

function display(num){
    outputScreen.value += num;
}
function Calculate(){
try{
    outputScreen.value=eval(outputScreen.value);
}
catch(err)
{
    alert("Invalid");
}
}
function Clear(){
outputScreen.value = "";
}
function Delete(){
outputScreen.value = outputScreen.value.slice(0,-1);
}