import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

import emptyCV from './utils/emptyCV';
import exampleCV from './utils/exampleCV';

class Main extends Component {
  constructor() {
    super();

    this.state = emptyCV;
  }

  // -------------------------------------------------------------------------

  handleLoadEmptyCV = (e) => {
    this.setState(emptyCV);
  };

  handleLoadExampleCV = (e) => {
    this.setState(exampleCV);
  };

  // -------------------------------------------------------------------------

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

    if (window.confirm('Delete this education list?')) {
      educationCopy.forEach((exp, index) => {
        if (exp.id === id) {
          educationCopy.splice(index, 1);
        }
      });
    }

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
      location: '',
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

    if (window.confirm('Delete this experience list?')) {
      experienceCopy.forEach((exp, index) => {
        if (exp.id === id) {
          experienceCopy.splice(index, 1);
        }
      });
    }

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

    if (window.confirm('Do you want to delete this description?')) {
      experienceCopy.forEach((exp) => {
        if (exp.id === id) {
          exp.description.splice(index, 1);
        }
      });
    }

    this.setState({
      experience: [...experienceCopy],
    });
  };

  // -------------------------------------------------------------------------

  handleSkillsChange = (e) => {
    const { id, name, value } = e.target;
    let skillsCopy = [...this.state.skills];
    let skill = skillsCopy.find((skill) => skill.id === id);

    skill[name] = value;

    console.log(skill.name);
    console.log(skill.lists);

    this.setState({
      skills: [...skillsCopy],
    });
  };

  handleAddSkills = () => {
    const newSkills = {
      id: uuidv4(),
      name: '',
      lists: '',
    };

    this.setState({
      skills: [...this.state.skills, newSkills],
    });
  };

  handleDeleteSkills = (e) => {
    const { id } = e.target;
    let skillsCopy = [...this.state.skills];

    if (window.confirm('Delete this skills list?')) {
      skillsCopy.forEach((skill, index) => {
        if (skill.id === id) {
          skillsCopy.splice(index, 1);
        }
      });
    }

    this.setState({
      skills: [...skillsCopy],
    });
  };

  // -------------------------------------------------------------------------

  render() {
    const { personalInfo, education, experience, skills } = this.state;
    const {
      handleLoadEmptyCV,
      handleLoadExampleCV,
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
      handleSkillsChange,
      handleAddSkills,
      handleDeleteSkills,
    } = this;

    return (
      <div className='cv-container'>
        <CVForm
          handleLoadEmptyCV={handleLoadEmptyCV}
          handleLoadExampleCV={handleLoadExampleCV}
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
          handleChangeExperienceDescription={handleChangeExperienceDescription}
          handleAddExperienceDescription={handleAddExperienceDescription}
          handleDeleteExperienceDescription={handleDeleteExperienceDescription}
          skills={skills}
          handleSkillsChange={handleSkillsChange}
          handleAddSkills={handleAddSkills}
          handleDeleteSkills={handleDeleteSkills}
        ></CVForm>
        <CVPreview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          skills={skills}
        ></CVPreview>
      </div>
    );
  }
}

export default Main;
