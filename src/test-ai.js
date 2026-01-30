require('dotenv').config();
const axios = require('axios');

async function testGroq() {
  try {
    console.log('Testing GROQ API...\n');
    
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: process.env.AI_MODEL || 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'user',
            content: 'Say "Hello from GROQ!" and explain in one sentence what you can do.'
          }
        ],
        temperature: 0.7,
        max_tokens: 100
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('SUCCESS!\n');
    console.log('Response:', response.data.choices[0].message.content);
    console.log('\n Usage:');
    console.log('- Tokens used:', response.data.usage.total_tokens);
    
  } catch (error) {
    console.error('ERROR:', error.response?.data || error.message);
  }
}

if (process.env.GROQ_API_KEY) {
  testGroq();
} else {
  console.error('No API key found! Set GROQ_API_KEY in .env');
}
