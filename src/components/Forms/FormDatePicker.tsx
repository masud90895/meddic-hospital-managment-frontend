import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
  required?: boolean;
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
  required,
}: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  return (
    <div>
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {label && (
              <div className="flex gap-1 items-center mb-1">
                <label className={`label_text`}>
                  {label} {required && <span className="text-rose-500">*</span>}
                </label>
              </div>
            )}
            <DatePicker
              defaultValue={dayjs(field.value) || Date.now()}
              size={size}
              onChange={handleOnChange}
              style={{ width: "100%" }}
            />
          </>
        )}
      />
    </div>
  );
};

export default FormDatePicker;
