import React from "react";
import "./Home1.css";
export default function Home1() {
  return (
    <>
      {/* <div className=" d-flex flex-wrap">
				<div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<div className="block1 wrap-pic-w">
						<img src="images/banner-01.jpg" alt="IMG-BANNER"/>

						<a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Women
								</span>

								<span className="block1-info stext-102 trans-04">
									Spring 2018
								</span>
							</div>

							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>
	</div> */}
      <div
        className="item-slick1 bg-overlay1"
        style={{ backgroundImage: "url(images/slide-05.jpg)" }}
        data-thumb="images/thumb-01.jpg"
        data-caption="Women’s Wear"
      >
        <div className="container h-full">
          <div className="flex-col-c-m h-full p-t-100 p-b-60 respon5">
            {/* <div
                    className="layer-slick1 animated visible-false"
                    data-appear="fadeInDown"
                    data-delay="0"
                  >
                    <span className="ltext-202 txt-center cl0 respon2">
                      Women Collection 2018
                    </span>
                  </div>

                  <div
                    className="layer-slick1 animated visible-false"
                    data-appear="fadeInUp"
                    data-delay="800"
                  >
                    <h2 className="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                      New arrivals
                    </h2>
                  </div> */}

            <div
              className="layer-slick1 animated visible-false"
              data-appear="zoomIn"
              data-delay="1600"
            >
              <a
                href="product.html"
                className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
