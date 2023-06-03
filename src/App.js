import "./App.css";
import { useEffect, useState } from "react";
import UserContainer from "./Components/UserContainer";

function App() {
  const [getUser, setGetUser] = useState([]);

  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) =>
        setGetUser([
          data.results[0].picture.large,
          data.results[0].name.first,
          data.results[0].name.last,
          data.results[0].email,
        ])
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    getData();
  };

  return (
    <div className="appContainer">
      <UserContainer userInfo={getUser} />
      <button onClick={handleClick}>Get Random User</button>
    </div>
  );
}

export default App;
