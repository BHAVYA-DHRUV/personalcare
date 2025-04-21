import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Start Header Section */}

      <div className="cs_cart_card_wrap">
        <div className="cs_cart_card">
          <div className="cs_cart_card_head cs_gray_bg">
            <h3 className="mb-0 cs_fs_18 cs_semibold">Your Cart (3)</h3>
            <button className="cs_cart_close">Close</button>
          </div>
          <div className="cs_cart_card_body">
            <div className="cs_cart_card_body_in">
              <ul className="cs_cart_card_list cs_mp_0">
                <li>
                  <div className="cs_cart_card_item">
                    <div className="cs_cart_card_item_left">
                      <img src="assets/images/product_1.png" alt="Product" />
                    </div>
                    <div className="cs_cart_card_item_right">
                      <h3 className="cs_fs_18 cs_medium">
                        Rosewater Hydrating Mist
                      </h3>
                      <div className="cs_quantity cs_style_1">
                        <button className="cs_quantity_button cs_decrement">
                          <i className="fa-solid fa-minus" />
                        </button>
                        <span className="cs_quantity_input cs_primary_color cs_medium">
                          1
                        </span>
                        <button className="cs_quantity_button cs_increment">
                          <i className="fa-solid fa-plus" />
                        </button>
                      </div>
                      <p className="mb-0">
                        1 x{" "}
                        <span className="cs_primary_color cs_medium">
                          {" "}
                          $19.99
                        </span>
                      </p>
                      <button
                        className="cs_cart_card_item_remove"
                        type="button"
                      >
                        <i className="fa-regular fa-circle-xmark" />
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_cart_card_item">
                    <div className="cs_cart_card_item_left">
                      <img src="assets/images/product_2.png" alt="Product" />
                    </div>
                    <div className="cs_cart_card_item_right">
                      <h3 className="cs_fs_18 cs_medium">
                        Charcoal Detoxifying Mask
                      </h3>
                      <div className="cs_quantity cs_style_1">
                        <button className="cs_quantity_button cs_decrement">
                          <i className="fa-solid fa-minus" />
                        </button>
                        <span className="cs_quantity_input cs_primary_color cs_medium">
                          1
                        </span>
                        <button className="cs_quantity_button cs_increment">
                          <i className="fa-solid fa-plus" />
                        </button>
                      </div>
                      <p className="mb-0">
                        1 x{" "}
                        <span className="cs_primary_color cs_medium">
                          {" "}
                          $14.99
                        </span>
                      </p>
                      <button
                        className="cs_cart_card_item_remove"
                        type="button"
                      >
                        <i className="fa-regular fa-circle-xmark" />
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_cart_card_item">
                    <div className="cs_cart_card_item_left">
                      <img src="assets/images/product_3.png" alt="Product" />
                    </div>
                    <div className="cs_cart_card_item_right">
                      <h3 className="cs_fs_18 cs_medium">
                        Rosewater Hydrating Mist
                      </h3>
                      <div className="cs_quantity cs_style_1">
                        <button className="cs_quantity_button cs_decrement">
                          <i className="fa-solid fa-minus" />
                        </button>
                        <span className="cs_quantity_input cs_primary_color cs_medium">
                          0
                        </span>
                        <button className="cs_quantity_button cs_increment">
                          <i className="fa-solid fa-plus" />
                        </button>
                      </div>
                      <p className="mb-0">
                        1 x{" "}
                        <span className="cs_primary_color cs_medium">
                          {" "}
                          $19.99
                        </span>
                      </p>
                      <button
                        className="cs_cart_card_item_remove"
                        type="button"
                      >
                        <i className="fa-regular fa-circle-xmark" />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="cs_cart_card_footer">
            <div className="cs_cart_card_subtotal">
              <span>Subtotal:</span>
              <span className="cs_primary_color cs_semibold">$54.97</span>
            </div>
            <Link
              to="cart.html"
              className="cs_btn cs_style_2 cs_medium cs_type_1 w-100"
            >
              <span>View Cart</span>
            </Link>
            <div className="cs_height_10 cs_height_lg_10" />
            <Link
              to="checkout.html"
              className="cs_btn cs_style_1 cs_medium cs_type_1 w-100"
            >
              <span>Checkout</span>
            </Link>
          </div>
        </div>
        <div className="cs_cart_overlay" />
      </div>
      {/* End Header Section */}
      {/* Start Hero Section */}
      <section>
        <div
          className="cs_hero cs_style_3 cs_bg_filed cs_center"
          style={{ backgroundImage: "url(assets/images/hero_bg_3.jpg)" }}
        >
          <div className="container">
            <div className="cs_hero_text">
              <h1 className="cs_hero_title cs_fs_100">
                Welcome to Beauty Haven
              </h1>
              <p className="cs_hero_subtitle cs_fs_24">
                Discover Your Perfect Beauty Essentials and Unleash Your Inner
                Radiance!
              </p>
              <Link
                to="/products"
                className="cs_btn cs_style_1 cs_fs_18 cs_medium"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="cs_card cs_style_1 cs_white_bg">
            <div className="cs_card_img">
              <img src="assets/images/card_img_1.png" alt="Thumb" />
            </div>
            <div className="cs_card_right">
              <h2 className="cs_card_title cs_fs_54 cs_semibold">
                Hurry! Limited Time Offer
              </h2>
              <p className="cs_card_subtitle cs_fs_24">Sale Ends in</p>
              <div
                className="cs_countdown cs_style_1 cs_fs_36 cs_white_color cs_accent_bg cs_bold cs_radius_10 cs_center"
                data-countdate="2024-04-02T03:45:26"
              >
                <div
                  className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                  title="Day"
                >
                  <p className="cs_count_days mb-0 cs_countdown_number" />
                  <p className="cs_count_title cs_fs_16">Days</p>
                </div>
                <div
                  className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                  title="Hour"
                >
                  <p className="cs_count_hours mb-0 cs_countdown_number" />
                  <p className="cs_count_title cs_fs_16">Hours</p>
                </div>
                <div
                  className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                  title="Minute"
                >
                  <p className="cs_count_minutes mb-0 cs_countdown_number" />
                  <p className="cs_count_title cs_fs_16">Minutes</p>
                </div>
                <div
                  className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                  title="Second"
                >
                  <p className="cs_count_seconds mb-0 cs_countdown_number" />
                  <p className="cs_count_title cs_fs_16">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Flash Sale Section */}
      <section>
        <div className="cs_height_140 cs_height_lg_75" />
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_in">
              <h3 className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center">
                FEATURED PRODUCTS
              </h3>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_50" />
          <div className="cs_grid_style_2">
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_7 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_39.png" alt="Product" />
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">MAKEUP</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Color Pop Lipstick
                    </h2>
                    <div className="cs_product_ratings">
                      <div className="cs_rating" data-rating="4.5">
                        <div className="cs_rating_percentage" />
                      </div>
                    </div>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $49.99
                    </p>
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_7 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_40.png" alt="Product" />
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">MAKEUP</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Perfecting Matte Foundation
                    </h2>
                    <div className="cs_product_ratings">
                      <div className="cs_rating" data-rating="4.5">
                        <div className="cs_rating_percentage" />
                      </div>
                    </div>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $29.99
                    </p>
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_7 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_41.png" alt="Product" />
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">HAIRCARE</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Nourishing Hair Oil
                    </h2>
                    <div className="cs_product_ratings">
                      <div className="cs_rating" data-rating={5}>
                        <div className="cs_rating_percentage" />
                      </div>
                    </div>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $19.99
                    </p>
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_7 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_42.png" alt="Product" />
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">FRAGRANCE</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Enchanted Blossom Perfume
                    </h2>
                    <div className="cs_product_ratings">
                      <div className="cs_rating" data-rating="4.8">
                        <div className="cs_rating_percentage" />
                      </div>
                    </div>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $39.99
                    </p>
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_7 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_43.png" alt="Product" />
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">MAKEUP</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Essential Makeup Brush Set
                    </h2>
                    <div className="cs_product_ratings">
                      <div className="cs_rating" data-rating="4.5">
                        <div className="cs_rating_percentage" />
                      </div>
                    </div>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $14.99
                    </p>
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_7 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_44.png" alt="Product" />
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">BATH &amp; BODY</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Refreshing Body Wash
                    </h2>
                    <div className="cs_product_ratings">
                      <div className="cs_rating" data-rating={5}>
                        <div className="cs_rating_percentage" />
                      </div>
                    </div>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $24.99
                    </p>
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_7 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_45.png" alt="Product" />
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">HAIRCARE</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Invigorating Shaving Kit
                    </h2>
                    <div className="cs_product_ratings">
                      <div className="cs_rating" data-rating="4.5">
                        <div className="cs_rating_percentage" />
                      </div>
                    </div>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $34.99
                    </p>
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_7 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_46.png" alt="Product" />
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">WELLNESS</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Relaxing Aromatherapy Oil
                    </h2>
                    <div className="cs_product_ratings">
                      <div className="cs_rating" data-rating="4.5">
                        <div className="cs_rating_percentage" />
                      </div>
                    </div>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $12.99
                    </p>
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_140 cs_height_lg_70" />
      </section>
      {/* End Flash Sale Section */}
      {/* Start Explore Section */}
      <section className="cs_accent_light_bg cs_shape">
        <div className="cs_height_150 cs_height_lg_80" />
        <div className="container">
          <div className="row align-items-center cs_gap_y_30">
            <div className="col-lg-4">
              <div className="cs_section_heading cs_style_1 position-relative">
                <div className="cs_section_heading_in">
                  <h3 className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center">
                    Explore <br />
                    What's New
                  </h3>
                </div>
                <div className="cs_heading_animation_1 cs_accent_strong_color">
                  <div className="cs_heading_animation_1_in">
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.669529 16.5742L5.69086 15.1361C7.95209 14.4973 10.0119 13.2875 11.6732 11.6226C13.3344 9.95778 14.5416 7.89352 15.1791 5.62738L16.614 0.595182C16.6862 0.419123 16.8089 0.268537 16.9667 0.16256C17.1244 0.0565833 17.3101 0 17.5 0C17.6899 0 17.8756 0.0565833 18.0333 0.16256C18.1911 0.268537 18.3138 0.419123 18.386 0.595182L19.8209 5.62738C20.4584 7.89352 21.6656 9.95778 23.3268 11.6226C24.9881 13.2875 27.0479 14.4973 29.3091 15.1361L34.3305 16.5742C34.5233 16.629 34.693 16.7454 34.8138 16.9056C34.9346 17.0659 35 17.2613 35 17.4621C35 17.663 34.9346 17.8583 34.8138 18.0186C34.693 18.1788 34.5233 18.2952 34.3305 18.35L29.3091 19.7881C27.0479 20.427 24.9881 21.6367 23.3268 23.3016C21.6656 24.9664 20.4584 27.0307 19.8209 29.2968L18.386 34.329C18.3313 34.5222 18.2152 34.6923 18.0553 34.8134C17.8954 34.9345 17.7004 35 17.5 35C17.2996 35 17.1046 34.9345 16.9447 34.8134C16.7848 34.6923 16.6687 34.5222 16.614 34.329L15.1791 29.2968C14.5416 27.0307 13.3344 24.9664 11.6732 23.3016C10.0119 21.6367 7.95209 20.427 5.69086 19.7881L0.669529 18.35C0.476727 18.2952 0.307037 18.1788 0.186207 18.0186C0.0653763 17.8583 0 17.663 0 17.4621C0 17.2613 0.0653763 17.0659 0.186207 16.9056C0.307037 16.7454 0.476727 16.629 0.669529 16.5742Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width={43}
                      height={43}
                      viewBox="0 0 43 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.822559 20.3626L6.99162 18.5958C9.76971 17.8109 12.3003 16.3246 14.3413 14.2792C16.3823 12.2338 17.8653 9.69775 18.6486 6.91364L20.4115 0.731224C20.5001 0.514922 20.651 0.329917 20.8448 0.199717C21.0386 0.0695166 21.2667 0 21.5 0C21.7333 0 21.9614 0.0695166 22.1552 0.199717C22.349 0.329917 22.4999 0.514922 22.5885 0.731224L24.3514 6.91364C25.1347 9.69775 26.6177 12.2338 28.6587 14.2792C30.6997 16.3246 33.2303 17.8109 36.0084 18.5958L42.1774 20.3626C42.4143 20.4299 42.6228 20.5729 42.7712 20.7698C42.9197 20.9667 43 21.2067 43 21.4534C43 21.7002 42.9197 21.9402 42.7712 22.1371C42.6228 22.334 42.4143 22.4769 42.1774 22.5443L36.0084 24.3111C33.2303 25.096 30.6997 26.5822 28.6587 28.6276C26.6177 30.673 25.1347 33.2091 24.3514 35.9932L22.5885 42.1757C22.5213 42.413 22.3786 42.622 22.1822 42.7707C21.9857 42.9195 21.7462 43 21.5 43C21.2538 43 21.0143 42.9195 20.8178 42.7707C20.6214 42.622 20.4787 42.413 20.4115 42.1757L18.6486 35.9932C17.8653 33.2091 16.3823 30.673 14.3413 28.6276C12.3003 26.5822 9.76971 25.096 6.99162 24.3111L0.822559 22.5443C0.58569 22.4769 0.377213 22.334 0.228764 22.1371C0.0803146 21.9402 0 21.7002 0 21.4534C0 21.2067 0.0803146 20.9667 0.228764 20.7698C0.377213 20.5729 0.58569 20.4299 0.822559 20.3626Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cs_height_60 cs_height_lg_20" />
            </div>
            <div className="col-lg-4">
              <div
                className="cs_product_card cs_style_8 cs_type_1 cs_bg_filed cs_radius_10"
                data-src="assets/images/product_47.jpg"
              >
                <h2 className="cs_product_heading cs_semibold cs_fs_54">
                  Skincare Must-Haves
                </h2>
                <div className="cs_product_info">
                  <div className="cs_product_info_in">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">SKINCARE</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      <Link to="/productdetails/:id">
                        Youthful Radiance Cream
                      </Link>
                    </h2>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $39.99
                    </p>
                  </div>
                  <div className="cs_product_btn">
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="cs_product_card cs_style_8 cs_bg_filed cs_radius_10"
                data-src="assets/images/product_48.jpg"
              >
                <h2 className="cs_product_heading cs_semibold cs_fs_54">
                  Makeup <span className="cs_white_color">Essentials</span>
                </h2>
                <div className="cs_product_info">
                  <div className="cs_product_info_in">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">MAKEUP</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      <Link to="/productdetails/:id">
                        Supreme Color Palette
                      </Link>
                    </h2>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $24.99
                    </p>
                  </div>
                  <div className="cs_product_btn">
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src="assets/images/icons/cart_white.svg" alt="" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_80" />
      </section>
      {/* End Explore Section */}
      {/* Start Top Deals Section */}
      <section>
        <div className="cs_height_140 cs_height_lg_75" />
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_in">
              <h3 className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center">
                TOP DEALS OF THE DAY
              </h3>
              <div className="cs_countdown_wrap">
                <p className="cs_countdown_title mb-0">
                  Hurry Up! Offer end in
                </p>
                <div
                  className="cs_countdown cs_style_1 cs_fs_24 cs_medium"
                  data-countdate="2024-04-02T03:45:26"
                >
                  <div
                    className="cs_countdown_box cs_accent_color cs_center"
                    title="Hour"
                  >
                    <p className="cs_count_hours mb-0 cs_countdown_number" />
                  </div>
                  <div
                    className="cs_countdown_box cs_accent_color cs_center"
                    title="Minute"
                  >
                    <p className="cs_count_minutes mb-0 cs_countdown_number" />
                  </div>
                  <div
                    className="cs_countdown_box cs_accent_color cs_center"
                    title="Second"
                  >
                    <p className="cs_count_seconds mb-0 cs_countdown_number" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_section_heading_right">
              <a
                className="cs_text_btn cs_accent_color cs_medium cs_fs_24"
                href="flash-sale-product.html"
              >
                <span>View All</span>
              </a>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_50" />
          <div className="cs_grid_style_2">
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 text-center cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_label cs_accent_strong_bg cs_white_color">
                    <span>10%</span>
                    <span className="cs_fs_10">OFF</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_49.png" alt="Product" />
                    <div className="cs_product_icon_btns">
                      <button className="cs_like_btn cs_center cs_accent_color">
                        <svg
                          className="cs_secondary_color"
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          width={21}
                          height={19}
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <svg
                        width={29}
                        height={30}
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="overflow-hidden position-relative">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to="/products">SKINCARE</Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                        Advanced Repair Night Serum
                      </h2>
                      <div className="cs_product_ratings">
                        <div className="cs_rating" data-rating="4.5">
                          <div className="cs_rating_percentage" />
                        </div>
                      </div>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                        $49.99 <small>$59.99</small>
                      </p>
                      <div className="cs_progress" data-progress={60}>
                        <div className="cs_progress_in">35 SOLD</div>
                      </div>
                      <div className="cs_products_btns">
                        <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                          <img
                            src="assets/images/icons/cart_white.svg"
                            alt=""
                          />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 text-center cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_label cs_accent_strong_bg cs_white_color">
                    <span>5%</span>
                    <span className="cs_fs_10">OFF</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_50.png" alt="Product" />
                    <div className="cs_product_icon_btns">
                      <button className="cs_like_btn cs_center cs_accent_color">
                        <svg
                          className="cs_secondary_color"
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          width={21}
                          height={19}
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <svg
                        width={29}
                        height={30}
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="overflow-hidden position-relative">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to="/products">MAKEUP</Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                        Long-Lasting Lipstick
                      </h2>
                      <div className="cs_product_ratings">
                        <div className="cs_rating" data-rating={5}>
                          <div className="cs_rating_percentage" />
                        </div>
                      </div>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                        $34.99 <small>$39.99</small>
                      </p>
                      <div className="cs_progress" data-progress={70}>
                        <div className="cs_progress_in">45 SOLD</div>
                      </div>
                      <div className="cs_products_btns">
                        <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                          <img
                            src="assets/images/icons/cart_white.svg"
                            alt=""
                          />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 text-center cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_label cs_accent_strong_bg cs_white_color">
                    <span>5%</span>
                    <span className="cs_fs_10">OFF</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_51.png" alt="Product" />
                    <div className="cs_product_icon_btns">
                      <button className="cs_like_btn cs_center cs_accent_color">
                        <svg
                          className="cs_secondary_color"
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          width={21}
                          height={19}
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <svg
                        width={29}
                        height={30}
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="overflow-hidden position-relative">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to="/products">HAIR CARE</Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                        Revitalizing Hair Mask
                      </h2>
                      <div className="cs_product_ratings">
                        <div className="cs_rating" data-rating="4.5">
                          <div className="cs_rating_percentage" />
                        </div>
                      </div>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                        $24.99 <small>$29.99</small>
                      </p>
                      <div className="cs_progress" data-progress={80}>
                        <div className="cs_progress_in">30 SOLD</div>
                      </div>
                      <div className="cs_products_btns">
                        <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                          <img
                            src="assets/images/icons/cart_white.svg"
                            alt=""
                          />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 text-center cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_label cs_accent_strong_bg cs_white_color">
                    <span>7%</span>
                    <span className="cs_fs_10">OFF</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_52.png" alt="Product" />
                    <div className="cs_product_icon_btns">
                      <button className="cs_like_btn cs_center cs_accent_color">
                        <svg
                          className="cs_secondary_color"
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          width={21}
                          height={19}
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <svg
                        width={29}
                        height={30}
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="overflow-hidden position-relative">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to="/products">FARGRANCE</Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                        Sensual Eau de Parfum
                      </h2>
                      <div className="cs_product_ratings">
                        <div className="cs_rating" data-rating="4.5">
                          <div className="cs_rating_percentage" />
                        </div>
                      </div>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                        $44.99 <small>$49.99</small>
                      </p>
                      <div className="cs_progress" data-progress={40}>
                        <div className="cs_progress_in">113 SOLD</div>
                      </div>
                      <div className="cs_products_btns">
                        <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                          <img
                            src="assets/images/icons/cart_white.svg"
                            alt=""
                          />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 text-center cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_label cs_accent_strong_bg cs_white_color">
                    <span>10%</span>
                    <span className="cs_fs_10">OFF</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_53.png" alt="Product" />
                    <div className="cs_product_icon_btns">
                      <button className="cs_like_btn cs_center cs_accent_color">
                        <svg
                          className="cs_secondary_color"
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          width={21}
                          height={19}
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <svg
                        width={29}
                        height={30}
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="overflow-hidden position-relative">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to="/products">MAKEUP</Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                        Essential Makeup Brushes Set
                      </h2>
                      <div className="cs_product_ratings">
                        <div className="cs_rating" data-rating={5}>
                          <div className="cs_rating_percentage" />
                        </div>
                      </div>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                        $16.99 <small>$19.99</small>
                      </p>
                      <div className="cs_progress" data-progress={65}>
                        <div className="cs_progress_in">69 SOLD</div>
                      </div>
                      <div className="cs_products_btns">
                        <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                          <img
                            src="assets/images/icons/cart_white.svg"
                            alt=""
                          />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 text-center cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_label cs_accent_strong_bg cs_white_color">
                    <span>5%</span>
                    <span className="cs_fs_10">OFF</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_54.png" alt="Product" />
                    <div className="cs_product_icon_btns">
                      <button className="cs_like_btn cs_center cs_accent_color">
                        <svg
                          className="cs_secondary_color"
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          width={21}
                          height={19}
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <svg
                        width={29}
                        height={30}
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="overflow-hidden position-relative">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to="/products">BATH &amp; BODY</Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                        Luxurious Body Lotion
                      </h2>
                      <div className="cs_product_ratings">
                        <div className="cs_rating" data-rating="4.5">
                          <div className="cs_rating_percentage" />
                        </div>
                      </div>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                        $24.99 <small>$29.99</small>
                      </p>
                      <div className="cs_progress" data-progress={80}>
                        <div className="cs_progress_in">41 SOLD</div>
                      </div>
                      <div className="cs_products_btns">
                        <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                          <img
                            src="assets/images/icons/cart_white.svg"
                            alt=""
                          />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 text-center cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_label cs_accent_strong_bg cs_white_color">
                    <span>10%</span>
                    <span className="cs_fs_10">OFF</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_55.png" alt="Product" />
                    <div className="cs_product_icon_btns">
                      <button className="cs_like_btn cs_center cs_accent_color">
                        <svg
                          className="cs_secondary_color"
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          width={21}
                          height={19}
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <svg
                        width={29}
                        height={30}
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="overflow-hidden position-relative">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to="/products">MEN’S GROOMING</Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                        Classic Shaving Kit
                      </h2>
                      <div className="cs_product_ratings">
                        <div className="cs_rating" data-rating="4.5">
                          <div className="cs_rating_percentage" />
                        </div>
                      </div>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                        $19.99 <small>$24.99</small>
                      </p>
                      <div className="cs_progress" data-progress={70}>
                        <div className="cs_progress_in">94 SOLD</div>
                      </div>
                      <div className="cs_products_btns">
                        <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                          <img
                            src="assets/images/icons/cart_white.svg"
                            alt=""
                          />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 text-center cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_label cs_accent_strong_bg cs_white_color">
                    <span>15%</span>
                    <span className="cs_fs_10">OFF</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_56.png" alt="Product" />
                    <div className="cs_product_icon_btns">
                      <button className="cs_like_btn cs_center cs_accent_color">
                        <svg
                          className="cs_secondary_color"
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          width={21}
                          height={19}
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <svg
                        width={29}
                        height={30}
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="overflow-hidden position-relative">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to="/products">WELLNESS</Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                        Revitalizing Herbal Tea
                      </h2>
                      <div className="cs_product_ratings">
                        <div className="cs_rating" data-rating={5}>
                          <div className="cs_rating_percentage" />
                        </div>
                      </div>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                        $12.99 <small>$14.99</small>
                      </p>
                      <div className="cs_progress" data-progress={80}>
                        <div className="cs_progress_in">113 SOLD</div>
                      </div>
                      <div className="cs_products_btns">
                        <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                          <img
                            src="assets/images/icons/cart_white.svg"
                            alt=""
                          />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Top Deals Section */}
      {/* Start Value Pack Section */}
      <section>
        <div className="cs_height_130 cs_height_lg_50" />
        <div className="container">
          <div className="cs_section_heading cs_style_1 justify-content-center">
            <div className="cs_section_heading_in">
              <h3 className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center">
                Value Pack
              </h3>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_50" />
          <div className="cs_grid_style_2">
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 cs_type_1 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_pack_title cs_light text-center cs_accent_color cs_white_bg">
                    <span>BUNDLED BEAUTY SET</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_57.png" alt="Product" />
                  </div>
                  <div className="text-center">
                    <span className="cs_bundle_badge cs_accent_strong_bg cs_white_color text-uppercase cs_radius_5 cs_fs_14 cs_light">
                      BUNDLE
                    </span>
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">SKINCARE</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Radiant Glow Serum, Nourishing Face Cream, and
                      Revitalizing Eye Gel
                    </h2>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $69.99 <small>$89.99</small>
                    </p>
                    <div className="text-center">
                      <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                        <img src="assets/images/icons/cart_white.svg" alt="" />
                        <span>Add To Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 cs_type_1 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_pack_title cs_light text-center cs_accent_color cs_white_bg">
                    <span>MAKEUP COLLECTION BUNDLE</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_58.png" alt="Product" />
                  </div>
                  <div className="text-center">
                    <span className="cs_bundle_badge cs_accent_strong_bg cs_white_color text-uppercase cs_radius_5 cs_fs_14 cs_light">
                      BUNDLE
                    </span>
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">MAKEUP</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Perfecting Matte Foundation, Supreme Color Palette,
                      Mascara
                    </h2>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $59.99 <small>$79.99</small>
                    </p>
                    <div className="text-center">
                      <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                        <img src="assets/images/icons/cart_white.svg" alt="" />
                        <span>Add To Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 cs_type_1 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_pack_title cs_light text-center cs_accent_color cs_white_bg">
                    <span>ESSENTIALS PACK</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_59.png" alt="Product" />
                  </div>
                  <div className="text-center">
                    <span className="cs_bundle_badge cs_accent_strong_bg cs_white_color text-uppercase cs_radius_5 cs_fs_14 cs_light">
                      BUNDLE
                    </span>
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">HAIRCARE</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Nourishing Shampoo, Hydrating Conditioner, and Repairing
                      Hair Mask
                    </h2>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $39.99 <small>$49.99</small>
                    </p>
                    <div className="text-center">
                      <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                        <img src="assets/images/icons/cart_white.svg" alt="" />
                        <span>Add To Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
            <div className="cs_grid_col">
              <div className="cs_product_card cs_style_9 cs_type_1 text-center">
                <div className="cs_product_card_in">
                  <div className="cs_pack_title cs_light text-center cs_accent_color cs_white_bg">
                    <span>TRIO SET</span>
                  </div>
                  <div className="cs_product_thumb cs_center">
                    <img src="assets/images/product_60.png" alt="Product" />
                  </div>
                  <div className="text-center">
                    <span className="cs_bundle_badge cs_accent_strong_bg cs_white_color text-uppercase cs_radius_5 cs_fs_14 cs_light">
                      BUNDLE
                    </span>
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to="/products">FRAGRANCE</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      Enchanted Blossom Perfume, Citrus Breeze Cologne, and
                      Floral
                    </h2>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      $49.99 <small>$59.99</small>
                    </p>
                    <div className="text-center">
                      <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                        <img src="assets/images/icons/cart_white.svg" alt="" />
                        <span>Add To Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/productdetails/:id" className="cs_product_link">
                  {" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_130 cs_height_lg_50" />
      </section>
      {/* End Value Pack Section */}
      {/* Start CTA Section */}
      <section
        className="cs_cta cs_style_2 cs_bg_filed"
        data-src="assets/images/cta_bg_2.jpg"
      >
        <div className="container">
          <div className="cs_cta_in">
            <h2 className="cs_cta_title cs_fs_72 cs_semibold">
              Shop Now and Reveal Your Inner Beauty with Our Premium Collection!
            </h2>
            <Link
              to="/products"
              className="cs_btn cs_style_1 cs_fs_18 cs_medium"
            >
              SHOP NOW
            </Link>
          </div>
          <div className="cs_star_shape_1 cs_accent_strong_color">
            <svg
              width={27}
              height={27}
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.516491 12.7858L4.39009 11.6765C6.13447 11.1836 7.72346 10.2504 9.005 8.96604C10.2866 7.68171 11.2178 6.08928 11.7096 4.34113L12.8165 0.459141C12.8722 0.323323 12.9669 0.207157 13.0886 0.125403C13.2103 0.04365 13.3535 0 13.5 0C13.6465 0 13.7897 0.04365 13.9114 0.125403C14.0331 0.207157 14.1278 0.323323 14.1835 0.459141L15.2904 4.34113C15.7822 6.08928 16.7134 7.68171 17.995 8.96604C19.2765 10.2504 20.8655 11.1836 22.6099 11.6765L26.4835 12.7858C26.6322 12.8281 26.7631 12.9179 26.8564 13.0415C26.9496 13.1651 27 13.3158 27 13.4708C27 13.6257 26.9496 13.7764 26.8564 13.9C26.7631 14.0237 26.6322 14.1134 26.4835 14.1557L22.6099 15.2651C20.8655 15.7579 19.2765 16.6912 17.995 17.9755C16.7134 19.2598 15.7822 20.8522 15.2904 22.6004L14.1835 26.4824C14.1413 26.6314 14.0517 26.7626 13.9283 26.856C13.805 26.9495 13.6546 27 13.5 27C13.3454 27 13.195 26.9495 13.0717 26.856C12.9483 26.7626 12.8587 26.6314 12.8165 26.4824L11.7096 22.6004C11.2178 20.8522 10.2866 19.2598 9.005 17.9755C7.72346 16.6912 6.13447 15.7579 4.39009 15.2651L0.516491 14.1557C0.367758 14.1134 0.236855 14.0237 0.143642 13.9C0.0504303 13.7764 -1.90735e-06 13.6257 -1.90735e-06 13.4708C-1.90735e-06 13.3158 0.0504303 13.1651 0.143642 13.0415C0.236855 12.9179 0.367758 12.8281 0.516491 12.7858Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="cs_star_shape_2 cs_accent_strong_color">
            <svg
              width={70}
              height={70}
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33906 33.1484L11.3817 30.2723C15.9042 28.9945 20.0238 26.575 23.3463 23.2453C26.6688 19.9156 29.0831 15.787 30.3581 11.2548L33.228 1.19036C33.3723 0.838245 33.6178 0.537074 33.9334 0.32512C34.2489 0.113167 34.6202 0 35 0C35.3798 0 35.7511 0.113167 36.0666 0.32512C36.3822 0.537074 36.6277 0.838245 36.772 1.19036L39.6419 11.2548C40.9169 15.787 43.3312 19.9156 46.6537 23.2453C49.9762 26.575 54.0958 28.9945 58.6183 30.2723L68.6609 33.1484C69.0466 33.258 69.3859 33.4908 69.6276 33.8113C69.8693 34.1318 70 34.5225 70 34.9242C70 35.3259 69.8693 35.7167 69.6276 36.0371C69.3859 36.3576 69.0466 36.5904 68.6609 36.7001L58.6183 39.5761C54.0958 40.8539 49.9762 43.2734 46.6537 46.6031C43.3312 49.9329 40.9169 54.0614 39.6419 58.5936L36.772 68.6581C36.6626 69.0445 36.4303 69.3846 36.1105 69.6268C35.7907 69.869 35.4008 70 35 70C34.5992 70 34.2093 69.869 33.8895 69.6268C33.5697 69.3846 33.3374 69.0445 33.228 68.6581L30.3581 58.5936C29.0831 54.0614 26.6688 49.9329 23.3463 46.6031C20.0238 43.2734 15.9042 40.8539 11.3817 39.5761L1.33906 36.7001C0.953453 36.5904 0.614075 36.3576 0.372414 36.0371C0.130753 35.7167 0 35.3259 0 34.9242C0 34.5225 0.130753 34.1318 0.372414 33.8113C0.614075 33.4908 0.953453 33.258 1.33906 33.1484Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="cs_star_shape_3 cs_accent_strong_color">
            <svg
              width={27}
              height={27}
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.516491 12.7858L4.39009 11.6765C6.13447 11.1836 7.72346 10.2504 9.005 8.96604C10.2866 7.68171 11.2178 6.08928 11.7096 4.34113L12.8165 0.459141C12.8722 0.323323 12.9669 0.207157 13.0886 0.125403C13.2103 0.04365 13.3535 0 13.5 0C13.6465 0 13.7897 0.04365 13.9114 0.125403C14.0331 0.207157 14.1278 0.323323 14.1835 0.459141L15.2904 4.34113C15.7822 6.08928 16.7134 7.68171 17.995 8.96604C19.2765 10.2504 20.8655 11.1836 22.6099 11.6765L26.4835 12.7858C26.6322 12.8281 26.7631 12.9179 26.8564 13.0415C26.9496 13.1651 27 13.3158 27 13.4708C27 13.6257 26.9496 13.7764 26.8564 13.9C26.7631 14.0237 26.6322 14.1134 26.4835 14.1557L22.6099 15.2651C20.8655 15.7579 19.2765 16.6912 17.995 17.9755C16.7134 19.2598 15.7822 20.8522 15.2904 22.6004L14.1835 26.4824C14.1413 26.6314 14.0517 26.7626 13.9283 26.856C13.805 26.9495 13.6546 27 13.5 27C13.3454 27 13.195 26.9495 13.0717 26.856C12.9483 26.7626 12.8587 26.6314 12.8165 26.4824L11.7096 22.6004C11.2178 20.8522 10.2866 19.2598 9.005 17.9755C7.72346 16.6912 6.13447 15.7579 4.39009 15.2651L0.516491 14.1557C0.367758 14.1134 0.236855 14.0237 0.143642 13.9C0.0504303 13.7764 -1.90735e-06 13.6257 -1.90735e-06 13.4708C-1.90735e-06 13.3158 0.0504303 13.1651 0.143642 13.0415C0.236855 12.9179 0.367758 12.8281 0.516491 12.7858Z"
                fill="#583FA8"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* End CTA Section */}
      {/* Start Blog Section */}
      <section>
        <div className="cs_height_140 cs_height_lg_70" />
        <div className="container">
          <div className="cs_section_heading cs_style_1 justify-content-center">
            <div className="cs_section_heading_in">
              <h3 className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center">
                EXPERT TIPS, TRENDS, AND INSPIRATION
              </h3>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_50" />
          <div className="row cs_gap_y_30">
            <div className="col-lg-4">
              <div className="cs_post cs_style_2 cs_type_1 cs_radius_8">
                <Link
                  to="/products"
                  className="cs_post_thumb cs_bg_filed cs_radius_8"
                >
                  <img src="assets/images/blog/post_4.jpg" alt="Thumbnail" />
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_category text-uppercase cs_light cs_accent_bg cs_white_color">
                    SKINCARE
                  </div>
                  <div className="cs_post_meta cs_light cs_primary_color">
                    <span>Lisa Dominic</span>
                    <span>March 15, 2024</span>
                  </div>
                  <h2 className="cs_post_title cs_fs_24 cs_medium cs_secondary_font">
                    <Link to="/products">
                      10 Skincare Tips for a Healthy Glow Permanent
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_post cs_style_2 cs_type_1 cs_radius_8">
                <Link
                  to="/products"
                  className="cs_post_thumb cs_bg_filed cs_radius_8"
                >
                  <img src="assets/images/blog/post_5.jpg" alt="Thumbnail" />
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_category text-uppercase cs_light cs_accent_bg cs_white_color">
                    SKINCARE
                  </div>
                  <div className="cs_post_meta cs_light cs_primary_color">
                    <span>Fabian Wright</span>
                    <span>April 20, 2024</span>
                  </div>
                  <h2 className="cs_post_title cs_fs_24 cs_medium cs_secondary_font">
                    <Link to="/products">
                      The Ultimate Guide to Makeup Application
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_post cs_style_2 cs_type_1 cs_radius_8">
                <Link
                  to="/products"
                  className="cs_post_thumb cs_bg_filed cs_radius_8"
                >
                  <img src="assets/images/blog/post_6.jpg" alt="Thumbnail" />
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_category text-uppercase cs_light cs_accent_bg cs_white_color">
                    SKINCARE
                  </div>
                  <div className="cs_post_meta cs_light cs_primary_color">
                    <span>Lisa Dominic</span>
                    <span>March 15, 2024</span>
                  </div>
                  <h2 className="cs_post_title cs_fs_24 cs_medium cs_secondary_font">
                    <Link to="/products">
                      How to Choose the Perfect Foundation Shade
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_140 cs_height_lg_70" />
      </section>
      {/* End Blog Section */}
      {/* Start FAQ Section */}
      <section>
        <div className="container">
          <div className="cs_accent_light_bg cs_accordians_section_1">
            <div className="cs_height_110 cs_height_lg_60" />
            <div className="row align-items-center cs_gap_y_20">
              <div className="col-lg-5">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_in">
                    <h3 className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center">
                      Got Questions? We've Got Answers!
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cs_accordians cs_style_1 cs_light cs_type_1">
                  <div className="cs_accordian active">
                    <div className="cs_accordian_head">
                      <h3 className="cs_accordian_title cs_primary_color cs_fs_24 fw-medium mb-0">
                        How can I track my order?{" "}
                      </h3>
                      <span className="cs_accordian_toggle" />
                    </div>
                    <div className="cs_accordian_body">
                      <p className="cs_secondary_color cs_font_26 fw-light mb-0">
                        Once your order is shipped, you will receive a tracking
                        number via email. You can use this tracking number to
                        track the progress of your shipment on our website.
                      </p>
                    </div>
                  </div>
                  <div className="cs_accordian">
                    <div className="cs_accordian_head">
                      <h3 className="cs_accordian_title cs_primary_color cs_fs_24 fw-medium mb-0">
                        What payment methods do you accept?
                      </h3>
                      <span className="cs_accordian_toggle" />
                    </div>
                    <div className="cs_accordian_body">
                      <p className="cs_secondary_color cs_font_26 fw-light mb-0">
                        Once your order is shipped, you will receive a tracking
                        number via email. You can use this tracking number to
                        track the progress of your shipment on our website.
                      </p>
                    </div>
                  </div>
                  <div className="cs_accordian">
                    <div className="cs_accordian_head">
                      <h3 className="cs_accordian_title cs_primary_color cs_fs_24 fw-medium mb-0">
                        Do you offer international shipping?
                      </h3>
                      <span className="cs_accordian_toggle" />
                    </div>
                    <div className="cs_accordian_body">
                      <p className="cs_secondary_color cs_font_26 fw-light mb-0">
                        Once your order is shipped, you will receive a tracking
                        number via email. You can use this tracking number to
                        track the progress of your shipment on our website.
                      </p>
                    </div>
                  </div>
                  <div className="cs_accordian">
                    <div className="cs_accordian_head">
                      <h3 className="cs_accordian_title cs_primary_color cs_fs_24 fw-medium mb-0">
                        What is your return policy?
                      </h3>
                      <span className="cs_accordian_toggle" />
                    </div>
                    <div className="cs_accordian_body">
                      <p className="cs_secondary_color cs_font_26 fw-light mb-0">
                        Once your order is shipped, you will receive a tracking
                        number via email. You can use this tracking number to
                        track the progress of your shipment on our website.
                      </p>
                    </div>
                  </div>
                  <div className="cs_accordian">
                    <div className="cs_accordian_head">
                      <h3 className="cs_accordian_title cs_primary_color cs_fs_24 fw-medium mb-0">
                        Are your products cruelty-free?
                      </h3>
                      <span className="cs_accordian_toggle" />
                    </div>
                    <div className="cs_accordian_body">
                      <p className="cs_secondary_color cs_font_26 fw-light mb-0">
                        Once your order is shipped, you will receive a tracking
                        number via email. You can use this tracking number to
                        track the progress of your shipment on our website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_110 cs_height_lg_30" />
          </div>
        </div>
      </section>
      {/* End FAQ Section */}
      {/* Start Feature Section */}
      <div className="cs_height_80 cs_height_lg_60" />
      <div className="container">
        <div className="cs_grid_5_column cs_type_1">
          <div className="cs_grid_col">
            <div className="cs_iconbox cs_style_2 cs_radius_6">
              <img src="assets/images/icons/feature_icon_1.svg" alt="Icon" />
              <p className="mb-0 cs_semibold">Quality Assurance</p>
            </div>
          </div>
          <div className="cs_grid_col">
            <div className="cs_iconbox cs_style_2 cs_radius_6">
              <img src="assets/images/icons/feature_icon_2.svg" alt="Icon" />
              <p className="mb-0 cs_semibold">Customer Satisfaction</p>
            </div>
          </div>
          <div className="cs_grid_col">
            <div className="cs_iconbox cs_style_2 cs_radius_6">
              <img src="assets/images/icons/feature_icon_3.svg" alt="Icon" />
              <p className="mb-0 cs_semibold">Trust and Reliability</p>
            </div>
          </div>
          <div className="cs_grid_col">
            <div className="cs_iconbox cs_style_2 cs_radius_6">
              <img src="assets/images/icons/feature_icon_4.svg" alt="Icon" />
              <p className="mb-0 cs_semibold">Personalization</p>
            </div>
          </div>
          <div className="cs_grid_col">
            <div className="cs_iconbox cs_style_2 cs_radius_6">
              <img src="assets/images/icons/feature_icon_5.svg" alt="Icon" />
              <p className="mb-0 cs_semibold">Continuous Improvement</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_60" />
      {/* End Feature Section */}
      {/* Start Brand Section */}
      <div className="container">
        <hr />
        <div className="cs_height_30 cs_height_lg_30" />
        <div className="cs_moving_container cs_style_1 overflow-hidden">
          <div className="cs_moving_container_in cs_slide_left">
            <div className="cs_moving_content">
              <div className="cs_brand cs_style_1">
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_1.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_2.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_3.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_4.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_5.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_6.svg" alt="brand-img" />
                </div>
              </div>
            </div>
            <div className="cs_moving_content">
              <div className="cs_brand cs_style_1">
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_1.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_2.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_3.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_4.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_5.svg" alt="brand-img" />
                </div>
                <div className="cs_brand cs_center">
                  <img src="assets/images/brand_6.svg" alt="brand-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_145 cs_height_lg_65" />
      </div>
      {/* End Brand Section */}
      {/* Mirrored from html.laralink.com/glowify/home-v3.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 06 Mar 2025 14:28:56 GMT */}
    </>
  );
};

export default Home;
