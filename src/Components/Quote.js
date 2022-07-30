import quoteData from "../Data/quoteData";

function Quote() {
  const randomIndex = Math.floor(Math.random() * quoteData.length);
  const quote = quoteData[randomIndex];
  return (
    <>
      <section id="quote">
        <p>
          <i>{quote.q}</i>
        </p>
        <small>
          <center>-{quote.a}</center>
        </small>
      </section>
    </>
  );
}

export default Quote;
