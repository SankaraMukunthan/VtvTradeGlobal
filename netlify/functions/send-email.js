const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } = process.env;
const emailjs = require('@emailjs/browser');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Initialize EmailJS with environment variables
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: "abiindo3333@gmail.com",
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not provided',
        interest: data.interest || 'Not specified',
        message: data.message
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};
