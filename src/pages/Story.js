import { Link } from "react-router-dom";

export default function Story(props) {
  const form = localStorage.getItem("form");
  const parsedForm = JSON.parse(form);

  const getGender = (option) => {
    const gender = parsedForm["Gender"];
    if (gender === "boy") {
      return option === "possessive" ? "his" : "He";
    } else if (gender === "girl") {
      return option === "possessive" ? "her" : "She";
    } else {
      return option === "possessive" ? "their" : "They";
    }
  };

  return (
    <div>
      <h1 className='title' id='storyTitle'>
        Once upon a time...
      </h1>
      <article>
        <p>
          ... there was a little
          <strong> {parsedForm["Gender"]}</strong> named
          <strong> {parsedForm["Name"]}</strong> who lived in a
          <strong> {parsedForm["Place"]}</strong> and spent{" "}
          {getGender("possessive")} days playing with the friendly animals who
          lived in the forest nearby.
        </p>
        <p>
          One day,
          <strong> {parsedForm["Name"]}</strong> decided to go on an adventure.{" "}
          {getGender()} left the <strong>{parsedForm["Place"]}</strong>, with{" "}
          {getGender("possessive")} friend{" "}
          <strong>{parsedForm["Best Friend"]}</strong>.
        </p>
        <p>
          They walked for a long time until they reached a{" "}
          <strong>{parsedForm["Special Place"]}</strong>. There they met a{" "}
          <strong>{parsedForm["Character"]}</strong> who lived in the{" "}
          <strong>{parsedForm["Special Place"]}</strong>.
        </p>
        <p>
          <strong> {parsedForm["Name"]}</strong> and the{" "}
          <strong>{parsedForm["Character"]}</strong> became friends and visited
          each other often.
        </p>
      </article>
      <button className='button'>
        <Link to='/'>Go back</Link>
      </button>
    </div>
  );
}
