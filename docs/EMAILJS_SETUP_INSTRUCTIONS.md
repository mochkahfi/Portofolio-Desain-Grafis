# EmailJS Setup Instructions for Contact Form

To fix the "Failed to send message. Please try again later." error and ensure your contact form sends emails correctly, please follow these steps:

## 1. Create an EmailJS Account
- Go to https://www.emailjs.com/ and sign up for a free account.

## 2. Add an Email Service
- After logging in, go to the **Email Services** section.
- Add your preferred email service provider (e.g., Gmail, Outlook).
- Follow the instructions to connect your email account.

## 3. Create an Email Template
- Go to the **Email Templates** section.
- Create a new template.
- Configure the template to include the variables you want to send, such as:
  - `name`
  - `email`
  - `subject`
  - `message`
- Make sure the **To Email** field is set to your email address (e.g., muhammadkahfi160204@gmail.com).

## 4. Get Your Service ID, Template ID, and User ID
- In the **Email Services** section, note your **Service ID** (e.g., `service_xxx123`).
- In the **Email Templates** section, note your **Template ID** (e.g., `template_abc456`).
- In your account dashboard or integration settings, find your **User ID** (e.g., `user_789xyz`).

## 5. Update Your Contact Form Code
- Open `src/components/Contact.tsx`.
- Replace the placeholder values in the `handleSubmit` function with your actual IDs:

```typescript
const serviceID = 'your_actual_service_id';
const templateID = 'your_actual_template_id';
const userID = 'your_actual_user_id';
```

## 6. Test Your Contact Form
- Run your application.
- Fill out the contact form and submit.
- Check your email inbox for the message.
- Check the browser console for any errors.

## Troubleshooting
- Ensure your email service is properly connected in EmailJS.
- Check your spam/junk folder.
- Verify that your EmailJS template variables match the form data keys.
- Check your browser console for detailed error messages.

If you follow these steps, your contact form should send emails successfully.

---

If you need further assistance, feel free to ask!
