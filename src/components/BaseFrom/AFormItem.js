export default class AFormItem {
  h
  obj
  component

  constructor(h, obj, component) {
    this.h = h
    this.obj = obj
    this.component = component
    return this.initialize
  }

  get props() {
    const { key, obj } = this
    return {
      label: obj.label,
      rules: obj.rules,
      prop: obj.key || '',
      'label-width': obj['label-width'] || obj['labelWidth'],
      error: obj.error,
      'show-message': obj['show-message'] || obj['showMessage']
    }
  }

  get initialize() {
    const { obj } = this
    const el = {
      props: { ...this.props },
      class: { ...obj.className }
    }

    return this.h('ElFormItem', el, [this.component])
  }
}
