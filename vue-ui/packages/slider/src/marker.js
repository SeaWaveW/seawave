export default {
  name: 'SwMarker',

  props: {
    mark: {
      type: [String, Object]
    }
  },
  render() {
    let label = typeof this.mark === 'string' ? this.mark : this.mark.label;

    return (
      <div class="sw-slider__marks-text" style={ this.mark.style || {} }>
        { label }
      </div>
    );
  }
};
