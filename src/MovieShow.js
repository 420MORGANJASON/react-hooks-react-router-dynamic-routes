function MovieShow(props) {
    const { id } = props.match.params;
  
    return (
      <div>
        <h2>Movie {id}</h2>
        <p>This is the details page for movie {id}.</p>
      </div>
    );
  }
  
  export default MovieShow;
  