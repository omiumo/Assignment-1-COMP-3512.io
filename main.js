
//alert functions

function showProductId(id) {
    alert("Product ID: " + id);
  }

  function showProductDetails(id, title) {
    alert("Product ID: " + id + "\nTitle: " + title);
  }
  
  //adding html + loop 
  function displayProducts(products) {
    let container = document.getElementById("product-list");
    let allhtml = "";
    for (let i = 0; i < 20; i++) {
        let product = products[i];
        allhtml += '<div class="card">';
        allhtml += '  <img class="product-thumb" data-id="' + product.id + '" src="' + product.thumbnail + '" alt="' + product.title + '">';
        allhtml += '  <div class="card-bottom">';
        allhtml += '    <div class="card-info">';
        allhtml += '      <div class="title">' + product.title + '</div>';
        allhtml += '      <div class="price">$' + product.price + '</div>';
        allhtml += '    </div>';
        allhtml += '    <button class="add-btn" data-id="' + product.id + '" data-title="' + product.title + '" type="button">+</button>';
        allhtml += '  </div>';
        allhtml += '</div>';
      }

      container.innerHTML = allhtml;
     
      // handling events 

      let images = container.querySelectorAll(".product-thumb");
      for (let img of images) {
        img.onclick = function() {
          showProductId(this.dataset.id);
        };
      }

      let buttons = container.querySelectorAll(".add-btn");
      for (let btn of buttons) {
        btn.onclick = function() {
          showProductDetails(this.dataset.id, this.dataset.title);
        };
      }
    }
    
    // getting the datq
    
        fetch("https://dummyjson.com/products?limit=20")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayProducts(data.products);
    })
    .catch(function(err) {
        console.error("Error loading products:", err);
    });
  



