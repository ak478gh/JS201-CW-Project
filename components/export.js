const navbar = ()=> {
    return `
    <div id="container"></div>
    <div id="login">
        <div id="user_icon" class="bgc_green">
            <i class="fa fa-user"></i>login▼
        </div>
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
            <li>Customer Service</li>
            <li>Logout</li>
            <!-- <li>Logout</li> -->
        </ul>
    </div>
    <nav id="navbar">
        <div>
            <img id="logo" src="./components/Logo.png" alt="">
        </div>
        <div id="middle">
            <input type="text" id="" placeholder="Search Product">
            <i class="fa fa-magnifying-glass"></i>
        </div>
        <div id="right">
            <i class="fa fa-basket-shopping"></i>
        </div>
    </nav>
    `
}

export default navbar;

// link for the icons
// <script src="https://kit.fontawesome.com/4066364e3e.js" crossorigin="anonymous"></script>