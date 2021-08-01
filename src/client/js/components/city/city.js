import Component from "../../core/Component"

export default class City extends Component {
    template() {
        return `<div class="city_box">
            <img src=http://localhost:3000/static/img/city-icon1.webp>
            <div class=city_box_text>
                <p class="city_name">서울</p>
                <p>차로 4.5시간 거리</p>
            </div>
        </div>
        <div class="city_box">
            <img src=http://localhost:3000/static/img/city-icon2.webp>
            <div class=city_box_text>
                <p class="city_name">미쿸</p>
                <p>구보 4.5시간 거리</p>
            </div>
        </div>
        <div class="city_box">
            <img src=http://localhost:3000/static/img/city-icon3.webp>
            <div class=city_box_text>
                <p class="city_name">파리</p>
                <p>도보 11.5시간 거리</p>
            </div>
        </div>
        <div class="city_box">
            <img src=http://localhost:3000/static/img/city-icon4.webp>
            <div class=city_box_text>
                <p class="city_name">광주</p>
                <p>여기가 광주다</p>
            </div>
        </div>
        <div class="city_box">
            <img src=http://localhost:3000/static/img/city-icon5.webp>
            <div class=city_box_text>
                <p class="city_name">리마</p>
                <p>리마는 페루의 수도이다</p>
            </div>
        </div>
        <div class="city_box">
            <img src=http://localhost:3000/static/img/city-icon6.webp>
            <div class=city_box_text>
                <p class="city_name">라마</p>
                <p>라마는 동물 이름이다</p>
            </div>
        </div>
        <div class="city_box">
            <img src=http://localhost:3000/static/img/city-icon6.webp>
            <div class=city_box_text>
                <p class="city_name">야마</p>
                <p>야마는 라마의 본토발음이다</p>
            </div>
        </div>
        <div class="city_box">
            <img src=http://localhost:3000/static/img/city-icon6.webp>
            <div class=city_box_text>
                <p class="city_name">알파카</p>
                <p>알파카는 귀여운 라마임</p>
            </div>
        </div>`
    }
}