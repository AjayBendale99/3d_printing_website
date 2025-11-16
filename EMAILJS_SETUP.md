# EmailJS Setup Guide

## How to Configure EmailJS to Send Contact Form Messages

The contact form is now set up to send emails directly to **ajaybendale1999@gmail.com** using EmailJS. Follow these steps to complete the setup:

### Step 1: Create a Free EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

### Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Contact Form

**Subject:** New Contact Form Message - {{subject}}

**Content:**
```
You have received a new message from your website contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from PrintBox 3D website contact form.
```

4. **Copy the Template ID** (you'll need this later)

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key**
3. **Copy the Public Key**

### Step 5: Update the JavaScript File

Open `js/script.js` and replace these three placeholders:

1. **Line 195:** Replace `"YOUR_PUBLIC_KEY"` with your actual Public Key
2. **Line 222:** Replace `'YOUR_SERVICE_ID'` with your Service ID
3. **Line 223:** Replace `'YOUR_TEMPLATE_ID'` with your Template ID

**Example:**
```javascript
emailjs.init("abc123xyz456"); // Your Public Key

emailjs.send(
    'service_abc123',      // Your Service ID
    'template_xyz789',     // Your Template ID
    formData
)
```

### Step 6: Test the Form

1. Open your website in a browser
2. Fill out the contact form
3. Submit the form
4. Check your email inbox (ajaybendale1999@gmail.com) for the message

### Troubleshooting

- **Form not sending?** Check the browser console (F12) for error messages
- **Not receiving emails?** Check your spam folder
- **Service ID/Template ID not working?** Make sure you copied them correctly without extra spaces

### Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- All basic features

For more emails, consider upgrading to a paid plan.

---

**Your email address is already configured:** ajaybendale1999@gmail.com

All contact form messages will be sent directly to this email address once you complete the setup above.

