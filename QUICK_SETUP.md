# Quick EmailJS Setup - 5 Minutes

## Step-by-Step Setup

### 1. Sign Up for EmailJS (2 minutes)
- Go to: https://www.emailjs.com/
- Click "Sign Up" (use Google/GitHub for faster signup)
- Verify your email

### 2. Connect Gmail (1 minute)
- In EmailJS dashboard → **Email Services** → **Add New Service**
- Choose **Gmail**
- Click "Connect Account" and authorize
- **Copy the Service ID** (looks like: `service_abc123`)

### 3. Create Email Template (1 minute)
- Go to **Email Templates** → **Create New Template**
- **Template Name:** Contact Form
- **Subject:** New Message: {{subject}}
- **Content:**
```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from PrintBox 3D website
```
- Click **Save**
- **Copy the Template ID** (looks like: `template_xyz789`)

### 4. Get Public Key (30 seconds)
- Go to **Account** → **General**
- Find **Public Key**
- **Copy the Public Key** (looks like: `abc123xyz456`)

### 5. Update Your Code (30 seconds)
Open `js/script.js` and find this section (around line 195):

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",        // ← Replace this
    SERVICE_ID: "YOUR_SERVICE_ID",       // ← Replace this
    TEMPLATE_ID: "YOUR_TEMPLATE_ID",     // ← Replace this
    TO_EMAIL: "ajaybendale1999@gmail.com" // Already set ✓
};
```

Replace the three placeholders with your actual values:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "abc123xyz456",                    // Your Public Key
    SERVICE_ID: "service_abc123",                 // Your Service ID
    TEMPLATE_ID: "template_xyz789",              // Your Template ID
    TO_EMAIL: "ajaybendale1999@gmail.com"        // Already set ✓
};
```

### 6. Test It! (1 minute)
1. Open your website in a browser
2. Open Developer Console (Press F12)
3. Fill out the contact form
4. Submit the form
5. Check console for messages:
   - ✅ "EmailJS initialized successfully" = Good!
   - ❌ Any error messages = Check the error details

### Troubleshooting

**Error: "Email service not configured"**
- Make sure you replaced all three placeholders in EMAILJS_CONFIG
- Check for typos or extra spaces

**Error: "Authentication failed" (401)**
- Check your Public Key is correct
- Make sure there are no quotes inside the quotes

**Error: "Service or Template not found" (404)**
- Double-check your Service ID and Template ID
- Make sure they match exactly what's in EmailJS dashboard

**Error: "Too many requests" (429)**
- You've hit the free plan limit (200/month)
- Wait a bit or upgrade your plan

### What Happens When Form is Submitted?

1. Form validates all fields
2. EmailJS sends email to: **ajaybendale1999@gmail.com**
3. You receive email with:
   - Sender's name and email
   - Subject
   - Message content
4. User sees success notification

### Need Help?

Check the browser console (F12) for detailed error messages. The code now provides specific error messages to help you debug.

---

**Your email is already configured:** ajaybendale1999@gmail.com ✅

