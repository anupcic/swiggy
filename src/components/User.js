const User = (props) => {
  return (
    <div className="user-card">
      <h3>Name : {props.name}</h3>
      <h3>Location: Sadiq Nagar</h3>
      <h4>Contact: anupk1790@gmail.com</h4>
    </div>
  );
};

export default User;
