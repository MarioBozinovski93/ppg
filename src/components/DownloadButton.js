import React from 'react';
import { jsPDF } from 'jspdf';
import { useText } from '../context/TextContext';
import './download.css';

const generateATSResume = (textData) => {
  const doc = new jsPDF();
  
  const margin = 14;
  const topMargin = 20;
  const bottomMargin = 20;
  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;
  const lineHeight = 6;
  const columnSpacing = 12;
  const columnWidth = (pageWidth - 2 * margin - columnSpacing) / 2;
  let yPos = topMargin;

  const addLineDivider = () => {
    doc.setDrawColor(0, 0, 0);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += lineHeight;
  };

  const checkPageSpace = (heightRequired) => {
    if (yPos + heightRequired > pageHeight - bottomMargin) {
      doc.addPage();
      yPos = topMargin;
    }
  };

  doc.setFontSize(18);
  doc.text('Curriculum Vitae', margin, yPos);
  doc.setFontSize(12);
  yPos += 10;

  // Personal Info
  checkPageSpace(50);
  doc.text(`Name: ${textData.personalInfo.name}`, margin, yPos);
  doc.text(`Position: ${textData.personalInfo.position}`, margin, yPos + lineHeight);
  doc.text(`Phone: ${textData.personalInfo.phone}`, margin, yPos + 2 * lineHeight);
  doc.text(`Email: ${textData.personalInfo.email}`, margin, yPos + 3 * lineHeight);
  doc.text(`Location: ${textData.personalInfo.location}`, margin, yPos + 4 * lineHeight);
  doc.text(`LinkedIn: ${textData.personalInfo.linkedin}`, margin, yPos + 5 * lineHeight);
  doc.text(`Birth Date: ${textData.personalInfo.birthDate}`, margin, yPos + 6 * lineHeight);
  yPos += 8 * lineHeight;

  addLineDivider();

  // About Me
  checkPageSpace(30);
  doc.setFontSize(14);
  doc.text('About Me', margin, yPos);
  doc.setFontSize(12);
  doc.text(textData.aboutMe, margin, yPos + 7, { maxWidth: pageWidth - 2 * margin });
  yPos += (textData.aboutMe.split('\n').length + 1) * lineHeight + 20;

  addLineDivider();

  // Main Skills (Two Columns)
  checkPageSpace(50);
  doc.setFontSize(14);
  doc.text('Main Skills', margin, yPos);
  doc.setFontSize(12);
  const mainSkillColumns = [
    textData.skills.main.slice(0, Math.ceil(textData.skills.main.length / 2)),
    textData.skills.main.slice(Math.ceil(textData.skills.main.length / 2))
  ];

  mainSkillColumns.forEach((column, colIndex) => {
    column.forEach((skill, index) => {
      doc.text(skill, margin + colIndex * (columnWidth + columnSpacing), yPos + 10 + index * lineHeight, {
        maxWidth: columnWidth
      });
    });
  });

  yPos += Math.max(mainSkillColumns[0].length, mainSkillColumns[1].length) * lineHeight + 20;
  addLineDivider();

  // Other Skills (Two Columns)
  checkPageSpace(50);
  doc.setFontSize(14);
  doc.text('Other Skills', margin, yPos);
  doc.setFontSize(12);
  const otherSkillColumns = [
    textData.skills.other.slice(0, Math.ceil(textData.skills.other.length / 2)),
    textData.skills.other.slice(Math.ceil(textData.skills.other.length / 2))
  ];

  otherSkillColumns.forEach((column, colIndex) => {
    column.forEach((skill, index) => {
      doc.text(skill, margin + colIndex * (columnWidth + columnSpacing), yPos + 10 + index * lineHeight, {
        maxWidth: columnWidth
      });
    });
  });

  yPos += Math.max(otherSkillColumns[0].length, otherSkillColumns[1].length) * lineHeight + 20;
  addLineDivider();

  // Experience
  checkPageSpace(60);
  doc.setFontSize(14);
  doc.text('Experience', margin, yPos);
  doc.setFontSize(12);

  textData.experiences.forEach((exp) => {
    checkPageSpace(40);
    yPos += 10;
    doc.setFont('helvetica', 'bold');
    doc.text(`${exp.title}`, margin, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(`${exp.company} (${exp.duration})`, margin, yPos + lineHeight);
    doc.text(`Company URL: ${exp.companyUrl}`, margin, yPos + 2 * lineHeight);

    exp.projects.forEach((project, projectIndex) => {
      doc.text(`\u2022 ${project}`, margin + 5, yPos + (projectIndex + 4) * lineHeight, {
        maxWidth: pageWidth - 2 * margin
      });
    });

    yPos += (exp.projects.length + 5) * lineHeight;
  });

  addLineDivider();

  // Languages (Two Columns)
  checkPageSpace(40);
  doc.setFontSize(14);
  doc.text('Languages', margin, yPos);
  doc.setFontSize(12);

  const languageColumns = [
    textData.languages.slice(0, Math.ceil(textData.languages.length / 2)),
    textData.languages.slice(Math.ceil(textData.languages.length / 2))
  ];

  languageColumns.forEach((column, colIndex) => {
    column.forEach((lang, index) => {
      const currentY = yPos + 10 + index * lineHeight;
      doc.text(lang.lang, margin + colIndex * (pageWidth / 2 - margin), currentY, { maxWidth: pageWidth / 2 - margin });
    });
  });
  yPos += languageColumns[0].length * lineHeight + 20;

  addLineDivider();

  // Education
  checkPageSpace(40);
  doc.setFontSize(14);
  doc.text('Education', margin, yPos);
  doc.setFontSize(12);
  doc.text(`Degree: ${textData.education.degree}`, margin, yPos + 10, { maxWidth: pageWidth - 2 * margin });
  doc.text(`Institution: ${textData.education.institution}`, margin, yPos + 15, { maxWidth: pageWidth - 2 * margin });
  doc.text(`Duration: ${textData.education.duration}`, margin, yPos + 20, { maxWidth: pageWidth - 2 * margin });
  yPos += 40;

  addLineDivider();
  
  // === CERTIFICATIONS (NEW SECTION) ===
  if (textData.certifications && textData.certifications.length > 0) {
    checkPageSpace(50);
    doc.setFontSize(14);
    doc.text('Certifications', margin, yPos);
    doc.setFontSize(12);
    yPos += 10;

    textData.certifications.forEach((cert) => {
      checkPageSpace(30);
      doc.setFont('helvetica', 'bold');
      doc.text(cert.title, margin, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(`${cert.issuer} - Issued ${cert.issued} · Expired ${cert.expired}`, margin, yPos + lineHeight);
      doc.text(`Credential ID: ${cert.credentialId}`, margin, yPos + 2 * lineHeight);
      doc.text(`Url: ${cert.link}`, margin, yPos + 3 * lineHeight);
      yPos += 4 * lineHeight;
    });

    addLineDivider();
  }

  doc.save('ATS_Friendly_CV.pdf');
};

const DownloadButton = () => {
  const textData = useText();

  const handleDownload = () => {
    if (textData) {
      generateATSResume(textData);
    }
  };

  return (
    <div className="imgContainer">
        <img
          className='img-floppy'
          src={window.location.origin + "/logo192.png"}
          alt="Profile"
          onClick={handleDownload}
        />
        <div className="overlay" onClick={handleDownload}>
        <div className="text">Download ATS CV</div>
  </div>
</div>

  );
};

export default DownloadButton;
