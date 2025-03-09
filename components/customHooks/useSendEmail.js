import React from 'react'

export default function useSendEmail(props) {
  const { textToSend } = props

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function sendEmail() {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    try {
      const response = await fetch('http://localhost:3000/accountmanegement/change-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData), // Send the email data to the API route
      })
    }
     catch(err) {
      console.log(err.message)
    } finally {

    }
  }

  return ("")
  
}
