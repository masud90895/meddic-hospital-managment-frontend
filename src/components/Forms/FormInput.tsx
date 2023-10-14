"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  errors?: any;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  errors,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label && (
        <div className="flex gap-1 items-center mb-1">
          <label className={`${errors?.name ? "label_text2" : "label_text"}`}>
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        </div>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              required={required}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              required={required}
            />
          )
        }
      />
      {errors?.name && <p className="text-rose-500">{label} is required</p>}
    </>
  );
};

export default FormInput;
