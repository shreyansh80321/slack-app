import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import React, { useEffect } from 'react'
import { Routes,Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import * as Sentry from '@sentry/react';

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);

const App = () => {
  
  
  return (
    <>
      <button onClick={() => {
        throw new Error("My test error from App.jsx");
      }}>THROW ERROR</button>
      <SignedIn>
        <SentryRoutes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Navigate to={"/"} replace />} />
        </SentryRoutes>
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to={"/auth"} replace />} />
        </Routes>
      </SignedOut>
    </>
  );
}

export default App