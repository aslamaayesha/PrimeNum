function prime() {
    let num = document.getElementById("max").value;
  
   factors=[];
      for ( let i=2; i<= num; i+=1){
              while(num%i ===0){
               if (!factors.includes(i)){
               factors.push(i);}
               num/= i ;
              }
      }
    document.getElementById("output").innerHTML= factors
  }