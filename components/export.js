const navbar = ()=> {
    return `
    <div id="login">

        <div id="user_icon" class="bgc_green">
            <i class="fa fa-user"></i><span id="userName">login▼</span>
        </div>
        <a id="admin" href="admin.html"><i class="fa fa-user"></i><span >admin login▼</span></a>
        <div>
            <i class="fa fa-phone"></i>1860 123 1000
            <i class="fa fa-location-dot"></i>560004, Bangalore ▼
        </div>
    </div>


    <div id="myAccount">
        <ul>
            <li>My Account</li>
            <li>My Order</li>
            <li>My Basket</li>
            <li>Wallet</li>
            <li>My Reward</li>
            <li>Ask Us</li>
            <li id="logOutBtn">Log Out</li>
            <li id="logInBtn">Log In</li>
            <!-- <li>Logout</li> -->
        </ul>
    </div>
    <nav id="navbar">
        <div id="logo_div">
        <a href="index.html"><img id="logo" src="./styles/Logo.png" alt=""></a>
        </div>
        <div id="middle">
            <input type="text" id="" placeholder="Search Product">
            <i class="fa fa-magnifying-glass"></i>
        </div>
        <a  id="right" href="checkout.html" target="_blank">
            <div>
                <i class="fa fa-basket-shopping"><span id="cartLength"></span></i>
            </div>
        </a>
    </nav>

    <!-- shopByCategory -->
    <div id="shopByCategory">
        <button id="shopByCategory_btn">SHOP BY CATEGORY ▼</button><button><i class="fa fa-tag"></i>OFFERS</button><button><i class="fa fa-solid fa-motorcycle"></i>BB EXPRESS</button>
    </div>
    <div id="shopByCategory_drpDwn">
        <div class="UL">
            <a href="Fruits&Vegetable.html" target="_blank">Fruits & Vegetables</a>
            <a id="second" href="">Foodgrains, Oils & Masala</a>
            <a id="third" href="Bakery&Cakes.html" target="_blank">Bakery, Cakes & Dairy</a>
            <a href="">Bevarages</a>
            <a href="">Snacks & Branded Foods</a>
            <a href="">Foodgrains, Oils & Masala</a>
            <a href="">Bakery, Cakes & Dairy</a>
            <a href="">Bevarages</a>
            <a href="">Snacks & Branded Foods</a>
            <a href="">Foodgrains, Oils & Masala</a>
            <a href="">Bakery, Cakes & Dairy</a>
            <a href="">Bevarages</a>
        </div>
        <div  class="UL">
            <a href="">Freash Vegetables</a>
            <a href="">Herbs & Seasonings</a>
            <a href="">Freash Fruits</a>
            <a href="">Oraganic Fruits & Vegetables</a>
            <a href="">Nuts & Sprouts</a>
            <a href="">Exotic Fruits & Veggies</a>
            <a href="">Flowers Bouqueuts, Bunches</a>
            
        </div>
        <div class="UL">
            <a href="">Potato, Onion & Tomato</a>
            <a href="">Cucumber & Capsiicum</a>
            <a href="">Leafy Vegitables</a>
            <a href="">Root Vegetables</a>
            <a href="">Beans, Brinjal & Okra</a>
            <a href="">Cabbage & Cauliflower</a>
            <a href="">Guard, Pumpkin &Drumstick</a>
        </div>
        <div class="UL">
            <a href="">Popular Searches</a>
            <a href="">Ash Guard</a>
            <a href="">Vegetables</a>
            <a href="">Veg</a>
        </div>
            <div id="inner_link1" class="style">
                <div  class="UL col2" id="col2">
                    <a href="">Atta, Flours & Sooji</a>
                    <a href="">Rice & Rice Products</a>
                    <a href="">Organic Staples</a>
                    <a href="">Edible Oils & Ghee</a>
                    <a href="">Salt, Sugar & Jaggery</a>
                    <a href="">Masalas & Spices</a>
                    <a href="">Dry Fruits</a>
                    
                </div>
                <div class="UL">
                    <a href="">Atta Whole Wheat</a>
                    <a href="">Sooji, Maida & Besan</a>
                    <a href="">Rice & Other Flours</a>
                </div>
            </div>
            <div id="inner_link2" class="style">
                <div  class="UL col2" id="col3">
                    <a href="">Dairy</a>
                    <a href="">Breads  Buns</a>
                    <a href="">Non Dairy</a>
                    <a href="">Gourmet Breads</a>
                    <a href="">Cookies, Rust & Khari</a>
                    <a href="">Ice Cream & Desserts</a>
                    <a href="">Bakery Snacks</a>
                    <a href="">Cookies & Pastries</a>
                </div>
                <div class="UL">
                    <a href="">Milk</a>
                    <a href="">Curd</a>
                    <a href="">Paneer, Tofu & Cream</a>
                    <a href="">Butter & Margarine</a>
                    <a href="">Condensed, Powder Milk</a>
                    <a href="">Cheese</a>
                    <a href="">Buttermilk & Lassi/a>
                    <a href="">Yogurt & Shrikhand</a>
                    <a href="">Flovoured, Soya Milk</a>
                </div>
            </div>
    </div>

    <div id="loginPopup">
    </div>
    `
}

export default navbar;

// link for the icons
// <script src="https://kit.fontawesome.com/4066364e3e.js" crossorigin="anonymous"></script>