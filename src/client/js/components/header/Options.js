import Component from '../../core/Component';
import { requestLogout } from '../modal/signup/SignUpController';

export default class Options extends Component {
  setup() {
    this.state = {
      clickSingUp: false,
      isAuthenticated: JSON.parse(localStorage.getItem('login')),
    };
  }

  template() {
    if (this.state.isAuthenticated) {
      return `<ul>
            <li class="logout">
               로그아웃 
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
        </ul>`;
    } else {
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
        `;
    }
  }

  setEvent() {
    const { onLogin, toggleThirdTabClick, toggleEnableSignUpModal } =
      this.props;
    this.addEvent('click', '.login', onLogin);
    this.addEvent('click', '.signup', () => {
      toggleThirdTabClick();
      toggleEnableSignUpModal();
    });
    this.addEvent('click', '.logout', async () => {
      localStorage.setItem('login', null);
      window.location.replace('/');
    });
  }
}
