import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";

// Lazy load components
const GuestLayout = lazy(() => import("./Layouts/GuestLayout"));
const AuthLayout = lazy(() => import("./Layouts/AuthLayout"));
const AdminLayout = lazy(() => import("./Layouts/AdminLayout"));
const Home = lazy(() => import("./pages/Home"));
const Categories = lazy(() => import("./pages/Categories"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

// Loading fallback component
const Loading = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <ProtectedRoute isAuthRoute>
          <GuestLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/categories",
        element: (
          <Suspense fallback={<Loading />}>
            <Categories />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<Loading />}>
        <ProtectedRoute isAuthRoute={false}>
          <AdminLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        path: "/admin",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/admin/categories",
        element: (
          <Suspense fallback={<Loading />}>
            <Categories />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<Loading />}>
        <ProtectedRoute isAuthRoute>
          <AuthLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loading />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
