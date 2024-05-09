
# Next.js Firebase Authentication and Firestore Starter

This project provides a ready-to-use template for implementing authentication and user profile management using Firebase Authentication and Firestore in a Next.js application. It's designed to help developers quickly bootstrap secure and scalable web applications.

## Features

- **Firebase Authentication**: Support for Google Sign-in and email/password authentication methods.
- **Firestore Database**: User profiles are automatically created and stored in Firestore upon registration.
- **User Context**: Separate context for user data management, allowing for extended user profile features.
- **Error Handling**: Comprehensive error handling to improve user experience and debuggability.
- **Responsive Auth Modal**: A modal component toggles between login and sign-up forms, providing contextual error feedback.

## Getting Started

Follow these steps to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version)
- A Firebase project

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/tywotaiwo/nextjs-firebase-auth.git
   cd nextjs-firebase-auth

### Install Dependencies

npm install

###  Configure Firebase
- **Go to the Firebase Console.
- **Create a new project or select an existing one.
- **Enable Authentication and choose the sign-in methods (Email/Password & Google sign-in).
- **Create a Firestore database in test mode for initial setup.

### Add firebase to project
Navigate to src/config/firebase.js and update with your Firebase project settings:
javascript
Copy code
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_project_id.firebaseapp.com",
  projectId: "your_project_id",
  storageBucket: "your_project_id.appspot.com",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id",
  measurementId: "your_measurement_id"
};

### Run the Development Server

npm run dev

Visit http://localhost:3000 to view your application.

### Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

### Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
### License
Distributed under the MIT License. See LICENSE for more information.

### Acknowledgements
Next.js Documentation
Firebase Documentation
