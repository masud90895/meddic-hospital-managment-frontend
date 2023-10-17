import { Row, Space, Spin } from "antd";

const Loading = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Space>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    </Row>
  );
};

export default Loading;
