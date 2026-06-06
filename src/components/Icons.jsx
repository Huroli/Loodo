import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faHouse, faCompass, faLayerGroup, faCoins, faUserTie, faUsers, faHandHoldingDollar, faArrowUpFromBracket, faEllipsis, faArrowLeft, faXmark, faTrashCan, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';

// İkonlar tek bir kaynaktan erişilebilmek amacıyla obje olarak tanımlanıyor.
const Icons = {
    faBars: forwardRef((props, ref) => <FontAwesomeIcon icon={faBars} ref={ref} {...props} />),
    faMagnifyingGlass: forwardRef((props, ref) => <FontAwesomeIcon icon={faMagnifyingGlass} ref={ref} {...props} />),
    faHouse: forwardRef((props, ref) => <FontAwesomeIcon icon={faHouse} ref={ref} {...props} />),
    faCompass: forwardRef((props, ref) => <FontAwesomeIcon icon={faCompass} ref={ref} {...props} />),
    faLayerGroup: forwardRef((props, ref) => <FontAwesomeIcon icon={faLayerGroup} ref={ref} {...props} />),
    faCoins: forwardRef((props, ref) => <FontAwesomeIcon icon={faCoins} ref={ref} {...props} />),
    faUserTie: forwardRef((props, ref) => <FontAwesomeIcon icon={faUserTie} ref={ref} {...props} />),
    faUsers: forwardRef((props, ref) => <FontAwesomeIcon icon={faUsers} ref={ref} {...props} />),
    faHandHoldingDollar: forwardRef((props, ref) => <FontAwesomeIcon icon={faHandHoldingDollar} ref={ref} {...props} />),
    faArrowUpFromBracket: forwardRef((props, ref) => <FontAwesomeIcon icon={faArrowUpFromBracket} ref={ref} {...props} />),
    faEllipsis: forwardRef((props, ref) => <FontAwesomeIcon icon={faEllipsis} ref={ref} {...props} />),
    faArrowLeft: forwardRef((props, ref) => <FontAwesomeIcon icon={faArrowLeft} ref={ref} {...props} />),
    faXmark: forwardRef((props, ref) => <FontAwesomeIcon icon={faXmark} ref={ref} {...props} />),
    faTrashCan: forwardRef((props, ref) => <FontAwesomeIcon icon={faTrashCan} ref={ref} {...props} />),
    faMoon: forwardRef((props, ref) => <FontAwesomeIcon icon={faMoon} ref={ref} {...props} />),
    faSun: forwardRef((props, ref) => <FontAwesomeIcon icon={faSun} ref={ref} {...props} />),
};

export default Icons;