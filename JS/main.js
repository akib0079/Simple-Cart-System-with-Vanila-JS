
function updatingProductNum(productId, productPrice , typeOfPrice , isIncreasing){
    const quantityInput = document.getElementById(productId);
    let productNum =  quantityInput.value;

    if(isIncreasing ==  true){
        productNum =  parseInt(productNum) + 1;
    }
    else if(productNum > 0){
        productNum =  parseInt(productNum) - 1;
    }
    
    quantityInput.value = productNum;

    const price = document.getElementById(typeOfPrice);

    const productUpdatedPrice = productNum * productPrice;

    price.innerText = productUpdatedPrice;

    calculateTotal();
    
}



// handling WATCH product increasing decreasing STARTTTT.

document.getElementById('watchPlus').addEventListener('click', function(){
    updatingProductNum('watchInput', 600 , 'watchPrice', true)
})

document.getElementById('watchMinus').addEventListener('click', function(){
    updatingProductNum('watchInput', 600 , 'watchPrice' , false)
})

// handling WATCH product increasing decreasing ENDDDD.

// handling AirPods product increasing decreasing STARTTTT.

document.getElementById('podsPlus').addEventListener('click', function(){
    updatingProductNum('podsInput', 399 , 'podsPrice', true)
})

document.getElementById('podsMinus').addEventListener('click', function(){
    updatingProductNum('podsInput', 399 , 'podsPrice' , false)
})

// handling AirPods product increasing decreasing ENDDDD.

// handling CASE product increasing decreasing STARTTTT.

document.getElementById('casePlus').addEventListener('click',function(){

    updatingProductNum('caseInput', 99, 'casePrice', true);
})


document.getElementById('caseMinus').addEventListener('click',function(){
    
    updatingProductNum('caseInput', 99,'casePrice', false);
})
// handling case product increasing decreasing ENDDDD.


// calculating product price on the change of the input.

function calculateInputChange(priceID, Price){
    let inputValue = event.target.value;
    const productUpdatedPrice = Price * inputValue;

    document.getElementById(priceID).innerText = productUpdatedPrice;

    calculateTotal();
}


document.getElementById('caseInput').addEventListener('change', function(event){
    calculateInputChange('casePrice', 99);
})

document.getElementById('watchInput').addEventListener('change', function(event){
    calculateInputChange('watchPrice', 600);
})
document.getElementById('podsInput').addEventListener('change', function(event){
    calculateInputChange('podsPrice', 399);
})


// calculating one product price.
function CalcproductPrice(inputId,price){
    const inputNum = document.getElementById(inputId).value;
    const itemPrice = price;

    const productPrice = inputNum * price;
    return productPrice;

}


// Calculate total function.
function calculateTotal(){
    const casePrice = CalcproductPrice('caseInput', 99);
    const watchPrice = CalcproductPrice('watchInput', 600);
    const podsPrice = CalcproductPrice('podsInput', 399);

    const itemsPrice = casePrice + watchPrice + podsPrice;
    document.getElementById('itemsPrice').innerText = itemsPrice;

    const tax = itemsPrice * 4 / 100;
    document.getElementById('taxCost').innerText = tax;

    let totalPrice =  itemsPrice + tax;
    document.getElementById('totalCost').innerText = totalPrice;


    document.getElementById('btnPromo').addEventListener('click', function(){
        calculateTotal();
    
        const promoInput = document.getElementById('promoInput').value;
    
        if(promoInput == 'Gadgets'){
            NewPrice = totalPrice / 100 * 40;
            document.getElementById('totalCost').innerText = NewPrice.toFixed(2);
        }
        else{
            alert('Please Enter the right Promo Code!')
        }
    })

}


// Promo code.
document.getElementById('btnPromo').addEventListener('click', function(){
    calculateTotal();

    const promoInput = document.getElementById('promoInput').value;

    if(promoInput == 'Gadgets'){
        NewPrice = totalPrice / 100 * 40;
        document.getElementById('totalCost').innerText = NewPrice.toFixed(2);
    }
    else{
        alert('Please Enter the right Promo Code!')
    }
})




