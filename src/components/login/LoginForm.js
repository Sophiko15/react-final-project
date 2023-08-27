import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { LoginValidationSchema } from "./LoginFormValidation"
import { Alert, Button, FormContainer, Input } from "../atoms"
import { useDispatch } from "react-redux"
import { authenticateUser } from "../../redux/slice"
import { useNavigate } from "react-router-dom"
import { useAlert } from "../../hooks"

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidationSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showAlert, alertState, handleClose } = useAlert();

  const onSubmit = (data) => {
    console.log("DATA", data);
    dispatch(authenticateUser({ formValues: data, isLogin: true }))
      .unwrap()
      .then(() => {
        navigate("/");
        showAlert("warmateba", "success");
      })
      .catch((error) => {
        showAlert(error, "error");
      });
  };

  return (
    <FormContainer>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              type="password"
              label="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          );
        }}
      />
      <Alert handleClose={handleClose} {...alertState} />
      <Button onClick={handleSubmit(onSubmit)}>login</Button>
    </FormContainer>
  );
};