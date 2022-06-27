let products = document.getElementById("productsContainer");

let selectCategory=document.getElementById("selectCategory");




let output = '';

//creating product item
function createItem(item) {

    const {
        id,
        title,
        price,
        description,
        category,
        image
    } = item;

    let product = `<div class="product" id="${id}">
                    <div>

                        <div class="img-container">
                            <img src="${image}" class="product-img">
                        </div>
                        <h3 class="title">${title}</h3>
                        <p class="desc">${description}</p>
                      
                    </div>
                    <div>
                        <p class="price"> Rs. ${price} /-</p>
                        <button class="btn cart-btn">Add to cart</button>
                        <button class="btn buy-btn">Buy Now</button>
                    </div>
                </div>`


   
    output += product



}



//display data in html
function displayData(result) {

    for (let item of result) {
        createItem(item)
    }
    products.innerHTML = output
}


//get filtered data on user action
function getFilterData(selectedVal){
    let filteredData=result.filter(each=>each.category===selectedVal);
    console.log(filteredData)
    output=''
    displayData(filteredData)
  
}

//get selected value
function getValue(){
    let selectedVal=selectCategory.value;
    output=''
    if(selectedVal=="all"){
       displayData(result)
    }
    else{
        getFilterData(selectedVal)
    }
   
    
}

selectCategory.addEventListener("change",getValue)



axios
    .get('https://fakestoreapi.com/products')
    .then(res => {


        result = res.data
        displayData(result)
    })