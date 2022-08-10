import React, { Component } from 'react';

export default class ResumeFooter extends Component {

  render() {
    return(
      <div>      
        <div class="wrapper">
          <div class="push">
            &copy;  Chris Marasco  {new Date().getUTCFullYear()}
            | <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B2q0O%2Bb5iR4GIFGF%2F92EWCg%3D%3D">LinkedIn</a>
          </div>
        </div>
        <footer class="footer"></footer>
      </div>
    );
  }

}