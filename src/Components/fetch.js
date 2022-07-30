import { useState, useEffect } from "react";

function Quote() {
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      "Content-Type": "application/json",
    };

    fetch("quotes.json", options)
      .then((response) => response.json())
      .then((data) => {
        setLoaded(true);
        const items = eval(data);
        setItems(items);
        //keyQuotes();
        //return items;
      })
      .catch((error) => {
        setError(error);
      });

    const interval = setInterval(() => {
      getRandomQuote();
    }, 3000);
    return () => clearInterval(interval);
  }, [useState]);

  const getQuotes = () => {
    var headers = new Headers();
    headers.append("pragma", "no-cache");
    headers.append("cache-control", "no-cache");

    const options = {
      method: "GET",
      "Content-Type": "application/json",
    };

    fetch("quotes.json", options)
      .then((response) => response.json())
      .then(
        (data) => {
          setLoaded(true);
          setItems(eval(data));
          keyQuotes();
        },
        (error) => {
          setError(error);
        }
      );
  };

  const getRandomQuote = () => {
    console.log("getRandomQuote-loaded " + loaded);
    if (items.length > 0) {
      const randomIndex = Math.floor(Math.random() * 50);
      setItem(items[randomIndex]);
      console.log(items[randomIndex]);
    }
    console.log(items);
  };

  const keyQuotes = () => {
    console.log("keyQuotes");
    for (let i = 0; i < items.length; i++) {
      items[i].c = i + 1;
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {keyQuotes()}
        <h2>{item.q}</h2>
        <h5>
          <center>
            <i>{item.a}</i>
          </center>
        </h5>
        {/*items.map((item) => (
          <li key={item.c}>{item.q}</li>
        ))*/}
      </ul>
    );
  }
}

export default Quote;
