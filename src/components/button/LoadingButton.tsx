import { Button } from 'antd';
import React from 'react';

const LoadingButton = () => {
  return (
    <Button
      type="primary"
      style={{
        backgroundColor: "indigo",
        color: "white",
      }}
      size="large"
      loading
      className="block w-full  mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
    >
      Loading
    </Button>
  );
};

export default LoadingButton;