function ListGroup() {
  const items = ["Christchurch", "Nelson", "Invercargill"];

  if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>No items</p>
      </>
    );
  }
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
