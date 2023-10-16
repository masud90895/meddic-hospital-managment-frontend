"use client";

import { Button, Col, Row, message } from "antd";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormInput from "@/components/Forms/FormInput";
import { useCreateFaqMutation } from "@/Redux/features/faqApi/faqApi";
import LoadingButton from "@/components/button/LoadingButton";

const AddFaqPage = () => {
  const [createFaq, { isLoading }] = useCreateFaqMutation(undefined);

  const faqOnSubmit = async (data: any) => {
    try {
      const res = await createFaq(data).unwrap();
      if (res.success) {
        message.success("FAQ created successfully");
      }
    } catch (err: any) {
      console.error(err?.data?.message);
      message.error(err?.data?.message);
    }
  };

  const base = "super-admin";
  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/dashboard` },
          { label: "add-faq", link: `/dashboard/add-faq` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New FAQ</h1>
        </div>
        <Form submitHandler={faqOnSubmit}>
          {/* faculty information */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}
            >
              FAQ information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormInput
                  name="faqTitle"
                  label="FAQ Title"
                  placeholder="FAQ Title"
                  size="large"
                  type="text"
                  required
                />
              </Col>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="faqDescription"
                  label="FAQ Description"
                  rows={8}
                  placeholder="Enter FAQ Description"
                  required
                />
              </Col>{" "}
            </Row>
          </div>

          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button htmlType="submit">Create FAQ</Button>
          )}
        </Form>
        <br />
        <br />

        <br />
      </div>
    </div>
  );
};

export default AddFaqPage;
