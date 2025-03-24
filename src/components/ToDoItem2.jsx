import React from "react";

function ToDoItem2() {
  let todoname = 'Go to College';
  let tododate = '2/11/24';
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

export default ToDoItem2;
