import BaseForm from './BaseForm'

export default class AButton extends BaseForm {
  constructor(h, formData, obj, vm, type) {
    super(h, formData, obj, vm, type)
    return this.initialize
  }

  get props() {
    const { obj } = this
    return { ...obj.props }
  }

  get initialize() {
    const { type, obj } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style },
      on: { ...this.on }
    }

    return this.h('ElButton', el, [obj.text])
  }
}
