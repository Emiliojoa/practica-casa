import { lazy } from "react"

export const HomePage = lazy(() => import("./HomePage"))
export const LoginPage = lazy(() => import("./LoginPage"))
export const Dashboard = lazy(() => import("./Dashboard"))
export const NotFound = lazy(() => import("./NotFound"))

