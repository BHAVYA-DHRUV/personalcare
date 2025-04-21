import axios from "axios";
import React, { useDebugValue, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  let navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    try {
      axios
        .post(
          "https://personalcarebackend.onrender.com/storeContactInquiry",
          userDetails
        )
        .then((response) => {
          if (response.data.success) {
            toast.success("Contact Details Submitted", {
              onClose: () => {
                navigate("/");
              },
            });
          } else {
            toast.error(response.data.message);
          }
        });
    } catch (e) {
      toast.error(e);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  }

  return (
    <>
      {/* Start Breadcamp */}
      <div className="cs_height_40 cs_height_lg_30" />
      <div className="container">
        <div
          className="cs_breadcamp_wrap cs_style_1 cs_accent_light_bg cs_bg_filed cs_radius_8"
          style={{ backgroundImage: "url(assets/images/breadcamp_bg_7.jpg)" }}
        >
          <div>
            <h1 className="cs_breadcamp_title cs_fs_54 cs_semibold">
              Contact Us
            </h1>
            <ol className="breadcrumb cs_fs_18 mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>
          </div>
        </div>
      </div>
      {/* End Breadcamp */}
      <div className="cs_height_120 cs_height_lg_70" />
      <div className="container">
        <div className="cs_contact_section cs_gray_bg_4 cs_radius_10">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_contact_form_wrap">
                <h2 className="cs_fs_36 cs_medium text-uppercase cs_secondary_font">
                  GET IN TOUCH
                </h2>
                <p className="cs_light">
                  Have a question or need assistance? Feel free to reach out to
                  us by filling out the contact form below. We'll get back to
                  you as soon as possible.
                </p>
                <form
                  action="#"
                  method="post"
                  onSubmit={handleSubmit}
                  className="cs_contact_form"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <label className="cs_semibold">
                        Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        value={userDetails.username}
                        name="username"
                        className="cs_form_field"
                        onInput={handleInputChange}
                      />
                      <div className="cs_height_15 cs_height_lg_15" />
                    </div>
                    <div className="col-lg-6">
                      <label className="cs_semibold">
                        Email Address<span>*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={userDetails.email}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                      <div className="cs_height_15 cs_height_lg_15" />
                    </div>
                    <div className="col-lg-6">
                      <label className="cs_semibold">
                        Phone<span>*</span>
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={userDetails.phone}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                      <div className="cs_height_15 cs_height_lg_15" />
                    </div>

                    <div className="col-lg-12">
                      <label className="cs_semibold">
                        Subject<span>*</span>
                      </label>
                      <input
                        type="text"
                        className="cs_form_field"
                        onInput={handleInputChange}
                        name="subject"
                        value={userDetails.subject}
                      />
                      <div className="cs_height_15 cs_height_lg_15" />
                    </div>
                    <div className="col-lg-12">
                      <label className="cs_semibold">
                        Message<span>*</span>
                      </label>
                      <textarea
                        cols={30}
                        rows={10}
                        className="cs_form_field"
                        defaultValue={""}
                        name="message"
                        onInput={handleInputChange}
                      />
                      <div className="cs_height_30 cs_height_lg_30" />
                    </div>
                    <div className="col-lg-12">
                      <button className="cs_btn cs_style_1 cs_fs_18 w-100">
                        <span>SEND MESSAGE</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
              <div className="cs_contact_info cs_radius_8 cs_accent_bg">
                <img
                  src="assets/images/contact_info_img.svg"
                  alt=""
                  className="cs_contact_info_img"
                />
                <h2 className="cs_normal cs_fs_36 cs_white_color cs_secondary_font">
                  CONTACT
                </h2>
                <p className="cs_white_color cs_light">
                  For immediate assistance, you can contact us directly:
                </p>
                <div className="cs_contact_info_item">
                  <div className="cs_contact_info_icon">
                    <img
                      src="assets/images/icons/contact_icon_1.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="cs_contact_info_right">
                    <h4 className="cs_fs_16 cs_semibold cs_white_color cs_secondary_font">
                      Customer Support
                    </h4>
                    <a
                      href="mailto:support@glowify.com"
                      className="cs_light cs_white_color"
                    >
                      support@glowify.com
                    </a>
                  </div>
                </div>
                <div className="cs_contact_info_item">
                  <div className="cs_contact_info_icon">
                    <img
                      src="assets/images/icons/contact_icon_2.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="cs_contact_info_right">
                    <h4 className="cs_fs_16 cs_semibold cs_white_color cs_secondary_font">
                      Sales Inquiries
                    </h4>
                    <a
                      href="mailto:sales@glowify.com"
                      className="cs_light cs_white_color"
                    >
                      sales@glowify.com
                    </a>
                  </div>
                </div>
                <div className="cs_contact_info_item">
                  <div className="cs_contact_info_icon">
                    <img
                      src="assets/images/icons/contact_icon_3.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="cs_contact_info_right">
                    <h4 className="cs_fs_16 cs_semibold cs_white_color cs_secondary_font">
                      Phone
                    </h4>
                    <a
                      href="tel:+1-800-123-4567"
                      className="cs_light cs_white_color"
                    >
                      +1-800-123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_70" />
        {/* Start Google Map */}
        {/* End Google Map */}
      </div>
      <div className="cs_height_120 cs_height_lg_70" />
      {/* Mirrored from html.laralink.com/glowify/contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 06 Mar 2025 14:28:21 GMT */}
    </>
  );
};

export default Contact;
