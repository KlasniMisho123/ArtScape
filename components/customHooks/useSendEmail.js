import React from 'react'

export default function useSendEmail(props) {
  const { textToSend } = props

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (emailData) => {
    // WHY NOT async function? difference
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send email.');
      }
      
      setIsSuccess(true);
    } catch(err) {
      console.log(err.message)
    } finally {

    }
  }

  return ("")
  
}
