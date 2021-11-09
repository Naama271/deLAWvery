import Header from "./Header";
import "./App.css";
import Form from "./Form";
import { useState } from "react";
import Card from "./card";
import uniqid from "uniqid";
import EditForm from "./EditForm";
import React from "react";

export default function App() {
  const [ordersArr, setOrdersArr] = useState([]);
  const [isEditMode, setEditMode] = useState(false);
  const [editOrder, setEditOrder] = useState();
  const [date, setNewDate] = useState(null);

  function sentData(value) {
    setNewDate(value);
  }

  const addUser = (e) => {
    let order;
    !ordersArr.length
      ? (order = 1)
      : (order = (ordersArr[ordersArr.length - 1].orderNum) +1);

    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;

    const newOrder = {
      firstName,
      lastName,
      date,
      id: uniqid(),
      orderNum: order,
    };
    setOrdersArr((ordersArr) => [...ordersArr, newOrder]);
    e.target.firstName.value = "";
    e.target.lastName.value = "";
  };

  const deleteOrder = (id) => {
    const deleteIndex = ordersArr.findIndex((order) => order.id === id);
    ordersArr.splice(deleteIndex, 1);
    setOrdersArr((ordersArr) => [...ordersArr]);
  };

  const updateOrder = (id) => {
    setEditMode(true);
    const editObj = ordersArr.filter((order) => order.id === id);
    setEditOrder(editObj);
  };

  const saveUpdateOrder = (e) => {
    e.preventDefault();
    const updateIndex = ordersArr.findIndex(
      (order) => order.id === editOrder[0].id
    );

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;

    ordersArr[updateIndex].firstName = firstName;
    ordersArr[updateIndex].lastName = lastName;
    ordersArr[updateIndex].date = date;
    setEditMode(false);
  };

  return (
    <div className="App">
      <Header />
      {isEditMode ? (
        <EditForm
          saveUpdateOrder={saveUpdateOrder}
          orderData={editOrder}
          sentData={sentData}
        />
      ) : (
        <Form addUser={addUser} sentData={sentData} />
      )}
      <Card
        data={ordersArr}
        deleteOrder={deleteOrder}
        updateOrder={updateOrder}
        isEditMode={isEditMode}
      />
    </div>
  );
}
