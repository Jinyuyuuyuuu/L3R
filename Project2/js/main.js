
let circles = document.querySelectorAll('.circle')


let mode = 'circle'
let selectedColor = 'purple'

for(let counter = 0; counter < circles.length; counter++){
  let circle = circles[counter]
  circle.addEventListener('click',function(){
      circle.classList.toggle('clicked')
      circle.classList.add('hasBeenClicked')
      mode = 'circle'
     document.body.setAttribute('class','circleMode')
      selectedColor = randomColor()
    })
  
}

// let clickEl = document.querySelector('.click')
//       let dialogue = document.querySelector('.dialogue')


//       clickEl.addEventListener('click',function(){
//         dialogue.classList.toggle('show')
//       })

let squares = document.querySelectorAll('.square')
for(let counter = 0; counter < circles.length; counter++){
  let square = squares[counter]
  square.addEventListener('click',function(){
      square.classList.toggle('clicked')
      square.classList.add('hasBeenClicked')
      mode = 'square'
         document.body.setAttribute('class','squareMode')

      selectedColor = randomColor()
    })


  square.addEventListener('animationend',function(){
    window.location.href="page1.html"
  })
}

let triangles = document.querySelectorAll('.triangle')
for(let counter = 0; counter < triangles.length; counter++){
  let triangle = triangles[counter]
  triangle.addEventListener('click',function(){
      triangle.classList.toggle('clicked')
      triangle.classList.add('hasBeenClicked')
      mode = 'triangle'
        document.body.setAttribute('class','triangleMode')

      selectedColor = randomColor()
    })
}

let canvas = document.querySelector('#canvas')

canvas.addEventListener('click',function(event){
  console.log(event.offsetX,
  event.offsetY)

  let newElement = document.createElement('div')
  newElement.style.top = event.offsetY -65 + 'px'
  newElement.style.left = event.offsetX -65 + 'px'
  if(mode === 'circle'){
    newElement.classList.add('canvasCircle')
    newElement.style.background = selectedColor
   
  }
  if(mode === 'triangle'){
    newElement.classList.add('canvasTriangle')
    newElement.style.borderBottom = '80px solid ' + selectedColor
  }
   if(mode === 'square'){
    newElement.classList.add('canvasSquare')
     newElement.style.background = selectedColor
  }

  canvas.appendChild(newElement)
   
  


})


 var colors = ["green", "blue", "red", "yellow", "black"];
  function randomColor(){
      let index = Math.floor(Math.random() * colors.length)
      return colors[index]
  }

let resetCanvas = document.querySelector('#resetCanvas')

  resetCanvas.addEventListener('click',function(){
      canvas.innerHTML = '<img src="https://cdn.glitch.com/10bc9094-e5fd-435e-98da-8c947413b7a7%2Fframe.png?v=1585690333989" width="800px"height="480px"/>'
    });

// let saveImg = document.querySelector('#saveImg')

// saveImg.addEventListener('click',function(){
//   canvas.classList.add('saving')
//   html2canvas(saveImg).then(function(c) {
    
//     var link = document.createElement('a');
//     link.download = 'filename.png';
//     link.href = c.toDataURL()
//     link.click();
//     canvas.classList.remove('saving')
//   })
//   console.log('asda')
  
  
  


// })

// function resetCanvas()
// {
//   var c=document.getElementById("myCanvas");
//   var cxt=c.getContext("2d");
//   cxt.clearRect(0,0,c.width,c.height);
// }



// cursor

// <input id="circlenav" value="botton"/>
// document.getElementById("myinput").onclick=function(){
// if(this.style.cursor=="")
// this.style.cursor="progress";
// else
// this.style.cursor=""
// }

// function draw(position,shape){
//  if (shape==="circle"){
//    drawCircle(position);
//  }
//  if(shape==="triangle"){
//    drawTriangle(position);
//  }
//  if(shape==="square"){
//    drawTriangle(position);
//  }
// }


// // reset
// function clearCanvas()  
// {  
//     var cxt=document.getElementById("canvas").getContext("2d");
//     cxt.clearRect(0,0,c.width,c.height);  
// } 

// save
