import BaseForm from './BaseForm'

export default class ASwitch extends BaseForm {
  constructor(h, formData, obj, vm, type) {
    super(h, formData, obj, vm, type)
    return this.initialize
  }

  get props() {
    const { key, obj } = this
    return {
      value: key ? this.formData[key] : false,
      ...obj.props
    }
  }

  get initialize() {
    const { type, obj } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style, width: '100%' },
      on: { ...this.on }
    }

    return this.h('ElSwitch', el)
  }
}
