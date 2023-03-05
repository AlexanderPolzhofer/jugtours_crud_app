import React from "react";
import "./GroupList.scss";

export const GroupList = () => {
  return (
    <div className="group-list">
      <h1>Manage JUG Tours</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Events</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vieanna JUG TOUR</td>
            <td>Vienna, Austria</td>
            <td>...</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
