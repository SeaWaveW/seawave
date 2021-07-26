export default {
  name: 'SwDescriptionsRow',
  props: {
    row: {
      type: Array
    }
  },
  inject: ['swDescriptions'],
  render(h) {
    const { swDescriptions } = this;
    const row = (this.row || []).map(item => {
      return {
        ...item,
        label: item.slots.label || item.props.label,
        ...['labelClassName', 'contentClassName', 'labelStyle', 'contentStyle'].reduce((res, key) => {
          res[key] = item.props[key] || swDescriptions[key];
          return res;
        }, {})
      };
    });
    if (swDescriptions.direction === 'vertical') {
      return (
        <tbody>
          <tr class="sw-descriptions-row">
            {
              row.map(item => {
                return (
                  <th
                    class={{
                      'sw-descriptions-item__label': true,
                      'has-colon': swDescriptions.border ? false : swDescriptions.colon,
                      'is-bordered-label': swDescriptions.border,
                      [item.labelClassName]: true
                    }}
                    style={item.labelStyle}
                    colSpan={item.props.span}
                  >{item.label}</th>
                );
              })
            }
          </tr>
          <tr class="sw-descriptions-row">
            {
              row.map(item =>{
                return (
                  <td
                    class="sw-descriptions-item__content"
                    class={['sw-descriptions-item__content', item.contentClassName]}
                    style={item.contentStyle}
                    colSpan={item.props.span}
                  >{item.slots.default}</td>
                );
              })
            }
          </tr>
        </tbody>
      );
    }
    if (swDescriptions.border) {
      return (
        <tbody>
          <tr class="sw-descriptions-row">
            {
              row.map(item=> {
                return ([
                  <th
                    class={{
                      'sw-descriptions-item__label': true,
                      'is-bordered-label': swDescriptions.border,
                      [item.labelClassName]: true
                    }}
                    style={item.labelStyle}
                    colSpan="1"
                  >{item.label}</th>,
                  <td
                    class={['sw-descriptions-item__content', item.contentClassName]}
                    style={item.contentStyle}
                    colSpan={item.props.span * 2 - 1}
                  >{item.slots.default}</td>
                ]);
              })
            }
          </tr>
        </tbody>
      );
    }
    return (
      <tbody>
        <tr class="sw-descriptions-row">
          {
            row.map(item=> {
              return (
                <td class="sw-descriptions-item" colSpan={item.props.span}>
                  <div class="sw-descriptions-item__container">
                    <span
                      class={{
                        'sw-descriptions-item__label': true,
                        'has-colon': swDescriptions.colon,
                        [item.labelClassName]: true
                      }}
                      style={item.labelStyle}
                    >{item.props.label}</span>
                    <span
                      class={['sw-descriptions-item__content', item.contentClassName]}
                      style={item.contentStyle}
                    >{item.slots.default}</span>
                  </div>
                </td>);
            })
          }
        </tr>
      </tbody>
    );
  }
};
