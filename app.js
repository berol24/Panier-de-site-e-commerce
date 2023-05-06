const $products = document.querySelectorAll('.product') 
const $cartItems = document.querySelector(".cart .items")
const $cartTotalPrice = document.querySelector('.cart footer span')

for (let i = 0; i < $products.length; i++) {
const $btn = $products[i].querySelector('.button')
const price= parseFloat($products[i].dataset.price )  ;
const title = $products[i].dataset.title; 
const $productImg= $products[i].querySelector('img');
const src = $productImg.getAttribute('src');
// console.log("tour :", i ) 
// console.log( $btn ) 
// console.log( price,title) 

$btn.addEventListener('click' , function(){
    console.log("je suis le button à l'index ", i)
    $existingArticle = $cartItems.querySelector('[data-index ="' + i + '"]');
   
    if ($existingArticle != null ) {
       let $qty = $existingArticle.querySelector('.qty span'); 
       let $unitPrice = $existingArticle.querySelector('.unit_price span');
       let $totalPrice = $existingArticle.querySelector('.total_price');
       let quantity = $qty.innerText;
       quantity = Number(quantity);
       quantity += 1;

       let unit_price = $unitPrice.innerText;
       unit_price = parseFloat(unit_price);
       let total_price = unit_price * quantity

      $qty.innerText = quantity ; 
      $totalPrice.innerText = total_price +'€'

      //calcul du panier 

      let cartTotalPrice = $cartTotalPrice.innerText
          cartTotalPrice = parseFloat(cartTotalPrice);
          cartTotalPrice += unit_price;
          $cartTotalPrice.innerText = cartTotalPrice + "€";
    }else{

    const $article = document.createElement('article');
    $article.dataset.index = i
    $article.innerHTML =`  
     <div class="media-left">
         <figure class="image is-64x64">
            <img src="" alt="image">
            </figure>
        </div>
        <div class="media-content">
            <h3 class="title is-6 mb-2">
            
            </h3>
            <p class="unit_price">prix à l'unité <span></span></p>
            <hr>
            <p class=" qty has-text-weight-bold">
            Quantité : <span>1</span>
            </p>
        </div>
        <div class="media-right">
            <p class=" total_price is-size-4 has-text-weight-bold has-text-dark">
          
            </p>
            <p class="mt-3">
            <button type="button" class="button is-small is-danger">
                Supprimer
            </button>
            </p>
        </div>`;

        $article.classList.add("box" , "media");
        const $img =$article.querySelector('img') ;
        const $title = $article.querySelector('.title');
        const $unitPrice = $article.querySelector('.unit_price  span');
        const $qty = $article.querySelector('.qty span');
        const $totalPrice = $article.querySelector('.total_price');
        const $btnDelete = $article.querySelector('.button') ;


        $btnDelete.addEventListener('click' ,function(){
            let quantity = $qty.innerText;
            quantity = parseFloat(quantity) 
          
            let unit_price= $unitPrice.innerText;
            unit_price = parseFloat(unit_price);

            //calcul du panier 
            const total_price= unit_price * quantity;
            let cartTotalPrice = $cartTotalPrice.innerText
          cartTotalPrice = parseFloat(cartTotalPrice);
           cartTotalPrice -= total_price;
           $cartTotalPrice.innerText = cartTotalPrice + "€";
           // supprimmer l'element du panier

           $cartItems.removeChild($article)
        })


        $img.setAttribute('src', src);
        $title.innerText = title
        $unitPrice.innerText = price + "€";
        $qty.innertext = 1;
        $totalPrice.innerText= price + "€";

        let cartTotalPrice = $cartTotalPrice.innerText
        cartTotalPrice = parseFloat(cartTotalPrice);
        cartTotalPrice += price;
        $cartTotalPrice.innerText = cartTotalPrice + "€";

       $cartItems.appendChild($article)
 }

})
}