AI Test Project 

This project is a simple test setup to verify AI API integration and environment configuration before starting backend development.

It demonstrates:

Secure API key handling

Calling an AI model

Basic project structure

Best practices for environment variables

🚀 Setup Instructions

1️⃣ Install dependencies

npm install

2️⃣ Configure environment variables

Create a .env file:

AI_API_KEY=your_real_api_key_here
AI_PROVIDER=groq

3️⃣ Run the project
node test-ai.js

You should see an AI-generated response in the terminal.

🧠 What This Project Demonstrates
Feature	Purpose
.env file	Keeps API keys secure
AI API call	Confirms AI service connectivity
Error handling	Handles API call failures safely
🔒 Security Rules

API keys must never be hardcoded

.env must be in .gitignore

Use environment variables for configuration
