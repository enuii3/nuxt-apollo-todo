import { render, screen } from '@testing-library/vue'
import { tasks } from '../dummyData.js'
import TodoStatusBar from '@/components/nukui/molecules/TodoStatusBar.vue'
// import '@testing-library/jest-dom'

describe('TodoStatusBar', () => {
  it('初期表示が正常であること', () => {
    render(TodoStatusBar, {
      propsData: tasks,
    })
    screen.debug()
    expect(screen.getByText('完了')).toBeInTheDocument()
    expect(screen.getByText('未完了')).toBeInTheDocument()
  })
  it.skip('チェックを付けたら、statusが変更されること', () => {})
  it.skip('追加できること', () => {})
})
