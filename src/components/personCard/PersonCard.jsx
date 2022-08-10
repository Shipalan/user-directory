const PersonCard = (props) => {
  const { currentUser, setCurrentUser, users } = props;
  const { name, location, title, employer, movies } = currentUser;

  const index = users.findIndex((u) => u === currentUser);

  return (
    <div className="App">
      <main className="main">
        <section className="personCard">
          <div className="containerDiv">
            <div className="currentNumber">
              <h2>
                {index + 1}/{users.length}
              </h2>
            </div>
            <div className="personInfo">
              <article className="name">
                <h2>{name}</h2>
              </article>
              <article className="details">
                <p>
                  <span className="label">From:</span> {location}
                </p>
                <p>
                  <span className="label">Job Title:</span> {title}
                </p>
                <p>
                  <span className="label">Employer:</span> {employer}
                </p>
              </article>
              <article className="favorite_movies">
                <h3 className="label">Favorite Movies:</h3>
                <div className="moviesList">
                  <ol type="1">
                    {movies.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ol>
                </div>
              </article>
            </div>
          </div>
        </section>
        <div className="btnsDiv">
          <h3
            className="links"
            onClick={() => {
              if (index !== 0) {
                setCurrentUser(users[index - 1]);
              }
            }}
          >
            Previous
          </h3>
          <div className="btnGroup">
            <button className="btns">Edit</button>
            <button className="btns">Delete</button>
            <button className="btns">New</button>
          </div>
          <h3
            className="links"
            onClick={() => {
              if (index + 2 <= users.length) {
                setCurrentUser(users[index + 1]);
              }
            }}
          >
            Next
          </h3>
        </div>
      </main>
    </div>
  );
};

export default PersonCard;
