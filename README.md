# WhatsApp Messaging App

## Overview

This simple Node.js application uses the `whatsapp-web.js` library to send messages on WhatsApp. The program reads phone numbers and a message from text files and sends the specified message with an image to the provided phone numbers.

## Prerequisites

Before using this application, make sure you have the following in the project directory:

- Node.js installed on your machine
- Image file named `image.jpeg`
- List of phone numbers in a file named `phones.txt` (each number on a separate line)
- Message content in a file named `message.txt`

## Setup

1. Clone the Repository:
2. Run npm install

## Running
- Run `node send.js`
- Scan the QR code
- Don't close the WhatsApp Web window until you see that the last message was sent.


## Important Notes
- Ensure that your phone numbers are in the correct format (e.g., 05XXXXXXXX, without any '-' or spaces).
- The application will send the same message to all provided phone numbers.
