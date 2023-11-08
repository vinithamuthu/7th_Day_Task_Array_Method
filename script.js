
// a.Get all the countries from Asia continent /region using Filter function 


var createreq = new XMLHttpRequest();
createreq.open("GET", "https://restcountries.com/v3.1/all", true)
createreq.send();
createreq.onload = function () {
  var data = createreq.response;
  var result = JSON.parse(data);
   console.log(result);
  // for (var i = 0; i < result.length; i++) {
  //   console.log(result[i].name.common, result[i].flag);
  // }
  console.log("1st QUESTION OUTPUT");

 let Allcnty = result.filter((resu)=>{
     if(resu.region === 'Asia'){
      
      console.log(resu.name);
     }

 })

  // console.log(Allcnty);

}



// b.Get all the countries with a population of less than 2 lakhs using Filter function:



var createreq2 = new XMLHttpRequest();
createreq2.open("GET", "https://restcountries.com/v3.1/all", true)
createreq2.send();
createreq2.onload = function () {
  var data2 = createreq2.response;
  var result2 = JSON.parse(data2);
  // console.log(result2);
  console.log("2nd QUESTION OUTPUT");

  let lakks = result2.filter((resul)=>{

    return resul.population < 200000; 
  
  })
 
  console.log(lakks);

}




// c.Print the following details name, capital, flag, using forEach function:




var createreq3 = new XMLHttpRequest();
createreq3.open("GET", "https://restcountries.com/v3.1/all", true)
createreq3.send();
createreq3.onload = function () {
  var data3 = createreq3.response;
  var result3 = JSON.parse(data3);
  // console.log(result3);
  console.log("3rd QUESTION OUTPUT");

  let details = result3.forEach(element => {

    console.log(element.name,element.capital,element.flag);
    
  });
  

  
}




// d.Print the total population of countries using reduce function:



var createreq4 = new XMLHttpRequest();
createreq4.open("GET", "https://restcountries.com/v3.1/all", true)
createreq4.send();
createreq4.onload = function () {
  var data4 = createreq4.response;
  var result4 = JSON.parse(data4);
  // console.log(result4);
  

  let redu = result4.reduce((accumulator,currentvalue)=>{
   
   return accumulator+currentvalue.population
    
  },0)
  console.log("4th QUESTION OUTPUT");
console.log(redu);
  
}




// e.Print the country that uses US dollars as currency.


var createreq5 = new XMLHttpRequest();
createreq5.open("GET", "https://restcountries.com/v3.1/all", true)
createreq5.send();
createreq5.onload = function () {
  var data5 = createreq5.response;
  var result5 = JSON.parse(data5);
  // console.log(result5);
  
//   let doll = result5.filter((r5)=>{
//     if(r5.currency == 'USD'){
//      return r5.country
//     }

// })

//   console.log(doll);

for(i=0;i<result5.length;i++){
  if(result5[i].currencies === "USD")
 {
     console.log("currency val" + + result5[i].currencies)
 }
}

  
}



