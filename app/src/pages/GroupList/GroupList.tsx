import React from "react";
import { Button } from "../../components/Button/Button";
import "./GroupList.scss";

interface GroupListProps {
  group: { name: string; location: string; events: [] };
}

export const GroupList: React.FC<GroupListProps> = ({ group }) => {
  const [groupMockData, setGroupMockData] = React.useState([
    {
      id: 0,
      name: "Vienna JUG Tour",
      location: "Vienna, Austria",
      events: ["..."],
    },
  ]);

  const handleDelete = (id: number) => {
    setGroupMockData(groupMockData.filter((groupId) => groupId.id !== id));
  };

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
          {groupMockData.map((group) => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>{group.location}</td>
              <td>{group.events.map((event) => event)}</td>
              <td>
                <Button label="Edit" type="button" design="edit" />
                <Button
                  label="Delete"
                  type="button"
                  design="delete"
                  onClick={() => handleDelete(group.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
