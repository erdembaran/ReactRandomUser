function UserContainer({ userInfo }) {
  console.log({ userInfo });
  return (
    <div>
      <div className="userContainer">
        <img src={userInfo[0]} alt="" />
        <div className="nameContainer">
          <p>
            {userInfo[1]} {userInfo[2]}
          </p>
        </div>
        <p>{userInfo[3]}</p>
      </div>
    </div>
  );
}

export default UserContainer;
