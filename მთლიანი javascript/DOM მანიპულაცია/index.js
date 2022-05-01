
//  query selector  // ელემენტზე მივიღე წვდომა
   // class ით წვდომა
var text= document.querySelector('.txt');
console.log(text);
   // id ით წვდომა
var txt= document.getElementById('txt');
// მანიპულაცია

   // ამოვიღო კლასის სახელი
console.log(text.className);
   // ამოვიღო ველიუ
console.log(text.textContent);
   // ამოვიღო ატრიბუტი
console.log(text.getAttribute("data-name"));
   // ატრიბუტის მიცემა გადაწერა
text.setAttribute('data-surname','datunashvili')
console.log(text.getAttribute("data-surname"));
   // value შეცვლა
text.textContent = 'გამარჯობა';
   // სტილის მიცემა // გადაეცა html კოდს და მიენიჭა
var box=document.getElementById('box');
box.style.width='60px';
box.style.height='60px';
box.style.background='green';
   // შეცვლა
var txt = document.querySelector('h3');
var arr = [ '1','2'];
txt.textContent=arr[0];
   // კლიკის ივენთი
var btn=document.getElementById('btn');
btn.addEventListener('click', function () {
   alert('added')
   prompt('write a comment')
})
   // მაუსის მიტანისას
btn.addEventListener('mouseover', function () {
   confirm('click ok if you are 18+')
})
   // scroll  // რაღაც სიმაღლეზე ქნას რაღაც
document.addEventListener('scroll', function() {
   var scroll= scrollY; // spec ველიუ იღებს ციფრებს სქროლისას
   console.log(scroll); // დაბეჭდოს ველიუები
   if (scroll > 100){
      return alert("don't");
   }
})
