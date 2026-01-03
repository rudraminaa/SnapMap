# SnapMap Setup Guide

## Prerequisites

### 1. Install Cloudflared

Download and install Cloudflared from the [official Cloudflare Tunnel downloads page](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/).

Verify the installation:

```bash
cloudflared --version
```

---

## Backend Setup

### 2. Install Dependencies and Start the Server

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
npm run dev
```

You should see the following output:

```
Server running on port 5000
MongoDB connected successfully
```

### 3. Create a Public Tunnel

Open a **new terminal** (keeping the backend running in the first one) and navigate to the backend directory:

```bash
cd backend
cloudflared tunnel --url http://localhost:5000
```

You will receive a public URL similar to:

```
https://example-name.trycloudflare.com
```

### 4. Test the Backend

Visit the public URL in your browser:

```
https://example-name.trycloudflare.com
```

Expected response:

```
Welcome to SnapMap API
```

---

## Frontend Setup

### 5. Install Frontend Dependencies

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

### 6. Configure Environment Variables

Create or update the `.env` file in the `frontend` folder with the public URL from Step 3:

```env
EXPO_PUBLIC_API_BASE_URL=https://example-name.trycloudflare.com
```

### 7. Start the Frontend

Run the frontend with Expo:

```bash
npx expo start --tunnel
```

---

You're all set! The frontend will now connect to your backend via the Cloudflare Tunnel.
