import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'react-grid-system';

const Index = () => (
  <Container>
    <Row>
      <Col id="home" md={8} offset={{md: 2}}>
        <h2>Bienvenue sur le comparateur de programmes de la France Insoumise !</h2>
        <p>
          Ce site a été réalisé par des membres du <a href="http://discord.insoumis.online/" target="_blank">Discord Insoumis</a>. C'est une initiative citoyenne qui n'a aucun lien direct avec l'<a href="https://jlm2017.fr/" target="_blank">équipe de campagne officielle de Jean-Luc Mélenchon</a>.
        </p>
        <p>
          Le but de ce comparateur est avant tout d'aider nos concitoyens à s'informer sur le programme de la France Insoumise, <a href="https://laec.fr/" target="_blank">l'Avenir en Commun</a>, mais aussi de leur permettre de le comparer à celui d'autres candidats. Nous sommes conscients que tous les candidats à la présidentielle ne sont pas présents et le regrettons sincèrement, mais notre petit effectif ne nous permettait malheureusement pas de traiter les programmes des 11 candidats à la présidentielle dans le peu de temps qui nous était imparti.
        </p>
        <p>
          Si vous êtes curieux du programme des candidats manquants vous pourrez les trouver dans cette liste&nbsp;:
        </p>
        <ul>
          <li>
            <a href="http://www.nathalie-arthaud.info/nos-positions" target="_blank">Nathalie Arthaud (Lutte Ouvrière)</a>
          </li>
          <li>
             <a href="https://www.upr.fr/programme-elections-presidentielles-france" target="_blank">François Asselineau (Union Populaire Républicaine)</a>
          </li>
          <li>
            <a href="http://www.cheminade2017.fr/-Projet-2017-" target="_blank">Jacques Cheminade (Solidarité et progrès)</a>
          </li>
          <li>
            <a href="http://www.nda-2017.fr/themes.html" target="_blank">Nicolas Dupont-Aignan (Debout la France)</a>
          </li>
          <li>
            <a href="http://jeanlassalle2017.fr/le-projet-de-jean-lassalle/" target="_blank">Jean Lassalle (Résistons)</a>
          </li>
          <li>
            <a href="https://poutou2017.org/programme" target="_blank">Philippe Poutou (Nouveau Parti Anticapitaliste)</a>
          </li>
        </ul>
        <p>Étant une équipe de militants de la France Insoumise, notre regard sur les programmes ne peut être complètement neutre. Néanmoins, nous nous sommes efforcés d'être le plus impartial possible en réalisant ce comparatif pour laisser à chacun l'occasion de se forger sa propre opinion.</p>
        <p>
          Pour chaque thème que nous comparons, nous avons rédigé un résumé qui nous semblait refléter aussi explicitement que possible ce que chaque programme proposait. Chacun de ces résumés est accompagné d'un extrait de la source sur laquelle nous nous sommes basés. Vous pouvez y accéder en cliquant sur le bouton <i className="fa fa-plus" aria-hidden="true"></i>. Vous y trouverez également un lien menant à la source en question.
        </p>
        <p>Un <Link to="/contact/">formulaire de contact</Link> est à votre disposition si vous avez des remarques (pertinentes, constructives et polies) à nous adresser.</p>
      </Col>
    </Row>
  </Container>
);

export default Index;
