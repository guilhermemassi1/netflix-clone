import "./styles.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Originais Netlix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Em Alta" fetchUrl={requests.fetchTrending} />
      <Row title="Melhores Avaliados" fetchUrl={requests.fetchTopRated} />
      <Row title="Filmes de Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Filmes de Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Filmes de Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Filmes de Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
