import React, { Component } from 'react';

export default class ResumeHeader extends Component 
{
  render() {
    return(
      <div class="resume-header">
        <h1 class="resume-main-title">Chris Marasco</h1>        
        <span class="resume-sub-title">Software Engineer</span>
        {/*TODO: Make/style better description <p></p> */}
        <p class="resume-bio">Learning new things and finding different ways to solve a problem is what gets me out of bed in the morning!</p>
      </div>
    );
  }
}
