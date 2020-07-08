import BaseForm from './BaseForm'

export default class ARadioGroup extends BaseForm {
  constructor(h, formData, obj, vm, type) {
    super(h, formData, obj, vm, type)
    return this.initialize
  }

  get props() {
    const { key, obj } = this
    return {
      value: key ? this.formData[key] : [],
      ...obj.props
    }
  }

  get components() {
    const _this = this
    const { obj } = _this
    if (!obj.children) return []
    return obj.children.map(child => {
      return _this.h(
        'ElRadio',
        {
          props: child.props ? child.props : child
        },
        [child.text]
      )
    })
  }

  get initialize() {
    const { type } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style, width: '100%' },
      on: { ...this.on }
    }

    return this.h('ElRadioGroup', el, this.components)
  }
}
