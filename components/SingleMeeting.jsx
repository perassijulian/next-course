import styles from "../styles/SingleMeeting.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

const SingleMeeting = ({ meeting }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await axios.delete(`/api/${router.query.meetID}`);
    await router.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1>{meeting.title}</h1>
        <img
          className={styles.img}
          src={meeting.image}
          alt="meetup place"
        />
        <h2 className={styles.address}>{meeting.location}</h2>
        <p className={styles.description}>{meeting.description}</p>
        <div className={styles.buttonWrapper}>
          <button
            onClick={() => {
              router.push(`/meeting/${router.query.meetID}/edit`);
            }}
            className={styles.button}
          >
            Edit meeting
          </button>
          <button
            onClick={handleDelete}
            className={styles.button}
            style={{ backgroundColor: "red" }}
          >
            Delete meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMeeting;
