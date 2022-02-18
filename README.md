# Electrozone-MERN

<h4>Ecommerce website - using MERN stack with Redux and Bootstrap </h4>
<h5>The website sells electronics like cameras, audio accessories like speakers and earphones, mobile phones and laptops</h5>

### Modules ###
* [Register](#register-page)
* [Home Page and Login](#home-page)
* [Dashboard](#dashboard-page)
* [Cart](#cart-page)
* [Checkout](#checkout-page)
* [Orders](#orders-page)
* [Profile](#profile-page)
<hr>

<h2 id="register-page">Register Page</h2>

Client side and server side validation used in register and login components.


![image](https://user-images.githubusercontent.com/29352643/154755114-e8963f72-44bb-47ab-90ae-17e4353afff7.png)

<hr>

<h2 id="home-page">Home Page</h2>

![image](https://user-images.githubusercontent.com/29352643/154755511-38e453ae-4a00-43fe-ad71-7eac2a7d5ce4.png)

<h5>On incorrect details</h5>

![image](https://user-images.githubusercontent.com/29352643/154755188-c4f74c64-e0d0-40bc-8554-a0e83a3256cf.png)

<hr>

<h2 id="dashboard-page">Dashboard Page</h2>

* Once logged in, user can logout on clicking 'Logout' button
* Products are displayed according to their category
* New products can be added to the productlist




![image](https://user-images.githubusercontent.com/29352643/154755827-acf0e5d3-58d5-4246-93ee-2fdb9df6dec2.png)

<h4>User state after logging in</h4>

![image](https://user-images.githubusercontent.com/29352643/154762255-2d86de51-8371-4929-8f7b-ea5c625b6f8d.png)

<h4>Adding item to productlist</h4>

![image](https://user-images.githubusercontent.com/29352643/154756649-61c3361c-42f2-4df1-b349-c025209f6a16.png)

<h4>Mobile list after addition of new mobile</h4>

![image](https://user-images.githubusercontent.com/29352643/154756742-d6e94529-0d2d-4097-aa81-1d49e715e49c.png)

<h4>Item state on viewing mobiles</h4>

![image](https://user-images.githubusercontent.com/29352643/154763095-69580a40-a9d0-4cf2-a960-12f020ddf35e.png)

<hr>

<h4>Viewing all categories</h4>

<h5>Laptop Category</h5>

![image](https://user-images.githubusercontent.com/29352643/154757068-cc76bf57-3d82-48d2-848e-9a57e70c5e27.png)

<h5>Camera Category</h5>

![image](https://user-images.githubusercontent.com/29352643/154757416-4f7fb68f-0baa-4128-96c4-99834bb58958.png)

<h5>Audio Category</h5>

![image](https://user-images.githubusercontent.com/29352643/154757504-df402949-028b-4f47-a6d8-54d82ec9ee95.png)

<hr>

<h4>View about an item</h4>

![image](https://user-images.githubusercontent.com/29352643/154757703-45af895e-4584-4a68-a201-cfc02e717828.png)

<hr>

<h4>Add to cart</h4>

<h5>Adding 2 macbooks and 1 Bose speaker to cart</h5>
<h5>Confirmation message:</h5>

![image](https://user-images.githubusercontent.com/29352643/154757926-0d847325-aecb-43ab-815a-c5204ad0d57b.png)

<hr>

<h2 id="cart-page">Cart</h2>

![image](https://user-images.githubusercontent.com/29352643/154758374-ac44e713-9477-4755-aba2-a0160ef908cf.png)

<hr>
<h4>Cart state</h4>

![image](https://user-images.githubusercontent.com/29352643/154762630-8dcf6a27-0990-4999-bd02-2fea944916d5.png)

<h4>Decreasing quantity</h4>

<h5>Decreasing quantity of macbook by 1</h5>

![image](https://user-images.githubusercontent.com/29352643/154758940-7a32e0e9-604f-409f-898f-1f4454c8b42d.png)

<h5>Similarly, item quantity can be increased</h5>

<h5>If quantity reaches 0, the item is deleted from the cart</h5>

<hr>
<h2 id="checkout-page">Checkout</h2>
<h5>On clicking checkout button, Stripe PaymentIntents API is used to generate payment gateway</h5>

![image](https://user-images.githubusercontent.com/29352643/154760098-c31cc0e1-10a3-4dbd-bbc0-fa36bdb904ad.png)

![image](https://user-images.githubusercontent.com/29352643/154760323-b343408e-a376-4a6e-aae5-7ef3c6e43923.png)

<hr>

<h2 id="orders-page">Orders</h2>

After completing payment, cart is emptied and it is added as an order of the user

![image](https://user-images.githubusercontent.com/29352643/154760417-746cec68-9ecc-4d19-b6d2-65a03f10d14e.png)

<h4>Orders state</h4>

![image](https://user-images.githubusercontent.com/29352643/154762942-2db3e032-f5ea-478d-9733-a1e5a03de238.png)

<hr>

<h2 id="profile-page">Profile</h2>

![image](https://user-images.githubusercontent.com/29352643/154760703-44ecaf0c-45c9-4eb8-83b0-a0ca2eea3eb5.png)

<hr>

### Conclusion ### 

<b>The basic needs of an Ecommerce electronics website are thus implemented using MERN stack and Redux</b>
