import React from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import pin from "../../assets/images/pin.svg";
import lock from "../../assets/images/lock.svg";
import * as Yup from "yup";
import DatePicker from "../../components/DatePicker/DatePicker";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import axiosInstance from "../../util/axiosInstance";
import { CHECKOUT } from "../../util/endpoints";
import { toast } from "react-toastify";

export default function Checkout({ price, ...props }) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      zipCode: "",
      birthDate: null,
      gender: "",
      cardHolder: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .test(
          "is-two-words",
          "First Name and Last Name are required",
          (value) => value && value.split(" ").length >= 2
        )
        .test(
          "is-two-symbols",
          "First Name and Last Name should be at least 2 symbols",
          (value) => value && value.split(" ").every((item) => item.length >= 2)
        ),
      email: Yup.string().required("Email is required").email("Email is invalid"),
      zipCode: Yup.string().test(
        "zip-code-required",
        "Zip Code is required",
        (value) => value && value.length >= 3
      ),
      birthDate: Yup.string().required("Birth date is required"),
      gender: Yup.string().required("Gender is required"),
      cardHolder: Yup.string().test(
        "card-holder-required",
        "Card Holder Name is required",
        (value) => value && value.length >= 3
      ),
      cardNumber: Yup.string().test(
        "card-number-required",
        "Card Number is required",
        (value) => value && value.length >= 3
      ),
      expirationDate: Yup.string().test(
        "expiration-date-required",
        "Expiration Date is required",
        (value) => value && value.length >= 3
      ),
      cvv: Yup.string().required("CVV is required"),
    }),
    onSubmit: (values) => {
      axiosInstance
        .post(CHECKOUT, values)
        .then(() => {
          toast.success("Successfully sent");
          formik.resetForm();
        })
        .catch(() => {
          toast.error("Unexpected error has occurred");
        });
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const genderList = [
    {
      label: "Female",
      value: "F",
    },
    {
      label: "Male",
      value: "M",
    },
  ];

  return (
    <div className="p-6 md:p-9 md:mt-9 mt-0">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="font-bold text-center text-xl pb-9">Get your Car Insurance for ${price}</h1>
        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          error={formik.errors}
        />
        <InputField
          label="Email"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors}
        />
        <InputField
          label="Zip Code"
          type="text"
          name="zipCode"
          onChange={formik.handleChange}
          value={formik.values.zipCode}
          error={formik.errors}
          icon={pin}
          iconAlt="Pin"
          iconStart={true}
          placeholder="10001"
        />
        <DatePicker
          label="Birth date"
          value={formik.values.birthDate}
          onChange={(value) => formik.setFieldValue("birthDate", value)}
          error={formik.errors}
          name="birthDate"
        />
        <RadioGroup
          label="Gender"
          value={formik.values.gender}
          onChange={(value) => formik.setFieldValue("gender", value)}
          valueList={genderList}
          error={formik.errors}
          name="gender"
        />
        <div className="border-zinc-300 border rounded px-2 md:px-5 pt-2 md:pt-6 mb-9">
          <InputField
            label="Card Holder Name"
            type="text"
            name="cardHolder"
            value={formik.values.cardHolder}
            onChange={formik.handleChange}
            error={formik.errors}
            className="text-sm md:text-base"
          />
          <InputField
            label="Card Number"
            type="number"
            name="cardNumber"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            error={formik.errors}
            className="text-sm md:text-base"
            icon={lock}
            iconAlt="Lock"
            iconStart={false}
          />
          <div className="flex gap-2">
            <InputField
              label="Expiration date"
              type="text"
              name="expirationDate"
              placeholder="MM/YY"
              value={formik.values.expirationDate}
              onChange={formik.handleChange}
              error={formik.errors}
              className="text-sm md:text-base mb-1 md:mb-5"
            />
            <InputField
              label="CVV"
              type="number"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              error={formik.errors}
              className="text-sm md:text-base mb-1 md:mb-5"
            />
          </div>
        </div>
        <Button label="CONTINUE" isSubmit={true} />
      </form>
    </div>
  );
}

Checkout.propTypes = {
  price: PropTypes.string.isRequired,
};
