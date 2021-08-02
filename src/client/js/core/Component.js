export default class Component {
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  template() {
    return '';
  }
  mounted() {}
  render() {
    this.target.innerHTML = this.template();
    this.mounted();
    this.setEventAlways();
  }
  setEvent() {}
  setEventAlways() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  attach(selector, elem, props) {
    new elem(this.target.querySelector(selector), props);
  }

  addEvent(eventType, selector, callback) {
    if (eventType === 'focus') {
      console.log(eventType);
      console.log(selector);
      let children = this.target.querySelectorAll(selector);
      console.log(children);
    }
    const children = this.target.querySelectorAll(selector);

    const isTarget = (target) =>
      [...children].includes(target) || target.closest(selector);

    this.target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
