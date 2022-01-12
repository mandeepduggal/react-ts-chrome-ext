import './styles.css'
import { ClickCount } from './ClickCounter'
import IMAGE from './react.png'
import LOGO from './logo.svg'
// Link for react refresh plugin for hot module reload - https://github.com/pmmmwh/react-refresh-webpack-plugin

export const App = () => {
    return (
        <>
            <h1>
                Hello121 - {process.env.NODE_ENV} {process.env.name}
            </h1>
            <img src={IMAGE} alt="React Img" width="300" height="200" />
            <img src={LOGO} alt="React Logo" width="300" />
            <ClickCount />
        </>
    )
}
