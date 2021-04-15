import { Link } from "react-router-dom";

export default function Story(props) {
  const form = localStorage.getItem("form");
  const parsedForm = JSON.parse(form);

  //const form = props.state.forms;

  return (
    <div>
      <h1 className='title'>STORY</h1>
      <article>
        <p>
          "Once upon a time, there was a little{" "}
          <strong>{parsedForm["Gender"]}</strong> named
          <strong> {parsedForm["Your name"]}</strong> who lived in a beautiful
          <strong> {parsedForm["Place"]}</strong> and spent the days playing
          with the birds and friendly animals that lived in the forest nearby.
        </p>
        <p>
          One day,
          <strong> {parsedForm["Your name"]}</strong> decided to go on an
          adventure. She left the <strong>{parsedForm["Place"]}</strong>, with
          her friend <strong>{parsedForm["Best Friend"]}</strong>.
        </p>
        <p>
          They walked for a long time until they reached a{" "}
          <strong>{parsedForm["Special Place"]}</strong>. There they met a{" "}
          <strong>{parsedForm["Another Friend"]}</strong> who lived in the{" "}
          <strong>{parsedForm["Special Place"]}</strong>.
        </p>
        <p>
          <strong> {parsedForm["Your name"]}</strong> and the{" "}
          <strong>{parsedForm["Another Friend"]}</strong> became friends and
          visited each other often."
        </p>
      </article>
      <button className='button'>
        <Link to='/'>Go back</Link>
      </button>
    </div>
  );
}
