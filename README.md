<h1 align="center">
  <br>
  <img src="https://i.ibb.co/khMB4rS/Rosell-Shop.png" width="500">
</h1>

<h4 align="center">An eccomerce project's frontend where users can purchase clothing products online.</h4>



<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
</p>


## Key Features

* Front Page Display
  - Can see what the most popular products are on the website
  - Retrieves from API to display products for the site
  - <img width="1096" alt="Capture" src="https://github.com/user-attachments/assets/e9b31c3a-b205-4054-9cb1-f836815e1300">

* Redux Persisted State
  - Website calls API endpoint and stores information in a Redux state
  - Stores information about the user's profile, website's products, and cart products/total
* Viewing Multiple Products
  - Products are filtered through different categories they match, colors, and sizes avaible for those products
  - <img width="1092" alt="p3" src="https://github.com/user-attachments/assets/2ff76c12-6b18-4f6e-88c4-8294df899ea2">

* Viewing Single Product
  - Can access product's different styles by changing its color, size, and quantity
  - <img width="1091" alt="p5" src="https://github.com/user-attachments/assets/096af53e-8e00-41c1-975b-070f351119b0">

* Functional Cart and Checkout
  - Users can add multiple products to cart and it will auto update
  - At checkout stripe is used to process card information and billing address
  - If checkout is successful order information is stored to API
  - <img width="1095" alt="p6" src="https://github.com/user-attachments/assets/c90f0ef2-4575-45ff-85e2-17ed7e1d505d">

* Account Creation
  - Users can create a profile by registering or logging in
  - User's can look at previous orders they made on an account and change profile information
  - <img width="1093" alt="p8" src="https://github.com/user-attachments/assets/9123f285-e444-46d8-b0ca-2540d3c6ac5a">

* Search Bar to look up different categories of products
* In Progress Newsletter
* <img width="1098" alt="p4" src="https://github.com/user-attachments/assets/6d29119c-2510-46de-b167-ccabfcd5e08a">


## How To Use

Please download the backend files first and follow the instructions listed. Afterward download the frontend files and create an enviroment file, the following variables will need to be added:<br></br>
REACT_APP_API = "http://localhost:5000/api/"<br></br>
REACT_APP_STRIPE = (pk_test stripe code of your choice)
Afterward run:
- npm build
- npm run


## Connected App's

* Project's frontend relies on the back end
  - can be found at: https://github.com/Fernando-00/rosell-shop-backend
* Project also utilizes an admin site 
  - can be used to add new products to frontend, look at sales, modify users, and look at orders
  - can be found at: https://github.com/Fernando-00/rosell-shop-admin

## Credits

I followed this series for the project and added additional features to it: 
- https://www.youtube.com/playlist?list=PLj-4DlPRT48mxPG8TAXOH4qqQ1ijuERO4

