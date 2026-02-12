import React, { useState, useEffect } from "react";

export default function ImageGallery({ onBack, title }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageUrl = "https://galvestonmonthly.com/food-drink/boards2.png"; 
    setImages(Array.from({ length: 12 }, () => imageUrl));
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes modalFade {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);
  
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h5 style={styles.title}>{title} Collection</h5>

        <div style={styles.grid}>
          {images.map((img, index) => (
            <div
              key={index}
              style={styles.imageWrapper}
              onClick={() => setSelectedImage(index)}
            >
              <img src={img} alt={`Image ${index + 1}`} style={styles.image} />
            </div>
          ))}
        </div>

        <button style={styles.button} onClick={onBack}>
          Back
        </button>
      </div>

       {selectedImage !== null && (
        <div style={styles.overlay} onClick={() => setSelectedImage(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <span
              style={styles.close}
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </span>
            <img
              src={images[selectedImage]}
              alt={`Selected ${selectedImage + 1}`}
              style={{
                width: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            /> 
          </div>
        </div>
      )}
    </div>
  );
} 

const styles = { 
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#EDEADE",
  },
  container: {
    maxWidth: "1000px",
    width: "100%",
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontFamily: 'EB Garamond',
    fontSize: "16px", 
    margin: "15px 0 20px 0", 
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    margin: "30px 0",
  },
  placeholder: {
    aspectRatio: "4 / 3",
    background: "#e0e0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
    fontSize: "14px",
  },
  button: {
    padding: "6px 12px",
    fontSize: "12px",
    cursor: "pointer",
    border: "none",
    background: "#000",
    color: "#fff",
  }, 
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.55)",
    backdropFilter: "blur(6px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "40px",
  },
  modal: {
    position: "relative",
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "30px",
    maxWidth: "1000px",
    width: "100%",
    maxHeight: "90vh",
    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "modalFade 0.25s ease",
  }, 
  close: {
    position: "absolute",
    top: "18px",
    right: "18px",
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    border: "1px solid #ddd",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease",
  } 
}; 
