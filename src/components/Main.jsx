import shoe_image from "../assets/shoe_image.png"
import flipkart from "../assets/flipkart.png"
import amazon from "../assets/amazon.png"

export default function Main() {
    return (
        <div className="main">
            <div className="main-page-description-text">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="description">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="button-list">
                    <button className="shop-now-button">Shop Now</button>
                    <button className="category-button">Category</button>
                </div>
                <p className="additional-text">Also Available On</p>
                <div className="links-list">
                    <img src={flipkart} alt="" />
                    <img src={amazon} alt="" />
                </div>
            </div>
            <div className="main-page-photo">
                <img src={shoe_image} alt="" />
            </div>
        </div>
    )
}