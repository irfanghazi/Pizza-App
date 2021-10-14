import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, orderDeliver } from "../../redux/Action/orderAction";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader";

const OrdersList = () => {
  const dispatch = useDispatch();
  const allOrderState = useSelector((state) => state.getAllOrderReducer);
  const { loading, orders } = allOrderState;
  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);
  return (
    <>
      {loading && <Loader />}

      <h2>Order list</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>OrderId</th>
            <th>Name</th>
            <th>Email</th>
            <th>TransactionId</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr Key={order._id}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.transactionId}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDelivered ? (
                    <h6 className="text-success">Delivered</h6>
                  ) : (
                    <Button
                      className="btn-danger"
                      onClick={() => dispatch(orderDeliver(order._id))}
                    >
                      Deliver
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrdersList;
