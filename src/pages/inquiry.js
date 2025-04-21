import React, { useEffect, useState } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Inquiry() {
  let id = useLocation().pathname.split("/")[2]; 
  let [inquiry, setInquiry] = useState({
    productId: id,
    username: "",
    email: "",
    phone: "",
    qty: "",
    budget: "", 
    subject: "",
    message: "",
  });

  let [errors, setErrors] = useState({});
  let [loading, setLoading] = useState(false);
  function handleInputChange(e) {
    let { name, value } = e.target;
    setInquiry((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log(inquiry);

  let validateForm = () => {
    let newErrors = {};
    if (!inquiry.username) newErrors.username = "Name is required";
    if (!inquiry.email) newErrors.email = "Email is required";
    if (!inquiry.subject) newErrors.subject = "Subject is required";
    if (!inquiry.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

async function handleSubmit(e) {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  try {
    let response = await axios.post(
      `/storeProductInquiry`,
      inquiry
    );
    console.log(response);

    toast.success("Product Inquiry Submitted Successfully");

    setInquiry({
      productId: id, // Reset with productId again
      username: "",
      email: "",
      phone: "",
      qty: "",
      budget: "",
      subject: "",
      message: "",
    });
  } catch (e) {
    toast.error(e.response?.data?.message || "Something went wrong!");
  } finally {
    setLoading(false);
  }
}
  
  if (loading) {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Loading...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="cs_height_120 cs_height_lg_70" />
      <div className="container">
        <div className="cs_contact_section cs_gray_bg_4 cs_radius_10">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-12">
              <div className="cs_contact_form_wrap">
                <h2 className="cs_fs_36 cs_medium text-uppercase cs_secondary_font">
                  Inquiry
                </h2>
                <p className="cs_light">
                  Have a question or need assistance? Fill out the form below.
                </p>
                <form onSubmit={handleSubmit} className="cs_contact_form">
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="cs_semibold">
                        Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={inquiry.username}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="col-lg-6">
                      <label className="cs_semibold">
                        Email Address<span>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={inquiry.email}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="col-lg-6">
                      <label className="cs_semibold">
                        Phone<span>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={inquiry.phone}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                    </div>

                    <div className="col-lg-6">
                      <label className="cs_semibold">
                        Quantity<span>*</span>
                      </label>
                      <input
                        type="number"
                        name="qty"
                        value={inquiry.qty}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                    </div>

                    <div className="col-lg-6">
                      <label className="cs_semibold">
                        Budget<span>*</span>
                      </label>
                      <input
                        type="number"
                        name="budget"
                        value={inquiry.budget}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                    </div>

                    <div className="col-lg-12">
                      <label className="cs_semibold">
                        Subject<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={inquiry.subject}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                      {errors.subject && (
                        <p className="error">{errors.subject}</p>
                      )}
                    </div>
                    <div className="col-lg-12">
                      <label className="cs_semibold">
                        Message<span>*</span>
                      </label>
                      <textarea
                        name="message"
                        cols={30}
                        rows={5}
                        value={inquiry.message}
                        onInput={handleInputChange}
                        className="cs_form_field"
                      />
                      {errors.message && (
                        <p className="error">{errors.message}</p>
                      )}
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="cs_btn cs_style_1 cs_fs_18 w-100"
                      >
                        <span>SEND MESSAGE</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_70" />
      </div>
      <Footer />
    </>
  );
}

export default Inquiry;
