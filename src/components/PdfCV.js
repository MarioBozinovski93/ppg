import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import profileImage from '../assets/profile.jpg'; // Path to the profile image

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 12,
    color: '#555',
  },
  contactItem: {
    marginBottom: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: '50%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  list: {
    marginLeft: 20,
    fontSize: 12,
    lineHeight: 1.5,
  },
  listItem: {
    marginBottom: 3,
  },
});

const PdfCV = ({aboutMe, personalInfo, skills, experiences, education, languages}) => {
  return (
    <Document>
      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{personalInfo.name}</Text>
            <Text style={styles.position}>{personalInfo.position}</Text>
          </View>
          <Image src={profileImage} style={styles.profileImage} />
        </View>

        {/* Contact Info */}
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>{personalInfo.phone}</Text>
          <Text style={styles.contactItem}>{personalInfo.email}</Text>
          <Text style={styles.contactItem}>{personalInfo.location}</Text>
        </View>

        {/* About Me Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.list}>{aboutMe}</Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>Main Skills:</Text>
            {skills.main.map((skill, index) => (
              <Text key={index} style={styles.listItem}>{skill}</Text>
            ))}
            <Text style={styles.listItem}>Other Skills:</Text>
            {skills.other.map((skill, index) => (
              <Text key={index} style={styles.listItem}>{skill}</Text>
            ))}
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experiences.map((exp, index) => (
            <View key={index}>
              <Text style={styles.listItem}>
                <Text style={{ fontWeight: 'bold' }}>{exp.title}</Text> at <Text style={{ fontStyle: 'italic' }}>{exp.company}</Text>
                {' '}({exp.duration})
              </Text>
              <Text style={styles.listItem}>Projects:</Text>
              {exp.projects.map((project, index) => (
                <Text key={index} style={styles.listItem}>- {project}</Text>
              ))}
              <Text style={styles.listItem}>Skills: {exp.skills.join(', ')}</Text>
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>{education.degree}</Text> at <Text style={{ fontStyle: 'italic' }}>{education.institution}</Text>
            {' '}({education.duration})
          </Text>
        </View>

        {/* Languages Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          {languages.map((language, index) => (
            <Text key={index} style={styles.listItem}>{language.lang}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PdfCV;
