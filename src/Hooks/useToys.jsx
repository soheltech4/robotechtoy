import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useToys = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: Toys = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://robotechtoy-server.up.railway.app/products?email=${user?.email}`)
            return res.json()
        },
    })
    return [Toys, refetch]
};

export default useToys;