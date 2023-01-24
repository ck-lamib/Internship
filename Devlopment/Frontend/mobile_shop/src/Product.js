import React from 'react'

export const Product = () => {
  return (
    <section id="products">
    <div className="container">
      <div className="product-bar">
        <div className="row">
          <div className="col-md-6">
            <span>PRODUCT CATAGORY</span>
          </div>
          <div className="col-md-6">
            <button className="bttn">VIEW ALL</button>
          </div>
        </div>
      </div>
      <div className="product-slides">
        <div className="row">
          <div className="col-md-2 col-6 mb-2">
            <div className="imgtext">
              <img
                src="https://i0.wp.com/bestdealsnepal.com.np/wp-content/uploads/2020/12/VA089-1-576f-V2Bk.jpg?fit=1000%2C1000&ssl=1"
                alt="productImage1" className="img-fluid imgSize"/>
              <div className="text1">
                <p><span>701-c222 Over Size Design</span><br/><span>Rs. 900</span></p>
              </div>
            </div>
          </div>

          <div className="col-md-2 col-6 mb-2">
            <div className="imgtext">
              <img src="https://fatafatsewa.com/storage/media/1645/Best-Phones-Under-30000-in-Nepal-2021.jpg" alt="productImage2"
                className="img-fluid imgSize"/>
              <div className=" text1">
                <p><span>701-c222 Over Size Design</span><br/><span>Rs. 900</span></p>
              </div>
            </div>
          </div>

          <div className="col-md-2 col-6 mb-2">
            <div className="imgtext">
              <img
                src="https://m.media-amazon.com/images/I/41eOlsjGcOS._AC_.jpg"
                alt="productImage" className="img-fluid imgSize"/>
              <div className="text1">
                <p><span>701-c222 Over Size Design</span><br/><span>Rs. 900</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-2">
            <div className="imgtext">
              <img
                src="https://specials-images.forbesimg.com/imageserve/633b2cb21aefe70d9a93dbab/Best-Wireless-Headphones/960x0.jpg?fit=scale"
                alt="productImage" className="img-fluid imgSize"/>
              <div className="text1">
                <p><span>701-c222 Over Size Design</span><br/><span>Rs. 900</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-2">
            <div className="imgtext">
              <img
                src="https://media.wired.com/photos/618c00da12143eb34d938e26/master/w_1600,c_limit/Gear-Beats-Fit-Pro-top.jpg"
                alt="productImage" className="img-fluid imgSize"/>
              <div className="text1">
                <p><span>701-c222 Over Size Design</span><br/><span>Rs. 900</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
