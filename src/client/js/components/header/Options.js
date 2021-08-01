import Component from "../../core/Component";
import SignUp from "../modal/signup/SignUp";

export default class Options extends Component {

    setup() {
        this.state = {
            clickSingUp: false
        }
    }

    template() {

        const {
            clickSingUp
        } = this.state;

        return `
                    <ul>
                        <li class="login">
                            로그인
                        </li>
                        <li class="signup">
                            회원 가입
                        </li>
                    </ul>
                    <ul>
                        <li>
                            숙소 호스트 되기
                        </li>
                        <li>
                            체험 호스팅하기
                        </li>
                        <li>
                            도움말
                        </li>
                    </ul>        
        `
    }

    setEvent() {
        const {
            onLogin,
            toggleThirdTabClick,
            toggleEnableSignUpModal
        } = this.props;
        this.addEvent('click', '.login', onLogin);
        this.addEvent('click', '.signup', () => {
            toggleThirdTabClick();
            toggleEnableSignUpModal();
        })
    }


}