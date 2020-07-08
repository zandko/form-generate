export default class ASubmitReset {
  h
  formData
  obj
  vm

  constructor(h, formData = {}, obj, vm) {
    this.h = h
    this.formData = formData
    this.obj = obj
    this.vm = vm

    return this.initialize
  }

  get components() {
    const _this = this
    const { obj, vm } = _this
    let com = []
    com.push(
      this.h(
        'ElButton',
        {
          props: obj.props,
          style: obj.style,
          on: {
            click() {
              vm.$refs[obj.ref].validate(valid => {
                if (valid) {
                  obj.success.call(vm, _this.formData)
                } else {
                  obj.fail.call(vm, _this.formData)
                }
              })
            }
          }
        },
        [obj.text]
      )
    )
    if (obj.reset) {
      const reset = this.h(
        'ElButton',
        {
          props: obj.reset.props,
          style: {
            marginLeft: '10px',
            ...obj.style
          },
          on: {
            click: () => vm.$refs[obj.ref].resetFields()
          }
        },
        [obj.reset.text]
      )
      com.push(reset)
    }

    return com
  }

  get initialize() {
    return this.h('div', this.components)
  }
}
