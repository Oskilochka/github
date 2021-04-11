import {FC} from 'react';
import img from '../../assets/three-dots.svg';

export const Preloader: FC = () => {
    return (
        <img src={img} alt="Loading..." />
    )
}
