# Auto-Reply Email Setup Guide

## What is Auto-Reply?

When a user submits the contact form, they will automatically receive a confirmation email thanking them for their inquiry. This improves user experience and confirms their message was received.

## Setup Steps (5 minutes)

### Step 1: Create Auto-Reply Template in EmailJS

1. Go to your EmailJS dashboard: https://dashboard.emailjs.com/
2. Navigate to **Email Templates**
3. Click **Create New Template**

### Step 2: Configure the Template

**Template Name:** Auto-Reply Confirmation

**Subject:** Thank you for contacting PrintBox 3D - {{subject}}

**Content:**
```
Dear {{to_name}},

Thank you for reaching out to PrintBox 3D!

We have received your message regarding "{{subject}}" and our team will get back to you within 24-48 hours.

Your inquiry is important to us, and we appreciate your patience.

If you have any urgent questions, please feel free to contact us directly at:
Email: ajaybendale1999@gmail.com

Best regards,
PrintBox 3D Team
```

### Step 3: Configure Template Variables

Make sure these variables are set in your template:
- `{{to_name}}` - User's name (from form)
- `{{to_email}}` - User's email (from form)
- `{{subject}}` - Original subject (from form)
- `{{from_name}}` - Your business name (PrintBox 3D)
- `{{reply_to}}` - Your email address

### Step 4: Set Reply-To Address

1. In the template settings, find **Reply To** field
2. Set it to: `{{reply_to}}` or directly to `ajaybendale1999@gmail.com`
3. This allows users to reply directly to your email

### Step 5: Get Template ID

1. After saving the template, you'll see the **Template ID**
2. It looks like: `template_abc123xyz`
3. **Copy this Template ID**

### Step 6: Update Your Code

Open `js/script.js` and find the `EMAILJS_CONFIG` section (around line 195):

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "rljC3g0prIXFwPL-p",
    SERVICE_ID: "service_a9u4qxl",
    TEMPLATE_ID: "template_choiqrb",
    AUTO_REPLY_TEMPLATE_ID: "YOUR_AUTO_REPLY_TEMPLATE_ID", // ← Replace this
    TO_EMAIL: "ajaybendale1999@gmail.com",
    FROM_NAME: "PrintBox 3D"
};
```

Replace `"YOUR_AUTO_REPLY_TEMPLATE_ID"` with your actual Template ID:

```javascript
AUTO_REPLY_TEMPLATE_ID: "template_abc123xyz", // Your auto-reply template ID
```

### Step 7: Test It!

1. Fill out the contact form on your website
2. Submit the form
3. Check your email (you'll receive the inquiry)
4. Check the user's email (they'll receive the auto-reply)

## How It Works

1. **User submits form** → Email sent to: `ajaybendale1999@gmail.com`
2. **Auto-reply sent** → Confirmation email sent to user's email address
3. **User receives confirmation** → Professional thank you message

## Customizing the Auto-Reply Message

You can customize the auto-reply message in EmailJS dashboard:

- Change the greeting
- Add your business hours
- Include phone number
- Add social media links
- Customize the tone (formal/casual)

## Troubleshooting

**Auto-reply not sending?**
- Check browser console (F12) for error messages
- Verify the AUTO_REPLY_TEMPLATE_ID is correct
- Make sure the template variables match exactly

**User not receiving auto-reply?**
- Check spam folder
- Verify user's email address is correct
- Check EmailJS dashboard for delivery status

**Both emails working?**
- Main email to business: ✅ Working
- Auto-reply to user: ✅ Working

## Benefits

✅ Professional customer service
✅ Confirms message was received
✅ Sets expectations (24-48 hour response)
✅ Reduces follow-up inquiries
✅ Builds trust with customers

---

**Note:** Auto-reply uses the same EmailJS service, so it counts toward your monthly email limit (200 emails/month on free plan).

