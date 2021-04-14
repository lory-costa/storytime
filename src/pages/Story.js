export default function Story(props) {
  const form = localStorage.getItem("form");
  const parsedForm = JSON.parse(form);

  //const form = props.state.forms;

  return (
    <div>
      <h1 className='title'>STORY</h1>
      <article>
        <p>
          "Once upon a time, there was a little girl named
          <strong> {parsedForm["Your name"]}</strong>. She lived in a beautiful
          castle and spent her days playing with the birds and friendly animals
          that lived in the forest nearby.
        </p>
        <p>
          One day,
          <strong> {parsedForm["Your name"]}</strong> decided to go on an
          adventure. She left her castle, carrying her friend Deedee with her.
        </p>
        <p>
          They walked for a long time until they reached a blue lagoon. There
          they met a mermaid who lived in the lagoon.
        </p>
        <p>
          <strong> {parsedForm["Your name"]}</strong> and the mermaid became
          friends and visited each other often."
        </p>
      </article>
    </div>
  );
}
