# Travel With Us Booking App

A mordern responsive booking web app built with **React**, **TailwindCSS**, **Framer Motion**, and **PayStack** Integration. Expolore Destinations, view deatils and book trips seamlessly.


---


## Features

### Core
- Landing page with hero section and "Discover More" button
- **Discovery Page**: Browse all destinations with images, locations, prices and highlights.
- **Discovery Details**: Full trip info, duration, highlights and images
- **Booking Form**:
- Traveller Info: Name, Email, Phone
- Trip details: Date, Guests
- Real time total price calculations
- Email & Phone validation
- **Payment Integration**: Paystack inline payment with success and error toasts
- **Success Page**: Booking confirmation and summary 

### Animations
- Smooth **card hover and scroll animations** with **Framer Motion**
- Section fade-ins and slide-ins
- Interactive Buttons and hover effects

### UX Enhancements
- Scroll to top on page change
- Smooth hashLinks scrolling 
- Dark mode support 
- Toast notifications using **Sonner** (custom fonts applied)


---


## Tech Stack
- **React 19**
- **React Router v6** + Hashlink
- **Tailwind CSS**
- **Framer Motion**
- **Paystack Inline**
- **Sonner Toast**

---


## Project Structure
src/
│
├─ assets/ # Images & static assets
├─ components/ # Reusable components
├─ data/ # Destination data
├─ layout/ # rootLayout
├─ pages/
│ ├─ Home.jsx
│ ├─ Discovery.jsx
│ ├─ DestinationDetail.jsx
│ ├─ BookDestination.jsx
│ └─ Success.jsx
├─ router.jsx # Routes
├─ App.jsx
└─ index.jsx
 

 
---

## Getting Started

### 1. Clone repo
```bash
git clone https://github.com/yourusername/travel-With-Us.git
cd travel-With-Us

2. Install dependencies 
npm install

3. Environment Variables
create .env in root
VITE_PAYSTACK_PUBLIC_KEY=pk_test_c0acef4dacb3c6dd2201ae7b5842a379cfb1429b

4. Run locally
npm run dev

Visit http://localhost:5173