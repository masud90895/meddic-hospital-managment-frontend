"use client";
import React, { useState } from "react";
import {  Modal } from "antd";

type DeleteModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  isLoading: boolean;
  setIsDeleteConfirm:any
};

const DeleteModalConfirmation = ({
  open,
  setOpen,
  isLoading,
  setIsDeleteConfirm,
}: DeleteModalProps) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("You want to delete this item?");

  const handleOk = () => {
    setModalText("wait a second...");
    setConfirmLoading(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsDeleteConfirm(false);
    setOpen(false);
  };

  return (
    <Modal
      title="Are you sure?"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>{modalText}</p>
    </Modal>
  );
};

export default DeleteModalConfirmation;
