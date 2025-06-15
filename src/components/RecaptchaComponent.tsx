
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface RecaptchaComponentProps {
  onVerify: (token: string | null) => void;
  recaptchaRef?: React.RefObject<ReCAPTCHA>;
}

const RecaptchaComponent: React.FC<RecaptchaComponentProps> = ({ onVerify, recaptchaRef }) => {
  const siteKey = "6Lfl2WErAAAAAAZ_Zkfnrq0JeCY3FwmN7fhQw-kQ";

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
