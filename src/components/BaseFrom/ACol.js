export default class ACol {
  h
  obj
  component

  constructor(h, obj, component) {
    this.h = h
    this.obj = obj
    this.component = component
    return this.initialize
  }

  get initialize() {
    const { obj, component } = this
    return this.h(
      'ElCol',
      {
        props: {
          span: obj.span,
          push: obj.push,
          pull: obj.pull,
          offset: obj.offset,
          order: obj.order,
          'class-name': obj['class-name'] || obj['className'],
          xs: obj.xs,
          sm: obj.sm,
          md: obj.md,
          lg: obj.lg,
          xl: obj.xl
        }
      },
      [component]
    )
  }
}
