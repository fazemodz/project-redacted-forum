import {useSearchParams} from 'react-router-dom';
export default function removehashfromurl() {
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.delete('#');
    setSearchParams(searchParams);
}
