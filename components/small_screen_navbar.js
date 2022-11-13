const navbar = ()=> {
    return `
    <div id="res_navbar">
        <div id="icons">
            <i class="fa fa-bars"></i>
            <i class="fa fa-user"></i>
            <img id="logo" src="./styles/responsive_logo.png" alt="">
            <i class="fa fa-location-dot"></i>
            <i class="fa fa-cart-shopping"></i>
        </div>
        <div id="search_bar">
            <input type="text" id="" placeholder="Search Product">
            <i class="fa fa-magnifying-glass"></i>
        </div>
    </div>
    `
}

export default navbar