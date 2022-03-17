let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')


cartIcon.addEventListener('click', ()=>{
  cart.classList.add('active')
})
closeCart.addEventListener('click', ()=>{
  cart.classList.remove('active')
})




if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}

function ready(){
  var removeCartButtons = Array.from(document.getElementsByClassName('.cart-remove'))
  console.log(removeCartButtons)
  for(var i=0; i<removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem)
  }
}
function removeCartItem(e){
  var buttonClicked = e.target
  buttonClicked.parentElement.remove()
}

function updateTotal(){
  var cartContent = document.getElementsByClassName('cart-content')[0]
  var cartBoxes = document.getElementsByClassName('cart-box')
  var total =  0 
  for(var i=0; i<cartBoxes.length; i++){
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName('cart-price')[0]
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
    var price = parseFloat(priceElement.innerText.replace("$", ""))
    var quantity = quantityElement.value
    total = total + (price * quantity)

    document.getElementsByClassName('total-price')[0].innerText = `$${total}`
  }
}