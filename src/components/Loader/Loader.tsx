import { Alert, Spin } from "antd";
import React from "react";

const LoaderPage = () => {
  return (
    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  );
};

export default LoaderPage;
