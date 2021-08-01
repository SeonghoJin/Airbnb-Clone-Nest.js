import Component from "./core/Component";
import MainBackground from "./components/main_background/MainBackground"
import Header from "./components/header/header";
import City from './components/city/city';
import Search from "./components/search/search"
import House from "./components/house/House"
import Experience from "./components/experience/Experience"
import ContentThree from "./components/contentThree/ContentThree"
import Footer from "./components/footer/Footer"
import LoginModal from "./components/login-modal/LoginModal"
import signUp from "./components/modal/signup/SignUp";

export default class App extends Component {

    setup() {
        this.state = {
            scrolled: false,
            enableLoginModal: false,
            enableSignUpModal: false,
        }

    }

    template() {
        const {
            enableLoginModal,
            enableSignUpModal
        } = this.state;
        return `
    <LoginModal class="modal ${enableLoginModal ? "flex" : "hidden"}">
    </LoginModal>
    <SignUp class="modal ${enableSignUpModal ? "flex" : "hidden"}"></SignUp>
    <header class="${this.state.scrolled ? "scrolled" : ""}">
    </header>
    <search class="search_wrapper">
    </search>
    <main-background class="main_background_wrapper">
    </main-background>
    <city class="city main_wrapper">
    </city>
    <house class="house_kind main_wrapper">
    </house>
    <experience class="bg-bl width100 flex">
    </experience>
    <contentThree class="main_wrapper mg-tb40">
    </contentThree>
    <footer class="width100" style="background-color: #F7F7F7; border-top:1px solid #DDDDDD">
    </footer>
        `
    }

    mounted() {
        const {
            scrolled
        } = this.state;
        this.attach('header', Header, {
            scrolled: scrolled,
            toggleEnableLoginModal: this.toggleEnableLoginModal.bind(this),
            toggleEnableSignUpModal: this.toggleEnableSignUpModal.bind(this)
        });
        this.attach('city', City);
        this.attach('search', Search);
        this.attach('main-background', MainBackground);
        this.attach('house', House);
        this.attach('experience', Experience);
        this.attach('contentThree', ContentThree);
        this.attach('footer', Footer);
        this.attach('LoginModal', LoginModal, {
            toggleEnableLoginModal: this.toggleEnableLoginModal.bind(this)
        });
        this.attach('SignUp', signUp, {
            toggleEnableSignUpModal: this.toggleEnableSignUpModal.bind(this)
        });
    }

    setEvent() {
        document.addEventListener('scroll', (e) => {
            const scrolled = this.checkScrolled();
            if (scrolled === null) return;
            this.setState({
                scrolled: scrolled
            })
        })
    }

    toggleEnableLoginModal() {
        this.setState({
            enableLoginModal: !this.state.enableLoginModal
        })

        if (this.state.enableLoginModal) {
            this.disableScroll();
        } else {
            this.enableScroll();
        }
    }

    toggleEnableSignUpModal() {
        this.setState({
            enableSignUpModal: !this.state.enableSignUpModal
        });
        if (this.state.enableSignUpModal) {
            this.disableScroll();
        } else {
            this.enableScroll();
        }
    }

    checkScrolled() {
        let check = false;
        if (document.scrollingElement.scrollTop < 0.1) {
            check = !(this.state.scrolled === false)
            this.state.scrolled = false;
        } else {
            check = !(this.state.scrolled === true)
            this.state.scrolled = true;
        }

        if (check) {
            if (this.state.scrolled === true) {
                return true;
            } else {
                return false;
            }
        }
        return null;
    }

    disableScroll() {
        document.body.style.overflow = 'hidden';
        document.querySelector('html').scrollTop = window.scrollY;
    }

    enableScroll() {
        document.body.style.overflow = null;
    }
}