const UserInfo = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.gender}</p>
    </>
  );
};

export default UserInfo