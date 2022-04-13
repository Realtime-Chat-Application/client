import users from "../users";

const getuserData = async (props) => {
  return users.find(user => user.username === props.username && user.password === props.password);
}

export default  getuserData;