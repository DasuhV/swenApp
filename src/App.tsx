import { Suspense } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import PageFour from './pages/PageFour'
import PageOne from './pages/PageOne'
import PageThree from './pages/PageThree'
import PageTwo from './pages/PageTwo'

function App() {
	return (
		<>
			My App
			<BrowserRouter>
				<nav>
					<NavLink to={'/one'}>One</NavLink>
					<NavLink to={'/two'}>Two</NavLink>
					<NavLink to={'/three'}>Three</NavLink>
					<NavLink to={'/four'}>Four</NavLink>
				</nav>
				<Suspense fallback={'loading...'}>
					<Routes>
						<Route path='/' element={<PageOne />} />
						<Route path='/one' element={<PageOne />} />
						<Route path='/two' element={<PageTwo />} />
						<Route path='/three' element={<PageThree />} />
						<Route path='/four' element={<PageFour />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	)
}

export default App
