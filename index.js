console.log('hello world')

let userName = prompt('Hi Please enter your name')

function greeting(){
  if (userName){
    alert(`hello ${userName} welcome to our store`)
  } else{
    alert('please make sure to enter some text')
  }
}
greeting()