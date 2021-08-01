import Component from "../../core/Component";

export default class House extends Component {
    template() {
        return `
        <div class="writing_words">
            어디에서나, 여행은 살아보는 거야!
        </div>
        <div class="houses">
            <div class=house_box>
                <img src=http://localhost:3000/static/img/house.webp></img>
                집 전체
            </div>
            <div class=house_box>
                <img src=http://localhost:3000/static/img/house2.webp></img>
                통나무집 및 전원주택
            </div>
            <div class=house_box>
                <img src=http://localhost:3000/static/img/house3.webp></img>
                독특한 공간
            </div>
            <div class=house_box>
                <img src=http://localhost:3000/static/img/house4.webp></img>
                반려동물 환영
            </div>
        </div>
        `
    }
}