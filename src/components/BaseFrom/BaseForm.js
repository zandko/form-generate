export default class BaseForm {
  h
  formData
  obj
  vm
  type
  key

  constructor(h, formData = {}, obj, vm, type) {
    this.h = h
    this.formData = formData
    this.obj = obj
    this.vm = vm
    this.type = type
    this.key = obj.key ? obj.key : ''
  }

  get props() {
    const { key, obj } = this
    return {
      value: key ? this.formData[key] : '',
      ...obj.props
    }
  }

  get style() {
    const {
      obj: { style }
    } = this
    return { ...style }
  }

  get on() {
    const { key } = this
    const _this = this
    return {
      ...this.translateEvents(this.obj.events, this.vm),
      input(val) {
        if (key) _this.formData[key] = val
      }
    }
  }

  get slot() {
    const { obj } = this
    return {
      ...obj.slot
    }
  }

  get initialize() {
    const { type } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style, width: '100%' },
      on: { ...this.on }
    }

    return this.h(type, el)
  }

  translateEvents(events = {}, vm) {
    const result = {}
    for (let event in events) {
      result[event] = events[event].bind(vm)
    }
    return result
  }
}
