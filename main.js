//console.log('Hello Jesus!');

const body = document.body
    //body.append("Hello Jesus!" + " " + "Good Bye Jesus Christ!") <---append string on HTML page


//const div = document.createElement("div");

//div.innerText = "HELLO JESUS CHRIST TODAY IS MY BIRTHDAY!"; //<---print string on HTML with inner.Text

//div.textContent = "HELLO JESUS CHRIST 2"; //<---print string on HTML with textContent

//div.innerHTML = "<h1>Hello World 2</h1>"; //<---print string with tags on HTML


//--DDECLARE CONSTANT TO RETRIEVE QUERY DATA ON HTML 
const div = document.querySelector("div")

const spanHi = document.querySelector("#hi"); //<--print id on HTML
const spanBye = document.querySelector("#bye"); //<--print id on HTML
const spanGreeting = document.querySelector("#greeting"); //<--print id on HTML

const spanGod = document.querySelector("#god");

const spanPrinting = document.querySelector("#printing");



//--REMOVING ELEMENT ON HTML--// 

//spanBye.remove(); //<---removing element to HTML

div.append(spanBye); //<---printing inside HTML
div.append(spanHi); //<---printing inside HTML
div.append(spanGreeting); //<---printing inside HTML



console.log(spanHi.getAttribute("id")); //<---print on the console "id"
console.log(spanHi.title); //<---print on the console "title"
console.log(spanGreeting.id); //<---print on the console "title"

//console.log(spanHi.setAttribute("id", "change id attribute here")) //<--check it in Analisi pagina(web inspector)

console.log(spanGod.dataset.otherData); //<---check dataset on the console

//----ACCESS TO DATASET----//
spanGod.dataset.newName = "Ponzio" //<--check it in Analisi pagina(web inspector)

//----ACCESS TO CLASSES----//

//-ADD CLASS-//
spanPrinting.classList.add("new-class") //add class<--check it in Analisi pagina(web inspector)

//-REMOVE CLASS-//
//spanPrinting.classList.remove("hi1") //remove class<--check it in Analisi pagina(web inspector)

//-REMOVE CLASS-USING ALSO BOOLEAN//

//spanPrinting.classList.toggle("hi2") //remove class if already existed<--check it in Analisi pagina(web inspector)
spanPrinting.classList.toggle("hi3", true) //add class if NO already existed<--check it in Analisi pagina(web inspector)


//-REMOVE_CHILD-//
//div.removeChild(spanHi); //<---removing child from HTML

//-ACCESS TO CSS PROPERTY-//

spanHi.style.color = "red"; //-color
spanHi.style.backgroundColor = "blue"; //background


//---REMOVE ATTRIBUTE---//
//spanHi.removeAttribute('id'); //remove id on the console
//spanHi.removeAttribute('title'); //remove title on the console




//body.append(div) //<---append div on HTML page


//----DISPLAY diV BY QUERY SELECTORS----//

//const div = document.querySelector('div');

//console.log(div.textcontent)
//console.log(div.innertext)