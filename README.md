# BookHaven

An online bookstore front end: browse a catalogue of 55 books, filter and search it, sign in, and keep a personal list of favourites.

**Live demo:** https://bookhaven-tau.vercel.app

## Features

- **Catalogue** — paginated grid (12 books per page) with cover, category, author, rating, price and stock status.
- **Search and filters** — by title, author or ISBN, plus category, maximum price, minimum rating, language and "in stock only".
- **Book page** — image gallery, summary, price, ISBN, publisher and publication date.
- **Accounts** — register, sign in and sign out; the session survives a page reload.
- **Favourites** — each user has their own list, saved per account, on a private page that redirects to the login screen when signed out.
- **Responsive** layout.

## Tech stack

React 19 · Vite 7 · Tailwind CSS 4 · React Router 7 · lucide-react

State is shared through React Context (`AuthContext`, `FavoriteContext`, `FilterContext`). There is no backend: users, sessions and favourites are stored in the browser's `localStorage`, and the catalogue is a local data file.

> **Demo only.** Accounts and passwords live in `localStorage` in clear text, which is fine for a front-end exercise and must not be reused as a real authentication system.

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run lint     # ESLint
npm run preview  # preview the production build
```

A few demo accounts are defined in `src/data/user.js`; you can also create your own from the registration page.

## Project structure

```
src/
├── Routes.jsx                  # /, /home, /login, /register, /book/:id, /book/favorite
├── context/                    # Auth, Favorite and Filter providers
├── data/                       # books, seed users, localStorage "database", auth helpers
└── components/
    ├── pages/                  # Home, Login, Register, Library (favourites)
    └── utils/                  # NavBar, Footer, BookDetails, PrivateRoute, error pages
```

## Work in progress

- Shopping cart: the cart buttons are present but not wired yet.
- Admin dashboard (`AdminDashboard.jsx`, `BookModal.jsx`): written but not routed, pending the book-management context.
- Social login buttons and "forgot password" are placeholders.

## Author

Built by [Eunock Yvan Aïhounhin](https://github.com/Eunock-web).
