"use client";

import Image from "next/image";
import certificatesList from "@/data/certificatesList";

export const CertificatesSection = () => {
  return (
    <div id="certificates" className="certificates-section">
      <div className="certificate-head-banner">
        <h2>📜 Certifications & Achievements</h2>
        <p>Proof of my successful completion of various programs.</p>
      </div>

      <div className="certificate-grid-container">
        {certificatesList.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-image">
              <Image
                src={cert.image}
                alt={cert.title}
                width={300}
                height={200}
              />
            </div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              {cert.topic && <h5>{cert.topic}</h5>}
              <p>
                {cert.issuer} | {cert.year}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-base button-circle mt-6 block"
                >
                  View Certificate 🔗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="app-layout-cross-section-line"></div>
    </div>
  );
};

export default CertificatesSection;
