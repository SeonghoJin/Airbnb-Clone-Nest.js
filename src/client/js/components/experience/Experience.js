import Component from "../../core/Component";

export default class Experience extends Component {
    template() {
        return `
        <div class="main_wrapper">
            <p style="font-size:32px; font-weight:700; margin: 0px; color:white">세상을 만나는 특별한 방법</p>
            <p style="margin-top:0px; color:white">현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로 만나보세요.</p>
            <div class="bg-bl-content">
                <div class="bg-bl-content-item">
                    <img class="parent-fit" aria-hidden="true" alt="" decoding="async" src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=720" data-original-uri="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?aki_policy=large"
                        style="object-fit: cover;">
                    <p class="p1">온라인 체험</p>
                    <p class="p2">집에서 즐기는 랜선 세계 여행</p>
                </div>a
                <div class="bg-bl-content-item">
                    <img class="parent-fit" aria-hidden="true" alt="" decoding="async" src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=720" data-original-uri="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?aki_policy=large"
                        style="object-fit: cover;">
                    <p class="p1">체험</p>
                    <p class="p2">어디에서든 즐길 수 있는 체험</p>
                </div>
                <div class="bg-bl-content-item">
                    <img class="parent-fit" aria-hidden="true" alt="" decoding="async" src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720" data-original-uri="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?aki_policy=large"
                        style="object-fit: cover;">
                    <p class="p1">어드벤처</p>
                    <p class="p2">숙박과 식사가 포함된 며칠 일정의 여행</p>
                </div>
            </div>
        </div>
        `
    }
}