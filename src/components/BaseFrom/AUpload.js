import BaseForm from './BaseForm'
import { vNode } from './Components'

export default class ARate extends BaseForm {
  constructor(h, formData, obj, vm) {
    super(h, formData, obj, vm)
    return this.initialize
  }

  get components() {
    const _this = this
    const { obj } = _this
    if (!obj.children) return null
    return obj.children.map(item => {
      let func = vNode[item.type]
      return func ? new func(_this.h, _this.formData, item, _this.vm) : null
    })
  }

  get initialize() {
    const { type } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style, width: '100%' }
    }

    return this.h('ElUpload', el, this.components)
  }
}
