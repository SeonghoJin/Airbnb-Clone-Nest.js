import Component from "../../../core/Component";
import {
    vaildSignUp,
    requestSignUp
} from "./SignUpController.js"
import "../modal.css"
export default class SignUp extends Component {

    setup() {
        this.state = {
            id_value: "",
            password_value: "",
            repassword_value: "",
            errorflag: true
        }
    }

    template() {

        const {
            errorflag
        } = this.state;

        return `
        <div class="modal_container">
        </div>
        <div class="modal_content">
            <button class="remove_modal">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
            </button>
            <div class="modal_title">
                <p>회원 가입</p>
            </div>
            <div class="modal_content_template">
                <div class="modal_body">
                    <h3>에어비앤비에 오신것을 환영합니다.</h3>
                </div>
                <div id="id" class="email_content" style="margin-bottom:10px">
                    <label class="email_label">
                        <div class="input_example">
                            아이디
                        </div>
                        <input class="input_email" placeholder="아이디">
                    </label>
                </div>
                <div id="password" class="email_content" style="margin-bottom:10px">
                    <label class="email_label">
                        <div class="input_example">
                            비밀번호
                        </div>
                        <input class="input_email" placeholder="비밀번호">
                    </label>
                </div>
                <div id="repassword" class="email_content">
                    <label class="email_label">
                        <div class="input_example">
                            비밀번호확인
                        </div>
                        <input class="input_email" placeholder="비밀번호확인">
                    </label>
                </div>
                <span class="error ${errorflag ? "hidden" : "flex"}" >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="오류 표시기" role="img" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><circle cx="16" cy="16" r="14" fill="none"></circle><path d="m16 8v10" fill="none"></path><circle cx="16" cy="22.5" fill="#000" r=".5"></circle></svg>
                    <span style="margin-left:5px">잘못된 정보입니다. 다시 입력해주세요.</span>
                </span>
                <button class="signup_button">
                    <span>회원가입</span>
                </button>
            </div>
        </div>        
        `
    }

    setEvent() {
        const {
            toggleEnableSignUpModal
        } = this.props;
        this.addEvent('click', '.remove_modal', toggleEnableSignUpModal);
        this.addEvent('click', '.modal_container', toggleEnableSignUpModal);
        this.addEvent('click', '.remove_modal', () => {
            this.setState({
                errorflag: true
            })
        });
        this.addEvent('click', '.modal_container', () => {
            this.setState({
                errorflag: true
            })
        });
        this.addEvent('keyup', '#id', (e) => {
            this.state.id_value = e.target.value;
        })
        this.addEvent('keyup', '#password', (e) => {
            this.state.password_value = e.target.value;
        })
        this.addEvent('keyup', '#repassword', (e) => {
            this.state.repassword_value = e.target.value;
        })

        this.addEvent('click', '.signup_button', (e) => {
            const {
                id_value,
                password_value,
                repassword_value
            } = this.state;
            if (vaildSignUp(id_value, password_value, repassword_value) === false) {
                this.setState({
                    errorflag: false
                })
                return;
            } else {
                toggleEnableSignUpModal();
                requestSignUp(id_value, password_value, repassword_value);
            }
        })

    }



}