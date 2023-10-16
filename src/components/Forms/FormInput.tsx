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
  disabled?: boolean;
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
  disabled,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col">
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
              disabled={disabled}
              className={disabled ? "cursor-not-allowed" : ""}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              required={required}
              disabled={disabled}
              className={disabled ? "cursor-not-allowed" : ""}
            />
          )
        }
      />
      {errors?.name && <p className="text-rose-500">{label} is required</p>}
    </div>
  );
};

export default FormInput;
