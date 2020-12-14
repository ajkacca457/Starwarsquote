const btn=document.querySelector(".btn");
const quote=document.querySelector(".quote");
const resetbtn=document.querySelector("#btn2");

const generatequote= new Promise((resolve,reject)=>
{
const url="http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";
const xhr= new XMLHttpRequest();

xhr.open("GET",url,true);

xhr.onload=function(){
  if(this.status===200){
    const quote=JSON.parse(this.responseText);
    const msg="Force is strong with you";
    const data=[quote,msg];
    resolve(data);
  }
  else {
    const msg="Force is weak. Take a break Sith lord."
    reject(msg);
  }
}

xhr.send();

})

btn.addEventListener("click",function(){

generatequote.then((data)=>
{console.log(data);
  quote.innerHTML=`<h5 class="my-2 bg-info text-white py-2">${data[1]}</h5>
      <p class="px-2 text-justify">${data[0].starWarsQuote}</p>

  `})
.catch((error)=>{
  quote.innerHTML=`<h5 class="my-2 bg-danger text-white py-2">${error}</h5>`
})

})

resetbtn.addEventListener("click",function(){
  location.reload();
})
