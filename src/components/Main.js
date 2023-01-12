import React, { Component, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

import emptyCV from './utils/emptyCV';

class Main extends Component {
  constructor() {
    super();

    this.state = emptyCV;
  }

  handleChangePersonal = (e) => {
    const { name, value } = e.target;
    let personalInfo = this.state.personalInfo;

    personalInfo[name] = value;

    this.setState({
      personalInfo: this.state.personalInfo,
    });
  };

  // -------------------------------------------------------------------------

  handleChangeEducation = (e) => {
    const { id, name, value } = e.target;
    let educationCopy = [...this.state.education];
    let education = educationCopy.find((education) => education.id === id);

    education[name] = value;

    this.setState({
      education: [...educationCopy],
    });
  };

  handleAddEducation = () => {
    const newEducation = {
      id: uuidv4(),
      university: '',
      program: '',
      degree: '',
      graduationDate: '',
      gpa: '',
    };

    this.setState({
      education: [...this.state.education, newEducation],
    });
  };

  handleDeleteEducation = (e) => {
    const { id } = e.target;
    let educationCopy = [...this.state.education];

    educationCopy.forEach((exp, index) => {
      if (exp.id === id) {
        educationCopy.splice(index, 1);
      }
    });

    this.setState({
      education: [...educationCopy],
    });
  };

  // -------------------------------------------------------------------------

  handleChangeExperience = (e) => {
    const { id, name, value } = e.target;
    let experienceCopy = [...this.state.experience];
    let experience = experienceCopy.find((experience) => experience.id === id);

    experience[name] = value;

    this.setState({
      experience: [...experienceCopy],
    });
  };

  handleAddExperience = () => {
    const newExperience = {
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ['', '', ''],
    };

    this.setState({
      experience: [...this.state.experience, newExperience],
    });
  };

  handleDeleteExperience = (e) => {
    const { id } = e.target;
    let experienceCopy = [...this.state.experience];

    experienceCopy.forEach((exp, index) => {
      if (exp.id === id) {
        experienceCopy.splice(index, 1);
      }
    });

    this.setState({
      experience: [...experienceCopy],
    });
  };

  handleChangeExperienceDescription = (e) => {
    const { id, name, value } = e.target;
    const index = e.target.dataset.index;
    let experienceCopy = [...this.state.experience];

    experienceCopy.forEach((exp) => {
      if (exp.id === id) {
        exp[name][index] = value;
      }
    });

    this.setState({
      experience: [...experienceCopy],
    });
  };

  handleAddExperienceDescription = (e) => {
    const { id } = e.target;
    let experienceCopy = [...this.state.experience];

    experienceCopy.forEach((exp) => {
      if (exp.id === id) {
        exp.description.push('');
      }
    });

    this.setState({
      experience: [...experienceCopy],
    });
  };

  handleDeleteExperienceDescription = (e) => {
    const { id } = e.target;
    const index = e.target.dataset.index;
    let experienceCopy = [...this.state.experience];

    experienceCopy.forEach((exp) => {
      if (exp.id === id) {
        exp.description.splice(index, 1);
      }
    });

    this.setState({
      experience: [...experienceCopy],
    });
  };

  // -------------------------------------------------------------------------

  render() {
    const { personalInfo, education, experience } = this.state;
    const {
      handleChangePersonal,
      handleChangeEducation,
      handleAddEducation,
      handleDeleteEducation,
      handleChangeExperience,
      handleAddExperience,
      handleDeleteExperience,
      handleChangeExperienceDescription,
      handleAddExperienceDescription,
      handleDeleteExperienceDescription,
    } = this;

    return (
      <div className='cv-container'>
        <div className='cv-form-wrapper'>
          <CVForm
            personalInfo={personalInfo}
            handleChangePersonal={handleChangePersonal}
            education={education}
            handleChangeEducation={handleChangeEducation}
            handleAddEducation={handleAddEducation}
            handleDeleteEducation={handleDeleteEducation}
            experience={experience}
            handleChangeExperience={handleChangeExperience}
            handleAddExperience={handleAddExperience}
            handleDeleteExperience={handleDeleteExperience}
            handleChangeExperienceDescription={
              handleChangeExperienceDescription
            }
            handleAddExperienceDescription={handleAddExperienceDescription}
            handleDeleteExperienceDescription={
              handleDeleteExperienceDescription
            }
          ></CVForm>
        </div>
        <div className='cv-preview-wrapper'>
          <CVPreview
            personalInfo={personalInfo}
            education={education}
            experience={experience}
          ></CVPreview>
        </div>
      </div>
    );
  }
}

export default Main;
