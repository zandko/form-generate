import BaseForm from './BaseForm'

export default class ARate extends BaseForm {
  constructor(h, formData, obj, vm) {
    super(h, formData, obj, vm)
    return this.initialize
  }

  get props() {
    const { key, obj } = this
    return {
      value: this.formData[key] || 0,
      ...obj.props
    }
  }

  get initialize() {
    const { type } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style, width: '100%' },
      on: { ...this.on }
    }

    return this.h('ElRate', el)
  }
}
