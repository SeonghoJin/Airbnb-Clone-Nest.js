import Component from "../../core/Component";

export default class LoginModal extends Component {

    setup() {
        this.state = {
            onFocusEmail: false,
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
                <p>로그인 </p>
            </div>
            <div class="modal_content_template">
                <div class="modal_body">
                    <h3>에어비앤비에 오신것을 환영합니다.</h3>
                </div>
                <div class="email_content">
                    <label class="email_label">
                        <div class="input_example">
                            이메일
                        </div>
                        <input class="input_email" placeholder="이메일">
                    </label>
                </div>
                <span class="error ${errorflag ? "hidden" : "flex"}" >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="오류 표시기" role="img" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><circle cx="16" cy="16" r="14" fill="none"></circle><path d="m16 8v10" fill="none"></path><circle cx="16" cy="22.5" fill="#000" r=".5"></circle></svg>
                    <span style="margin-left:5px">잘못된 정보입니다. 다시 입력해주세요.</span>
                </span>
                <button class="login_button">
                    <span>계속</span>
                </button>
            </div>
        </div>        
        `
    }

    setEvent() {
        const {
            toggleEnableLoginModal
        } = this.props;

        this.addEvent('click', '.remove_modal', toggleEnableLoginModal);
        this.addEvent('click', '.modal_container', toggleEnableLoginModal);
    }
}