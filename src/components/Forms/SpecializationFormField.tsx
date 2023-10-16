import FormSelectField, { SelectOptions } from "./FormSelectField";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
};

const SpecializationFormField = ({ name, label }: ACDepartmentFieldProps) => {
  // const { data, isLoading } = useAcademicDepartmentsQuery({
  //   limit: 100,
  //   page: 1,
  // });
  const data = [
    {
      label: "Anesthesiology",
      value: "Anesthesiology",
    },
    {
      label: "Cardiology",
      value: "Cardiology",
    },
    {
      label: "Dermatology",
      value: "Dermatology",
    },
    {
      label: "Emergency Medicine",
      value: "Emergency Medicine",
    },
    {
      label: "Family Medicine",
      value: "Family Medicine",
    },
    {
      label: "General Surgery",
      value: "General Surgery",
    },
  ];
  // const academicDepartments = data?.academicDepartments;
  // const acDepartmentOptions = academicDepartments?.map((acDepartment: any) => {
  //   console.log(acDepartment?.id);
  //   return {
  //     label: acDepartment?.title,
  //     value: acDepartment?.id,
  //   };
  // });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={data as SelectOptions[]}
      placeholder="Select Specialization"
    />
  );
};

export default SpecializationFormField;
