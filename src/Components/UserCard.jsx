import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user, loggedInUser }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };
  console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl max-h-[400px] max-w-[250px] text-black">
      <div className="p-2 flex justify-center">
        <img src={photoUrl} alt="photo" className="h-[200px] w-[95%] rounded" />
      </div>
      <div className="p-3">
        <h3 className="card-title">{firstName + " " + lastName}</h3>
        <div className="text-sm">
          {age && gender && <div>{age + ", " + gender}</div>}
          <div>{about}</div>
        </div>

        {!loggedInUser && (
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-primary max-h-8 min-h-8"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary max-h-8 min-h-8"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserCard;
