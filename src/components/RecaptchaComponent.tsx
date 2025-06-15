
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface RecaptchaComponentProps {
  onVerify: (token: string | null) => void;
  recaptchaRef?: React.RefObject<ReCAPTCHA>;
}

const RecaptchaComponent: React.FC<RecaptchaComponentProps> = ({ onVerify, recaptchaRef }) => {
  // Clé de test pour le développement local (toujours valide)
  // Remplacez par votre vraie clé une fois le domaine autorisé
  const siteKey = process.env.NODE_ENV === 'development' 
    ? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"  // Clé de test Google
    : "6Lfl2WErAAAAAAZ_Zkfnrq0JeCY3FwmN7fhQw-kQ";   // Votre vraie clé

  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={onVerify}
        theme="light"
      />
    </div>
  );
};

export default RecaptchaComponent;
