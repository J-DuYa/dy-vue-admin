import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'App',
  setup() {},
  components: {
    ElButton
  },
  render() {
    return (
      <section>
        <ElButton>我是 ElButton</ElButton>
      </section>
    )
  }
})
