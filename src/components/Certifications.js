import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useText } from "../context/TextContext";

const Certifications = () => {
  const textData = useText();
  const certifications = textData.certifications;
  return (
    <Box id="certifications" sx={{ padding: 4, backgroundColor: "#f5f5f5", marginBottom: "10px" }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Certifications
        </Typography>

        {certifications.map((cert, index) => (
          <Grid container spacing={3} alignItems="center" key={index} sx={{ marginBottom: 2 }}>
            {/* Left: Certification Logo (1/3 width) */}
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <img
                src={cert.logo}
                alt={`${cert.issuer} Logo`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>

            {/* Right: Certification Details (2/3 width) */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" fontWeight="bold">
                {cert.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {cert.issuer}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Issued {cert.issued} · Expired {cert.expired}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Credential ID:{" "}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  {cert.credentialId}
                </a>
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default Certifications;