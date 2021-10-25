import { Link } from "react-router-dom";

export default function Story() {
  const form = localStorage.getItem("form");
  const parsedForm = form && JSON.parse(form);

  const getGender = (option: string | undefined) => {
    const gender = parsedForm["gender"];
    if (gender === "boy") {
      return option === "possessive" ? "his" : "He";
    } else if (gender === "girl") {
      return option === "possessive" ? "her" : "She";
    } else {
      return option === "possessive" ? "their" : "They";
    }
  };

  const capitalise = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div>
      <h1 className='title' id='storyTitle'>
        Once upon a time...
      </h1>
      <article>
        <p>
          ... there was a little
          <strong> {parsedForm["gender"]}</strong> named
          <strong> {capitalise(parsedForm["name"])}</strong> who lived in a
          <strong> {parsedForm["place"]}</strong> and spent{" "}
          {getGender("possessive")} days playing with the friendly animals who
          lived in the forest nearby.
        </p>
        <p>
          One day,
          <strong> {capitalise(parsedForm["name"])}</strong> decided to go on an
          adventure. {getGender(undefined)} left the{" "}
          <strong>{parsedForm["place"]}</strong> with {getGender("possessive")}{" "}
          best friend <strong>{capitalise(parsedForm["bestFriend"])}</strong>.
        </p>
        <p>
          They walked for a long time until they reached{" "}
          <strong>{parsedForm["specialPlace"]}</strong>, where they met a{" "}
          <strong>{parsedForm["character"]}</strong>.
        </p>
        <p>
          <strong> {capitalise(parsedForm["name"])}</strong> and the{" "}
          <strong>{parsedForm["character"]}</strong> became friends and lived
          happily ever after.
        </p>
      </article>
      <button className='button'>
        <Link to='/'>Go back</Link>
      </button>
    </div>
  );
}
