import './styles/style.scss';
import './styles/slider.scss';
import './styles/root.css';

import ServiceBlock from './moduls/ServiceBlock'
// import Loader from './moduls/Loader';
import Slider from './moduls/Slider'
import Text from './moduls/Text'
import Utils from './moduls/Utils'
import Accordion from './moduls/Accordion'
import Nav from './moduls/Nav';
import WebflowPage from './moduls/WebflowPage';
import BlogTemplate from './moduls/Blog';
import Validation from './moduls/Validation';
// import Video from './moduls/Video';
import Cursor from './moduls/Cursor';
import Videohover from './moduls/VideoHover';
import Cases from './moduls/Cases';


const checkPages = () => {
    const service = new ServiceBlock()
    const slider = new Slider()
    const text = new Text()
    // const loader = new Loader()
    const utils = new Utils()
    const accordion = new Accordion()
    const nav = new Nav()
    const webflow = new WebflowPage()
    const blog = new BlogTemplate()
    const validation = new Validation()
    // const video = new Video()
    const cursor = new Cursor()
    const vidhover = new Videohover()

    if($('body').attr('page') === 'cases') { const cases = new Cases() }
}
checkPages()
