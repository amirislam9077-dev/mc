# Email Setup Instructions for McDonald's Order System

## What Was Implemented

When a customer clicks "Place Order", the system will:
1. ✅ Generate a unique order number (format: `MC-1234567890-123`)
2. ✅ Collect all order details:
   - Order Number
   - Customer Name (Full Name)
   - Phone Number
   - Delivery Address
   - Delivery Instructions
   - All cart items with quantities and prices
   - Subtotal, Delivery Fee, and Total
   - Order Date and Time
3. ✅ Send an email to: **amirislam9077@gmail.com**
4. ✅ Show confirmation alert with order number

## How to Set Up EmailJS (FREE)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - no credit card required)
3. Create an account with your email

### Step 2: Add Email Service
1. After login, go to "Email Services"
2. Click "Add New Service"
3. Choose **Gmail** (recommended)
4. Connect your Gmail account (amirislam9077@gmail.com)
5. Copy the **Service ID** (it will look like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set **Template Name**: "McDonald's Order"
4. Set **Template ID**: `template_order`
5. Use this template content:

```
Subject: New Order - {{order_number}}

Order Confirmation
==================

Order Number: {{order_number}}
Order Date: {{order_date}}

Customer Details:
-----------------
Name: {{customer_name}}
Phone: {{phone_number}}
Delivery Address: {{delivery_address}}
Special Instructions: {{delivery_instructions}}

Order Items:
------------
{{order_items}}

Order Summary:
--------------
Subtotal: {{subtotal}}
Delivery Fee: {{delivery_fee}}
Total: {{total}}

Thank you for your order!
```

6. Save the template

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (it will look like: `xxxxxxxxxxxxxxxxx`)

### Step 5: Update the Code
Open `src/component/checkout.js` and replace line 203:
```javascript
user_id: 'YOUR_EMAILJS_PUBLIC_KEY',
```
With your actual public key:
```javascript
user_id: 'your_actual_public_key_here',
```

Also update line 201 with your Service ID:
```javascript
service_id: 'service_mcdonalds',  // Replace with your actual Service ID
```

### Step 6: Test
1. Add items to cart
2. Go to checkout
3. Fill in all details
4. Click "Place Order"
5. Check your email: amirislam9077@gmail.com

## Alternative: Simple Backend Email (if EmailJS doesn't work)

If you prefer to use a backend server, you can create a simple Node.js API:

### Install Nodemailer:
```bash
npm install nodemailer express cors
```

### Create `server.js`:
```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'  // Use App Password, not regular password
  }
});

app.post('/send-order', (req, res) => {
  const { orderDetails } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'amirislam9077@gmail.com',
    subject: `New Order - ${orderDetails.orderNumber}`,
    text: `
      Order Number: ${orderDetails.orderNumber}
      Customer: ${orderDetails.customerName}
      Phone: ${orderDetails.phoneNumber}
      Address: ${orderDetails.deliveryAddress}
      Instructions: ${orderDetails.deliveryInstructions}

      Items:
      ${orderDetails.items}

      Total: PKR ${orderDetails.total}.00
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.json({ success: true });
    }
  });
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

Then update checkout.js to use:
```javascript
const response = await fetch('http://localhost:3001/send-order', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ orderDetails })
});
```

## Email Will Contain:
- Order Number: MC-1234567890-123
- Full Name: [Customer's name]
- Phone Number: [Customer's phone]
- Delivery Address: [Selected location in Karachi]
- Delivery Instructions: [Any special notes]
- All ordered items with quantities
- Subtotal, Delivery Fee, and Total amount
- Order date and time

## Support
If you need help setting this up, let me know!
