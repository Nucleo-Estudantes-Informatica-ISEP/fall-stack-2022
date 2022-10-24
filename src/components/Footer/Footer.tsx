import { FunctionComponent } from 'react';
interface FooterProps {
  
}
 
const Footer: FunctionComponent<FooterProps> = () => {
  return (
        <div className="container-fluid text-center">
      <div id="last-edition-wrapper">
        <div id="footer-animation" className="my-4">
          <a id="last-edition-link"
            href="https://fallstack2020.nei-isep.org"
            target="_blank">
            <div id="last-edition">Edição Anterior</div>
          </a>
        <div/>
      <div/>

      <div id="logo-nei" className="d-flex align-items-center
        justify-content-center my-3">
        <div id="footer-animation" className="my-3">
          <a href="https://www.nei-isep.org/" target="_blank">
            <img id="logo" className="img-fluid mx-auto d-block"
              src="assets/img/logo-white.png" height="200px"
              width="350px" alt="NEI-ISEP Icon"/>
          </a>
        </div>
      </div>

      <p id="social-media" className="my-3">
        <a className="facebook" href="https://www.facebook.com/nei.isep"
          target="_blank" rel="noreferrer">
          <i className="bi bi-facebook fb-btn"></i></a>
        <a className="twitter" href="https://twitter.com/nei_isep"
          target="_blank"
          rel="noreferrer"/>
        <p/>

          <i className="bi bi-twitter tt-btn"></i><a/>
        <a className="instagram" href="https://www.instagram.com/nei_isep"
          target="_blank" rel="noreferrer">
          <i className="bi bi-instagram ig-btn"></i></a>
        <a className="linkedin" href="https://www.linkedin.com/company/nei-isep"
          target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin li-btn"></i></a>

      <h4 id="direitos" className="text-light fs-6">Copyright &copy;
        All rights reserved.
      </h4>
    <div/>
  );
 
export default Footer;