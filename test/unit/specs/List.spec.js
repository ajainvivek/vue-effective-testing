import { shallow } from '@vue/test-utils'
import List from '@/components/List.vue'

describe('List.vue', () => {
  
  let list = [];

  beforeEach(() => {
    list = [{
      id: 1,
      title: "Luke Skywalker"
    }, {
      id: 2,
      title: "C-3PO"
    }];
  });

  it('should render EMPTY list item', () => {
    list = []
    const wrapper = shallow(List, {
      propsData: { list }
    })
    expect(wrapper.findAll('li')).toHaveLength(list.length)
  });

  it('should render list item', () => {
    const wrapper = shallow(List, {
      propsData: { list }
    })
    expect(wrapper.findAll('li')).toHaveLength(list.length)
  });

  it('matches snapshot', () => {
    const wrapper = shallow(List, {
      propsData: { list }
    })
    expect(wrapper.html()).toMatchSnapshot()
  });
})
