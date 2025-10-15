# 🎥 RTSP Overlay Studio

A full-stack video overlay editor built with **React** (frontend) and **Flask** (backend).  
This project allows users to stream videos, create and manage overlays (text or images), and interactively position them on a live video player.

---

## 🚀 Features

- 🎬 **Live Video Playback** – Stream videos using HLS or other compatible formats via React Player.  
- 🧩 **Dynamic Overlays** – Add text or image overlays to your videos.  
- ✏️ **Interactive Positioning** – Drag and resize overlays in real-time.  
- 💾 **Persistent Storage** – Save overlay data to the Flask backend.  
- ⚙️ **RESTful API** – Full integration using Axios for communication between frontend and backend.  
- 🖥️ **Frontend**: React.js  
- 🧠 **Backend**: Flask (Python)  

---

## 💻 Installation

### Backend (Flask)

1. Clone the repository:

```bash
git clone https://github.com/your-username/rtsp-overlay-studio.git
cd rtsp-overlay-studio/backend

2. Create a virtual environment and activate it:  
   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # macOS/Linux
   source venv/bin/activate
