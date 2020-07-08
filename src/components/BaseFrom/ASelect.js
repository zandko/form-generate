import BaseForm from './BaseForm'

export default class ASelect extends BaseForm {
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
    return obj.children.map(item => {
      if (item.type == 'group') {
        return _this.h(
          'ElOptionGroup',
          {
            props: item.props ? item.props : item
          },
          item.children.map(child => {
            return _this.h('ElOption', {
              props: child.props ? child.props : child
            })
          })
        )
      } else {
        return _this.h('ElOption', {
          props: item.props || item
        })
      }
    })
  }

  get initialize() {
    const { type } = this
    const el = {
      props: { ...this.props },
      style: { ...this.style, width: '100%' },
      on: { ...this.on }
    }

    return this.h('ElSelect', el, this.components)
  }
}
