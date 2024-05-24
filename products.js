document.addEventListener("DOMContentLoaded", function () {
  // Function to update product details based on the product ID
  function updateProductDetails(productId) {
    // Update product details based on the product ID
    const productImage = document.getElementById("product-image");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productDescription = document.getElementById("product-description");

    // Update the product details based on the product ID
    switch (productId) {
      case "repel":
        productImage.src = "repel.png";
        productName.textContent = "Nike Tour Repel Flex Men's Slim Golf Trousers";
        productPrice.textContent = "₱ 4095.00"; 
        productDescription.textContent = "From the range to the course to your plans post-round, the Nike Tour chino trousers provide comfort you can take anywhere. The slim fit and fabric with a smooth, stretchy feel help give you the confidence to swing your best. They're water-repellent too, so the rain doesn't cut your round short. Equipped with pockets all around for your tees, scorecard and glove, they help you stay prepared when you're next up on the box.";
        break;

      case "jordan":
        productImage.src = "jordan.png";
        productName.textContent = "Jordan Women's Girlfriend T-Shirt";
        productPrice.textContent = "₱ 1895.00";
        productDescription.textContent = "There's a reason we consider this one of our quality classics. Made from soft midweight cotton, it has a roomy fit and a slight drape for comfort you can count on.";
        break;

      case "hem":
        productImage.src = "hem.png";
        productName.textContent = "Jordan Flight Fleece<br> Women's Open-Hem Trousers";
        productPrice.textContent = "₱ 4195.00";
        productDescription.textContent = "Weekend vibes get an official uniform with these roomy wide-leg trousers. Soft, midweight French terry fabric helps make them breathable enough to wear all year long while an elastic waistband with drawcord lets you find your perfect fit.";
        break;

      case "trail":
        productImage.src = "trail.png";
        productName.textContent = "Nike Trail Aireez Men's Running Singlet";
        productPrice.textContent = "₱ 4095.00";
        productDescription.textContent = "Whether you're out for a quick forest jog or a longer mountain run, Nike Trail has the durability and adaptability to help make connecting with your surroundings easier, even in dynamic conditions. Lightweight, breathable and water-resistant, this Aireez Gilet hits the perfect combination of coverage and ventilation to keep you comfortable in changing weather. When you need to shed a layer, the gilet packs down into its chest pocket for convenient storage.";
        break;

      case "chicago":
        productImage.src = "chicago.png";
        productName.textContent = "Jordan Chicago Women's Trousers";
        productPrice.textContent = "₱ 5395.00";
        productDescription.textContent = "These trousers pair the luxe quality and timeless story of Jordan Brand with a modern, wide-leg silhouette. Cinch ties at the ankle let you switch up your fit, while the all-over cargo pockets double down on utility and style.";
        break;
    
      case "waist":
        productImage.src = "waist.png";
        productName.textContent = "Nike Sportswear Essential Women's Woven High-Waisted Trousers";
        productPrice.textContent = "₱ 3795.00";
        productDescription.textContent = "With a versatile look and relaxed feel, these trousers are the perfect foundation piece for a day-to-night 'fit. The woven fabric is smooth and structured but still light enough to wear in warmer weather.";
        break;

      case "fast":
        productImage.src = "fast.png";
        productName.textContent = "Nike Fast Women's Dri-FIT Mid-Rise 7/8 Running Trousers";
        productPrice.textContent = "₱ 3295.00";
        productDescription.textContent = "Move with ease in these lightweight, sweat-wicking trousers that provide the perfect balance of room and stretch. The tapered legs help you run freely, while pockets let you stash your essentials. Plus, mesh panels behind the knees give you airflow when your miles heat up.";
        break;

      case "unli":
        productImage.src = "unli.png";
        productName.textContent = " ";
        productPrice.textContent = "₱ 3295.00";
        productDescription.textContent = "Built for running, training and yoga, the Unlimited collection helps keep you moving throughout the year, thanks to premium materials and innovative features. These relaxed-fit trousers have plenty of stretch and wick sweat to keep you feeling cool and dry. Take your keys, cash and valuables to and from the gym with our 3 zip pockets and let your focus be on reaching the goals you set today.";
        break;

      case "fleece":
        productImage.src = "fleece.png";
        productName.textContent = "Nike Club Fleece Men's French Terry Pullover Hoodie";
        productPrice.textContent = "₱ 3295.00";
        productDescription.textContent = "Bringing the varsity athletic look, this hoodie mixes print, puff print and embroidered graphics to create a design rooted in Nike heritage. Pull it on with your favourite shorts or chinos and give a nod to our '72 origins.";
        break;

      case "ja":
        productImage.src = "ja.png";
        productName.textContent = "JA Men's Dri-FIT Pullover Basketball Hoodie";
        productPrice.textContent = "₱ 4795.00";
        productDescription.textContent = "Ja Morant is a self-made superstar. Away from the spotlight, Ja grew up tirelessly working on his game on his back-garden court in South Carolina. From anonymous to all-star, Nike celebrates his journey with this signature apparel collection. Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable. Our soft Standard Issue hoodie offers a relaxed fit complemented by Ja's signature logo.";
        break;

      case "sbfleece":
        productImage.src = "sbfleece.png";
        productName.textContent = "Nike SB Fleece Pullover Skate Hoodie";
        productPrice.textContent = "₱ 4295.00";
        productDescription.textContent = "Elevate your listening with Cigarettes After Sex's Sex on special edition vinyl. This collector's item features evocative cover art and a curated tracklist with tracks like Nothing's Gonna Hurt You Baby. Encased in premium packaging for protection and visual allure, this limited edition Sex Vinyl promises a sensual and immersive journey through the band's unique musical landscape. A must-have for fans and vinyl enthusiasts, it offers a tangible way to embrace Cigarettes After Sex's romantic and ethereal artistry in a timeless format.Clean and straightforward, this Nike SB hoodie is made from heavyweight, brushed fleece for plush comfort. The roomy fit keeps it loose and casual on and off your board. A satin-stitched SB graphic and reinforced kangaroo pocket elevate the finish.";
        break;

      case "solo":
        productImage.src = "solo.png";
        productName.textContent = "Nike Solo Swoosh Men's Fleece Crew";
        productPrice.textContent = "₱ 2700.00";
        productDescription.textContent = "Celebrate the power and simplicity of the Swoosh. This warm fleece crew is made with some extra room through the shoulders, chest and body for easy comfort and laid-back, nostalgic style. Stretchy ribbed openings help hold the crew in place when you move and seal in your body heat when the weather cools.";
        break;

      case "sw":
        productImage.src = "sw.png";
        productName.textContent = "Nike Sportswear Collection";
        productPrice.textContent = "₱ 4295.00";
        productDescription.textContent = "A full-length zip gives you a modern take on a classic bolero jacket. The cotton Ripstop fabric holds its shape and feels lightweight enough to help keep you comfortable—even as the temp climbs. Ribbing on the back hem, cuffs and collar helps round off the look.";
        break;

      case "max":
        productImage.src = "max.png";
        productName.textContent = "Nike Sportswear<br> Men's Max90 T-Shirt";
        productPrice.textContent = "₱ 2195.00";
        productDescription.textContent = "Throwback hoops style meets soft-cotton comfort in this roomy tee. Dropped shoulders and a loose fit through the body give our Max90 tee a relaxed and casual look, while soft, midweight cotton fabric has you feeling like an all-star.";
        break;

      case "osaka":
        productImage.src = "osaka.png";
        productName.textContent = "Naomi Osaka Short-Sleeve Top";
        productPrice.textContent = "₱ 1895.00";
        productDescription.textContent = "Embody Naomi Osaka's sporty-yet-luxurious style in this loose top. Its heavyweight cotton has a soft feel and a subtle drape to give you a relaxed look. And Naomi's signature lucky cat—in large embroidery on the back—honours both her Japanese culture and her tennis legacy.";
        break;

      case "max90":
        productImage.src = "max90.png";
        productName.textContent = "Nike Sportswear Men's Max90 T-Shirt";
        productPrice.textContent = "₱ 1995.00";
        productDescription.textContent = "Clean and classic, this heavyweight cotton tee features a simple Swoosh logo on the chest. The signature Max90 fit gives you some room through the body for easy movement and layering. For bonus points, pull it on with your favourite Nike sneakers.";
        break;

      case "form":
        productImage.src = "form.png";
        productName.textContent = "Nike Form Men's Dri-FIT Hooded Versatile Jacket";
        productPrice.textContent = "₱ 2200.00";
        productDescription.textContent = "Built for running, training and yoga, this stretchy, sweat-wicking jacket is designed to help you stay fresh through your entire workout. Cut with a relaxed feel, this hooded full-zip keeps your essentials close with pocket storage on the way to and from the gym.";
        break;

      case "chore":
        productImage.src = "chore.png";
        productName.textContent = "Nike SB All-Over Print Skate Chore Coat";
        productPrice.textContent = "₱ 5995.00";
        productDescription.textContent = "Lightweight and durable, this printed chore coat from Nike SB brings the goods for everyday wear. The sturdy Ripstop fabric is breathable and comfy, whether you're on your board or off. Front patch pockets give you a safe spot to drop in your keys and phone. Pair it up with a tee and the matching skate overalls for a uniform look.";
        break;

      case "black":
        productImage.src = "black.png";
        productName.textContent = "Jordan Sport Jam Men's Warm-Up Jacket";
        productPrice.textContent = "₱ 4795.00";
        productDescription.textContent = "Gear up for your warm-up. Lightweight and relaxed, this jacket updates MJ's iconic pre-game look with fresh design lines and colour-blocking.";
        break;

      case "nocta":
        productImage.src = "nocta.png";
        productName.textContent = "NOCTA Northstar Nylon Tracksuit Jacket";
        productPrice.textContent = "₱ 5595.00";
        productDescription.textContent = "This product is made with 100% recycled fibres";
        break;

      case "woven":
        productImage.src = "woven.png";
        productName.textContent = "Jordan Essentials Men's Woven Trousers";
        productPrice.textContent = "₱ 3095.00";
        productDescription.textContent = "School, work, whatever—these are trousers for everywhere you go. Centre seams and an extra cargo pocket give you a look with just enough distinction. And the woven material is lightweight and airy so you can wear 'em all day, no problem.";
        break;

      case "trouser":
        productImage.src = "trouser.png";
        productName.textContent = "Nike x Off-White Trousers";
        productPrice.textContent = "₱ 10995.00";
        productDescription.textContent = "Roomy and crisp, these water-repellent woven trousers are made to hold up to the elements, while giving you plenty of space to roam free. A stretchy elastic waist with Off-White™ branding helps hold the trousers in place. Toggle cords on the knee and hem let you change up the fit around your sneakers.";
        break;

      case "cargo":
        productImage.src = "cargo.png";
        productName.textContent = "Nike Club Men's Cargo Trousers";
        productPrice.textContent = "₱ 3895.00";
        productDescription.textContent = "When your daily adventures call for lightweight, breathable comfort, pull on a pair of these cotton Ripstop trousers from our Nike Club Collection. The cargo pockets offer plenty of storage, while the relaxed straight-leg fit gives you a casual feel through the seat and thighs for easy, everyday wear.";
        break;

      default:
        // Handle unknown product IDs
        break;
    }

    const addToCartButton = document.getElementById("add-to-cart-button");
    addToCartButton.addEventListener("click", addToCart);
  }

  // Function to handle adding a product to the cart
  function addToCart() {
    // Get the product details from the page
    const productId = getQueryParam("product");
    const productName = document.getElementById("product-name").textContent;
    const productPriceString = document.getElementById("product-price").textContent;
    const quantity = document.getElementById('quantity-input').value;
    const productImageSrc = document.getElementById("product-image").src;

    // Parse the product price as a float
    const productPrice = parseFloat(productPriceString.replace("₱", ""));

    // Create a new cart item object
    const cartItem = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: parseInt(quantity),
      imageSrc: productImageSrc,
    };

    // Check if the cart array already exists in local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment the quantity
      cart[existingProductIndex].quantity++;
    } else {
      // If the product is not in the cart, add it
      cart.push(cartItem);
    }

    // Update the local storage with the modified cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally, you can redirect the user to the cart page or show a confirmation message
    alert("Product added to cart!");
  }

  // Function to handle product clicks
  function handleProductClick(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Get the product ID from the data attribute of the clicked element
    const productId = event.target.dataset.productId;

    // Update the URL with the selected product ID
    history.pushState({}, null, `product-details.html?product=${productId}`);

    // Update the product details on the page
    updateProductDetails(productId);
  }

  // Attach click event listeners to each product item
  const productItems = document.querySelectorAll(".col-4 img");
  productItems.forEach((item) => {
    item.addEventListener("click", handleProductClick);
  });

  // Call the function to update product details based on the current URL
  const currentProductId = new URLSearchParams(window.location.search).get(
    "product"
  );
  if (currentProductId) {
    updateProductDetails(currentProductId);
  }
});

// Function to get query parameters from the URL
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}