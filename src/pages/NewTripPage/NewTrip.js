import AddTrip from "../../components/AddTrip/AddTrip";
import { checkToken } from "../../utilities/users-service";

function NewTrip() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <div>
      <AddTrip />
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  );
}

export default NewTrip;
