let itemsContainerElement = document.querySelector('.items-container');
let innerHtml='';
items.forEach (item => {
    innerHtml +=`
    <div class ="item-container">
    <img class ="item-image" src="${item.image}"alt="item-image">
    <div class ="rating">${item.rating.stars}⭐|${item.rating.count}
    </div>
    <div class="company-name">${item.company_name}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">${item.price.current_price}</span>
        <span class="orignal-price">${item.price.orignal_price}</span>
        <span class="discount">${item.price.discount_price}</span>
    </div>
    <button class="btn-add-bag">Add to bag</button>
    </div>`;
    
});


itemsContainerElement.innerHTML = innerHtml;
