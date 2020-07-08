<script>
import { vNode } from './Components'

const NAME = 'AC_BASE'

export default {
  name: NAME,
  props: {
    options: {
      type: Object,
      required: true
    },
    formData: {
      type: Object,
      required: true
    }
  },
  render(h) {
    const options = this.options
    const formData = this.formData
    if (!options.formItem) {
      return <div />
    }

    const components = options.formItem.map(item => {
      const func = vNode[item.type]
      const subComponent = func ? new func(h, formData, item, this, item.type) : null
      const component = new vNode.ElFormItem(h, item, subComponent)
      return new vNode.ElCol(h, item, component)
    })

    if (options.submit) {
      let subComponent = new vNode['ElSubmitReset'](h, formData, options.submit, this)
      let component = new vNode.ElFormItem(h, options.submit, subComponent)
      components.push(new vNode.ElCol(h, options.submit, component))
    }

    return (
      <ElForm ref={options.ref} {...{ props: { model: formData, ...options.formProps } }}>
        <ElRow {...{ props: { ...options.rowProps } }}>{components}</ElRow>
      </ElForm>
    )
  }
}
</script>
