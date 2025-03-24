import React from "react";

function ToDoItem1() {
  let todoname = 'Buy Milk';
  let tododate = '4/10/23';
  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button my-button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;
