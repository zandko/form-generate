import BaseForm from './BaseForm'

export default class ADatePicker extends BaseForm {
  constructor(h, formData, obj, vm, type) {
    super(h, formData, obj, vm, type)
    return this.initialize
  }

  get on() {
    const _this = this
    const { key, obj } = _this
    return {
      ...this.translateEvents(this.obj.events, this.vm),
      input(date) {
        if (key) {
          if (Array.isArray(date)) {
            _this.formData[key] = date ? date.map(item => (item ? item.toLocaleDateString() : '')) : []
          } else {
            _this.formData[key] = date ? date.toLocaleDateString() : ''
          }
        }
      }
    }
  }

  get initialize() {
    const { type } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style, width: '100%' },
      on: { ...this.on }
    }

    return this.h('ElDatePicker', el)
  }
}
