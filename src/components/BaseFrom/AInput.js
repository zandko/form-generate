import BaseForm from './BaseForm'

export default class AInput extends BaseForm {
  constructor(h, formData, obj, vm, type) {
    super(h, formData, obj, vm, type)
    return this.initialize
  }

  get initialize() {
    const { type } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style },
      on: { ...this.on }
    }

    return this.h('ElInput', el)
  }
}
