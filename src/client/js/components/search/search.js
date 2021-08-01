import Component from "../../core/Component";

export default class Search extends Component {
    template() {
        return `
        <div class="where">
            <div class="title">위치</div>
            <div class="introduce">어디로 여행가세요?</div>
        </div>
        <div class="search_middle"></div>
        <div class="check_box">
            <div class="check_in">
                <div class="title">체크인</div>
                <div class="introduce">날짜 입력</div>
            </div>
            <div class="search_middle"></div>
            <div class="check_out">

                <div class="title">체크아웃</div>
                <div class="introduce">날짜 입력</div>

            </div>
        </div>
        <div class="search_middle"></div>
        <div class="people_number">
            <div class="people_number_content">
                <div class="title">인원</div>
                <div class="introduce">게스트 추가</div>
            </div>
            <div class="search_button">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block;fill: none;height: 16px;width: 16px;stroke: currentcolor;stroke-width: 4;overflow: visible; color:white"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
            </div>
        </div>
        `
    }
}