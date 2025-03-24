function AddToDo() {
  return (
    <div>
      <div class="row my-row">
        <div class="col-5">
          <input type="text" placeholder="Enter your task here." />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button my-button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
