import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  required?: boolean;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
  required,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      {label && (
        <div className="flex gap-1 items-center mb-1">
          <label className={"label_text"}>
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        </div>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
            required={required}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
