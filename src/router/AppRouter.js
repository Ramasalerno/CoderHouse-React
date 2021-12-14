import { Navigate, useRoutes } from 'react-router'
import { CartView } from '../componentes/CartView/CartView'
import { Checkout } from '../componentes/Checkout/Checkout'
import { ItemDetailContainer } from '../componentes/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../componentes/ItemListContainer/ItemListContainer'

export const AppRouter = () => {

    const routes = useRoutes([
        {path: "/", element: <ItemListContainer/>},
        {path: "/productos/:catId", element: <ItemListContainer/>},
        {path: "/detail/:itemId", element: <ItemDetailContainer/>},
        {path: "/cart", element: <CartView/>},
        {path: "/checkout", element: <Checkout/>},
        {path: "*", element: <Navigate to="/"/>}
    ])

    return routes
}