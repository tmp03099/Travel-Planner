import AddTrip from "../../components/AddTrip.js/AddTrip";
import { checkToken } from "../../utilities/users-service";

function NewTrip() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <div>
      <h1>NewTrip</h1>
      <AddTrip />
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  );
}

export default NewTrip;
