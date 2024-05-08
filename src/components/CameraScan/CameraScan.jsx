import React, { useRef, useState, useEffect } from "react";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useRecognizedText } from "../../services/context/RecognizedTextContext";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

export function CameraScan() {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setRecognizedText } = useRecognizedText();
  const navigate = useNavigate();

  useEffect(() => {
    const setInitialCamera = async () => {
     
      try {
        const cameras = await navigator.mediaDevices.enumerateDevices();
        const rearCamera = cameras.find(
          (device) => device.kind === "videoinput"
        );
        if (rearCamera) {
          setFacingMode("environment");
        }
      } catch (error) {
        console.error("Greška pri postavljanju kamere:", error);
      } finally {
        setLoading(false);
      }
      
    };

    setInitialCamera();
  }, []);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    Tesseract.recognize(imageSrc, "eng", {
      tessedit_char_whitelist:
        "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789",
      tessedit_char_blacklist: "'~`@#$%^&*()_-+=[]{}|;:,.<>?",
      psm: 6,
      preserve_interword_spaces: true,
      dpi: 600,
    }).then(({ data: { text } }) => {
      const filteredText = text.trim().replace(/[^a-zA-Z0-9]/g, "");

      setRecognizedText(filteredText);
      navigate(-1);
    });
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <LoaderSpiner />
        </div>
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            borderRadius: "20px",
          }}
          videoConstraints={{ facingMode: facingMode }}
        />
      )}
      <div className="flex justify-center pt-20p">
        <Button
          className="button w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
          onClick={capture}
        >
          Skeniraj kod
        </Button>
      </div>
    </div>
  );
}
