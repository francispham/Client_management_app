import React from "react";
import {Alert, Table} from "reactstrap";

function UserTable(props) {
  const { users = [], currentUser } = props;
  return (
    <div className="UserTable">
      <Alert>Welcome, Admin</Alert>
      <h3>Admin Dashboard</h3>
      <Table striped={true}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Is Admin?</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map(user => (
            <tr key = {user.id}
                className={user.id === currentUser.id && 'table-primary'}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.created_at}</td>
              <td>{user.is_admin.toString()}</td>
            </tr>
          ))
        }
        </tbody>
      </Table>
    </div>
  )
}

export default UserTable;
