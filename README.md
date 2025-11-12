# 📝 FlashyNotes - Frontend

A modern, feature-rich note-taking application built with Next.js 16 and React 19. FlashyNotes provides a seamless experience for creating, organizing, and managing your notes with a beautiful, gradient-powered interface.

## ✨ Features

- 🎨 **Modern UI** - Beautiful gradient-based design with smooth animations
- 🔐 **Authentication** - Secure user registration and login system
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js App Router for optimal speed
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌙 **Type-Safe** - Written in TypeScript for robust code
- 🎯 **Server-Side Rendering** - SEO-friendly and fast initial load

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.1
- **UI Library:** React 19.2.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **HTTP Client:** Axios
- **SEO:** React Helmet Async

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/IRashidAziz/Notes-next.git
cd Notes-next/frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (auth)/         # Authentication pages
│   │   ├── (home)/         # Public pages
│   │   ├── dashboard/      # Protected dashboard
│   │   └── layout.tsx      # Root layout
│   ├── components/          # Reusable components
│   │   ├── auth/           # Auth components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # UI primitives
│   ├── lib/                # Core utilities
│   ├── constants/          # App constants
│   ├── store/              # State management
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript types
│   └── styles/             # Global styles
├── public/                  # Static assets
└── docs/                    # Documentation
```

## 🔒 Authentication Flow

1. User registers/logs in via auth pages
2. JWT token received and stored securely
3. Protected routes validated via middleware
4. Dashboard accessible after authentication

## 🎨 Design System

- **Colors:** Custom gradient palette (Pink → Purple → Blue)
- **Typography:** Geist Sans & Geist Mono fonts
- **Animations:** Smooth transitions with Framer Motion
- **Responsive:** Mobile-first approach with Tailwind breakpoints

## 📚 Documentation

For detailed documentation, check out:
- [Architecture Guide](./docs/architecture.md)
- [API Integration](./docs/api_integration.md)
- [Developer Onboarding](./docs/onboarding.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**David Hussain**
- GitHub: [@IRashidAziz](https://github.com/IRashidAziz)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI animations by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ Star this repo if you find it helpful!
