import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'

export const App = () => {
    return <>
        <h1>Hello - {process.env.NODE_ENV} {process.env.name}</h1>
        <img src={IMAGE} alt="React Img" width="300" height="200" />
        <img src={LOGO} alt="React Logo" width="300"/>
    </>
}