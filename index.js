var cart =[];

function getCart(){
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function addToCart(item){
  var price = Math.floor(Math.random() * 101)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

function removeFromCart(item){
  for (let i=0; i < (cart.length); i++){
  if (Object.keys(cart[i]).includes(item)==true){
      cart.splice(i,1)
      //     The second parameter of splice is the
      //     number of elements to remove.
      //     Note that splice modifies the array in place and returns
      //     a new array containing the elements that have been removed.
      return cart
  }
}
      console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if (cardNumber==null){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart=[]
}
