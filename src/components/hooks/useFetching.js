import { useState } from 'react';

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (exception) {
            alert(`Error: ${exception.message}`);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading]
}