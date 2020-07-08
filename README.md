### 参数简介

#### formData 表单数据

```js
const formData = {
  input: '',
  select: '',
  rate: 5,
  date: ''
}
```

#### options 表单 JSON
```js
const options = {
  ref: 'form',          // Form Ref
  formProps: {},        // Form Props
  formItem: [           // 组件 JSON
    {
      label: 'Label',
      key: 'input',     // 对应 formData
      type: 'ElInput' | 'ElColorPicker' | 'ElCascader' | 'ElCheckbox' | 'ElCheckboxGroup' | 'ElRadio' | 'ElRadioGroup' | 'ElDatePicker' | 'ElDateTimePicker' | 'ElTimePicker' | 'ElInputNumber' | 'ElUpload' | 'ElRate' | 'ElSelect' | 'ElSlider' | 'ElSwitch', // 可选组件
      props: {},        // 组件 Props
      events: {},       // 事件
      rules: {
        required: true, // 是否必填
        message: '',    // error 信息
        trigger: 'blur',// 触发条件
        validator(rule, value, callback) {
          if (value === '') {
            callback(new Error('请输入手机号'))
          } else if (value.length !== 11) {
            callback(new Error('请输入正确的手机号'))
          } else {
            callback()
          }
        }
      },        // 校验
    }
  ],
  submit: {
    ref: 'form',   // Ref 与 options.ref 对应
    text: '提交',   // 按钮文案
    reset: {       // 重置按钮 （不是必填）
      text: '重置', // 按钮文案
      props: {}    // 按钮 Props
    },
    props: {},     // 按钮 Props
    success(formData) {
      console.log('验证通过！')
    },
    fail() {
      console.log('校验不通过！')
    }
  }
}
```
