function sprawdz(){
  //console.log(document.getElementById('wejscieId').value);
  let wejscie = document.getElementById('wejscieId').value;
  //let wejscie = "hehe fdfs";
  let tabela = wejscie.split(",");
  console.log(tabela);
  let output = "";
  for(let i = 0; i < tabela.length; i++){
    console.log(tabela[i] + " | " + i);
    if(i%2 == 1){
      output += "-";
      output += tabela[i];
      output += "\n";
    } else {
    output += tabela[i];
    }
  }
  console.log("output is : \n" + output);
  document.getElementById("wynikId").value = output;
}
/*
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const input = document.querySelector('#wejscieId');
  console.log(input.value);
})
*/
