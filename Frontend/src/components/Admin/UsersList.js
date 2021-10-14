import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../redux/Action/userAction";
import { Table, Button } from "react-bootstrap";
import { deleteUser } from "../../redux/Action/userAction";
import Loader from "../Loader";
import Error from "../Error";

const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const getAllUserState = useSelector((state) => state.getAllUserReducer);
  const { loading, error, users } = getAllUserState;
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Error while fetching data" />}
      <h1>User</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr Key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    className="btn-danger"
                    onClick={() => dispatch(deleteUser(user._id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UsersList;
