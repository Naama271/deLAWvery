
import EditIcon from "@material-ui/icons/Edit";
import Button from "@mui/material/Button";

export default function Card({ data, deleteOrder, updateOrder }) {
  const itemsLength = data.length;
  const renderData = data.map((user) => {
    return (
      <div className="item" key={user.id}>
        <Button onClick={() => deleteOrder(user.id)}>X</Button>
        <Button onClick={() => updateOrder(user.id)}>
          <EditIcon />
        </Button>
        <h4> הזמנה {user.orderNum}</h4>
       {user.firstName} {user.lastName}
       <br/>
        {user.date}
      </div>
    );
  });
  return (
    <div className="list">
      <h3>רשימת הזמנות</h3>
      כמות הזמנות: {itemsLength}
      {renderData}
    </div>
  );
}
