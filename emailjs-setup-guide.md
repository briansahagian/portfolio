# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Follow the instructions to connect your Gmail account
5. **Save the Service ID** - you'll need this later

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{subject}}

**Body:**
```
You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

4. **Save the Template ID** - you'll need this later

## Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find "Public Key" section
3. **Copy your Public Key** - you'll need this later

## Step 5: Update Your Portfolio
Once you have:
- Service ID
- Template ID  
- Public Key

Let me know these values and I'll update your JavaScript code with the real credentials!

## Test Settings
After setup, you can test the form by:
1. Filling out the contact form on your portfolio
2. Checking that you receive the email
3. Verifying all form fields appear correctly in the email