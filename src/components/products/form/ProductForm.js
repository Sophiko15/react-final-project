import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { saveProductValidationSchema } from "./ProductFormValidation"
import { Button, FormContainer, Input } from "../../atoms"
import FileBase64 from "react-file-base64"
import { useDispatch } from "react-redux"
import { saveProduct } from "../../../redux/slice"
import { useProduct } from "../../../hooks/useProduct"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(saveProductValidationSchema),
    mode: "onChange",
  });
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const { selectedProduct } = useProduct();
  const navigate =  useNavigate();

  useEffect(() => {
    if (selectedProduct) {
      setImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  const onSave = (data) => {
    console.log(data);
    console.log(image);
    dispatch(
      saveProduct({
        product: {
          ...data,
          image,
        },
        productId: selectedProduct?._id,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      }).catch((error)=>{
        navigate("/");
      })
  };
  return (
    <FormContainer>
      <Controller
        name="name"
        defaultValue={selectedProduct?.name}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              helperText={errors.name?.message}
              error={!!errors.name}
              label="Product name"
            />
          );
        }}
      />
      <Controller
        name="description"
        defaultValue={selectedProduct?.description}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              helperText={errors.description?.message}
              error={!!errors.description}
              label="description"
            />
          );
        }}
      />
      <Controller
        name="category"
        defaultValue={selectedProduct?.category}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              helperText={errors.category?.message}
              error={!!errors.category}
              label="category"
            />
          );
        }}
      />
      <Controller
        name="brand"
        defaultValue={selectedProduct?.brand}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              helperText={errors.brand?.message}
              error={!!errors.brand}
              label="brand"
            />
          );
        }}
      />
      <Controller
        name="price"
        defaultValue={selectedProduct?.price}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              type="number"
              onChange={onChange}
              helperText={errors.price?.message}
              error={!!errors.price}
              label="price"
            />
          );
        }}
      />
      <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />
      <Button onClick={handleSubmit(onSave)}>save product</Button>
    </FormContainer>
  );
};