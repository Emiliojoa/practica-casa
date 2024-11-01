import React from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, HomePage, LoginPage,NotFound } from './pages'

export default function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/dashboard' element={< Dashboard />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>

    )
}
