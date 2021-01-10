/*
Pixel Art maker versao 1.0
Feito em VanillaJs por rodrigomoraes
*/

let c = document.getElementById('pColor');
let cRes = document.getElementById('cRes');
const pxArray = [];

c.addEventListener("input", function(){
  cRes.style.backgroundColor = c.value;
}, false);

//Essa é a função pega os dados do form e desenha o canvas
function draw(){
  let frm = document.querySelector("form.sizePicker");
  let wdt = document.querySelector("input.wd");
  let hgt = document.getElementById("hg");

  frm.addEventListener("submit", function(e){
    
    console.log(wd.value)

    let cWidth = wdt.value;
    let cHeight = hgt.value;
    
    calcPixel(cWidth, cHeight);
    renderPixel(cWidth, cHeight);
    colorPixel();
    e.preventDefault();
  })
}

//Essa função calcula os pixels e injeta o array
function calcPixel(cWidth, cHeight){
  const numPx = cWidth * cHeight;
  
  for(let i = 0; i < numPx; i++){
    //pxArray[i] = 0;
  }
}

//Essa funcao serve para renderizar os pixels
function renderPixel(cWidth, cHeight){
  let htm = '<table id="table" cellpadding=0 cellspacing=0>'
  //Aqui usa a delimitação de largura do canvas para preencher com os pixels 
    for(let row=0; row < cHeight; row++){
      
      htm += '<tr>'
        for(let col=0; col < cWidth; col++){
          const pxIndex = col + (cWidth * row);
          htm += '<td class="pixel">'
          //htm += pxIndex  
          htm += '</td>'
        } 
        htm += '</tr>'
      }
      htm += '</table>'
      document.querySelector('#pxCanvas').innerHTML = htm
    }
//Essa função faz adiciona cor aos pixels quando clicado
function colorPixel(){
  let x = document.querySelectorAll("td.pixel");
  //document.querySelector("td.pixel").style.backgroundColor = "purple";
  Array.from(x).forEach(function(e){ 
    e.addEventListener("mousedown", function(){
      this.style.backgroundColor = c.value;
    });
  })
  pxArray.forEach((item, index, array) => {
    console.log(pxArray[index]);
  });
}
draw();



