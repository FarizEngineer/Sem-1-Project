// Add to cart button work
function button(){
  alert("Product is added to cart...")
}

// Newsletter input work
let errormess=document.getElementById("emperror")
function auth(){
  let inputnew=document.getElementById(`inpnews`).value
// condition
if(inputnew==""){
errormess.innerHTML="Please enter your email first..."
}
else{
  alert(`Thank you for signing in as ${inputnew}`)

}
}

// Offer card click function
function off10(){
  window.location.href="Fariz2.html"
}

// Buy now button work
function buybtn(){
  alert("Thanks for buying from us👍...")
}

// Order now button work
function ordbtn(){
  alert("Thanks for the order😊...")
}

// Buy of home page buttons
function buybutt1(){
  if(confirm(`ORGANIC OATS
Pkr. 450/1kg

BUY NOW 👍`)){
  alert("Thanks for buying Our featured product😁...");
}
  
}
function buybutt2(){
  if( confirm(`LAL-MIRCH POWDER
Pkr. 330/100g

BUY NOW 👍`)){
  alert("Thanks for buying Our featured product😁...");
}
  
}
function buybutt3(){
  if( confirm(`CHICK PEAS (CHANA)
Pkr. 310/1kg

BUY NOW 👍`)){
  alert("Thanks for buying Our featured product😁...");
}
  
}
function buybutt4(){
   if(confirm(`CHAAT MASALA
Pkr. 280/100g

BUY NOW 👍`)){
  alert("Thanks for buying Our featured product😁...");
}
  
}
function buybutt5(){
   if(confirm(`BASMATI RICE
Pkr. 470/1kg

BUY NOW 👍`)){
  alert("Thanks for buying Our featured product😁...");
}
  
}
function buybutt6(){
   if(confirm(`TURMERIC(HALDI) POWDER
Pkr. 200/100g

BUY NOW 👍`)){
  alert("Thanks for buying Our featured product😁...");
}
  
}

// About page btn from Home page
function aboutbtn(){
  window.location.href="aboutus.html"
}