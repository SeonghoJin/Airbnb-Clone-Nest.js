import Component from "../../core/Component";

export default class MainBackground extends Component {
    template() {
        return `
                <img class="main_background" src="http://localhost:3000/static/img/airbnb_background.webp">
        <div class="main_background_oneline">
            <div class="main_background_online_items_wrapper">
                <div class="main_background_online_items">
                    <div class="main_background_online_content_wrapper">
                        <div class="main_background_online_content">
                            <span>이제, 여행은 가까운 곳에서</span>
                            <div>근처의 숙소 둘러보기</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}